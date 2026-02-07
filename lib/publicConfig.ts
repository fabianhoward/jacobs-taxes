export const CONTACT_EMAIL = "simon@jacobs-taxes.com";
export const CONTACT_TEL = "+44 7821 900 992";
export const CONTACT_TEL_E164 = "+447821900992";

export const SITE_URL = "https://jacobs-taxes.com";

// Public (client-safe) configuration.
export const SCHEDULING_URL =
  process.env.NEXT_PUBLIC_SCHEDULING_URL?.trim() || "";

export const PRIMARY_CTA_HREF = SCHEDULING_URL || "/contact#book";
export const PRIMARY_CTA_LABEL = "Book a call";
