import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/publicConfig";

export const metadata: Metadata = {
  title: "Tax Planning Starter Checklist | Jacobs Taxes",
  description:
    "A short checklist to help you prepare for an initial tax planning conversation.",
  alternates: { canonical: `${SITE_URL}/checklist` },
};

export default function ChecklistPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Checklist</p>
          <h1>Tax Planning Starter Checklist</h1>
          <p className="lead">
            Use this to prepare for a discovery call. The more context you can share, the
            faster we can get to actionable options.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="list-card">
            <h3>Business / personal context</h3>
            <ul>
              <li>Your current structure (company, partnership, trust, etc.).</li>
              <li>Where you are resident and any planned moves.</li>
              <li>Key income sources and timing.</li>
              <li>Any historic losses or reliefs.</li>
            </ul>
          </div>

          <div className="list-card">
            <h3>Upcoming events</h3>
            <ul>
              <li>Investment, acquisition, or disposal timelines.</li>
              <li>Share scheme plans (EMI, growth shares, etc.).</li>
              <li>Dividends, distributions, or significant transactions.</li>
              <li>Filing deadlines you are concerned about.</li>
            </ul>
          </div>

          <div className="list-card">
            <h3>Documents (if available)</h3>
            <ul>
              <li>Latest accounts and tax computations.</li>
              <li>Cap table / shareholder register.</li>
              <li>Any prior advice or HMRC correspondence.</li>
              <li>Trust deeds or structure charts (if relevant).</li>
            </ul>
          </div>

          <div className="section-actions">
            <Link className="btn" href="/contact">
              Send an enquiry
            </Link>
            <Link className="btn btn-ghost" href="/services">
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

