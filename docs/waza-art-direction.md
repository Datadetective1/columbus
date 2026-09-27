# WAZA art direction — "Engineering editorialism"

Every visual asset on this site belongs to one universe. If an image could have come
from a different brief, it does not ship.

---

## The idea in one line

**An archival aerospace drawing, printed on good paper, photographed in raking light.**

Columbus was an aircraft design engineer before he was a strategist. The visual language
is not a metaphor borrowed from somewhere — it is his own working register, applied to
organisational problems. Nobody else can use it, which is the point.

---

## The five rules

1. **Drawn, not rendered.** Line takes precedence over surface. Construction lines,
   section marks, tolerance ticks, leader lines, orthographic and isometric projection.
   Never a 3D render, never a glossy product shot.
2. **Paper is a material.** Every image sits on or behaves like warm white stock with
   visible fibre, slight tone variation and printing imperfection. Matte. No gloss, no
   glow, no emissive light.
3. **One accent, used sparingly.** Cobalt appears at intersections, nodes and single
   marks of emphasis — never as a fill, gradient or wash. If more than roughly 5% of an
   image is accent, it is wrong. (The one sanctioned exception is the `aura` atmospheric
   field on dark bands, which is a very large, very low-opacity radial wash sitting
   behind content — it is weather, not a mark.)
4. **Restraint is the subject.** Large areas of quiet. Density concentrated in one region
   of the frame, with the rest given to ground. Compositions are asymmetric.
5. **No people, ever.** Not abstracted figures, not silhouettes, not crowds. The absence
   is deliberate: it keeps every slot open for Columbus's real photography later, and it
   removes any chance of a generated figure being read as him.

---

## Palette

Assets must resolve to the interface palette so artwork and page never fight.

> ### ⚠️ Palette superseded — client direction, this build
>
> This document originally specified warm ivory, warm near-black and an oxblood accent
> drawn from the historical WAZA mark, and **explicitly rejected** "deep navy on white
> with a bright cyan or blue accent" as MBB shorthand that would read as imitation.
>
> The client subsequently directed the opposite, in writing and twice over: *"dark navy
> and deep charcoal sections, off-white / warm neutral content sections, electric blue or
> muted cobalt accent."* That is their call to make, and the site now ships it. The
> argument against is recorded here rather than deleted, because it is the reason the
> build takes care to avoid the *other* MBB tells — no stock photography of meetings, no
> gradient mesh hero, no logo wall, no scrolling client marquee. The palette is
> conventional; what is built on it is not.
>
> The shipped values are below. The rules that follow — drawn not rendered, one accent
> used sparingly, restraint as the subject, no people — are unchanged and still govern.

| Role | Shipped value | Superseded value | Use |
| --- | --- | --- | --- |
| Ground | `#FBFAF8` warm white | `#F8F5EE` warm ivory | Paper, negative space, most of every frame |
| Ground, secondary | `#F3F2EF` soft grey | `#F2EDE3` | Tonal shift between plates |
| Ink | `#0E1626` navy-black | `#16140F` warm near-black | Linework, type, structure |
| Ink, mid | `#4A5468` | `#5F584C` | Secondary line, shadow |
| Accent | `#1B49CF` cobalt | `#8C2B1C` oxblood | Nodes, intersections, single marks |
| Night | `#0A1020` deep navy | `#14120D` | Immersive dark environments |
| Night accent | `#7FA8FF` | `#D9694A` | Emphasis on the dark register |

Every pairing that carries meaning was measured rather than assumed: worst case on the
site is **6.5:1** against a 4.5:1 requirement, including text sitting over the animated
aura gradients, measured by sampling rendered pixels behind each element rather than by
trusting the tokens.

**Contextual colours are allowed** — and wanted — but only as *aged, material* tones:
oxidised copper, aerospace slate blue, blueprint cyanotype, industrial green, raw
aluminium. They must read as pigment or patina, never as digital colour. Saturation
stays low. Energy comes from artwork, not from interface chrome.

---

## Composition

- **Asymmetry.** Never centre the subject. Weight to one third; let the rest breathe.
- **One idea per image.** An asset argues a single proposition. If it needs a caption to
  make sense, it is decoration.
- **Depth by layering, not by blur.** Translucent planes, offset registration, overprint
  — the way a drawing set stacks — rather than depth-of-field.
- **Grain and registration error.** A slight misregistration between ink and accent, a
  faint plate edge, a fibre fleck. Perfection reads as CGI.

---

## Recurring motifs

These recur across assets so the set reads as one system:

- **Three planes, one axis** — the site's core diagram: human, business and technical
  systems as one shape at three levels.
- **The angular W** — two overlapping chevrons from the historical WAZA mark.
- **The intersection node** — a small cobalt dot where lines meet. The whole practice
  is about what happens at joins.
- **Coordinate field** — a faint measured grid, cropped, never complete.
- **Convergence** — separate paths resolving into one direction.

---

## Hard prohibitions

Beyond the brief's list, these are banned because they are the failure modes of this
particular style:

- Blueprint-white-on-blue used literally (dated, and a cliché of "engineering")
- Isometric "tech illustration" with rounded corners and pastel fills
- Anything that reads as a dashboard, chart UI, or fake data visualisation
- Glowing lines, lens flare, bloom, emissive nodes
- Perfect symmetry
- Gears, cogs, circuit boards, brains, robots, holograms, neon networks
- Legible text, numerals or logos generated inside an image — all type is set in HTML

---

## Per-asset intent

Each asset must argue its idea, not illustrate its title.

| Asset | The proposition it argues |
| --- | --- |
| Hero | Separate systems resolving into one coherent structure |
| Complexity → clarity | Density on the left, order on the right, one continuous form |
| I Built It | A complete, well-made structure with nothing connected to it |
| Business × Technology | Two notations meeting and becoming one drawing |
| Strategy → Execution | Many ambiguous paths narrowing to one committed line |
| Adoption | A perfect lattice that only carries load where joins actually formed |
| Engineering mind | Technical drawing dissolving into an organisational network |
| WAZA | Rigid geometry and free gesture occupying the same frame |

---

## Production notes

- Delivered as **AVIF + WebP**, responsive widths, via `next/image`.
- SVG for anything diagrammatic — it stays crisp, animates cheaply, and carries no weight.
- Raster only where material texture is the point.
- Every decorative image is `aria-hidden`; every image that carries an argument gets a
  real `alt`.
