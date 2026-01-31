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
  title: "Jacobs Taxes | Strategic UK Tax Advice",
  description:
    "Jacobs Taxes provides strategic UK tax advice for owner-managed businesses and internationally mobile individuals. Led by Simon Jacobs CTA, ACA.",
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
