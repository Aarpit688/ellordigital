"use client";

import { useCallback, useState, type ReactNode } from "react";

// Production image slot. Renders `fallback` art immediately; a real file at
// `src` fades in on top only once it has successfully loaded. If `src` is
// missing, 404s, or fails to decode, the image simply never reveals and the
// fallback stays — so the site never shows a broken image or a "demo"
// placeholder. Drop real files into /public to light them up.
//
// We reveal on load (not hide on error) on purpose: an <img> that fails before
// React attaches an onError handler would otherwise miss the event and leave a
// broken-image glyph on screen.
export default function Media({
  src,
  alt,
  fallback,
  aspect = "aspect-[16/10]",
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  fallback: ReactNode;
  aspect?: string;
  className?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  // Catch images already complete from cache before onLoad can fire.
  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {fallback}
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
