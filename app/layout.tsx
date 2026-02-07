import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileCta from "@/components/MobileCta";
import { CONTACT_EMAIL, CONTACT_TEL, SITE_URL } from "@/lib/publicConfig";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jacobs Taxes | Strategic UK Tax Advice",
  description:
    "Jacobs Taxes provides strategic UK tax advice for owner-managed businesses and internationally mobile individuals. Led by Simon Jacobs CTA, ACA.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Jacobs Taxes",
    description:
      "Strategic UK tax advice for owner-managed businesses and internationally mobile individuals.",
    url: SITE_URL,
    siteName: "Jacobs Taxes",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacobs Taxes",
    description:
      "Strategic UK tax advice for owner-managed businesses and internationally mobile individuals.",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Jacobs Taxes",
        url: SITE_URL,
        email: CONTACT_EMAIL,
        telephone: CONTACT_TEL,
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#simon-jacobs`,
        name: "Simon Jacobs",
        honorificSuffix: "CTA, ACA",
        worksFor: { "@id": `${SITE_URL}/#org` },
        url: SITE_URL,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Jacobs Taxes",
        url: SITE_URL,
        telephone: CONTACT_TEL,
        email: CONTACT_EMAIL,
        areaServed: ["GB", "Europe", "United States", "Australia"],
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`}>
      <body>
        <GoogleAnalytics />
        <div className="page-bg" aria-hidden="true" />
        <SiteHeader />
        <main id="main-content" className="page-main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <MobileCta />
        <CookieConsent />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
