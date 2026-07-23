"use client";

import { useEffect, useRef, useState } from "react";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";

const WORDS = ["Brand", "Design", "Web", "Ecommerce", "SEO", "Marketing"];

// Brand intro. Plays on every full page load (refresh / direct URL). It does
// NOT replay on client-side navigation, since this component mounts once with
// the persistent Shell. On exit the logomark flies from big-center to the exact
// spot of the navbar logo (a FLIP transition) while the backdrop and supporting
// text fade out, so the intro hands off seamlessly. Skipped for reduced-motion.
export default function Preloader() {
  // Rendered from first paint (server-side too) so the intro is there before
  // the page shows — no flash of content. Reduced-motion removes it at once.
  const [hidden, setHidden] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const restRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setHidden(true);
      return;
    }

    lockScroll();
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      unlockScroll();
    };

    const timers: ReturnType<typeof setTimeout>[] = [];
    const finish = () => {
      release();
      setHidden(true);
    };

    // Kick off the exit once the intro has played.
    timers.push(
      setTimeout(() => {
        const mark = markRef.current;
        const target = document.getElementById("site-logo-mark");
        const bg = bgRef.current;
        const rest = restRef.current;

        // Fallback: if the navbar mark can't be measured, just fade everything.
        if (!mark || !target) {
          overlayRef.current?.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 450, easing: "ease", fill: "forwards" }
          );
          timers.push(setTimeout(finish, 480));
          return;
        }

        const f = mark.getBoundingClientRect();
        const t = target.getBoundingClientRect();
        const dx = t.left + t.width / 2 - (f.left + f.width / 2);
        const dy = t.top + t.height / 2 - (f.top + f.height / 2);
        const scale = t.width / f.width;

        // supporting text fades quickly
        rest?.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 280,
          easing: "ease",
          fill: "forwards",
        });

        // logomark travels to the navbar slot
        mark.animate(
          [
            { transform: "translate(0px, 0px) scale(1)" },
            { transform: `translate(${dx}px, ${dy}px) scale(${scale})` },
          ],
          {
            duration: 820,
            easing: "cubic-bezier(0.6, 0.01, 0.05, 0.98)",
            fill: "forwards",
          }
        );

        // backdrop fades to reveal the site as the mark flies in
        bg?.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 520,
          delay: 280,
          easing: "ease",
          fill: "forwards",
        });

        timers.push(setTimeout(finish, 860));
      }, 720)
    );

    return () => {
      release();
      timers.forEach(clearTimeout);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading ELLOR Digital"
    >
      {/* backdrop layer — fades out on its own so the mark can stay opaque */}
      <div ref={bgRef} className="absolute inset-0 bg-bg">
        <div aria-hidden="true" className="hero-aurora absolute inset-[-25%] opacity-50" />
      </div>

      <div className="relative flex flex-col items-center px-6">
        {/* logomark — bars draw in, then this whole block flies to the navbar */}
        <div
          ref={markRef}
          className="mb-6"
          style={{ width: 92, height: 92, willChange: "transform" }}
        >
          <svg width="92" height="92" viewBox="0 0 44 44" aria-hidden="true">
            <rect className="pl-spine" x="4" y="4" width="7" height="36" rx="1.5" fill="#c6ff3d" />
            <rect className="pl-bar pl-bar-1" x="11" y="4" width="24" height="8" rx="1.5" fill="#5b8def" />
            <rect className="pl-bar pl-bar-2" x="11" y="18" width="16" height="8" rx="1.5" fill="#9b5de5" />
            <rect className="pl-bar pl-bar-3" x="11" y="32" width="24" height="8" rx="1.5" fill="#ffb020" />
          </svg>
        </div>

        {/* supporting text + progress — fades out on exit */}
        <div ref={restRef} className="flex flex-col items-center" style={{ willChange: "opacity" }}>
          <div className="pl-word font-display font-bold tracking-tight text-[clamp(34px,6vw,52px)] mb-4">
            ELLOR<span className="text-lime">.</span>
          </div>

          <div className="pl-services h-8 overflow-hidden font-mono text-sm md:text-base tracking-[0.14em] uppercase mb-8">
            <div className="pl-services-list flex flex-col">
              {WORDS.map((w) => (
                <span key={w} className="h-8 leading-8 hero-accent">
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div className="pl-track w-[220px] max-w-[60vw] h-[3px] bg-white/10 overflow-hidden">
            <div
              className="pl-fill h-full"
              style={{ background: "linear-gradient(90deg,#5b8def,#9b5de5,#f15bb5)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
