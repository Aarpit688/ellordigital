export default function PlaceholderFrame({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} border border-dashed border-white/20 bg-white/[0.02] flex flex-col items-center justify-center gap-2 text-center px-6`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-dim">
        <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="8.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M4.5 17l5-5 3 3 3-4 4 6" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
      <span className="font-mono text-[11px] uppercase tracking-wide text-dim">
        Photo placeholder — {label}
      </span>
    </div>
  );
}
