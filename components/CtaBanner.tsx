import Reveal from "./Reveal";
import OpenModalButton from "./OpenModalButton";

export default function CtaBanner({
  heading = "Ready to see it clearly?",
  subtext = "Thirty minutes, no deck, no pressure. Just a straight conversation about what's working and what isn't.",
  buttonLabel = "Book a free strategy call",
  id,
}: {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  id?: string;
}) {
  return (
    <Reveal
      as="section"
      className="max-w-[1180px] mx-auto mb-14 px-5 md:px-10 py-16 md:py-24 text-center bg-surface border border-line"
    >
      {id ? <span id={id} className="sr-only" /> : null}
      <h2 className="font-display text-[clamp(30px,5vw,52px)] mb-4">{heading}</h2>
      <p className="text-lg text-muted max-w-[520px] mx-auto mb-8">{subtext}</p>
      <OpenModalButton className="px-8 py-4">{buttonLabel}</OpenModalButton>
    </Reveal>
  );
}
