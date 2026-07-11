import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Where ELLOR helps: brand identity, UI/UX design, web design & development, ecommerce, SEO, digital marketing, website strategy, mobile apps, and support.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
