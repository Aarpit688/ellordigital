"use client";

import { m, useReducedMotion } from "motion/react";
import { createElement, type ReactNode } from "react";

type Tag = "div" | "section" | "article" | "li" | "ul" | "ol";

// Scroll-into-view reveal, powered by `motion`. Replaces the old useReveal +
// IntersectionObserver hook so static sections can stay server components and
// only this thin wrapper ships as client JS. Honors prefers-reduced-motion.
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return createElement(as, { className }, children);
  }

  const MTag = m[as];
  return (
    <MTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MTag>
  );
}
