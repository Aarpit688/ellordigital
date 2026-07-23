import ProjectsGrid from "./ProjectsGrid";
import Reveal from "./Reveal";

export default function FeaturedWork() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-16 md:py-20 border-t border-line">
      <Reveal>
        <h2 className="section-title-gradient font-display text-[clamp(32px,5vw,56px)] mb-12 md:mb-14">
          Selected work
        </h2>
      </Reveal>
      <ProjectsGrid limit={3} />
    </section>
  );
}
