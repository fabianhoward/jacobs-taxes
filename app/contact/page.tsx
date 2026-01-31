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
            <h3>Direct contact</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:simon@jacobs-taxes.com">simon@jacobs-taxes.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+447821900992">+44 7821 900 992</a>
            </p>
            <p>
              <strong>Location:</strong> London, United Kingdom
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://jacobs-taxes.com">jacobs-taxes.com</a>
            </p>
          </div>
          <div className="list-card">
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

      <section className="cta">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Availability</p>
            <h2>We accept a limited number of new clients each quarter.</h2>
            <p>
              Early conversations help us assess fit and timelines before formal
              engagement.
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
            <a className="btn" href="mailto:simon@jacobs-taxes.com">
              Book a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
