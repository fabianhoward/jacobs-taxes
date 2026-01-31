export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo.png" alt="Jacobs Taxes" className="footer-logo" />
          <p>
            Strategic UK tax advisory for entrepreneurs, owner-managed businesses,
            and internationally mobile individuals.
          </p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a href="mailto:simon@jacobs-taxes.com">simon@jacobs-taxes.com</a>
            <br />
            <a href="tel:+447821900992">+44 7821 900 992</a>
          </p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>
            Information on this site is for general guidance only and does not
            constitute tax or legal advice.
          </p>
        </div>
      </div>
      <p className="copyright">
        Copyright 2026 Jacobs Taxes. All rights reserved.
      </p>
    </footer>
  );
}
