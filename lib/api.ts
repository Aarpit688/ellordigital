// Same-origin by default: the Next.js app serves both the pages and the
// /api/* route handlers, so no CORS and no separate backend URL is needed.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export interface LeadPayload {
  fullName: string;
  email: string;
  phone: string;
  website?: string;
  details: string;
  service?: string;
  budget?: string;
  source?: string;
}

async function request<T = { message?: string }>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = (await res.json().catch(() => ({}))) as T & { message?: string };
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

export function submitLead(payload: LeadPayload) {
  return request("/leads", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function submitNewsletter(email: string) {
  return request("/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
