"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ellor-cookie-dismissed";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only surface the notice once — remember dismissal across reloads.
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage unavailable (private mode / SSR edge) — show once, no persistence.
    }
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed left-4 right-4 bottom-4 sm:right-auto sm:max-w-[360px] z-[60] bg-surface/95 backdrop-blur border border-line rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.45)] px-4 py-3.5 flex gap-3.5 items-start text-[13px] text-muted">
      <p className="leading-relaxed">
        We use cookies to understand how the site is used and to improve your
        experience. By continuing, you agree to their use.
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="text-dim hover:text-ink flex-shrink-0 leading-none"
      >
        ✕
      </button>
    </div>
  );
}
