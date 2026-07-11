"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 901px)").matches;
    if (reducedMotion || !isDesktop) return;

    let raf: number | null = null;
    const handleMove = (e: MouseEvent) => {
      glow.style.opacity = "1";
      if (raf) return;
      raf = requestAnimationFrame(() => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        raf = null;
      });
    };
    const handleLeave = () => {
      glow.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none z-5 opacity-0 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "radial-gradient(circle, rgba(198,255,61,0.10), transparent 70%)",
      }}
    />
  );
}
