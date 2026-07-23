// Scroll lock that never shifts the page. Locking scroll normally removes the
// vertical scrollbar; on platforms where the scrollbar takes layout width
// (Windows/Linux) that widens the content and jumps everything sideways. Here
// we swap the scrollbar for an equal-width right padding, so the content width
// stays identical whether the scrollbar is present or not.
//
// A counter supports overlapping locks (e.g. mobile menu open, then the lead
// modal) — scroll only unlocks once the last holder releases it.

let locks = 0;
let prevOverflow = "";
let prevPaddingRight = "";

export function lockScroll(): void {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (locks === 0) {
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    prevOverflow = html.style.overflow;
    prevPaddingRight = html.style.paddingRight;
    html.style.overflow = "hidden";
    if (scrollbarWidth > 0) html.style.paddingRight = `${scrollbarWidth}px`;
  }
  locks += 1;
}

export function unlockScroll(): void {
  if (typeof document === "undefined") return;
  if (locks === 0) return;
  locks -= 1;
  if (locks === 0) {
    const html = document.documentElement;
    html.style.overflow = prevOverflow;
    html.style.paddingRight = prevPaddingRight;
  }
}
