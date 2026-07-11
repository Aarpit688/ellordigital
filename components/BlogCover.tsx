// Decorative gradient cover art for blog posts — keyed by category so each
// article gets a consistent, recognizable "image" without external assets.
const GRADIENTS: Record<string, string> = {
  Design: "linear-gradient(135deg, #5b8def, #9b5de5)",
  UX: "linear-gradient(135deg, #9b5de5, #f15bb5)",
  Ecommerce: "linear-gradient(135deg, #ffb020, #f15bb5)",
  SEO: "linear-gradient(135deg, #5b8def, #c6ff3d)",
  Branding: "linear-gradient(135deg, #f15bb5, #ffb020)",
};

export default function BlogCover({
  category,
  className = "",
}: {
  category: string;
  className?: string;
}) {
  const gradient = GRADIENTS[category] ?? "linear-gradient(135deg, #5b8def, #9b5de5)";
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient }}
    >
      {/* geometric motif overlay */}
      <svg
        viewBox="0 0 400 220"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 mix-blend-soft-light opacity-80"
      >
        <defs>
          <radialGradient id="bcGlow" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="220" fill="url(#bcGlow)" />
        <circle cx="320" cy="60" r="90" fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth="1.5" />
        <circle cx="320" cy="60" r="140" fill="none" stroke="rgba(0,0,0,0.10)" strokeWidth="1.5" />
        <rect x="40" y="150" width="120" height="10" rx="5" fill="rgba(0,0,0,0.16)" />
        <rect x="40" y="172" width="70" height="10" rx="5" fill="rgba(0,0,0,0.12)" />
      </svg>
      <span className="absolute left-4 bottom-3 font-mono text-[11px] tracking-wide uppercase text-black/70">
        {category}
      </span>
    </div>
  );
}
