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
    title: "Start your redesign with a content model, not a moodboard",
    excerpt:
      "Most redesigns fall apart in the gap between a pretty moodboard and the real content. Nail the content model first and the design has something solid to sit on.",
    category: "Design",
    date: "2026-06-18",
    readMins: 6,
    author: "ELLOR Studio",
    authorRole: "Strategy & Design",
    body: [
      {
        paragraphs: [
          "A moodboard feels like progress. You can see it, share it, and get the whole room nodding. Trouble is, it makes promises about a site that has no content in it yet. That's where most redesigns quietly go wrong.",
        ],
      },
      {
        heading: "The trouble with designing for lorem ipsum",
        paragraphs: [
          "Design against placeholder text and every layout looks great. Real content is messier. Headlines run three lines instead of one. Some products have five features, some have two. That elegant testimonial slot has to hold a quote nobody has written yet.",
          "By the time the real words show up, the design has already set. Now you're either cramming content into shapes it doesn't fit or rebuilding components you thought were finished. Both eat time you never planned for.",
        ],
      },
      {
        heading: "What a content model actually is",
        paragraphs: [
          "A content model is a plain description of the content your site holds and how the pieces relate. What counts as a 'service.' What fields a 'case study' needs. How an 'article' is put together. It's boring, and that's the point: writing it down forces the real decisions before the pixels make them for you.",
          "Once it exists, design has something honest to push against. Templates get built for content that scales past the five pages you're picturing today, and the handoff to engineering stops being an argument about what the fields even are.",
        ],
      },
      {
        heading: "Where the moodboard fits",
        paragraphs: [
          "None of this means visual direction is optional. It means order matters. Get the content model right, then bring in the moodboard to give that structure a point of view. Work in that order and the pretty version is also the one that holds up once real content lands.",
        ],
      },
    ],
  },
  {
    slug: "the-five-tap-rule",
    title: "The five-tap rule: building flows people can actually finish",
    excerpt:
      "If the thing a user came to do sits more than five taps away, they'll call, email, or bail. One blunt rule that can reshape a whole information architecture.",
    category: "UX",
    date: "2026-05-27",
    readMins: 5,
    author: "ELLOR Studio",
    authorRole: "UX & Research",
    body: [
      {
        paragraphs: [
          "We put a blunt rule on a lot of our product work. Nothing a user actually came to do should sit more than five taps from where they land. It sounds arbitrary. In practice it's one of the fastest ways to catch an information architecture that's quietly letting people down.",
        ],
      },
      {
        heading: "Why five, and why taps",
        paragraphs: [
          "The exact number matters less than picking one. Counting taps makes you honest about the gap between what someone wants and getting it done, a gap that menus, logins, and confirmation screens keep stretching without anyone ever deciding they should.",
          "Taps also carry across devices. A flow that feels fine with a mouse and a big monitor turns into a maze on a phone held one-handed on a weak signal, which is where plenty of your users actually are.",
        ],
      },
      {
        heading: "What it changes",
        paragraphs: [
          "We ran this on a healthcare portal once. The tasks patients cared about most, booking, results, messaging, were all buried four or five levels down behind clinical jargon. Pulling them up front and rewriting the labels cut front-desk calls sharply, because patients could finally handle it themselves.",
          "The rule didn't design the portal. It just made the broken parts impossible to ignore, and honestly that's most of the job.",
        ],
      },
    ],
  },
  {
    slug: "checkout-is-the-product",
    title: "Treat checkout as the product: an ecommerce performance checklist",
    excerpt:
      "Most ecommerce sites don't have a traffic problem, they have a friction problem. Here's a checklist for the parts of checkout that quietly bleed sales.",
    category: "Ecommerce",
    date: "2026-05-09",
    readMins: 7,
    author: "ELLOR Studio",
    authorRole: "Ecommerce Engineering",
    body: [
      {
        paragraphs: [
          "Treat checkout as the last step and you'll tune everything ahead of it while conversion sits still. Treat checkout as the product and your priorities reshuffle in a hurry.",
        ],
      },
      {
        heading: "Speed is a feature nobody sees",
        paragraphs: [
          "Product-page load time is the most overlooked conversion killer we run into. Every image, script, and third-party app has a price, and on a mid-range phone over 4G those prices pile up into whole seconds. Set a speed budget and make every asset earn its place against it.",
        ],
      },
      {
        heading: "Ask for less, later",
        paragraphs: [
          "A checkout that makes people create an account before it will show a shipping cost is asking for commitment you haven't earned yet. Default to guest checkout, show the full cost and delivery date early, and drop every field that isn't strictly needed to place the order.",
        ],
      },
      {
        heading: "Trust the numbers",
        paragraphs: [
          "Half of this work is being able to trust your own analytics. Clean, consistent tracking across the funnel is what turns 'it feels slow' into 'shoppers bail at step three on mobile,' and only the second one gives you something to act on.",
        ],
      },
    ],
  },
  {
    slug: "seo-that-survives",
    title: "The SEO that survives the next algorithm update",
    excerpt:
      "Chasing the algorithm is a game you lose. The SEO that lasts is a solid technical base plus content that actually answers the question. Here's how the two split.",
    category: "SEO",
    date: "2026-04-21",
    readMins: 6,
    author: "ELLOR Studio",
    authorRole: "SEO & Growth",
    body: [
      {
        paragraphs: [
          "Every algorithm update kicks off a wave of panic and a wave of hot takes. The teams that mostly shrug it off tend to share the same two habits, and neither one is a clever trick.",
        ],
      },
      {
        heading: "Fix the foundation first",
        paragraphs: [
          "SEO that starts with content and skips the technical audit tends to plateau. Crawlability, site speed, structured data, and a sane site structure are the floor. Content sitting on a shaky base can only climb so far before it stalls.",
        ],
      },
      {
        heading: "Answer the actual question",
        paragraphs: [
          "The content that lasts isn't built around search volume, it's built around intent: what someone is really trying to do when they type that query, and whether your page is the best answer they'll find. Pages that truly answer the question tend to ride out updates, because rewarding those pages is the whole point of the update.",
          "Tie your reporting to leads and revenue instead of ranking screenshots, and you'll stay calmer when the next update hits, because you'll be watching the number that actually pays the bills.",
        ],
      },
    ],
  },
  {
    slug: "brand-systems-that-dont-fall-apart",
    title: "Brand systems that don't fall apart the first time someone else touches them",
    excerpt:
      "A logo file isn't a brand. The real test is whether a new hire or a new agency can extend the system without calling you. Here's how to build one that passes.",
    category: "Branding",
    date: "2026-03-30",
    readMins: 5,
    author: "ELLOR Studio",
    authorRole: "Brand & Identity",
    body: [
      {
        paragraphs: [
          "Most brand projects get stuck on the logo, ship the logo, and call it a brand. Then someone who wasn't in the room has to use it, a new hire, a freelancer, the next agency, and the whole thing quietly comes apart.",
        ],
      },
      {
        heading: "Start past the logo",
        paragraphs: [
          "A mark with no system behind it falls apart the moment someone else touches it. The real work starts with positioning: what you want to be the obvious pick for, and who you're willing to not be for. Only then do you move to the mark, the type, the color, and the voice that carry it.",
        ],
      },
      {
        heading: "Document for the person who wasn't there",
        paragraphs: [
          "The test of a brand system is whether someone can extend it without calling you. That means a living guidelines doc that covers usage, spacing, and the 'please don't' cases, enough that staying consistent doesn't depend on the memory of whoever designed it.",
          "Build it that way and the rebrand looks finished on day one and still looks like itself two years and three hires later.",
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
