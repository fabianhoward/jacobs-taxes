export type CookieConsent = "accepted" | "declined";

export const COOKIE_CONSENT_KEY = "jt_cookie_consent";

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setConsent(value: CookieConsent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event("jt_cookie_consent_changed"));
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new Event("jt_cookie_consent_changed"));
}
