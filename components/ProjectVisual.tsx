import Media from "./Media";
import GradientArt, { type ArtTint } from "./GradientArt";
import type { Project } from "@/data/projects";

// Maps each work category to a palette tint so the fallback cover art stays
// recognizable per project type.
const CATEGORY_TINT: Record<string, ArtTint> = {
  branding: "pink",
  uiux: "violet",
  web: "blue",
  ecommerce: "amber",
  marketing: "teal",
};

export default function ProjectVisual({
  project,
  aspect = "aspect-[16/10]",
  priority = false,
}: {
  project: Project;
  aspect?: string;
  priority?: boolean;
}) {
  const tint = CATEGORY_TINT[project.category] ?? "blue";
  return (
    <Media
      src={`/work/${project.slug}.webp`}
      alt={`${project.client} — ${project.title}`}
      aspect={aspect}
      priority={priority}
      fallback={<GradientArt tint={tint} label={project.tags[0]} />}
    />
  );
}
