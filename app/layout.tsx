import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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
  metadataBase: new URL("https://jacobs-taxes.com"),
  title: {
    default: "Jacobs Taxes | Strategic UK Tax Advice",
    template: "%s | Jacobs Taxes",
  },
  description:
    "Jacobs Taxes provides strategic UK tax advice for owner-managed businesses and internationally mobile individuals. Led by Simon Jacobs CTA, ACA.",
  openGraph: {
    title: "Jacobs Taxes",
    description:
      "Strategic UK tax advice for owner-managed businesses and internationally mobile individuals.",
    url: "https://jacobs-taxes.com",
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
  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`}>
      <body>
        <div className="page-bg" aria-hidden="true" />
        <SiteHeader />
        <main id="top" className="page-main">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
