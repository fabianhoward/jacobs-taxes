import type { Metadata } from "next";
import Link from "next/link";
import CookiePreferences from "@/components/CookiePreferences";
import { SITE_URL } from "@/lib/publicConfig";

export const metadata: Metadata = {
  title: "Cookie Policy | Jacobs Taxes",
  description: "Cookie and analytics information for Jacobs Taxes website.",
  alternates: { canonical: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Cookies</p>
          <h1>Cookie Policy</h1>
          <p className="lead">
            This site can use optional analytics. You control this setting below.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="prose">
            <h2>Essential vs optional</h2>
            <p>
              Essential functionality is required to run the website. Optional analytics
              helps us understand usage and improve conversion. Analytics is only enabled
              if you accept it.
            </p>

            <h2>Your preferences</h2>
            <CookiePreferences />

            <h2>More information</h2>
            <p>
              See also our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

