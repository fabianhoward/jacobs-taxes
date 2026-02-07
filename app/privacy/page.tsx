import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/publicConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Jacobs Taxes",
  description: "Privacy information for Jacobs Taxes website enquiries.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy Policy</h1>
          <p className="lead">
            This page explains how we handle personal data submitted via this website.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="prose">
            <h2>What we collect</h2>
            <p>
              If you contact us via the website, we collect the information you provide,
              such as your name, email address, message content, and any optional details
              (phone number and deadlines).
            </p>

            <h2>Why we collect it</h2>
            <p>
              We use your information to respond to your enquiry, assess whether we can
              help, and manage our communications with you.
            </p>

            <h2>How we store and share it</h2>
            <p>
              Website enquiries are delivered to email and may be processed by service
              providers used to operate the site and communications. We do not sell your
              personal data.
            </p>

            <h2>Analytics</h2>
            <p>
              We may use optional analytics to understand site usage. You can control
              analytics via cookie preferences. See{" "}
              <Link href="/cookies">Cookies</Link>.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, contact{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

