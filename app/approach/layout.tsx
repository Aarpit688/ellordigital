import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "The ELLOR Method — one word, five moves. How we run every engagement, from discovery through launch, so design decisions stay traceable to a reason.",
  alternates: { canonical: "/approach" },
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
