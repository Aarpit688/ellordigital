import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndustryCard from "@/components/IndustryCard";
import CtaBanner from "@/components/CtaBanner";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The verticals we know well — healthcare, ecommerce, fintech, travel, food & beverage, and SaaS. Strategy, design, and code shaped around each industry's real problems.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Industries" }]} />}
        eyebrow="Industries"
        title="We do our homework on your world before ours."
        subtitle="We're generalists in craft and specialists in a handful of verticals. Here's where we've spent enough time to skip the learning curve and get to the real problems fast."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Don't see your industry?"
        subtext="We've shipped in more verticals than we list here. Tell us what you're working on and we'll be honest about whether we're the right fit."
      />
    </>
  );
}
