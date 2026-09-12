import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on strategy, design, development, and growth from the ELLOR studio — the thinking behind how we work, minus the fluff.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Insights" }]} />}
        eyebrow="Blogs"
        title="The thinking behind the work."
        subtitle="Short, opinionated notes on strategy, design, development, and growth — the reasoning we'd give a client, written down."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <p className="text-muted py-16 text-center">Blogs Sections Empty</p>
      </section>

      <CtaBanner
        heading="Prefer a conversation to a blog post?"
        subtext="Thirty minutes, no deck, no pressure — just a straight conversation about what's working and what isn't."
      />
    </>
  );
}
