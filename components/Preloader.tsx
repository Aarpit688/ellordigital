"use client";

import { useEffect, useState } from "react";

const WORDS = ["Brand", "Design", "Web", "Ecommerce", "SEO", "Marketing"];

// Brand intro animation. Plays on every full page load (initial visit, reload,
// direct URL) — a full load is "opening the site again". It does NOT replay on
// client-side navigation, since this component mounts once with the persistent
// layout Shell. Skipped for reduced-motion. Curtain-wipes away to reveal the site.
export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setHidden(true);
      return;
    }
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const t = setTimeout(() => {
      html.style.overflow = "";
      setHidden(true);
    }, 2500);
    return () => {
      html.style.overflow = "";
      clearTimeout(t);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="pl-overlay fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading ELLOR Digital"
    >
      <div aria-hidden="true" className="hero-aurora absolute inset-[-25%] opacity-50" />

      <div className="relative flex flex-col items-center px-6">
        {/* logomark — bars draw in */}
        <svg width="92" height="92" viewBox="0 0 44 44" aria-hidden="true" className="mb-6">
          <rect className="pl-spine" x="4" y="4" width="7" height="36" rx="1.5" fill="#c6ff3d" />
          <rect className="pl-bar pl-bar-1" x="11" y="4" width="24" height="8" rx="1.5" fill="#5b8def" />
          <rect className="pl-bar pl-bar-2" x="11" y="18" width="16" height="8" rx="1.5" fill="#9b5de5" />
          <rect className="pl-bar pl-bar-3" x="11" y="32" width="24" height="8" rx="1.5" fill="#ffb020" />
        </svg>

        {/* wordmark */}
        <div className="pl-word font-display font-bold tracking-tight text-[clamp(34px,6vw,52px)] mb-4">
          ELLOR<span className="text-lime">.</span>
        </div>

        {/* cycling services */}
        <div className="pl-services h-8 overflow-hidden font-mono text-sm md:text-base tracking-[0.14em] uppercase mb-8">
          <div className="pl-services-list flex flex-col">
            {WORDS.map((w) => (
              <span key={w} className="h-8 leading-8 hero-gradient-text">
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* progress */}
        <div className="pl-track w-[220px] max-w-[60vw] h-[3px] bg-white/10 overflow-hidden">
          <div
            className="pl-fill h-full"
            style={{ background: "linear-gradient(90deg,#5b8def,#9b5de5,#f15bb5)" }}
          />
        </div>
      </div>
    </div>
  );
}
