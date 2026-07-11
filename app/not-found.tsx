import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-24 md:py-32 text-center">
      <p className="method-letter font-display font-bold text-[clamp(80px,18vw,220px)] leading-none mb-4">
        404
      </p>
      <h1 className="font-display text-2xl md:text-3xl mb-4">
        This page never came into focus.
      </h1>
      <p className="text-muted max-w-[440px] mx-auto mb-9">
        The page you&apos;re looking for doesn&apos;t exist, moved, or never made it
        past the drawing board.
      </p>
      <Link
        href="/"
        className="inline-flex bg-lime text-lime-ink font-semibold text-sm px-6 py-3.5 hover:-translate-y-0.5 transition-transform"
      >
        Back to Home
      </Link>
    </section>
  );
}
