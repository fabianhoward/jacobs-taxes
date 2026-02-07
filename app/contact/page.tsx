import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import {
  CONTACT_EMAIL,
  CONTACT_TEL,
  CONTACT_TEL_E164,
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  SCHEDULING_URL,
  SITE_URL,
} from "@/lib/publicConfig";

export const metadata: Metadata = {
  title: "Contact | Jacobs Taxes",
  description:
    "Contact Jacobs Taxes to discuss corporate, personal, or international UK tax planning needs.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s plan your next move.</h1>
          <p className="lead">
            Reach out with a brief overview of your needs, and we&apos;ll respond with a
            clear plan of action.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container content-grid">
          <div className="list-card">
            <h3 id="book">Book a call</h3>
            <p>
              {SCHEDULING_URL
                ? "Choose a time that suits you, or send a message if you prefer."
                : "Send a message and we will respond with a clear next step."}
            </p>
            <div className="section-actions">
              {SCHEDULING_URL ? (
                <Link className="btn" href={PRIMARY_CTA_HREF}>
                  {PRIMARY_CTA_LABEL}
                </Link>
              ) : (
                <a className="btn" href="#message">
                  Send a message
                </a>
              )}
              <a className="btn btn-ghost" href={`tel:${CONTACT_TEL_E164}`}>
                Call
              </a>
            </div>
            <hr className="divider" />
            <h3>Direct contact</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${CONTACT_TEL_E164}`}>{CONTACT_TEL}</a>
            </p>
            <p>
              <strong>Location:</strong> London, United Kingdom
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={SITE_URL}>jacobs-taxes.com</a>
            </p>
          </div>
          <div className="list-card">
            <h3 id="message">Send a message</h3>
            <p>
              Share your priorities and timelines. We will respond with a clear next
              step and a focused plan.
            </p>
            <ContactForm />
            <h3>What to include</h3>
            <ul>
              <li>A short summary of your business or personal situation.</li>
              <li>Any upcoming transactions or deadlines.</li>
              <li>Areas you want reviewed or optimised.</li>
              <li>Preferred timeframe for advice.</li>
            </ul>
            <p>
              We will respond with next steps and a suggested scope of work.
            </p>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
