import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Jacobs Taxes">
          <img src="/logo.svg" alt="Jacobs Taxes logo" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/services">Services</Link>
          <Link href="/approach">Approach</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="btn btn-small" href="mailto:simon@jacobs-taxes.com">
          Book a call
        </a>
      </div>
    </header>
  );
}
