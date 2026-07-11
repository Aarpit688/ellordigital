import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from ELLOR Digital — branding, product UX, ecommerce, web development, and growth case studies with real outcomes.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Work" }]} />}
        eyebrow="Selected work"
        title="Five projects, five different problems."
        subtitle="Branding, product UX, ecommerce, and growth — filtered by discipline below if you want to see something specific."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-16 md:pb-20">
        <ProjectsGrid showFilters />
      </section>

      <CtaBanner />
    </>
  );
}
