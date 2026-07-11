import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
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
    openGraph: { title: project.title, description: project.description, type: "article" },
    twitter: { title: project.title, description: project.description },
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

  return <CaseStudyView project={project} />;
}
