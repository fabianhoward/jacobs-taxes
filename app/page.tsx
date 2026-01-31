import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Jacobs Taxes</p>
            <h1>Clarity and confidence in complex UK tax matters.</h1>
            <p className="lead">
              Strategic advice for owner-managed businesses, entrepreneurs, and
              internationally mobile individuals. We design practical solutions that
              protect wealth, unlock growth, and keep you ahead of change.
            </p>
            <div className="hero-actions">
              <a className="btn" href="mailto:simon@jacobs-taxes.com">
                Schedule a consultation
              </a>
              <Link className="btn btn-ghost" href="/services">
                Explore services
              </Link>
            </div>
            <div className="trust-row">
              <div>
                <span>CTA</span>
                <p>Chartered Tax Adviser</p>
              </div>
              <div>
                <span>ACA</span>
                <p>Chartered Accountant</p>
              </div>
              <div>
                <span>UK</span>
                <p>London-based, global reach</p>
              </div>
            </div>
          </div>
            <div className="hero-visual">
              <div className="portrait-card">
                <div className="portrait">
                  <Image
                    src="/images/simon-jacobs.jpg"
                    alt="Simon Jacobs"
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    priority
                  />
                </div>
                <div className="portrait-meta">
                  <p className="name">Simon Jacobs</p>
                  <p className="role">CTA, ACA | Founder</p>
              </div>
            </div>
            <div className="stat-card">
              <h3>Focus Areas</h3>
              <ul>
                <li>Corporate tax planning</li>
                <li>Non-dom &amp; residency strategy</li>
                <li>Trusts &amp; estates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Key services</p>
            <h2>Tailored advice across corporate and personal tax.</h2>
          </div>
          <div className="card-grid">
            <article className="service-card">
              <h3>Corporate Tax &amp; Restructuring</h3>
              <p>
                Planning for owner-managed businesses, group structures, and strategic
                exits. From tax losses to share reorganisations, we create resilient
                structures for growth.
              </p>
            </article>
            <article className="service-card">
              <h3>Personal Tax &amp; Wealth Planning</h3>
              <p>
                Bespoke advice for high-net-worth individuals, entrepreneurs, and
                families on capital gains, income planning, and succession.
              </p>
            </article>
            <article className="service-card">
              <h3>International &amp; Non-Dom Advisory</h3>
              <p>
                Statutory residence strategy, remittance planning, and cross-border
                coordination for globally mobile clients.
              </p>
            </article>
            <article className="service-card">
              <h3>Trusts, Estates &amp; IHT</h3>
              <p>
                Structuring for inheritance tax mitigation, family investment companies,
                and multi-jurisdictional trust considerations.
              </p>
            </article>
            <article className="service-card">
              <h3>VAT, Compliance &amp; Reporting</h3>
              <p>
                VAT returns, payroll coordination, and governance-ready reporting that
                keeps HMRC conversations efficient and calm.
              </p>
            </article>
            <article className="service-card">
              <h3>Specialist Sectors</h3>
              <p>
                Experience with technology founders, crypto and digital assets, and
                complex trading structures, including IR35 and share schemes.
              </p>
            </article>
          </div>
          <div className="section-actions">
            <Link className="text-link" href="/services">
              View the full services list
            </Link>
          </div>
        </div>
      </section>

      <section className="approach">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Structured, pragmatic, and built around your goals.</h2>
            <p>
              Every engagement begins with clear priorities. We work in focused sprints,
              deliver actionable outputs, and stay close to your advisers to ensure
              every solution is implemented correctly.
            </p>
            <Link className="text-link" href="/approach">
              Learn about our approach
            </Link>
          </div>
          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <h3>Diagnose</h3>
                <p>
                  Deep dive into current structures, risk exposure, and upcoming
                  transactions.
                </p>
              </div>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h3>Design</h3>
                <p>
                  Model outcomes, stress test scenarios, and craft a clear tax roadmap.
                </p>
              </div>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h3>Deliver</h3>
                <p>Coordinate with legal and finance teams to implement on time.</p>
              </div>
            </div>
            <div className="step">
              <span>04</span>
              <div>
                <h3>Protect</h3>
                <p>Ongoing monitoring to keep structures aligned with policy change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <div className="about-card">
            <h2>About Simon Jacobs</h2>
            <p>
              Simon is a Chartered Tax Adviser (CTA) and Chartered Accountant (ACA)
              with a focus on complex UK tax planning for businesses and individuals.
              He partners with clients to build efficient, compliant structures that
              stand up to scrutiny and scale with ambition.
            </p>
            <p>
              Member of the Chartered Institute of Taxation (CIOT) and the Institute of
              Chartered Accountants in England and Wales (ICAEW).
            </p>
            <div className="badge-row">
              <span>CTA</span>
              <span>ACA</span>
              <span>CIOT</span>
              <span>ICAEW</span>
            </div>
          </div>
          <div className="highlight-card">
            <h3>How we help</h3>
            <ul>
              <li>Owner-managed businesses seeking tax-efficient growth.</li>
              <li>Entrepreneurs preparing for investment or exit.</li>
              <li>Families navigating inheritance and succession.</li>
              <li>International clients managing UK residence status.</li>
            </ul>
            <Link className="text-link" href="/about">
              Read Simon&apos;s bio
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let us shape a tax strategy that fits your life and business.</h2>
            <p>
              Share your priorities and timelines. We will respond with a clear next
              step and a focused plan.
            </p>
          </div>
          <div className="cta-details">
            <div>
              <h3>Direct</h3>
              <p>
                <a href="mailto:simon@jacobs-taxes.com">simon@jacobs-taxes.com</a>
                <br />
                <a href="tel:+447821900992">+44 7821 900 992</a>
              </p>
            </div>
            <div>
              <h3>Location</h3>
              <p>London, United Kingdom</p>
            </div>
            <div>
              <h3>Website</h3>
              <p>
                <a href="https://www.jacobstaxes.com">www.jacobstaxes.com</a>
              </p>
            </div>
            <Link className="btn" href="/contact">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
