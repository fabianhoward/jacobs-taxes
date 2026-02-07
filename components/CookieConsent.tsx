"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { clearConsent, getConsent, setConsent } from "@/lib/cookies";

export default function CookieConsent() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const [open, setOpen] = useState(false);
  const [consent, setConsentState] = useState<ReturnType<typeof getConsent>>(null);

  const shouldShow = useMemo(() => open && !consent, [open, consent]);

  useEffect(() => {
    setConsentState(getConsent());
    setOpen(true);
  }, []);

  const accept = () => {
    setConsent("accepted");
    setConsentState("accepted");
  };

  const decline = () => {
    setConsent("declined");
    setConsentState("declined");
  };

  // Optional: allow reopening via URL query (?cookiePreferences=1)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("cookiePreferences") === "1") {
      clearConsent();
      setConsentState(null);
      setOpen(true);
    }
  }, []);

  if (!measurementId || !shouldShow) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie preferences">
      <div className="cookie-banner__inner">
        <div>
          <p className="cookie-banner__title">Cookies</p>
          <p className="cookie-banner__text">
            We use optional analytics to understand site usage and improve conversion.
            You can accept or decline analytics cookies.{" "}
            <Link href="/cookies">Learn more</Link>.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button className="btn btn-ghost" type="button" onClick={decline}>
            Decline
          </button>
          <button className="btn" type="button" onClick={accept}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
