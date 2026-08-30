# Design study — what makes an advisory site read as an institution

**Reference brief:** study `mckinsey.com`, extract the principles, translate them into
something original for WAZA. Do not clone it.

---

## 0. An important caveat about method

**`mckinsey.com` could not be opened from this environment.** Nor could bcg.com,
bain.com, hbr.org, ft.com, economist.com, deloitte.com, accenture.com, kearney.com or
oliverwyman.com — every one is blocked by the network egress proxy this session runs
behind. Web *search* works; direct page fetches do not.

So this study is built from three things, and it is worth knowing which is which:

1. **Recollection** of these sites' structure and typographic behaviour, which is
   substantial but is memory, not inspection.
2. **Search-derived descriptions** — third-party design analyses of McKinsey's homepage
   and identity. These corroborate the broad picture (a publication-first homepage; a
   serif display face against a neutral grotesque; a deep navy identity; the claim that
   the large majority of homepage links point at articles rather than services).
3. **First-principles analysis of the genre** — serious editorial publications, research
   institutes, architecture studios, university presses and annual reports, which solve
   the same problem WAZA has: projecting institutional weight without scale.

Nothing below asserts a specific McKinsey page layout as fact. The principles are what
matters, and they are not proprietary to any one firm.

---

## 1. What actually produces the feeling of institutional authority

Ten principles, each with the original translation used on this site.

### 1.1 The homepage is a front page, not a pitch

**Pattern.** Prime real estate goes to *what the firm is thinking about right now* — a
lead story, then secondary stories, then topics. Services sit lower and quieter. The
implied claim is that hiring the firm is downstream of its ideas.

**Why it works.** A site that opens with services asks to be evaluated as a vendor. A
site that opens with an argument asks to be evaluated as a mind. Only one of those is
hard to fake.

**WAZA translation.** Section 02 of the homepage is *What we're thinking about* — the six
working notes, with the lead note given a full rank-1 treatment and the other five set as
ruled rows. Services do not appear until section 04. Because WAZA has published nothing,
the notes are labelled **In development** rather than dressed as articles. See §3 below —
this constraint became the most original part of the site.

### 1.2 Hierarchy is a kit of signals, not a font size

**Pattern.** A lead item differs from a secondary item in *five or six ways at once*:
column span, presence of an image, headline size, presence of a standfirst, rule weight,
and whether metadata is exposed. Secondary items are not small leads; they are a
different kind of object.

**Why it works.** Uniform cards at different sizes read as a template. Genuinely
different registers read as an editor having made a decision.

**WAZA translation.** Three ranks, used consistently and never improvised between:

| | Span | Headline | Body | Rule | Metadata |
| --- | --- | --- | --- | --- | --- |
| Rank 1 | 6–8 of 12 | `t-h1`/`t-display` | Lede + body + pull quote | 2px | Full stamp |
| Rank 2 | 5 of 12, ruled rows | `1.0625rem` display | One-line note | 1px | Stamp |
| Rank 3 | Register row | `1rem` | None | hairline | Reference + right column only |

### 1.3 Density comes from short measures, not small type

**Pattern.** Calm dense pages run normal-sized type on 45–62 character measures in several
columns. Crowding is perceived from long lines and inconsistent leading, not from quantity.

**Why it works.** A 78-character line at 17px reads as homework. The same words at 56
characters read as considered — and the columns you free up pay for apparatus.

**WAZA translation.** `.measure` (34em), `.measure-sm` (30em) and `.measure-xs` (26em)
utilities, applied deliberately rather than globally. The reclaimed width carries the
margin rail and the metadata spine.

### 1.4 Air belongs between groups, never inside them

**Pattern.** Within a band, content is tight — small gutters, tight leading, rows close
together. The air is at band boundaries and in the margins.

**Why it works.** Whitespace inside a group reads as *not much to say*. Whitespace between
groups reads as structure.

**WAZA translation.** This was the single biggest defect in the first version, and it was
measurable: a uniform `py-20 md:py-28 lg:py-36` on every band meant **288px of nothing
between every pair of sections — roughly 2,300px of the homepage**. Replaced with a
declared rhythm scale (`xtight`/`tight`/`normal`/`loose`/`flush`) chosen per band. Result:
zero gaps over 200px anywhere on the site; the longest empty run is now 150px.

### 1.5 Rules are the material; tinted bands are not

**Pattern.** Institutional print separates content with hairlines, not washes of colour.
A ruled page holds several times the content of a tinted-band page and still reads as
ordered, because each rule creates a compartment the eye trusts. Rules also cost zero
vertical space, where bands force padding on both sides of every boundary.

**WAZA translation.** A closed vocabulary of three weights — 1px hairline (`--color-rule`)
for row separation, 1px mid (`--color-rule-strong`) for group boundaries, 2px ink for
section openings — plus one rust rule reserved for the top of a page. Tinted grounds are
used sparingly and never as the primary separator.

### 1.6 One grid, many occupancies

**Pattern.** A single 12-column grid, with each module deliberately occupying it
differently: 8+3, then 12, then 2+6, then 3+8, then 5+6. The grid is invariant; the
composition is edited.

**Why it works.** Identical occupancy module after module is the visual signature of a
template. Varied occupancy on a rigid grid is the signature of somebody having made a
decision per section.

**WAZA translation.** One `.egrid`, and a rule enforced in review: **no two adjacent bands
may share an occupancy or an archetype.** The first build repeated a 5/6-offset split in
three consecutive sections, which was most of why it read as linear.

### 1.7 Nothing renders untyped or unprovenanced

