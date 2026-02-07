import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL, SITE_URL } from "@/lib/publicConfig";

export const metadata: Metadata = {
  title: "About Simon Jacobs | Jacobs Taxes",
  description:
    "Meet Simon Jacobs, a Chartered Tax Adviser (CTA) and Chartered Accountant (ACA) focused on complex UK tax planning.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Simon Jacobs, CTA, ACA.</h1>
          <p className="lead">
            A focused UK tax adviser helping owner-managed businesses, families, and
            internationally mobile individuals make confident decisions.
          </p>
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <div className="about-card">
            <h2>Professional profile</h2>
            <div className="profile-photo">
              <Image
                src="/images/simon-jacobs.jpg"
                alt="Simon Jacobs"
                width={720}
                height={900}
              />
            </div>
            <p>
              Simon combines technical tax expertise with practical commercial insight.
              He supports clients navigating restructures, exits, and cross-border
              transitions, delivering solutions that are clear, compliant, and built to
              last.
            </p>
            <p>
              He is a member of the Chartered Institute of Taxation (CIOT) and the
              Institute of Chartered Accountants in England and Wales (ICAEW).
            </p>
            <div className="badge-row">
              <span>CTA</span>
              <span>ACA</span>
              <span>CIOT</span>
              <span>ICAEW</span>
            </div>
          </div>
          <div className="highlight-card">
            <h3>Who we serve</h3>
            <ul>
              <li>Owner-managed businesses seeking tax-efficient growth.</li>
              <li>Entrepreneurs preparing for investment or exit.</li>
              <li>Families navigating inheritance and succession planning.</li>
              <li>International clients managing UK residence status.</li>
            </ul>
            <Link className="text-link" href="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container content-grid">
          <div className="list-card">
            <h3>Experience highlights</h3>
            <ul>
              <li>Corporate restructures and group simplification.</li>
              <li>Capital gains and succession planning.</li>
              <li>Trust structuring and inheritance tax mitigation.</li>
              <li>Advisory for crypto and digital asset holdings.</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>Working style</h3>
            <ul>
              <li>Direct partner-led engagement.</li>
              <li>Clear, actionable guidance.</li>
              <li>Long-term relationships built on trust.</li>
              <li>Practical support through implementation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Let&apos;s discuss your goals and the best way forward.</h2>
            <p>
              We&apos;ll listen first, then propose a strategy aligned with your priorities
              and timelines.
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
