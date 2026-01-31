import Link from "next/link";

export default function ApproachPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Approach</p>
          <h1>Structured advice that moves with your business.</h1>
          <p className="lead">
            We combine strategic planning with practical delivery, so your tax
            position stays robust through change.
          </p>
        </div>
      </section>

      <section className="approach">
        <div className="container approach-grid">
          <div>
            <h2>How we work</h2>
            <p>
              Every engagement begins with a clear understanding of priorities and
              risks. We translate technical detail into a plan your wider team can
              execute with confidence.
            </p>
            <p>
              You get direct partner access, concise reporting, and proactive updates
              on legislative shifts.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <h3>Diagnose</h3>
                <p>
                  Review your structures, identify exposure, and define success
                  criteria.
                </p>
              </div>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h3>Design</h3>
                <p>
                  Build scenario models, align stakeholders, and select the best path.
                </p>
              </div>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h3>Deliver</h3>
                <p>
                  Coordinate implementation with legal, finance, and operations teams.
                </p>
              </div>
            </div>
            <div className="step">
              <span>04</span>
              <div>
                <h3>Protect</h3>
                <p>
                  Monitor outcomes, refine strategies, and keep you prepared for change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container content-grid">
          <div className="list-card">
            <h3>What to expect</h3>
            <ul>
              <li>Clear scope and fees before work begins.</li>
              <li>Concise deliverables designed for decision-makers.</li>
              <li>Collaboration with your existing advisers.</li>
              <li>Proactive insights on upcoming policy changes.</li>
            </ul>
          </div>
          <div className="list-card">
            <h3>How we add value</h3>
            <ul>
              <li>Technical accuracy with commercial perspective.</li>
              <li>Efficient implementation that respects your timeline.</li>
              <li>Risk mitigation and HMRC-ready documentation.</li>
              <li>Ongoing monitoring to keep strategies aligned.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Start here</p>
            <h2>Let&apos;s map the right tax strategy together.</h2>
            <p>
              Share your priorities, upcoming transactions, or compliance concerns.
              We&apos;ll propose the most effective way forward.
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
            <Link className="btn" href="/contact">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