**Pattern.** Every item carries two or three neutral descriptors — type, date, status,
length — before any evaluative language. `Working paper · 34pp · 2019` does more for
credibility than `groundbreaking analysis`.

**Why it works.** Metadata is a truth claim in miniature. Three checkable facts read as an
organisation that catalogues its output; one adjective reads as one that markets it.

**WAZA translation.** A `<Stamp>` component renders a mono metadata line under every
keynote, workshop, capability and note. And — the part that is genuinely WAZA's own —
**provenance is a visible design feature**: documented claims carry a superscript
reference resolving to a *Notes & sources* apparatus at the foot of every page. See §3.

### 1.8 Deep navigation is printed, not hidden behind hover

**Pattern.** A large expertise surface is made navigable by enumerating it: a proper menu,
a contents plate at the top of each section page, and a footer that is a full sitemap.

**Why it works.** Navigation chrome is read as an inventory. A footer naming twenty
holdings reads as an organisation with twenty holdings.

**WAZA translation.** Three mechanisms, deliberately redundant: a **click-and-keyboard**
disclosure menu (never hover — hover fails on touch and for keyboard users), a **contents
plate** at the head of About, Speaking and Workshops, and a **four-column footer sitemap**
naming all five capabilities, all three keynotes and all six workshops by their real
titles and reference numbers. Everything in the menu is also in the footer, so nothing is
reachable only through JavaScript.

### 1.9 Restraint is a signal

**Pattern.** No gradients, minimal shadows, few rounded corners, a tight palette, no
motion spectacle. The confidence is in what is left out.

**WAZA translation.** Radius capped at 2px and used only on buttons. No shadows. No
gradients. One accent colour. Motion is CSS-only, driven by a single `IntersectionObserver`
that adds a class, and it is never load-bearing — the reveal styles are scoped to
`html.js`, so with scripts blocked the page simply renders.

### 1.10 One artefact visibly deeper than the rest

**Pattern.** Credible small institutions have one disproportionately thorough thing — a
method note, a long essay, a manifesto. Visitors sample one or two pages and generalise
from the deepest thing they hit.

**WAZA translation.** The About page, built as a sectioned long-form piece with a contents
plate, `§1`–`§5` numbering, a margin rail carrying provenance, a drawn career track, and
his own lexicon set as a glossary. Depth found anywhere is attributed to the whole.

---

## 2. What was deliberately *not* borrowed

Copying the signature devices rather than the structural logic is how a site ends up
reading as an imitation. Explicitly avoided:

- **Deep navy on white with a bright blue accent.** That palette is now MBB shorthand.
  WAZA is warm ivory, warm near-black and one oxblood accent, taken from its own
  historical mark.
- **A high-contrast Didone** (Bower's own register, or Playfair/Canela) to chase
  "editorial". That axis is fashion-magazine. WAZA uses Fraunces — warmer, lower contrast,
  and it holds up at small sizes where a Didone falls apart.
- **Their nomenclature.** No "Featured Insights", no "Our Insights", no "Chart of the
  Week", no "The Quarterly". WAZA has *Working notes*, *The agenda*, *The lexicon*, and
  *Selected engagements*.
- **A full-bleed photographic hero with a white serif headline bottom-left** — the most
  copied consulting hero on the web, and impossible for us anyway.
- **Manufactured publication cadence.** No issue numbers, no volumes, no fabricated dates,
  no quarterly. Reference numbering (`K-01`, `W-01`, `A-01`, `N-01`) is used *only* where
  it encodes something true: the keynote order on the one-sheet, the coordinate-verified
  reading order of the workshop grid, and so on. A numbering scheme is an authority device
  exactly as long as it is honest.
- **A logo wall, client count, or any outcome statistic.** None is documented, so none
  exists on the site.

---

## 3. The move that is WAZA's own

Every principle above is borrowed from the genre. One thing is not, and it came out of the
project's hardest constraint.

WAZA has **no photography, no clients, no published articles and no metrics**. The usual
consulting-site proof devices are all unavailable. What it does have is an unusually
well-documented small archive and a rigorous record of where every claim came from.

So the apparatus of scholarship became the design:

- **Superscript source markers** beside documented claims, resolving to a numbered
  **Notes & sources** block at the foot of every page.
- Four source kinds, stated plainly: `Documented`, `Public source`, `Our framing`,
  `Unconfirmed` — so the reader can see which is which.
- **The agenda instead of an archive.** The Insights section states that nothing has been
  published, then shows the six arguments in development, each traceable to a talk
  Columbus has actually delivered. A publication that shows its editorial pipeline is
  being honest; an empty grid of article-shaped cards is not.
- **The lexicon.** His own phrasing — *"moving from parenting to partnering"*, *"the field
  of dreams marked by the graves of expertly built solutions"* — quoted exactly, glossed,
  and attributed. It is the most distinctive material in the archive and it establishes a
  voice faster than any amount of description about him.
- **The engineering register.** Numbered figures with title blocks (`Figure · Subject ·
  Drawn from`), reference codes, tabular figures, an isometric systems diagram. This is
  not decoration borrowed from technical drawing — Columbus was an aircraft design
  engineer, so it is his own biography used as a design language. Nobody else can use it.

The result is that the site's integrity constraints are not something it works around.
They are the thing that makes it look serious.

---

## 4. Measured outcome

| | Before | After |
| --- | --- | --- |
| Homepage links | 13 | 115 |
| Links per page (min) | 1 | 80 |
| Words per 1000px | 72–171 | 165–248 |
| Rows with no content | 23–48% | 14–21% |
| Longest empty run | 600px | 150px |
| Distinct module archetypes | 4 | 13 |
| Routes | 9 | 24 |
