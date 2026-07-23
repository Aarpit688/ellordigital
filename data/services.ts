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
    tagline: "People should know it's you before they read a single word.",
    shortDescription:
      "Logos, type, color, and voice, documented tightly enough to hold up across a hundred different places they'll show up.",
    heroSubtitle:
      "A brand that looks right on a business card, a billboard, and a phone notification takes more than one logo file. We build the whole system so it holds together everywhere it lands.",
    overview: [
      "Most brand projects get stuck arguing about the logo. We start one step earlier, with a harder question: what do you want to be the obvious pick for, and who are you fine with walking away from?",
      "Then we build the rest: mark, type, color, imagery, voice. All of it written down clearly enough that your team, or whoever comes after us, can keep building on it without a phone call.",
    ],
    deliverables: [
      { title: "Positioning & messaging", description: "One page of strategy the whole team can point at when a copy or design call turns into an argument." },
      { title: "Logo & mark system", description: "A primary mark, lockups, and a monogram that reads clearly at favicon size and on a storefront sign." },
      { title: "Color & type system", description: "A palette and type scale meant for real screens, not a pretty swatch board that falls apart in production." },
      { title: "Brand guidelines", description: "A living doc for usage, spacing, and the don't-do-this cases, so staying consistent doesn't depend on anyone's memory." },
      { title: "Launch assets", description: "Social templates, email signatures, and the small pieces that make a rebrand feel finished on launch day." },
    ],
    process: [
      { title: "Discover", description: "We interview your stakeholders and pull apart who else is competing for the same attention." },
      { title: "Position", description: "We land the one sentence that says what you're for, then lock it before anyone opens a design file." },
      { title: "Design", description: "We explore a few full directions at once, not one logo dressed up in three colors." },
      { title: "Systemize", description: "We write it all down so it survives a new hire, a new agency, or a new platform." },
    ],
    relatedProjectSlug: "northline-roasters",
    faqs: [
      { q: "Do you design just a logo, or the whole system?", a: "We almost never do logo-only work. A mark with no system behind it falls apart the first time someone other than us has to use it. Most projects cover the full identity: mark, type, color, and guidelines." },
      { q: "What if we already have a logo we like?", a: "Happens a lot. We can build the system around a logo you already have, or treat it as one input while we check whether it's still pulling its weight." },
      { q: "How long does a brand identity project take?", a: "Usually four to seven weeks, mostly depending on how many people sign off. Positioning takes as long as it takes, and rushing it is the single most common reason a rebrand doesn't stick." },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "uiux",
    name: "UI/UX Design",
    tagline: "Design that steps aside so people can do what they came to do.",
    shortDescription:
      "Interface design backed by research, for products and sites where being usable is the actual point.",
    heroSubtitle:
      "We start by watching what people actually reach for, then build the shortest honest path to it.",
    overview: [
      "Good UI depends on good UX, and good UX depends on actually knowing what your users are trying to get done. So we do the boring research first: usability testing, flow mapping, card sorts. That way the visual decisions rest on something real.",
      "We work in Figma and put clickable prototypes in front of real users before anyone writes production code. It's the cheapest place in the whole process to catch a bad idea.",
    ],
    deliverables: [
      { title: "User research & testing", description: "Moderated sessions and a look at your analytics to find where people actually get stuck." },
      { title: "Information architecture", description: "Sitemaps and flows that make the shortest path the obvious one." },
      { title: "Wireframes & prototypes", description: "Clickable Figma prototypes, tested with real users before we lock the visual design." },
      { title: "UI design system", description: "Reusable components and their states, so design and engineering stay in sync once we hand off." },
      { title: "Accessibility pass", description: "Contrast, focus order, and screen-reader checks. A real audit, not a checkbox." },
    ],
    process: [
      { title: "Research", description: "We talk to real users and dig through analytics to find where the friction really is." },
      { title: "Architect", description: "Flows and sitemaps that hold up before anyone styles a pixel." },
      { title: "Prototype & test", description: "Clickable prototypes in front of real users. Twice, if the first round surprises us." },
      { title: "Design & document", description: "A UI system engineering can build from without guessing." },
    ],
    relatedProjectSlug: "basin-and-co",
    faqs: [
      { q: "Do you do research, or just visual design?", a: "Both, and we'd argue against pulling them apart. We can run a research-only engagement, but most projects go better when research and design run as one loop." },
      { q: "What tools do you design in?", a: "Figma, for design and prototyping. You get organized files at handoff, not a shared link and good luck." },
      { q: "Can you work with our existing design system?", a: "Yes. A lot of our UX work is auditing or extending a system you already have rather than starting over." },
    ],
  },
  {
    slug: "web-design-development",
    icon: "webdev",
    name: "Web Design & Development",
    tagline: "A site that loads fast, reads clearly, and holds up when real traffic shows up.",
    shortDescription:
      "Fast, accessible, and clearly yours, built around what your visitors are actually there to do.",
    heroSubtitle:
      "We design and build in one continuous process, so the thing that ships is the thing that was designed, not a rough approximation of it.",
    overview: [
      "Plenty of web projects lose something in the handoff from design to development. We keep both in the same room, which cuts down on the 'that's not quite how it was meant to look' conversations after launch.",
      "We build on modern stacks that are boring on purpose, the kind your future team can actually maintain. And we fuss over the things a screenshot never shows: load time, accessibility, and how the site behaves on a mid-range Android phone with two bars of signal.",
    ],
    deliverables: [
      { title: "Information architecture", description: "A sitemap and content model that scale past the five pages you're picturing today." },
      { title: "Visual design", description: "Page templates and a component library, so pages don't drift apart into one-offs over time." },
      { title: "Front-end build", description: "Semantic, accessible, responsive code, checked for performance before launch instead of after." },
      { title: "CMS setup", description: "An editing setup your team can actually use, without pinging us for every wording change." },
      { title: "Launch & handoff", description: "QA across browsers and devices, plus docs so your team owns the site and knows it." },
    ],
    process: [
      { title: "Plan", description: "We agree on the content model and sitemap before any visual design starts." },
      { title: "Design", description: "Templates and components, checked against your real content instead of lorem ipsum." },
      { title: "Build", description: "Front-end work out in the open, with staging links we keep current as we go." },
      { title: "Launch", description: "Cross-browser QA, a performance pass, and a handoff doc your team will actually open." },
    ],
    relatedProjectSlug: "meridian-health",
    faqs: [
      { q: "What do you build sites on?", a: "Depends on the project. React-based stacks for anything interactive or app-like; a CMS like Webflow or a headless setup when your team edits content often." },
      { q: "Will we be able to update the site ourselves after launch?", a: "We design for that from day one, not as an afterthought. You'll get an editing setup matched to how technical your team is." },
      { q: "Do you handle hosting?", a: "We'll recommend hosting and set it up, but we won't lock you into a managed contract. You keep the keys." },
    ],
  },
  {
    slug: "ecommerce-development",
    icon: "ecommerce",
    name: "E-commerce Development",
    tagline: "Storefronts built for the checkout, not just the browsing.",
    shortDescription:
      "Stores designed around conversion research, not a stock theme with your logo dropped in.",
    heroSubtitle:
      "We treat checkout as the product. Everything before it, from merchandising to search to filtering, exists to get people there feeling sure.",
    overview: [
      "When a store underperforms, it's usually friction, not traffic: slow product pages, a checkout that asks for too much too soon, or a mobile experience that was clearly designed on a laptop.",
      "We build and rebuild on Shopify and headless commerce stacks, and we bias toward numbers you can measure over decoration: load time, cart abandonment, mobile conversion.",
    ],
    deliverables: [
      { title: "Storefront design", description: "Product, collection, and cart pages shaped around how people actually shop, not a generic template." },
      { title: "Checkout optimization", description: "A lean, mobile-first checkout, walked step by step for anything that quietly costs you a sale." },
      { title: "Platform build", description: "Shopify, Shopify Plus, or headless builds, matched to how complex your catalog gets." },
      { title: "Performance tuning", description: "Audits of images, scripts, and third-party apps, the usual suspects behind a slow store." },
      { title: "Analytics & tracking", description: "Clean ecommerce tracking, so the numbers you're deciding on are ones you can trust." },
    ],
    process: [
      { title: "Audit", description: "We map the funnel to find exactly where shoppers drop off today." },
      { title: "Design", description: "We redesign the merchandising and checkout flows around what that data shows." },
      { title: "Build", description: "We build with performance budgets set from day one, not bolted on at the end." },
      { title: "Launch & tune", description: "We watch the launch and run a first round of conversion tuning against real traffic." },
    ],
    relatedProjectSlug: "aurora-outfitters",
    faqs: [
      { q: "Which platforms do you build on?", a: "Shopify and Shopify Plus for most catalogs, and headless commerce with a custom front end when you need more control than a themed store allows." },
      { q: "Can you migrate us from another platform?", a: "Yes. Migrations are a regular part of this work, including holding onto the SEO equity in your existing URLs." },
      { q: "Do you handle ongoing app and theme maintenance?", a: "We can hand off with docs, or keep a maintenance retainer if you'd rather not babysit platform updates yourself." },
    ],
  },
  {
    slug: "seo-organic-growth",
    icon: "seo",
    name: "SEO & Organic Growth",
    tagline: "Rankings that keep earning long after the invoice is paid.",
    shortDescription:
      "A solid technical base plus content strategy, aimed at rankings that keep earning well after launch.",
    heroSubtitle:
      "We fix the technical base first, then build content around what your best customers actually type into a search bar.",
    overview: [
      "SEO that starts with content and skips the technical audit tends to plateau. We start underneath instead: crawlability, site speed, structured data, information architecture. Then the content has somewhere solid to land.",
      "After that it's steady work: keyword research grounded in real buying intent, content that actually answers the question, and reporting that ties rankings back to leads rather than raw traffic.",
    ],
    deliverables: [
      { title: "Technical SEO audit", description: "Fixes to crawlability, site speed, and structured data that clear the way for everything after." },
      { title: "Keyword & content strategy", description: "Prioritized by buying intent, not just search volume." },
      { title: "On-page optimization", description: "Titles, structure, and internal links handled as one system, not a page-by-page checklist." },
      { title: "Content production", description: "Briefs, drafts, or the whole thing, depending on how much your team wants to keep in-house." },
      { title: "Reporting that means something", description: "Monthly reports tied to leads and revenue signals, not screenshots of pretty rankings." },
    ],
    process: [
      { title: "Audit", description: "A full technical and content audit, measured against who you actually compete with." },
      { title: "Prioritize", description: "A roadmap ranked by effort against impact, not a 40-row spreadsheet with no order to it." },
      { title: "Execute", description: "Technical fixes and content production running side by side." },
      { title: "Report & refine", description: "Monthly check-ins that adjust the plan based on what's actually working." },
    ],
    relatedProjectSlug: "fernweh-travel",
    faqs: [
      { q: "How long until we see results?", a: "Technical fixes can show up in weeks. Content and authority-driven rankings usually take three to six months to compound. If a timeline you've been quoted sounds off, we'll say so." },
      { q: "Do you guarantee rankings?", a: "No. Anyone who guarantees a rank is promising you a system nobody fully controls. We commit to the work and the reporting, not a specific position." },
      { q: "Do you write the content, or just strategize?", a: "Either. Some clients want finished content; others just want reviewed briefs their in-house writers can run with." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "marketing",
    name: "Digital Marketing",
    tagline: "Paid, content, and social, all aimed at one goal instead of three.",
    shortDescription:
      "Paid media, content, and social campaigns pointed at a single growth goal instead of three channels doing their own thing.",
    heroSubtitle:
      "We run paid, content, and social as one plan pointed at a number you actually care about, not three separate vanity dashboards.",
    overview: [
      "A lot of 'full-funnel' marketing is just three vendors running three channels with three different ideas of what winning looks like. We start from one shared goal and let the channel mix follow from it, not the reverse.",
      "That means scoping honestly. If paid social is wrong for your sales cycle, we'll tell you, instead of running it anyway because it's on the retainer.",
    ],
    deliverables: [
      { title: "Channel strategy", description: "A plan for where your budget actually belongs, based on your sales cycle and margins rather than whatever channel is trendy." },
      { title: "Paid media management", description: "Search and social campaigns built, tested, and tuned against one shared CPA target." },
      { title: "Content & social calendars", description: "Editorial and social plans that push toward the same goal as the paid work, not a separate agenda." },
      { title: "Landing page optimization", description: "A great ad pointed at a weak landing page is just an expensive way to lose the lead." },
      { title: "Unified reporting", description: "One dashboard across every channel, tied to pipeline or revenue instead of clicks and impressions." },
    ],
    process: [
      { title: "Align", description: "We agree on the one number every channel gets measured against." },
      { title: "Plan", description: "We set the channel mix and budget around your sales cycle, not industry defaults." },
      { title: "Launch", description: "Campaigns go live with a clear testing plan, not one ad set and a hope." },
      { title: "Optimize", description: "Weekly tuning and monthly strategy check-ins as the data lands." },
    ],
    relatedProjectSlug: "fernweh-travel",
    faqs: [
      { q: "What's the minimum budget to work with you?", a: "It depends on the channel and the market. We'll tell you upfront if your budget is too thin to get a real read, because an underfunded test helps nobody." },
      { q: "Do you handle both paid and organic?", a: "Yes, and we think they should be planned together even when different specialists on our team run them." },
      { q: "How is this different from your SEO service?", a: "SEO is the organic, compounding side of growth. This covers the paid, campaign-driven side. A lot of clients run both at once." },
    ],
  },
  {
    slug: "website-strategy",
    icon: "strategy",
    name: "Website Strategy",
    tagline: "Figure out what the site is for before you argue about how it looks.",
    shortDescription:
      "Discovery, positioning, and information architecture, so the design and code that follow have a reason to exist.",
    heroSubtitle:
      "We map the business goals, the audiences, and the content model first, so every design and build decision traces back to something real instead of a preference.",
    overview: [
      "Most website projects fail quietly at the start, not the end. They skip strategy, jump to design, then spend the rest of the timeline arguing over opinions with nothing to settle them.",
      "We run a tight discovery phase: stakeholder interviews, an analytics review, a competitive teardown, and a content model. It turns 'what do we want the site to look like' into 'what does the site need to do, for whom, and in what order.'",
    ],
    deliverables: [
      { title: "Discovery & audit", description: "Stakeholder interviews plus an audit of your current site, your analytics, and who you're up against." },
      { title: "Positioning & messaging", description: "The one-sentence answer to what you're for, and who you're not for, that anchors every page." },
      { title: "Information architecture", description: "Sitemaps and flows built around what people are trying to do, not your org chart." },
      { title: "Content model", description: "A structured plan for the kinds of content the site holds, so it grows past launch without breaking." },
      { title: "Project roadmap", description: "A ranked plan of what to build, in what order, and why." },
    ],
    process: [
      { title: "Listen", description: "We interview people and read the analytics to find what's actually true about the business right now." },
      { title: "Position", description: "We land the sentence that says what the site is for before design starts." },
      { title: "Architect", description: "We agree on the sitemap, flows, and content model before a pixel gets drawn." },
      { title: "Roadmap", description: "A build plan ranked by effort against impact." },
    ],
    relatedProjectSlug: "basin-and-co",
    faqs: [
      { q: "Can strategy be a standalone engagement?", a: "Yes. Plenty of clients hire us for strategy only and hand the roadmap to their own team or another agency to build." },
      { q: "How long does a strategy phase take?", a: "Usually two to four weeks, depending on how many stakeholders we need to interview and get on the same page." },
      { q: "Do we have to build with you afterward?", a: "No. The strategy and roadmap are yours to run with however you like. No lock-in." },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    name: "Mobile App Development",
    tagline: "Apps that stay on the home screen instead of getting buried in a folder.",
    shortDescription:
      "iOS and Android apps that feel native, built around the two or three things people actually open them to do.",
    heroSubtitle:
      "We build cross-platform apps that feel native, start fast, and stick to the few jobs people downloaded them for.",
    overview: [
      "Most apps don't fail on the tech. They fail on focus. An app that tries to do everything ends up doing nothing well enough to keep its spot on the phone.",
      "We build on React Native, so one solid codebase ships to both iOS and Android, and we spend the design effort on the core loop, the thing users come back for, rather than a settings screen nobody asked about.",
    ],
    deliverables: [
      { title: "App UX & prototyping", description: "Flows and clickable prototypes, tested before a line of app code gets written." },
      { title: "Cross-platform build", description: "One React Native codebase that ships a native-feeling app to both iOS and Android." },
      { title: "API & backend integration", description: "Clean hookups to your existing services, or a light backend if you need one built." },
      { title: "Performance & offline", description: "Fast startup, smooth interactions, and sane offline behavior on actual devices." },
      { title: "Store launch & handoff", description: "App Store and Play Store submission, plus docs your team can maintain." },
    ],
    process: [
      { title: "Define", description: "We pin down the core loop, the one job the app has to get right, before anything else." },
      { title: "Prototype", description: "Clickable prototypes, tested with real users on real phones." },
      { title: "Build", description: "Cross-platform build with performance budgets measured on-device from day one." },
      { title: "Launch", description: "Store submission, QA across devices, and a handoff your team can keep running." },
    ],
    relatedProjectSlug: "meridian-health",
    faqs: [
      { q: "Native or cross-platform?", a: "We default to React Native for most products: one codebase, near-native feel. We only recommend fully native when a project genuinely needs it." },
      { q: "Do you handle App Store submission?", a: "Yes, including the review process and the store listing assets, not just the build." },
      { q: "Can you take over an existing app?", a: "Often, yes. We audit the current codebase first and tell you straight whether it's worth continuing or starting over." },
    ],
  },
  {
    slug: "support-maintenance",
    icon: "support",
    name: "Support & Maintenance",
    tagline: "The dull work that keeps a site fast, secure, and current.",
    shortDescription:
      "Ongoing updates, monitoring, performance, and security, so your site doesn't quietly rot the month after launch.",
    heroSubtitle:
      "Launch is the start, not the finish. We keep sites patched, watched, fast, and moving forward, so small problems get caught before they turn into outages.",
    overview: [
      "A website is software, and software left alone rots. Dependencies fall behind, performance drifts, and a small security gap turns into a real one. Most 'the site is down' emergencies were avoidable months before they happened.",
      "Our retainers cover the boring, necessary stuff: updates, backups, monitoring, and a set block of change hours each month. Your site stays healthy and you don't have to think about it.",
    ],
    deliverables: [
      { title: "Updates & patching", description: "Framework, dependency, and CMS updates, applied and tested on a schedule." },
      { title: "Uptime & monitoring", description: "Alerts on downtime, errors, and slowdowns, usually before your users notice." },
      { title: "Backups & security", description: "Regular backups and security hardening done ahead of time, not a scramble after something breaks." },
      { title: "Performance upkeep", description: "Regular performance checks, so the site stays as quick as it was on launch day." },
      { title: "Monthly change hours", description: "A block of hours each month for the content and feature tweaks that always come up." },
    ],
    process: [
      { title: "Onboard", description: "We audit the site and write down exactly what we're taking responsibility for." },
      { title: "Stabilize", description: "We clear the backlog of overdue updates, quick wins, and known risks." },
      { title: "Maintain", description: "Scheduled updates, monitoring, and backups ticking away quietly in the background." },
      { title: "Improve", description: "Monthly change hours spent on the tweaks and small features that keep the site current." },
    ],
    relatedProjectSlug: "aurora-outfitters",
    faqs: [
      { q: "Do I need a retainer, or can it be ad hoc?", a: "Both are options, but ad hoc usually means problems get found late. A light retainer tends to cost less than the emergencies it heads off." },
      { q: "Can you maintain a site you didn't build?", a: "Yes. We start with an audit so we know what we're inheriting before we agree on a scope." },
      { q: "What do unused change hours do?", a: "Depending on the plan, they roll over for a month or go toward proactive improvements. We don't like charging for nothing." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
