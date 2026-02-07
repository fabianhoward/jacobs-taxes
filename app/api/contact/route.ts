import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/publicConfig";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "Unsupported content type" }, { status: 400 });
  }

  const form = await req.formData();

  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const deadline = String(form.get("deadline") || "").trim();

  // Honeypot
  const company = String(form.get("company") || "").trim();

  const startedAtRaw = String(form.get("startedAt") || "").trim();
  const startedAt = Number(startedAtRaw);
  const elapsedMs = Number.isFinite(startedAt) ? Date.now() - startedAt : 0;

  // Bot heuristics: if honeypot is filled or submitted too quickly, return 200
  // without sending email (avoid leaking behavior).
  if (company || (elapsedMs > 0 && elapsedMs < 1500)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Please add a little more detail." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || "Jacobs Taxes <onboarding@resend.dev>";
  const resendKey = process.env.RESEND_API_KEY?.trim();

  // If no email provider is configured:
  // - non-production: accept the request to keep staging usable
  // - production: fail loudly so enquiries are not silently dropped
  if (!resendKey) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error: `Email is temporarily unavailable. Please email ${CONTACT_EMAIL} instead.`,
        },
        { status: 503 }
      );
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const subject = `New enquiry: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    deadline ? `Deadline: ${deadline}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
