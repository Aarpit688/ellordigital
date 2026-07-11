"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function ProjectCard({
  eyebrow,
  title,
  description,
  tags,
  mock,
  reverse = false,
  href,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  mock: ReactNode;
  reverse?: boolean;
  href?: string;
}) {
  const [ref, visible] = useReveal<HTMLElement>();
  const frameRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const frame = frameRef.current;
    const fab = fabRef.current;
    if (!frame || !fab) return;
    const rect = frame.getBoundingClientRect();
    fab.style.left = `${e.clientX - rect.left}px`;
    fab.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} group grid md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-14 items-center py-12 md:py-14 border-t border-line ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <FrameWrapper href={href}>
        <div
          ref={frameRef}
          onMouseMove={handleMouseMove}
          className="relative bg-surface border border-line overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 [direction:ltr]"
        >
          {mock}
          <span
            ref={fabRef}
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.8] w-[52px] h-[52px] rounded-full bg-lime text-lime-ink flex items-center justify-center opacity-0 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:scale-100"
          >
            <EyeIcon />
          </span>
        </div>
      </FrameWrapper>

      <div className="[direction:ltr]">
        <p className="font-mono text-xs tracking-[0.1em] uppercase text-muted mb-3">
          {eyebrow}
        </p>
        <h3 className="font-display text-[clamp(20px,3vw,30px)] leading-tight mb-3.5">
          {href ? (
            <Link href={href} className="hover:text-lime transition-colors">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="text-muted leading-relaxed">{description}</p>
        <ul className="flex gap-2.5 flex-wrap mt-5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-xs text-muted border border-line rounded-full px-3 py-1.5"
            >
              {tag}
            </li>
          ))}
        </ul>
        {href && (
          <Link
            href={href}
            className="inline-block mt-6 font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
          >
            Read case study →
          </Link>
        )}
      </div>
    </article>
  );
}

function FrameWrapper({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} aria-label="View case study" className="[direction:ltr] block">
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}
