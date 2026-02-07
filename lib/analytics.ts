declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export type AnalyticsEventName =
  | "cta_click"
  | "contact_submit"
  | "phone_click"
  | "email_click"
  | "schedule_click";

export function trackEvent(name: AnalyticsEventName, params?: Record<string, any>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", name, params || {});
}

