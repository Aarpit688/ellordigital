// Vivid, production-looking cover art used as the fallback behind <Media>.
// Renders instantly with no external assets; a real image (when dropped into
// /public) covers it. Keyed by a `tint` so related items stay recognizable.

export type ArtTint =
  | "blue"
  | "violet"
  | "pink"
  | "amber"
  | "teal"
  | "coral";

const GRADIENTS: Record<ArtTint, string> = {
  blue: "linear-gradient(135deg, #5b8def 0%, #9b5de5 100%)",
  violet: "linear-gradient(135deg, #9b5de5 0%, #f15bb5 100%)",
  pink: "linear-gradient(135deg, #f15bb5 0%, #ffb020 100%)",
  amber: "linear-gradient(135deg, #ffb020 0%, #ff6b57 100%)",
  teal: "linear-gradient(135deg, #2dd4bf 0%, #5b8def 100%)",
  coral: "linear-gradient(135deg, #ff6b57 0%, #9b5de5 100%)",
};

export default function GradientArt({
  tint = "blue",
  label,
  className = "",
}: {
  tint?: ArtTint;
  label?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ background: GRADIENTS[tint] }}
    >
      <svg
        viewBox="0 0 400 250"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 mix-blend-soft-light opacity-90"
      >
        <defs>
          <radialGradient id={`ga-glow-${tint}`} cx="26%" cy="24%" r="80%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#ga-glow-${tint})`} />
        <circle cx="330" cy="60" r="96" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <circle cx="330" cy="60" r="150" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
        <circle cx="330" cy="60" r="210" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
        <rect x="40" y="176" width="130" height="12" rx="6" fill="rgba(0,0,0,0.16)" />
        <rect x="40" y="200" width="78" height="12" rx="6" fill="rgba(0,0,0,0.11)" />
      </svg>
      {/* subtle top-down shade so overlaid text/badges stay legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      {label && (
        <span className="absolute left-4 bottom-3 font-mono text-[11px] uppercase tracking-wide text-white/85">
          {label}
        </span>
      )}
    </div>
  );
}
