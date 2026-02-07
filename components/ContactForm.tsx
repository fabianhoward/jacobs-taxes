"use client";

import { useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const startedAtRef = useRef<number>(Date.now());
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  const disabled = state === "submitting";

  const statusText = useMemo(() => {
    if (state === "success") return "Thanks. We will be in touch shortly.";
    if (state === "error") return message || "Something went wrong. Please try again.";
    return "";
  }, [state, message]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("startedAt", String(startedAtRef.current));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Request failed");
      }

      trackEvent("contact_submit", { location: "contact_form" });
      setState("success");
      form.reset();
      startedAtRef.current = Date.now();
    } catch (err: any) {
      setState("error");
      setMessage(err?.message || "Request failed");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__row">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required disabled={disabled} />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={disabled}
          />
        </label>
      </div>

      <label>
        <span>What can we help with?</span>
        <textarea name="message" rows={5} required disabled={disabled} />
      </label>

      <div className="contact-form__row">
        <label>
          <span>Deadline (optional)</span>
          <input name="deadline" placeholder="e.g. 30 March" disabled={disabled} />
        </label>
        <label>
          <span>Phone (optional)</span>
          <input name="phone" autoComplete="tel" disabled={disabled} />
        </label>
      </div>

      {/* Honeypot */} 
      <label className="hp">
        <span>Company</span>
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form__actions">
        <button className="btn" type="submit" disabled={disabled}>
          {state === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className="contact-form__fineprint">
          By submitting, you agree we can contact you about this enquiry. See{" "}
          <a href="/privacy">Privacy</a>.
        </p>
      </div>

      <p className="contact-form__status" aria-live="polite">
        {statusText}
      </p>
    </form>
  );
}

