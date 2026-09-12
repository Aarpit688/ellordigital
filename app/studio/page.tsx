import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import Media from "@/components/Media";
import GradientArt from "@/components/GradientArt";
import TeamAvatar from "@/components/TeamAvatar";
import UiIcon from "@/components/UiIcon";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";

const VALUES = [
  {
    title: "Senior Talent, Not a Bench",
    icon: "users",
    chip: "bg-blue/10 text-blue border-blue/25",
    description:
      "The people who scope your project are the same people who build it. There is no handoff from a proposal team to a separate delivery team once the contract is signed.",
  },
  {
    title: "Honest Recommendations",
    icon: "message",
    chip: "bg-amber/10 text-amber border-amber/25",
    description:
      "If your request doesn't need the solution you have in mind, we say so before we quote it, not after you've already paid for it.",
  },
  {
    title: "Accountability Beyond Launch",
    icon: "gauge",
    chip: "bg-lime/10 text-lime border-lime/25",
    description:
      "A launch marks a checkpoint, not an endpoint. We follow up after go-live to measure results against the goals set at kickoff.",
  },
  {
    title: "Full Documentation",
    icon: "doc",
    chip: "bg-violet/15 text-violet border-violet/25",
    description:
      "We provide guidelines, code comments, and handoff documents so your team can operate independently. That is our definition of a completed project.",
  },
];

const TEAM = [
  { name: "Strategist", role: "Owns the brief, keeps the project honest about what problem it's actually solving, and is the first call if scope starts drifting." },
  { name: "Designer", role: "Owns the visual and UX decisions, from wireframe through final polish, and sits in on the same client conversations the strategist does." },
  { name: "Engineer", role: "Builds what gets designed, flags what won't hold up in production before it's too late to change cheaply, and stays on through launch." },
];

function ValueRow({
  title,
  description,
  icon,
  chip,
}: {
  title: string;
  description: string;
  icon: string;
  chip: string;
}) {
  return (
    <Reveal className="grid grid-cols-[44px_1fr] gap-4 py-7 border-t border-line">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${chip}`}>
        <UiIcon name={icon} size={20} />
      </span>
      <div>
        <h3 className="font-display text-lg mb-1.5">{title}</h3>
        <p className="text-muted max-w-[520px]">{description}</p>
      </div>
    </Reveal>
  );
}

function TeamMember({ name, role, index }: { name: string; role: string; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.05} className="flex items-center gap-4">
      <TeamAvatar seed={name} size={64} />
      <div>
        <p className="font-display text-[15px]">{name}</p>
        <p className="text-muted text-sm">{role}</p>
      </div>
    </Reveal>
  );
}

export default function StudioPage() {
  return (
    <>
      <PageHero
        breadcrumbs={<Breadcrumbs items={[{ label: "Studio" }]} />}
        eyebrow="The Studio"
        title="Small Team & One Time Zone"
        subtitle="ELLOR is a skilled team working with clients everywhere. Every project has a strategist, a designer, and an engineer on it from day one."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-14 md:pb-16 grid md:grid-cols-2 gap-10 items-start">
        <Media
          src="/studio/team.webp"
          alt="The ELLOR team at work in the Los Angeles studio"
          aspect="aspect-[4/3]"
          className="border border-line"
          fallback={<GradientArt tint="violet" label="Los Angeles studio" />}
        />
        <div>
          <p className="text-lg text-muted leading-relaxed mb-4">
            We started ELLOR because too many good projects were dying in the gap between the agency that designed them and the freelancer left to build them. Keeping strategy, design, and engineering under one roof means fewer things get lost in translation, and someone is always accountable for the whole outcome, not just their slice of it.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            We work with a deliberately small client list at any given time, because the alternative, spreading a senior team across too many logos, is how agencies quietly turn into the thing their clients hired them to avoid.
          </p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-2">
          What we optimize for
        </h2>
        <div className="grid md:grid-cols-2 gap-x-10">
          {VALUES.map((v) => (
            <ValueRow key={v.title} {...v} />
          ))}
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 py-14 md:py-16 border-t border-line">
        <h2 className="font-display text-[clamp(26px,3.6vw,38px)] mb-10">
          How we&apos;re structured
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <TeamMember key={member.name} index={i} {...member} />
          ))}
        </div>
      </section>

      <CtaBanner
        heading="Ready to see it clearly?"
        subtext="Thirty minutes, no deck, no pressure. Just a straight conversation about what's working and what isn't."
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-10 pb-20 md:pb-24">
        <h2 className="font-display text-[clamp(28px,4.4vw,48px)] mb-10 leading-tight">FAQ</h2>
        <FaqAccordion faqs={STUDIO_FAQS} />
      </section>
    </>
  );
}

const STUDIO_FAQS = [
  { q: "How big is the ELLOR team?", a: "We keep the team intentionally small and senior rather than scaling headcount for its own sake. What matters more than the number is that the people who scope your project are the same people who build it." },
  { q: "Will I be working with the same people throughout the project, or does it get handed off?", a: "The same core team, strategist, designer, and engineer, stays on from kickoff through launch. Specialists may join for specific pieces of work, but there's no wholesale handoff to a different team partway through." },
  { q: "How many projects do you take on at once?", a: "We deliberately limit how many clients we work with at any given time. It's a tradeoff we make on purpose, because a senior team spread across too many projects stops being a senior team in practice." },
  { q: "What happens after launch? Do you disappear once the site is live?", a: "No. We check back in after launch against what we agreed the project needed to achieve, and we're available for ongoing work if that's useful to you." },
  { q: "How do we find out if ELLOR is the right fit for our project?", a: "Book the free strategy call. It's a direct conversation about your project, not a sales pitch, and we'll tell you plainly if we're not the right match." },
];
