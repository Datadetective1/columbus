# Visual study — why an institutional site feels alive

Companion to `docs/mckinsey-design-study.md`, which covered structure and typography.
This one is about **imagery, rhythm and motion**.

> **Same caveat, stated again.** `mckinsey.com` could not be opened from this environment —
> it is blocked by the egress proxy, along with every other peer site and every image host
> (see `docs/visual-tools-audit.md`). This study is built from recollection of the site,
> search-derived design analyses, and first-principles reasoning about the genre. No
> specific page layout is asserted as fact, and nothing was copied.

---

## 1. What makes a site feel alive rather than composed

### 1.1 The environment changes as you scroll

**Principle.** A page that keeps one ground colour and one module shape reads as a
document. Alive pages move through *environments*: light editorial, then a full-bleed
image, then an immersive dark band, then a dense index. The reader's eye keeps having to
re-orient, which is what makes scrolling feel like travelling rather than paging.

**WAZA.** The homepage now runs ivory → ivory-with-plate → **night** → ivory → **full-bleed
night with a poster running to the viewport edge** → ivory → tonal plate → ivory →
ivory → ivory → **night** → ivory → tonal close. No two adjacent bands share a ground *and*
a module archetype.

### 1.2 Imagery earns its place by carrying an argument

**Principle.** On a serious site, the picture is not decoration beside the text — it is
the part of the argument that is faster to see than to read. A stock photo of a meeting
carries nothing, which is why it reads as filler however well it is shot.

**WAZA.** Every asset argues a proposition. The homepage hero *is* the thesis: four
systems entering separately, one line leaving. The featured keynote's poster is a complete
truss with every joint open and one path leading away — that is "I Built It, & They Didn't
Come" without a word of copy. The Insights index shows six different drawings because
there are six different arguments.

### 1.3 One large visual moment beats six medium ones

**Principle.** Weight comes from scarcity. If everything is a card with a picture on it,
nothing is a feature. The lead gets disproportionate area — often bleeding past the
container — and everything else is deliberately smaller.

**WAZA.** The featured idea is a full-bleed dark band where the poster runs to the left
edge of the viewport at nearly forty percent of the width. Nothing else on the page is
allowed that treatment.

### 1.4 Asymmetry is what stops a grid looking like a template

**Principle.** Alive pages break their own grid: an image that starts inside the container
and runs off the edge, a headline that overhangs its column, a mosaic where one tile is
three times its neighbours.

**WAZA.** The hero drawing occupies seven of twelve columns and bleeds past the shell's
right margin, so the sheet reads as larger than the page. The editorial mosaic pairs one
16:9 plate with five ruled rows carrying 64px marks — deliberately unequal.

### 1.5 Motion signals liveness only when it is doing something

**Principle.** Ambient motion that communicates nothing is noise, and scroll-jacking is
hostile. The motion that reads as *quality* is motion that reveals structure: a line
drawing itself, a diagram resolving, a slow scale on an image under the cursor.

**WAZA.** The hero assembles itself — four paths draw in sequence, the join appears, then
the detail callout. It runs once, in CSS, in about two and a half seconds, and it is never
load-bearing: with scripts blocked or reduced motion requested the figure is simply
already drawn. Hover gives one gesture and only one: a 3.5% scale over 1.1s on artwork.

### 1.6 Interaction that teaches something

**Principle.** The most convincing interactive moments are not sliders and carousels but
diagrams that respond — where moving between options shows you a *relationship* you could
not see in a list.

**WAZA.** The advisory page draws the organisation once as six connected subsystems.
Hovering or keyboard-focusing a capability lights the part of the system it works on and
dims the rest. It makes the practice's actual argument — these are not five services, they
are five distances from one system — in a way five cards never could. Implemented in pure
CSS with `:has()`, so it works from the keyboard, before hydration, and with JavaScript
off entirely.

### 1.7 Colour comes from artwork, not from the interface

**Principle.** Institutional sites keep the chrome nearly monochrome and let the imagery
carry the colour. Reversing that — tinted panels, coloured buttons, gradient headers — is
the fastest way to look like a template.

**WAZA.** Interface stays warm ivory, charcoal and one oxblood. Within the artwork,
oxblood is reserved for the point of meaning: the join, the one connected joint, the
founding intent. Under about five percent of any image is red.

### 1.8 Density and imagery are not in tension

**Principle.** The instinct that "more visual" means "less content" is wrong. Editorial
sites run high image density *and* high information density; what they never do is leave a
viewport containing only paragraphs.

**WAZA.** The homepage kept its ~2,100 words and ~115 links and gained a visual moment
roughly every 700–900px of scroll.

---

## 2. What was deliberately not borrowed

- **Photography-led heroes.** Not available, and imitating the shape with abstract stock
  would be worse than the drawing.
- **The card grid with a photo, a category and a chevron.** Universal, and it is exactly
  what makes a site look bought rather than made.
- **Their nomenclature and their signature devices.** Covered in the structural study.
- **Video.** No footage exists that isn't a person or a cliché, and motion is achieved in
  SVG at a fraction of the weight.
- **Carousels, parallax, scroll-jacking, counters.** All rejected outright.

---

## 3. The visual moments now on the homepage

| # | Moment | Type |
| --- | --- | --- |
| 1 | Hero — four systems converging, self-drawing, bleeding off the right edge | Animated SVG environment |
| 2 | Lead perspective plate, 16:9 | Composed SVG artwork |
| 3 | Five note marks on the secondary rows | SVG marks |
| 4 | "Change is a systems problem" — immersive night band with a six-part rail | Environment change |
| 5 | Featured keynote — full-bleed poster on night, running to the viewport edge | Poster artwork |
| 6 | Career arc — five drawings, one per system scale | Diagram set |
| 7 | Three keynote posters | Poster artwork |
| 8 | WAZA duality — rigour and imagination in one frame, on night | Composed SVG |
| 9 | Six note marks in the working-notes register | SVG marks |

Plus, on inner pages: the advisory system map (interactive), poster artwork on every
keynote entry, the system evolution and duality figures on About, and a six-tile
image-backed editorial grid on Insights.
