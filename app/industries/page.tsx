import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndustryCard from "@/components/IndustryCard";
import CtaBanner from "@/components/CtaBanner";
import FaqAccordion from "@/components/FaqAccordion";
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
        eyebrow="Industries We Serve"
        title="We do our homework on your world before ours."
        subtitle="We're generalists in craft and specialists in a handful of verticals. Here's where we spend enough time to skip the learning curve and get to the real problems fast."
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
        subtext="We've worked in more verticals than we list here. Tell us what you're working on, and we'll be honest about whether we're the right fit."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-20 md:pb-24">
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] mb-10 leading-tight">
          Frequently Asked Questions
        </h2>
        <FaqAccordion faqs={INDUSTRY_FAQS} />
      </section>
    </>
  );
}

const INDUSTRY_FAQS = [
  { q: "Do you only work with the industries listed here?", a: "No. These are the areas we've built the most fluency in, but we take on projects outside this list regularly. If your industry isn't here, the strategy call is the fastest way to find out if we're a fit." },
  { q: "What does industry expertise actually mean at a design agency?", a: "It means we've already seen the common problems in that space, like patient trust in healthcare or cart abandonment in ecommerce, so we're not learning the basics of your world on your dime. We still research your specific business, but we start further ahead." },
  { q: "Can you handle both design and development for my industry?", a: "Yes. We handle brand, UX, and development under one roof, so a healthcare portal or an ecommerce rebuild doesn't get split across separate vendors who aren't talking to each other." },
  { q: "How do you handle industries with compliance requirements, like healthcare or finance?", a: "We build with accessibility and clarity as defaults and work closely with you on any specific regulatory or compliance requirements your business needs to meet, since those requirements vary by company and jurisdiction." },
  { q: "My business spans more than one of these industries. Is that a problem?", a: "Not at all. A lot of the businesses we work with sit across two or three categories, like a fintech product with a strong ecommerce arm. We scope around the actual business, not a single label." },
  { q: "How do we find out if you're the right fit for our industry?", a: "Book the free strategy call. It's a direct conversation about your business and what you need, and we'll tell you plainly if we're not the right match." },
];
