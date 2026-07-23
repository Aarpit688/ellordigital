import type { ReactElement } from "react";

// Small line-icon set for content sections (stats, values, contact rows).
// Stroke uses currentColor so callers control color via text-* classes.
const icons: Record<string, ReactElement> = {
  launch: (
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2m-3-3a12 12 0 0 1 9-9c2 0 3 1 3 3a12 12 0 0 1-9 9l-3-3zm9-6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  layers: (
    <path d="M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5m-18 4l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  phone: (
    <path d="M4.5 4.5h4l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v4c0 .8-.7 1.5-1.5 1.4C11.5 24 3.5 16 3.1 6 3 5.2 3.7 4.5 4.5 4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 6M17 20a5.5 5.5 0 0 0-3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  message: (
    <path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  gauge: (
    <>
      <path d="M4 15a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 15l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v4h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export default function UiIcon({
  name,
  size = 20,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {icons[name] ?? icons.launch}
    </svg>
  );
}
