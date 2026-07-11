// Format an ISO date string as e.g. "Jun 18, 2026" (locale-stable, UTC).
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
