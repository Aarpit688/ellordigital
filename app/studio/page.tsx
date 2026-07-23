import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import Media from "@/components/Media";
import GradientArt from "@/components/GradientArt";
import TeamAvatar from "@/components/TeamAvatar";
import UiIcon from "@/components/UiIcon";
import Reveal from "@/components/Reveal";

const VALUES = [
  {
    title: "Senior people, not a bench",
    icon: "users",
    chip: "bg-blue/10 text-blue border-blue/25",
    description:
      "Everyone who scopes your project also works on it. No proposal-team-to-delivery-team switch after the contract is signed.",
  },
  {
    title: "Say the honest thing",
    icon: "message",
    chip: "bg-amber/10 text-amber border-amber/25",
    description:
      "If a request doesn't need what you think it needs, we'll tell you before we quote it, not after we've billed for it.",
  },
  {
    title: "Ship, then measure",
    icon: "gauge",
    chip: "bg-lime/10 text-lime border-lime/25",
    description:
      "A launch is a checkpoint, not a finish line. We check back in at 30/60/90 days against the goals we agreed on at kickoff.",
  },
  {
    title: "Document everything",
    icon: "doc",
    chip: "bg-violet/15 text-violet border-violet/25",
    description:
      "Guidelines, code comments, and handoff docs written so your team can run without us — that's the actual definition of done.",
  },
];

const TEAM = [
  { name: "Mara Devlin", role: "Founder & Strategy Lead" },
  { name: "Theo Nakamura", role: "Design Director" },
  { name: "Priya Raman", role: "Lead Engineer" },
  { name: "Owen Castellano", role: "Senior Product Designer" },
  { name: "Dana Whitfield", role: "SEO & Growth Lead" },
  { name: "Sam Okafor", role: "Front-End Engineer" },
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
        eyebrow="The studio"
        title="Twelve people, one time zone, zero hand-offs."
        subtitle="ELLOR is a small, senior team based in Los Angeles working with clients everywhere. Every project has a strategist, a designer, and an engineer on it from day one."
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
            We started ELLOR because too many good projects were dying in
            the gap between the agency that designed them and the
            freelancer who was supposed to build them. Keeping strategy,
            design, and engineering under one roof means fewer things get
            lost in translation — and someone is always accountable for
            the whole outcome, not just their slice of it.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            We work with a deliberately small client list at any given
            time, because the alternative — spreading a senior team across
            too many logos — is how agencies quietly turn into the thing
            their clients hired them to avoid.
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
          The people you&apos;d actually work with
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <TeamMember key={member.name} index={i} {...member} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
