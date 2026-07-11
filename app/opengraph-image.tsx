import { ImageResponse } from "next/og";

export const alt = "ELLOR Digital — Brand & Web Studio, Los Angeles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time — a real branded PNG for social/link previews.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#14151a",
          fontFamily: "sans-serif",
        }}
      >
        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg width="48" height="48" viewBox="0 0 44 44">
            <rect x="4" y="4" width="7" height="36" rx="1.5" fill="#c6ff3d" />
            <rect x="11" y="4" width="24" height="8" rx="1.5" fill="#5b8def" />
            <rect x="11" y="18" width="16" height="8" rx="1.5" fill="#9b5de5" />
            <rect x="11" y="32" width="24" height="8" rx="1.5" fill="#ffb020" />
          </svg>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#f5f6f8" }}>
            ELLOR<span style={{ color: "#c6ff3d" }}>.</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              color: "transparent",
              backgroundImage: "linear-gradient(92deg, #5b8def, #9b5de5, #f15bb5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Clarity that drives growth.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#9a9ca8", marginTop: 28 }}>
            Brand &amp; Web Studio — Los Angeles
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
