# WAZA — Columbus Brown II

A private concept rebuild of the web presence for **WAZA** and **Columbus Brown II**.

> ### ⚠️ Read this first
>
> **Columbus has not seen this site.** It is a surprise project, it is not endorsed
> by him, and it is not connected to anything he owns. His existing Wix site,
> LinkedIn, X account, domains and DNS have not been touched.
>
> The site is `noindex, nofollow` on every page, `robots.txt` disallows everything,
> and no domain is configured. Do not deploy it publicly without his approval.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # typecheck
```

Requires Node 20+.

---

## The five files to read first

| File | What it is |
| --- | --- |
| `docs/mckinsey-design-study.md` | The design principles this site is built on, and what was deliberately not borrowed |
| `docs/research.md` | What was investigated, what was found, what was preserved, modernised and retired |
| `docs/source-notes.md` | Every factual claim on the site, with its source and whether it is safe to publish |
| `docs/columbus-review-checklist.md` | Everything Columbus needs to approve — plus a short checklist for Amary before showing him |
| `src/content/` | All copy, in typed files. Almost nothing needs a layout edit. |
| `public/images/columbus/README.md` | Where his approved photographs go later |

---

## How the content works

Everything editable lives in `src/content/`. Layout code reads from it and should
rarely need touching.

```
src/content/
  site.ts          brand name, legal name, canonical URL, navigation, contact config
  bio.ts           hero copy, career arc, About narrative, leadership principles
  capabilities.ts  the five advisory capabilities, challenges, engagement model
  ventures.ts      what WAZA brings, who it fits, collaboration structures
  proof.ts         the proof-point figures and the employer strip
  speaking.ts      keynotes (verbatim), speaker intro, previous engagements
  workshops.ts     the workshop sessions (titles verbatim)
  experience.ts    selected roles, focus areas, employer-name switch
  credentials.ts   education and certifications, each with a `verified` flag
  testimonials.ts  the two documented quotes, with a master on/off switch
  images.ts        the four approved photographs
  social.ts        external profile links
  waza.ts          the WAZA definition and brand story
