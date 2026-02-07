"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_TEL_E164, PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/publicConfig";

const SCROLL_THRESHOLD_PX = 420;

export default function MobileCta() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const footerInViewRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    const computeShouldShow = () => {
      const scrolledEnough = (window.scrollY || 0) > SCROLL_THRESHOLD_PX;
      const cookieBannerVisible = Boolean(document.querySelector(".cookie-banner"));
      return scrolledEnough && !footerInViewRef.current && !cookieBannerVisible;
    };

    const apply = () => {
      rafRef.current = null;
      const shouldShow = computeShouldShow();

      if (visibleRef.current !== shouldShow) {
        visibleRef.current = shouldShow;
        setVisible(shouldShow);
      }

      if (shouldShow) {
        root.dataset.mobileCta = "on";
      } else {
        delete root.dataset.mobileCta;
      }
    };

    const schedule = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(apply);
    };

    const onScroll = () => schedule();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", schedule);

    const footer = document.querySelector("footer.site-footer");
    const footerObserver =
      footer && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              footerInViewRef.current = entries.some((entry) => entry.isIntersecting);
              schedule();
            },
            { threshold: 0.05 }
          )
        : null;

    footerObserver?.observe(footer as Element);

    // Cookie banner mounts/unmounts without scrolling; this keeps CTA visibility in sync.
    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    apply();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", schedule);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
      footerObserver?.disconnect();
      mutationObserver.disconnect();
      delete root.dataset.mobileCta;
    };
  }, []);

  return (
    <div
      className="mobile-cta"
      aria-label="Quick actions"
      aria-hidden={!visible}
      data-visible={visible ? "true" : "false"}
    >
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
        {PRIMARY_CTA_LABEL}
      </Link>
    </div>
  );
}
