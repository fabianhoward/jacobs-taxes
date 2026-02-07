import Link from "next/link";
import {
  CONTACT_EMAIL,
  CONTACT_TEL,
  CONTACT_TEL_E164,
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
} from "@/lib/publicConfig";

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
            <a
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
            <br />
            <a
              href={`tel:${CONTACT_TEL_E164}`}
            >
              {CONTACT_TEL}
            </a>
          </p>
          <p>
            <Link
              className="text-link"
              href={PRIMARY_CTA_HREF}
            >
              {PRIMARY_CTA_LABEL}
            </Link>
          </p>
        </div>
        <div>
          <h4>Legal</h4>
          <p>Information on this site is general guidance, not tax or legal advice.</p>
          <p className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <span>·</span>
            <Link href="/cookies">Cookies</Link>
            <span>·</span>
            <Link href="/checklist">Checklist</Link>
            <span>·</span>
            <Link href="/cookies?cookiePreferences=1">Manage cookies</Link>
          </p>
        </div>
      </div>
      <p className="copyright">
        Copyright 2026 Jacobs Taxes. All rights reserved.
      </p>
    </footer>
  );
}