```

### Catalogue codes

The content files still carry reference codes (`K-01…K-03`, `W-01…W-06`,
`A-01…A-05`). **They are no longer rendered anywhere.** They were an authority
device borrowed from technical publishing, and on a personal advisory site they
read as a dossier rather than as authority. They stay in the data because the
keynote and workshop orders they encode are real — the keynote order is the
one-sheet's, and the workshop order is the coordinate-verified reading order of
its 3×2 grid — and that is worth not losing.

### Things that are switches, not rewrites

| To do this | Change this |
| --- | --- |
| Remove both testimonials | `testimonials.ts` → `enabled = false` |
| Publish a hidden credential | `credentials.ts` → `verified: true` |
| Show former employer names | `experience.ts` → `showEmployerNames = true` |
| Change the legal entity name | `site.ts` → `legalName` |
| Remove a social link | `social.ts` → `enabled: false` |
| Add a photograph | `images.ts` → set `src` (see the photography README) |
| Replace a photograph | `images.ts` → set `src`, `width`, `height`, `alt` |

---

## Connecting the contact form

The form is **deliberately disabled**. `site.contact.formEndpoint` is `null`, so it
renders a clearly-labelled "not connected" state rather than silently discarding
what someone writes. There is no approved destination inbox yet — that is a
question for Columbus.

To connect it once there is one:

1. Pick a service. Any of these work with the form as written, which POSTs JSON:
   - **[Formspree](https://formspree.io)** — no backend needed. Create a form and
     use the endpoint it gives you.
   - **[Resend](https://resend.com)** or **[Postmark](https://postmarkapp.com)** —
     add a route handler at `src/app/api/contact/route.ts` that sends the mail,
     and point `formEndpoint` at `/api/contact`. Keep the API key in an
     environment variable; never commit it.
2. Set the endpoint in `src/content/site.ts`:
   ```ts
   contact: {
     inboxEmail: "hello@example.com",
     formEndpoint: "https://formspree.io/f/XXXXXXX",
   }
   ```
3. The disabled notice disappears and the form starts working. Test it.
4. **Write a real privacy policy** before it goes live — `src/app/privacy/page.tsx`
   is currently an honest placeholder, and it says so.

No account has been created and no service has been signed up for.

### What is not in this codebase

Columbus's personal phone number and personal email address appear in his 2018
speaker one-sheet. **Neither is anywhere in this repository.** Please keep it that
way unless he asks otherwise.

---

## Going public

Private is the default and it is enforced in three places at once.

```bash
SITE_PUBLIC=true            # allows indexing, emits the sitemap, opens robots.txt
NEXT_PUBLIC_SITE_URL=https://the-real-domain.com
```

With `SITE_PUBLIC` unset or anything other than `"true"`:

- every page emits `noindex, nofollow, nocache` (`src/lib/seo.ts`)
- `robots.txt` disallows `/` (`src/app/robots.ts`)
- `sitemap.xml` returns empty (`src/app/sitemap.ts`)
- schema.org structured data is withheld (`src/app/layout.tsx`)

The development banner ("Private WAZA concept — not for public distribution") is
compiled out of production builds entirely — `src/components/dev-banner.tsx`
returns `null` when `NODE_ENV === "production"`, so the markup is never emitted.

Set `NEXT_PUBLIC_SITE_URL` before launch or canonical URLs will point at the
`waza.example` placeholder.

---

## Routes

```
/                          home — six sections
/advisory                  capabilities, how the work runs, engagement modes
/advisory/[slug]           five capability pages
/ventures                  venture partnerships
/speaking                  keynotes, workshops, engagements
/about                     the story, the route, selected experience
/contact                   a plain HTML form, no JavaScript required
/privacy                   honest placeholder
```

`/insights`, `/insights/[slug]` and `/workshops` were removed in the redesign.
The workshop catalogue moved onto `/speaking`; the six unpublished working notes
and the lexicon were the most academic material on the site and were the point of
the exercise to remove. Their content is recoverable from git history.

## Design notes

- **Photography and type carry the page.** A rule or a border appears only where it
  separates two things that would otherwise touch. The four approved photographs are
  used at or near their native resolution — three of them are small, and
  `src/content/images.ts` records true pixel dimensions so `next/image` never serves
  an upscale.
- **One palette**: warm white through warm sand, navy-leaning ink, deep navy for the
  dark register, one cobalt accent used sparingly. No dark mode; `color-scheme: light`
  is set explicitly.
- **Type**: Fraunces for display, Inter for everything else. There is no third face.
- **Motion** is CSS-only, driven by one small `IntersectionObserver`
  (`src/components/reveal.tsx`). No animation library. Everything collapses under
  `prefers-reduced-motion`.
- Tokens live at the top of `src/app/globals.css`.

### What the redesign removed, and why

The previous build was an editorial system borrowed from management-consulting
publishing: section numerals, a drafting-grid background, hand-drawn conceptual
diagrams, catalogue codes, `Fig.` captions, monospaced technical labels, and a
superscript citation apparatus resolving to *Notes & sources* blocks.

Individually each was defensible. Together they made the site read as a document
about a consultant rather than as a website belonging to a person, which is the
opposite of what it has to do. The guiding rule of the redesign was: **if
something is a design device rather than a trust-building website element, remove
it.** That took the stylesheet from 1,203 lines to under 500, deleted six artwork
files, and removed a whole font.

**Provenance did not disappear, it moved.** Every claim still traces to a source —
now in `docs/source-notes.md` and in comments in the content files, rather than in
superscript markers on the page.

---

## Accessibility

Semantic landmarks, a skip link, visible focus rings that are never removed,
labelled form controls, an accessible mobile menu (`aria-expanded`, Escape to
close, focus restored, scroll locked), one `h1` per page with ordered headings
below it, decorative SVG hidden from assistive tech, and no text baked into
graphics. Motion respects `prefers-reduced-motion` throughout.

---

## What was deliberately not built

No CMS, no accounts, no payments, no newsletter, no chatbot, no analytics, no
scheduling integration, no cookie banner (nothing sets a cookie). The point of the
first version is the brand and the writing.
