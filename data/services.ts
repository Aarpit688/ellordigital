export interface Deliverable {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  shortDescription: string;
  heroSubtitle: string;
  overview: string[];
  deliverables: Deliverable[];
  process: ProcessStep[];
  relatedProjectSlug: string;
  faqs: Faq[];
}

export const SERVICES: Service[] = [
  {
    slug: "brand-identity",
    icon: "brand",
    name: "Brand Identity",
    tagline: "Give people a reason to recognize you before they read a word.",
    shortDescription:
      "Logo systems, type, color, and voice guidelines built to survive contact with a hundred different touchpoints.",
    heroSubtitle:
      "We build brand systems that hold together across a business card, a billboard, and a mobile notification — not just a logo file and a prayer.",
    overview: [
      "Most brand projects stall on the logo. We start past it: with the positioning question of what you want to be the obvious choice for, and who you're willing to not be for.",
      "From there we build a full system — mark, type, color, imagery direction, and voice — documented well enough that your team (or the next agency) can extend it without calling us.",
    ],
    deliverables: [
      { title: "Positioning & messaging", description: "A one-page strategy doc your whole team can point to when copy or design decisions get debated." },
      { title: "Logo & mark system", description: "Primary mark, lockups, and a monogram that works from a favicon to a storefront sign." },
      { title: "Color & type system", description: "A working palette and type scale, not just a swatch board — built for real interfaces." },
      { title: "Brand guidelines", description: "A living document covering usage, spacing, and the 'please don't' cases, so consistency doesn't rely on memory." },
      { title: "Launch assets", description: "Social templates, email signatures, and the small stuff that makes a rebrand feel finished on day one." },
    ],
    process: [
      { title: "Discover", description: "Stakeholder interviews and a competitive teardown of who else is in the room." },
      { title: "Position", description: "Land the one sentence that defines what you're for — and lock it before design starts." },
      { title: "Design", description: "Explore mark and system directions in parallel, not a single logo with three color options." },
      { title: "Systemize", description: "Document it well enough to survive a new hire, a new agency, or a new platform." },
    ],
    relatedProjectSlug: "northline-roasters",
    faqs: [
      { q: "Do you design just a logo, or the whole system?", a: "We rarely do logo-only work — a mark without a system tends to fall apart the first time someone else has to use it. Most engagements cover the full identity: mark, type, color, and guidelines." },
      { q: "What if we already have a logo we like?", a: "That's common. We can build the system around an existing mark, or use it as one input while we explore whether it's still doing its job." },
      { q: "How long does a brand identity project take?", a: "Typically 4–7 weeks depending on how many stakeholders are involved in sign-off. Positioning takes as long as it takes — rushing that step is the most common reason rebrands don't stick." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "uiux",
    name: "UI/UX Design",
    tagline: "Design that gets out of the way of what people came to do.",
    shortDescription:
      "Research-backed interface design for products and sites where usability is the whole point, not an afterthought.",
    heroSubtitle:
      "We design interfaces by watching what people actually try to do first, then building the shortest honest path there.",
    overview: [
      "Good UI is downstream of good UX, and good UX is downstream of actually knowing what your users are trying to accomplish. We do the unglamorous research work first — usability testing, flow mapping, card sorts — so visual design decisions have something real to stand on.",
      "We work in Figma with clickable prototypes tested on real users before a single line of production code gets written, which is the cheapest place in the whole process to catch a bad idea.",
    ],
    deliverables: [
      { title: "User research & testing", description: "Moderated sessions and analytics review to find where people actually get stuck." },
      { title: "Information architecture", description: "Sitemaps and user flows that make the shortest path the obvious one." },
      { title: "Wireframes & prototypes", description: "Clickable Figma prototypes tested with real users before visual design is finalized." },
      { title: "UI design system", description: "Reusable components and states, so design and engineering stay in sync after handoff." },
      { title: "Accessibility pass", description: "Contrast, focus order, and screen-reader checks — not a checkbox, an actual audit." },
    ],
    process: [
      { title: "Research", description: "Talk to real users and mine analytics for where the friction actually is." },
      { title: "Architect", description: "Flows and sitemaps that make sense before any pixel gets styled." },
      { title: "Prototype & test", description: "Clickable prototypes in front of real users — twice, if the first round surprises us." },
      { title: "Design & document", description: "A UI system engineering can build from without guessing." },
    ],
    relatedProjectSlug: "basin-and-co",
    faqs: [
      { q: "Do you do research, or just visual design?", a: "Both, and we'd push back on separating them. We can run a research-only engagement, but most projects benefit from doing research and design as one continuous loop." },
      { q: "What tools do you design in?", a: "Figma for design and prototyping. We hand off with organized files, not just a shared link and good luck." },
      { q: "Can you work with our existing design system?", a: "Yes — a lot of our UX work is extending or auditing systems that already exist rather than starting fresh." },
    ],
  },
  {
    slug: "web-design-development",
    icon: "webdev",
    name: "Web Design & Development",
    tagline: "A site that loads fast, reads clearly, and holds up under real traffic.",
    shortDescription:
      "Fast, accessible, and unmistakably yours — designed around what your visitors are actually trying to do.",
    heroSubtitle:
      "We design and build websites as one continuous process, so what ships is what was designed — not a rough approximation of it.",
    overview: [
      "A lot of web projects lose fidelity in the handoff between design and development. We keep both under one roof, which means fewer 'that's not quite how it was supposed to look' conversations after launch.",
      "We build on modern, boring-on-purpose stacks — the kind your future team can actually maintain — and we sweat the things that don't show up in a screenshot: load time, accessibility, and how the site behaves on a mid-range Android phone on a bad connection.",
    ],
    deliverables: [
      { title: "Information architecture", description: "A sitemap and content model that scales past the five pages you're picturing right now." },
      { title: "Visual design", description: "Page templates and a component library, not one-off pages that drift apart over time." },
      { title: "Front-end build", description: "Semantic, accessible, responsive code — reviewed for performance before launch, not after." },
      { title: "CMS setup", description: "A content editing experience your team can actually use without calling us for every text change." },
      { title: "Launch & handoff", description: "QA across browsers and devices, plus documentation so your team owns the site with confidence." },
    ],
    process: [
      { title: "Plan", description: "Content model and sitemap agreed before any visual design starts." },
      { title: "Design", description: "Templates and components, reviewed against real content — not lorem ipsum." },
      { title: "Build", description: "Front-end development in the open, with staging links updated as we go." },
      { title: "Launch", description: "Cross-browser QA, performance pass, and a handoff doc your team will actually use." },
    ],
    relatedProjectSlug: "meridian-health",
    faqs: [
      { q: "What do you build sites on?", a: "Depends on the project — React-based stacks for anything interactive or app-like, and CMS platforms like Webflow or a headless CMS when your team needs to self-edit content often." },
      { q: "Will we be able to update the site ourselves after launch?", a: "That's a requirement we design around from day one, not an afterthought. You'll get an editing experience matched to your team's comfort level." },
      { q: "Do you handle hosting?", a: "We'll recommend and set up hosting, but we don't lock clients into managed hosting contracts — you own the keys." },
    ],
  },
  {
    slug: "ecommerce-development",
    icon: "ecommerce",
    name: "E-commerce Development",
    tagline: "Storefronts engineered for checkout, not just for browsing.",
    shortDescription:
      "Storefronts built around conversion research — not just a theme with your logo swapped in.",
    heroSubtitle:
      "We treat checkout as the product. Everything upstream of it — merchandising, search, filtering — exists to get people there with confidence.",
    overview: [
      "Most ecommerce underperformance isn't a traffic problem, it's a friction problem: slow product pages, a checkout that asks for too much too soon, or a mobile experience that was clearly designed on a laptop.",
      "We build and rebuild storefronts on Shopify and headless commerce stacks with a bias toward measurable outcomes — load time, cart abandonment, and mobile conversion — over decoration.",
    ],
    deliverables: [
      { title: "Storefront design", description: "Product, collection, and cart experiences designed around how people actually shop, not a generic template." },
      { title: "Checkout optimization", description: "A streamlined, mobile-first checkout audited step by step for anything that costs you a sale." },
      { title: "Platform build", description: "Shopify, Shopify Plus, or headless commerce builds, matched to your catalog complexity." },
      { title: "Performance tuning", description: "Image, script, and third-party app audits — the usual suspects behind a slow storefront." },
      { title: "Analytics & tracking", description: "Clean e-commerce tracking so you can trust the numbers you're making decisions from." },
    ],
    process: [
      { title: "Audit", description: "Funnel analysis to find exactly where shoppers are dropping off today." },
      { title: "Design", description: "Merchandising and checkout flows redesigned around that data." },
      { title: "Build", description: "Platform development with performance budgets enforced from day one, not bolted on later." },
      { title: "Launch & tune", description: "Post-launch monitoring and a first round of conversion tuning based on real traffic." },
    ],
    relatedProjectSlug: "aurora-outfitters",
    faqs: [
      { q: "Which platforms do you build on?", a: "Mostly Shopify and Shopify Plus for most catalogs, and headless commerce (with a custom front end) when you need more control than a themed storefront allows." },
      { q: "Can you migrate us from another platform?", a: "Yes — platform migrations are a regular part of this work, including preserving SEO equity from your existing URLs." },
      { q: "Do you handle ongoing app and theme maintenance?", a: "We can hand off with documentation, or take on a maintenance retainer if you'd rather not manage platform updates yourself." },
    ],
  },
  {
    slug: "seo-organic-growth",
    icon: "seo",
    name: "SEO & Organic Growth",
    tagline: "Rankings that keep paying off long after the invoice does.",
    shortDescription:
      "Technical foundations and content strategy aimed at rankings that keep paying off long after launch.",
    heroSubtitle:
      "We fix the technical foundation first, then build content around what your best customers are actually searching for.",
    overview: [
      "SEO work that starts with content and skips the technical audit usually plateaus. We start underneath: crawlability, site speed, structured data, and information architecture, so the content work that follows has somewhere solid to land.",
      "From there it's ongoing: keyword research grounded in commercial intent, content built to actually answer the question, and reporting that ties rankings back to something you care about — leads, not just traffic.",
    ],
    deliverables: [
      { title: "Technical SEO audit", description: "Crawlability, site speed, and structured data fixes that clear the path for everything else." },
      { title: "Keyword & content strategy", description: "Prioritized around commercial intent, not just search volume." },
      { title: "On-page optimization", description: "Titles, structure, and internal linking treated as a system, not a page-by-page checklist." },
      { title: "Content production", description: "Briefs, drafts, or full production depending on how much your team wants to own." },
      { title: "Reporting that means something", description: "Monthly reporting tied to leads and revenue signals, not vanity ranking screenshots." },
    ],
    process: [
      { title: "Audit", description: "A full technical and content audit against your real competitive set." },
      { title: "Prioritize", description: "A roadmap ranked by effort versus impact, not a 40-item spreadsheet with no order." },
      { title: "Execute", description: "Technical fixes and content production running in parallel." },
      { title: "Report & refine", description: "Monthly check-ins that adjust the plan based on what's actually moving." },
    ],
    relatedProjectSlug: "fernweh-travel",
    faqs: [
      { q: "How long until we see results?", a: "Technical fixes can show up within weeks. Content and authority-driven rankings typically take 3–6 months to compound — we'll tell you honestly if a timeline sounds off." },
      { q: "Do you guarantee rankings?", a: "No, and any agency that does is asking you to trust a system nobody fully controls. We commit to the work and the reporting, not a specific rank position." },
      { q: "Do you write the content, or just strategize?", a: "Either — some clients want fully produced content, others just want expert-reviewed briefs for their in-house writers." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "marketing",
    name: "Digital Marketing",
    tagline: "Paid, content, and social — pointed at the same goal, not three different ones.",
    shortDescription:
      "Paid media, content, and social campaigns built around a single growth goal instead of three disconnected channels.",
    heroSubtitle:
      "We run paid, content, and social as one coordinated plan aimed at a number you actually care about — not three separate vanity dashboards.",
    overview: [
      "A lot of 'full-funnel' marketing is really just three vendors running three channels with three different definitions of success. We plan campaigns around one shared goal and let channel selection follow from that, not the other way around.",
      "That means honest scoping: if paid social isn't the right channel for your sales cycle, we'll say so instead of running it anyway because it's on the retainer.",
    ],
    deliverables: [
      { title: "Channel strategy", description: "A plan for where your budget actually belongs, based on your sales cycle and margins — not channel trends." },
      { title: "Paid media management", description: "Search and social campaigns built, tested, and optimized against a shared CPA target." },
      { title: "Content & social calendars", description: "Editorial and social plans that support the same growth goal as the paid work, not a separate agenda." },
      { title: "Landing page optimization", description: "Because a great ad pointed at a weak landing page is just an expensive way to lose a lead." },
      { title: "Unified reporting", description: "One dashboard across channels, tied to pipeline or revenue, not just clicks and impressions." },
    ],
    process: [
      { title: "Align", description: "Agree on the one number every channel is being measured against." },
      { title: "Plan", description: "Channel mix and budget allocation based on your sales cycle, not industry defaults." },
      { title: "Launch", description: "Campaigns go live with clear testing plans, not a single ad set and hope." },
      { title: "Optimize", description: "Weekly optimization and monthly strategy check-ins as the data comes in." },
    ],
    relatedProjectSlug: "fernweh-travel",
    faqs: [
      { q: "What's the minimum budget to work with you?", a: "It depends on channel and market, but we'll tell you upfront if your budget is too thin to get a meaningful read — running an underfunded test helps no one." },
      { q: "Do you handle both paid and organic?", a: "Yes, and we think they should be planned together even if they're executed by different specialists on our team." },
      { q: "How is this different from your SEO service?", a: "SEO is the organic, compounding side of growth. Digital Marketing here covers the paid and campaign-driven side — many clients run both in parallel." },
    ],
  },
  {
    slug: "website-strategy",
    icon: "strategy",
    name: "Website Strategy",
    tagline: "Decide what the site is for before deciding what it looks like.",
    shortDescription:
      "Discovery, positioning, and information architecture that give the design and code that follow a reason to exist.",
    heroSubtitle:
      "We map the business goals, audiences, and content model first — so every design and build decision traces back to something real, not a preference.",
    overview: [
      "Most website projects fail quietly at the start, not the end: they skip strategy, jump to design, and spend the rest of the project arguing about opinions with nothing to settle them.",
      "We run a focused discovery phase — stakeholder interviews, analytics review, competitive teardown, and a content model — that turns 'what do we want the site to look like' into 'what does the site need to do, for whom, and in what order.'",
    ],
    deliverables: [
      { title: "Discovery & audit", description: "Stakeholder interviews and an audit of your current site, analytics, and competitive set." },
      { title: "Positioning & messaging", description: "The one-sentence answer to what you're for — and who you're not for — that anchors every page." },
      { title: "Information architecture", description: "Sitemaps and user flows built around real tasks, not the org chart." },
      { title: "Content model", description: "A structured plan for the kinds of content the site holds, so it scales past launch." },
      { title: "Project roadmap", description: "A prioritized plan of what to build, in what order, and why." },
    ],
    process: [
      { title: "Listen", description: "Interviews and analytics review to find what's actually true about the business today." },
      { title: "Position", description: "Land the sentence that defines what the site is for before design starts." },
      { title: "Architect", description: "Sitemap, flows, and content model agreed before a pixel is drawn." },
      { title: "Roadmap", description: "A prioritized build plan ranked by effort against impact." },
    ],
    relatedProjectSlug: "basin-and-co",
    faqs: [
      { q: "Can strategy be a standalone engagement?", a: "Yes. Plenty of clients hire us for strategy alone and take the roadmap to their own team or another agency to build." },
      { q: "How long does a strategy phase take?", a: "Usually 2–4 weeks depending on how many stakeholders need to be interviewed and aligned." },
      { q: "Do we have to build with you afterward?", a: "No. The strategy and roadmap are yours to execute however you like — there's no lock-in." },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    name: "Mobile App Development",
    tagline: "Apps people keep on the home screen, not buried in a folder.",
    shortDescription:
      "Native-feeling iOS and Android apps built around the two or three things users actually open them to do.",
    heroSubtitle:
      "We design and build cross-platform apps that feel native, load fast, and stay focused on the handful of jobs people downloaded them for.",
    overview: [
      "Most app failures aren't technical — they're focus failures. An app that tries to do everything ends up doing nothing well enough for someone to keep it installed.",
      "We build on React Native so one well-built codebase ships to both iOS and Android, and we spend our design energy on the core loop — the thing users come back for — rather than a settings screen nobody asked for.",
    ],
    deliverables: [
      { title: "App UX & prototyping", description: "Flows and clickable prototypes tested before a line of app code is written." },
      { title: "Cross-platform build", description: "One React Native codebase shipping a native-feeling experience to iOS and Android." },
      { title: "API & backend integration", description: "Clean integration with your existing services, or a lightweight backend if you need one." },
      { title: "Performance & offline", description: "Fast startup, smooth interactions, and sensible offline behavior on real devices." },
      { title: "Store launch & handoff", description: "App Store and Play Store submission, plus documentation your team can maintain." },
    ],
    process: [
      { title: "Define", description: "Nail the core loop — the one job the app has to nail — before anything else." },
      { title: "Prototype", description: "Clickable prototypes tested with real users on real phones." },
      { title: "Build", description: "Cross-platform development with performance budgets on device from day one." },
      { title: "Launch", description: "Store submission, QA across devices, and a maintainable handoff." },
    ],
    relatedProjectSlug: "meridian-health",
    faqs: [
      { q: "Native or cross-platform?", a: "We default to React Native for most products — one codebase, near-native feel — and recommend fully native only when a project genuinely needs it." },
      { q: "Do you handle App Store submission?", a: "Yes, including the review process and store listing assets, not just the build." },
      { q: "Can you take over an existing app?", a: "Often, yes — we'll audit the current codebase first and tell you honestly whether it's worth continuing or restarting." },
    ],
  },
  {
    slug: "support-maintenance",
    icon: "support",
    name: "Support & Maintenance",
    tagline: "The unglamorous work that keeps a site fast, secure, and current.",
    shortDescription:
      "Ongoing updates, monitoring, performance, and security so your site doesn't quietly rot the month after launch.",
    heroSubtitle:
      "Launch is the start, not the finish. We keep sites patched, monitored, fast, and evolving — so small problems get fixed before they become outages.",
    overview: [
      "A website is software, and software left alone decays: dependencies fall behind, performance drifts, and a small security gap becomes a real one. Most 'the site is broken' emergencies were avoidable months earlier.",
      "Our maintenance retainers cover the boring, essential work — updates, backups, monitoring, and a set number of change hours a month — so your site stays healthy without you having to think about it.",
    ],
    deliverables: [
      { title: "Updates & patching", description: "Framework, dependency, and CMS updates applied and tested on a schedule." },
      { title: "Uptime & monitoring", description: "Alerting on downtime, errors, and performance regressions before your users notice." },
      { title: "Backups & security", description: "Regular backups and proactive security hardening, not a scramble after an incident." },
      { title: "Performance upkeep", description: "Periodic performance audits so the site stays as fast as the day it launched." },
      { title: "Monthly change hours", description: "A block of hours each month for the content and feature tweaks that always come up." },
    ],
    process: [
      { title: "Onboard", description: "We audit the current site and document exactly what we're taking responsibility for." },
      { title: "Stabilize", description: "Clear the backlog of overdue updates, quick wins, and known risks." },
      { title: "Maintain", description: "Scheduled updates, monitoring, and backups running quietly in the background." },
      { title: "Improve", description: "Monthly change hours put toward the tweaks and small features that keep the site current." },
    ],
    relatedProjectSlug: "aurora-outfitters",
    faqs: [
      { q: "Do I need a retainer, or can it be ad hoc?", a: "Both exist, but ad hoc tends to mean problems get found late. A light retainer is usually cheaper than the emergencies it prevents." },
      { q: "Can you maintain a site you didn't build?", a: "Yes — we start with an audit so we know what we're inheriting before we commit to a scope." },
      { q: "What do unused change hours do?", a: "Depending on the plan they roll over for a month or are used for proactive improvements — we don't like billing for nothing." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
