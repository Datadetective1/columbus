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
  site.ts          brand name, legal name, canonical URL, nav, contact config
  bio.ts           hero copy, career arc, About narrative, leadership principles
  services.ts      advisory areas, engagement model, the three homepage pathways
  speaking.ts      keynotes (verbatim), speaker intro, previous engagements
  workshops.ts     the six workshop sessions (titles verbatim)
  experience.ts    career domains, employer-name switch
  credentials.ts   education and certifications, each with a `verified` flag
  testimonials.ts  the two documented quotes, with a master on/off switch
  insights.ts      the content engine — currently, honestly, empty
  images.ts        photography slots
  social.ts        external profile links
  waza.ts          the WAZA definition and brand story
```

### Things that are switches, not rewrites

| To do this | Change this |
| --- | --- |
| Remove both testimonials | `testimonials.ts` → `enabled = false` |
| Publish a hidden credential | `credentials.ts` → `verified: true` |
| Show former employer names | `experience.ts` → `showEmployerNames = true` |
| Change the legal entity name | `site.ts` → `legalName` |
| Remove a social link | `social.ts` → `enabled: false` |
| Add a photograph | `images.ts` → set `src` (see the photography README) |
| Publish the first article | `insights.ts` → add one object to `insights` |

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

## Design notes

- **One committed light palette**: warm ivory ground, warm near-black ink, a single
  deep rust accent taken from the historical WAZA mark (an angular black-and-red
  "W"). Dark bands invert the same palette rather than introducing a second one.
  There is no dark mode; `color-scheme: light` is set explicitly.
- **Type**: Fraunces for display, Inter for text, IBM Plex Mono for labels. The
  monospaced labels are the engineering-drawing voice, and they are what stop the
  site reading as a generic consulting template.
- **The motif** (`src/components/systems-figure.tsx`) is three isometric planes
  pierced by the same vertical axes — human, business and technical systems as one
  shape at three levels. It carries the argument of the site, which is why it can
  stand in for photography rather than just decorating.
- **Motion** is CSS-only and driven by one small `IntersectionObserver`
  (`src/components/reveal.tsx`). No animation library. Everything collapses under
  `prefers-reduced-motion`.
- Tokens live at the top of `src/app/globals.css`.

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
