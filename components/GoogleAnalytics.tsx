"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getConsent } from "@/lib/cookies";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!measurementId) return;
    const update = () => setEnabled(getConsent() === "accepted");
    update();
    window.addEventListener("jt_cookie_consent_changed", update);
    return () => window.removeEventListener("jt_cookie_consent_changed", update);
  }, [measurementId]);

  if (!measurementId || !enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });
`}
      </Script>
    </>
  );
}
