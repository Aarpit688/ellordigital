import type { Metadata } from "next";
import { redirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import CaseStudyView from "./CaseStudyView";

// Pre-render every case study at build time (SSG on Vercel).
export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${SITE_NAME}`,
      description: project.description,
      type: "article",
      url: `${SITE_URL}/work/${project.slug}`,
    },
    twitter: { title: `${project.title} — ${SITE_NAME}`, description: project.description },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    redirect("/work");
  }

  const caseStudyJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.title,
    description: project.description,
    dateCreated: project.year,
    keywords: project.tags.join(", "),
    about: project.services,
    url: `${SITE_URL}/work/${project.slug}`,
    creator: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <JsonLd data={caseStudyJsonLd} />
      <CaseStudyView project={project} />
    </>
  );
}
