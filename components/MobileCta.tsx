"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_TEL_E164, PRIMARY_CTA_HREF } from "@/lib/publicConfig";

export default function MobileCta() {
  return (
    <div className="mobile-cta" aria-label="Quick actions">
      <a
        className="mobile-cta__btn mobile-cta__btn--ghost"
        href={`tel:${CONTACT_TEL_E164}`}
        onClick={() => trackEvent("phone_click", { location: "mobile_cta" })}
      >
        Call
      </a>
      <Link
        className="mobile-cta__btn"
        href={PRIMARY_CTA_HREF}
        onClick={() => trackEvent("cta_click", { location: "mobile_cta" })}
      >
        Book
      </Link>
    </div>
  );
}

