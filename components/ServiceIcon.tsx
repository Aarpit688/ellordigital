import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  brand: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 9h16M9 9v11" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  uiux: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 8.5h18" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6.3" cy="6" r="0.9" fill="currentColor" />
      <circle cx="9" cy="6" r="0.9" fill="currentColor" />
      <path d="M7 13.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  webdev: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  ecommerce: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="9" cy="21" r="1.2" fill="currentColor" />
      <circle cx="17" cy="21" r="1.2" fill="currentColor" />
    </svg>
  ),
  seo: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  marketing: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l14-7v16L3 13v-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7 13v4a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M19 8.5a4 4 0 0 1 0 7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  health: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l2-5 3 10 2-5h4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  finance: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V9M9 19V5M14 19v-7M19 19V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  travel: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M2 16l20-6-8-1-4-6-1 5-7 2 3 2v3l2-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  saas: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M6 16a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.4A4 4 0 1 1 17 16H6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  strategy: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  mobile: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  support: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

export default function ServiceIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return <span className={className}>{icons[name] ?? icons.webdev}</span>;
}
