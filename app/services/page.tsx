import type { Metadata } from "next";
import Link from "next/link";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL, SITE_URL } from "@/lib/publicConfig";

export const metadata: Metadata = {
  title: "Services | Jacobs Taxes",
  description:
    "Specialist corporate, personal, and international tax services tailored to complex business and individual needs.",
  alternates: { canonical: `${SITE_URL}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Specialist tax advice with measurable outcomes.</h1>
          <p className="lead">
            We support clients across corporate, personal, and international tax with
            clear recommendations and hands-on delivery.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="card-grid">
            <article className="service-card">
              <h3>Corporate Tax Strategy</h3>
              <p>
                Structuring groups, managing losses, planning exits, and aligning tax
                positions with growth objectives.
              </p>
            </article>
            <article className="service-card">
              <h3>Personal Tax Planning</h3>
              <p>
                Capital gains planning, income structuring, and long-term wealth
                protection for entrepreneurs and families.
              </p>
            </article>
            <article className="service-card">
              <h3>International Mobility</h3>
              <p>
                Statutory residence, remittance basis planning, and cross-border
                coordination for internationally mobile clients.
              </p>
            </article>
            <article className="service-card">
              <h3>Trusts &amp; Estates</h3>
              <p>
                Inheritance tax mitigation, family investment companies, and trust
                governance across jurisdictions.
              </p>
            </article>
            <article className="service-card">
              <h3>VAT &amp; Compliance</h3>
              <p>
                VAT returns, payroll oversight, and compliance support to keep
                reporting accurate and stress-free.
              </p>
            </article>
            <article className="service-card">
              <h3>Specialist Sectors</h3>
              <p>
                Crypto and digital assets, share schemes, IR35 assessments, and complex
                trading structures.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container content-grid">
          <div className="list-card">
            <h3>Typical engagements</h3>
            <ul>
              <li>Structure review with clear, written recommendations.</li>
              <li>Pre-investment / pre-exit planning and scenario modelling.</li>
              <li>Residence and international planning briefs for decision-makers.</li>
              <li>Implementation support with legal and finance teams.</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>What you can expect</h3>
            <ul>
              <li>Defined scope and fees before work begins.</li>
              <li>Concise outputs designed to drive decisions.</li>
              <li>Practical, compliant options with trade-offs explained.</li>
              <li>Fast communication and clear next steps.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container content-grid">
          <div className="list-card">
            <h3>Corporate tax coverage</h3>
            <ul>
              <li>Corporate tax losses and reliefs</li>
              <li>Corporate tax returns</li>
              <li>Substantial shareholdings exemption (SSE)</li>
              <li>Withholding tax planning</li>
              <li>Capital gains strategy</li>
              <li>Restructuring and reorganisations</li>
              <li>Cryptocurrency tax considerations</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>Personal tax coverage</h3>
            <ul>
              <li>Non-dom and statutory residence planning</li>
              <li>VAT returns for individuals and sole traders</li>
              <li>Inheritance tax and succession planning</li>
              <li>Capital gains tax</li>
              <li>Seed Enterprise Investment Scheme (SEIS)</li>
              <li>IR35 and employment status reviews</li>
              <li>Business Asset Disposal Relief (BADR)</li>
              <li>Personal tax returns</li>
              <li>Cryptocurrency tax reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Tell us what you&apos;re planning and we&apos;ll map the route.</h2>
            <p>
              From a one-off review to ongoing advisory, we&apos;ll shape the engagement to
              fit your timeline and budget.
            </p>
          </div>
          <div className="cta-details">
            <div>
              <h3>Email</h3>
              <p>
                <a href="mailto:simon@jacobs-taxes.com">simon@jacobs-taxes.com</a>
              </p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+447821900992">+44 7821 900 992</a>
              </p>
            </div>
            <Link className="btn" href={PRIMARY_CTA_HREF}>
              {PRIMARY_CTA_LABEL}
            </Link>
            <p className="cta-note">
              Confidential. 15-minute call. Clear next steps within 1 business day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
