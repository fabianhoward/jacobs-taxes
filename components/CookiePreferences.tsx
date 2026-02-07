"use client";

import { useEffect, useState } from "react";
import { clearConsent, getConsent, setConsent } from "@/lib/cookies";

export default function CookiePreferences() {
  const [value, setValue] = useState<ReturnType<typeof getConsent>>(null);

  useEffect(() => {
    setValue(getConsent());
  }, []);

  return (
    <div className="cookie-prefs">
      <p>
        <strong>Analytics preference:</strong>{" "}
        {value ? value : "not set"}
      </p>
      <div className="cookie-prefs__actions">
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => {
            setConsent("declined");
            setValue("declined");
          }}
        >
          Decline analytics
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            setConsent("accepted");
            setValue("accepted");
          }}
        >
          Accept analytics
        </button>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => {
            clearConsent();
            setValue(null);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

