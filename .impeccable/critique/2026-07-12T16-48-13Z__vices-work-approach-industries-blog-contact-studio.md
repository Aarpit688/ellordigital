---
target: "ellor site (multi-page: home, services, work, approach, industries, blog, contact, studio)"
total_score: 26
p0_count: 0
p1_count: 3
timestamp: 2026-07-12T16-48-13Z
slug: vices-work-approach-industries-blog-contact-studio
---
Method: dual-agent (A: design-review · B: detector+browser-evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Preloader progress bar is cosmetic, not tied to real readiness |
| 2 | Match System / Real World | 3 | Method-stage jargon ("Layer") needs page's own gloss |
| 3 | User Control and Freedom | 2 | Preloader has no skip, replays every full load |
| 4 | Consistency and Standards | 4 | PageHero/CtaBanner/Reveal rhythm applied with total discipline |
| 5 | Error Prevention | 3 | No inline real-time validation, no draft-save on 7-field contact form |
| 6 | Recognition Rather Than Recall | 2 | Services flyout is hover-only, dead on click, invisible to keyboard |
| 7 | Flexibility and Efficiency | 2 | No shortcuts/bulk actions (expected for brand register) |
| 8 | Aesthetic and Minimalist Design | 2 | 4 animated-gradient devices + cursor-glow + marquee before any content read |
| 9 | Error Recovery | 3 | Raw `err.message` surfaced verbatim in ContactForm/LeadModal |
| 10 | Help and Documentation | 2 | Per-service FAQ accordions help; no sitewide search/help |
| **Total** | | **26/40** | **Acceptable — significant improvements needed before this reads as a confident, non-templated brand** |

## Anti-Patterns Verdict

**FAIL — would be identified as AI-made within seconds.** Confirmed convergently by LLM design review, deterministic detector, and an independent technical audit agent — three independent methods landed on the same top violation.

**LLM assessment**: Site's own copy says "We don't decorate. We focus" (Intro.tsx:48), yet decorates constantly with exactly the patterns SKILL.md bans:
- **Gradient text** (absolute ban): 4 CSS classes (`.gradient-text`, `.method-letter`, `.section-title-gradient`, `.hero-accent`, globals.css:72-186), used in 7+ places incl. the homepage H1 accent word, "Selected work" heading, ELLOR-method letters (×3), 404 page number, OG image generator.
- **Fonts**: Space Grotesk + Inter + IBM Plex Mono — all 3 on brand.md's reflex-reject list. Most common AI-default font stack.
- **Eyebrow kicker on every section** (absolute ban): 14 occurrences across 12 files, on 100% of page heroes.
- **Hero-metric template** (absolute ban): Stats.tsx and CaseStudyView.tsx — icon chip + big number + mono label, repeated.
- **Ghost-card pattern** (Codex-tell): CookieBar.tsx (border+40px blur), LeadModal.tsx (border+80px blur+backdrop-blur).
- **Hero display type**: clamps to 150px, breaching the 96px ceiling.

**Deterministic scan** (`detect.mjs --json app components`, exit 2): 3 findings / 2 rules — `gradient-text` ×2 (globals.css:81, :107 — did not catch `.method-letter` at :92, selective not exhaustive), `broken-image` ×1 (Media.tsx:11 — likely false positive, component has a defensive load-guard per its own inline comments).

**Visual overlays**: unavailable this run. Browser injection never reached mutation preflight — chrome-devtools-mcp profile lock conflict with the concurrent Assessment A session (both agents needed a browser tab at once; harness runs a single non-isolated profile). Live-server started/stopped cleanly regardless. No user-visible overlay this run; findings above rest on LLM source review + deterministic CLI scan only.

## What's Working

1. Real, sustained brand metaphor: "clarity/lens/focus" runs through Hero, Intro, and even the 404 copy — actual voice, not filler.
2. Anxiety-reduction in the lead flow: "Not sure yet" budget option, repeated one-business-day reply promise, "no deck, no pressure" framing — deliberate reassurance at a genuinely high-stakes moment.
3. Preloader's exit transition measures its own logomark's bounding box at runtime and FLIPs into the navbar logo position — real technical craft, not a library default (though its UX cost is flagged below).

## Priority Issues

**[P1] Gradient text is the default emphasis technique, not an accent** — Why: explicitly, absolutely banned, and on the single most-viewed element (homepage H1). For a studio pitching "we don't decorate," this is the fastest way to read as templated. Fix: replace with solid color + weight/size emphasis. → `$impeccable quieter`

**[P1] Services flyout is dead on click and invisible to keyboard focus** — Why: hover-only `group-hover`, trigger button has no `onClick`/`aria-expanded`; keyboard and touch-hybrid users lose the primary path to 8 of 9 service pages. Confirmed independently by the audit agent. Fix: real disclosure widget, toggle on click/Enter, `focus-within` fallback. → `$impeccable harden`

**[P1] Body content gated behind opacity:0, JS-only reveal, default-invisible** — Why: `.reveal{opacity:0}` (globals.css:113) + the `Reveal.tsx` wrapper gate nearly every section site-wide. This is the exact banned pattern: "don't gate content visibility on a class-triggered transition... the reveal never fires and the section ships blank." If JS is slow/blocked, most visible copy stays invisible. Fix: ship content visible by default, reveal enhances rather than gates. → `$impeccable harden`

**[P2] Entire typographic identity is 3-for-3 on the reflex-reject list** — Fix: run brand.md's font-selection procedure. → `$impeccable typeset`

**[P2] Eyebrow kicker scaffolds every section on every page** — Fix: pick one deliberate, sparingly-used kicker system, not a prop threaded through every hero/section. → `$impeccable distill`

## Persona Red Flags

**Jordan (Confused First-Timer)**: clicks "Services" in header expecting navigation — nothing happens (bare button, no handler). Clicks "Get a Free Growth Audit" in TopStrip, lands on a generic "Book a Strategy Call" modal that never mentions an audit — trust ding at first contact. Method stage "Layer" is unexplained jargon until she reaches `/approach`.

**Riley (Deliberate Stress Tester)**: refreshes homepage repeatedly, Preloader replays identically every time with no interrupt. On a throttled connection, ProjectCard items and FAQ answers never appear — stuck at `opacity:0` waiting on an IntersectionObserver callback JS delay prevented from firing. Compares 3 CTA labels site-wide (TopStrip/Header/CtaBanner) — all resolve to the identical modal, no differentiation.

**Casey (Distracted Mobile User)**: every full page load forces her through the scroll-locked Preloader again. Footer social icons are well under the 44×44pt touch-target minimum.

## Minor Observations

- `ContactForm.tsx:43`, `LeadModal.tsx:58` surface raw `err.message` to the user rather than a guaranteed plain-language string.
- `FaqAccordion.tsx:37` uses a fixed `maxHeight:240px` — longer answers would clip.
- Icon-chip-in-rounded-square motif repeats near-identically across Studio/Contact/Stats.
- Preloader, CursorGlow, TopStrip, sticky Header all mount together in `Shell.tsx` — four floating/motion chrome elements active before any content is engaged.

## Questions to Consider

- Your own copy says "We don't decorate. We focus" — does an animated four-color gradient on the H1's "growth." embody that claim, or contradict it?
- If every eyebrow, stat card, and process step follows the identical template, what on this site couldn't be regenerated by swapping in a different studio's name?
- The Services flyout is unreachable by keyboard and does nothing on click — for a studio selling UI/UX Design as a service, what does that gap say to a prospect who tests it before hiring you?
