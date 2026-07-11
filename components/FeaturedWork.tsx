"use client";

import ProjectsGrid from "./ProjectsGrid";
import useReveal from "@/hooks/useReveal";

export default function FeaturedWork() {
  const [titleRef, titleVisible] = useReveal<HTMLHeadingElement>();

  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <h2
        ref={titleRef}
        className={`reveal ${
          titleVisible ? "is-visible" : ""
        } section-title-gradient font-display text-[clamp(32px,5vw,56px)] mb-12 md:mb-14`}
      >
        Featured Work
      </h2>
      <ProjectsGrid limit={3} />
    </section>
  );
}
