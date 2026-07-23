"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import ProjectVisual from "./ProjectVisual";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";

export default function ProjectsGrid({
  limit,
  showFilters = false,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = useMemo(() => {
    const filtered =
      activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeCategory, limit]);

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-2.5 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-mono text-xs px-4 py-2 border transition-colors ${
                activeCategory === cat.key
                  ? "bg-lime text-lime-ink border-lime"
                  : "border-line text-muted hover:border-white/30 hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {projects.length === 0 ? (
        <p className="text-muted py-16 text-center">
          No projects in this category yet — check back soon.
        </p>
      ) : (
        projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            eyebrow={project.eyebrow}
            title={project.title}
            description={project.description}
            tags={project.tags}
            reverse={i % 2 === 1}
            href={`/work/${project.slug}`}
            mock={<ProjectVisual project={project} />}
          />
        ))
      )}

      {limit && PROJECTS.length > limit && (
        <div className="pt-10 text-center border-t border-line mt-2">
          <Link
            href="/work"
            className="font-semibold text-[15px] border-b border-lime pb-0.5 hover:opacity-70 transition-opacity"
          >
            See all work →
          </Link>
        </div>
      )}
    </div>
  );
}
