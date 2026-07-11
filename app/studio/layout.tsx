import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "A small, senior team in Los Angeles. Every project has a strategist, a designer, and an engineer on it from day one — no hand-offs between departments that have never met.",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
