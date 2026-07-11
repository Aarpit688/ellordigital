export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMins: number;
  author: string;
  authorRole: string;
  body: PostSection[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "start-with-a-content-model",
    title: "Why your redesign should start with a content model, not a moodboard",
    excerpt:
      "Most redesigns die in the gap between a beautiful moodboard and real content. Start with the content model and the design has something true to stand on.",
    category: "Design",
    date: "2026-06-18",
    readMins: 6,
    author: "ELLOR Studio",
    authorRole: "Strategy & Design",
    body: [
      {
        paragraphs: [
          "A moodboard feels like progress. It's visible, it's shareable, and it makes everyone in the room nod. But a moodboard makes promises about a website that doesn't have any content in it yet — and that's where most redesigns quietly go wrong.",
        ],
      },
      {
        heading: "The problem with designing for lorem ipsum",
        paragraphs: [
          "When you design against placeholder text, every layout looks great. Real content is messier: headlines run three lines instead of one, some products have five features and others have two, and that elegant testimonial slot has to hold a quote nobody has written yet.",
          "By the time real content shows up, the design has hardened. Now you're forcing content into shapes it doesn't fit, or rebuilding components you thought were done. Both cost time you didn't budget for.",
        ],
      },
      {
        heading: "What a content model actually is",
        paragraphs: [
          "A content model is a plain description of the kinds of content your site holds and how they relate: what a 'service' is, what fields a 'case study' needs, how an 'article' is structured. It's boring, and that's the point — it forces the real decisions before pixels make them for you.",
          "Once you have it, design has something honest to react to. Templates get built around content that scales past the five pages you're picturing right now, and the handoff to engineering stops being a negotiation over what the fields even are.",
        ],
      },
      {
        heading: "Where the moodboard fits",
        paragraphs: [
          "None of this means visual direction doesn't matter. It means sequence matters. Get the content model right, then bring the moodboard in to give that structure a point of view. Do it in that order and the beautiful version is also the one that survives contact with real content.",
        ],
      },
    ],
  },
  {
    slug: "the-five-tap-rule",
    title: "The five-tap rule: designing flows people can actually finish",
    excerpt:
      "If the thing a user came to do takes more than five taps to reach, they'll call, email, or leave. A simple constraint that reshapes an entire information architecture.",
    category: "UX",
    date: "2026-05-27",
    readMins: 5,
    author: "ELLOR Studio",
    authorRole: "UX & Research",
    body: [
      {
        paragraphs: [
          "We use a blunt constraint on a lot of our product work: nothing a user essentially came to do should be more than five taps from where they start. It sounds arbitrary. In practice it's one of the fastest ways to expose an information architecture that's quietly failing people.",
        ],
      },
      {
        heading: "Why five, and why taps",
        paragraphs: [
          "The exact number matters less than having one. Counting taps forces you to be honest about the distance between intent and completion — a distance that menus, logins, and confirmation screens quietly stretch without anyone deciding they should.",
          "Taps also travel across devices. A flow that's fine with a mouse and a big screen can become a maze on a phone held one-handed on a bad connection, which is where a lot of your users actually are.",
        ],
      },
      {
        heading: "What it changes",
        paragraphs: [
          "When we applied this to a healthcare portal, the top patient tasks — booking, results, messaging — were all buried four or five levels deep behind clinical labels. Pulling them to the surface and rewriting the words dropped front-desk calls sharply, because patients could finally self-serve.",
          "The rule didn't design the portal. It just made the failures impossible to ignore, which is most of the job.",
        ],
      },
    ],
  },
  {
    slug: "checkout-is-the-product",
    title: "Checkout is the product: an ecommerce performance checklist",
    excerpt:
      "Most ecommerce underperformance isn't a traffic problem, it's a friction problem. A practical checklist for the parts of checkout that quietly cost you sales.",
    category: "Ecommerce",
    date: "2026-05-09",
    readMins: 7,
    author: "ELLOR Studio",
    authorRole: "Ecommerce Engineering",
    body: [
      {
        paragraphs: [
          "If you treat checkout as the last step, you optimize everything upstream of it and wonder why conversion won't move. Treat checkout as the product, and the priorities reorder themselves fast.",
        ],
      },
      {
        heading: "Speed is a feature nobody sees",
        paragraphs: [
          "Product-page load time is the most under-diagnosed conversion killer we see. Every image, script, and third-party app has a cost, and on a mid-range phone over 4G those costs compound into seconds. Set a performance budget and make every asset justify its weight against it.",
        ],
      },
      {
        heading: "Ask for less, later",
        paragraphs: [
          "A checkout that demands account creation before it shows a shipping cost is asking people to commit before you've earned it. Default to guest checkout, surface total cost and delivery date early, and cut every field that isn't strictly required to complete the order.",
        ],
      },
      {
        heading: "Trust the numbers",
        paragraphs: [
          "Half of ecommerce optimization is being able to believe your own analytics. Clean, consistent tracking across the funnel is what turns 'it feels slow' into 'shoppers drop off at step three on mobile' — which is the only kind of statement you can actually act on.",
        ],
      },
    ],
  },
  {
    slug: "seo-that-survives",
    title: "SEO that survives the next algorithm update",
    excerpt:
      "Chasing the algorithm is a losing game. The durable version of SEO is a technical foundation and content that genuinely answers the question. Here's the split.",
    category: "SEO",
    date: "2026-04-21",
    readMins: 6,
    author: "ELLOR Studio",
    authorRole: "SEO & Growth",
    body: [
      {
        paragraphs: [
          "Every algorithm update produces a wave of panic and a wave of hot takes. The teams that mostly shrug it off tend to have the same two things in common, and neither of them is a clever trick.",
        ],
      },
      {
        heading: "Fix the foundation first",
        paragraphs: [
          "SEO work that starts with content and skips the technical audit usually plateaus. Crawlability, site speed, structured data, and a sane information architecture are the floor. Content built on a shaky foundation can only climb so far before it stalls.",
        ],
      },
      {
        heading: "Answer the actual question",
        paragraphs: [
          "The durable content strategy isn't built around search volume, it's built around intent — what someone is actually trying to do when they type that query, and whether your page is the best answer to it. Content that genuinely answers the question tends to survive updates, because that's what updates are trying to reward.",
          "Tie the reporting to leads and revenue signals rather than ranking screenshots, and you'll make calmer decisions when the next update lands — because you'll be watching the thing that actually pays.",
        ],
      },
    ],
  },
  {
    slug: "brand-systems-that-dont-fall-apart",
    title: "Brand systems that don't fall apart the first time someone else uses them",
    excerpt:
      "A logo file isn't a brand. The test of a brand system is whether a new hire or a new agency can extend it without calling you. Here's how to build for that.",
    category: "Branding",
    date: "2026-03-30",
    readMins: 5,
    author: "ELLOR Studio",
    authorRole: "Brand & Identity",
    body: [
      {
        paragraphs: [
          "Most brand projects stall on the logo, ship a logo, and call it a brand. Then the first time someone who wasn't in the room has to use it — a new hire, a freelancer, the next agency — it quietly falls apart.",
        ],
      },
      {
        heading: "Start past the logo",
        paragraphs: [
          "A mark without a system tends to come apart the moment someone else touches it. The real work starts with positioning — what you want to be the obvious choice for, and who you're willing to not be for — and only then moves to the mark, type, color, and voice that express it.",
        ],
      },
      {
        heading: "Document for the person who wasn't there",
        paragraphs: [
          "The test of a brand system is extensibility: can someone extend it without calling you? That means a living guidelines document covering usage, spacing, and the 'please don't' cases — enough that consistency doesn't rely on the memory of whoever designed it.",
          "Build it that way and the rebrand still looks finished on day one, and still looks like itself two years and three hires later.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export const POST_CATEGORIES = [
  "All",
  "Design",
  "UX",
  "Ecommerce",
  "SEO",
  "Branding",
];
