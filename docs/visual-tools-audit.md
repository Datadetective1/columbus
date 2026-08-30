# Visual tools audit

Conducted before any visual work, per the brief. Findings are blunt: this environment can
*generate* images but cannot *retrieve or see* them, which decides the entire approach.

---

## 1. What is actually available

| Capability | Tool | Status | Verdict |
| --- | --- | --- | --- |
| AI image generation | `Gamma · generate_image` | ✅ Works — produced a 2752×1536 JPG | ⛔ **Unusable, see §2** |
| AI design/deck generation | `Gamma · generate`, `generate_multi_page_gamma` | Available | ⛔ Wrong output type — makes decks/sites, not web assets |
| Design creation | `Canva · generate-design`, `export-design` | Available | ⛔ Same retrieval problem; exports land on a blocked CDN |
| Browser automation | Playwright + Chromium (`/opt/pw-browsers`) | ✅ Works | ✅ **Used** — renders and screenshots my own artwork so I can see and iterate |
| Raster image processing | Pillow 12.3 (venv) | ✅ Works | ✅ **Used** — generates paper grain, plate texture, halftone |
| Image optimisation | `sharp` (in node_modules) | ✅ Works | ✅ **Used** — AVIF/WebP encoding at responsive widths |
| Vector authoring | Hand-authored SVG | ✅ Works | ✅ **Used** — the backbone of the system |
| Next.js image pipeline | `next/image` | ✅ Works | ✅ **Used** — responsive sizes, lazy loading, AVIF |
| Stock/licensed photography | Unsplash, Pexels, Wikimedia | ⛔ All blocked | ⛔ Unusable |

---

## 2. Why AI raster generation could not be used

I generated a test image successfully. Then:

```
curl https://cdn.gamma.app/.../34Hd8M0tRWTgAp9pKNaap.jpg
curl: (56) CONNECT tunnel failed, response 403
```

Every image host this environment can reach was probed:

```
cdn.gamma.app        -> blocked      images.unsplash.com  -> blocked
images.pexels.com    -> blocked      upload.wikimedia.org -> blocked
commons.wikimedia.org-> blocked      api.unsplash.com     -> blocked
picsum.photos        -> blocked
```

Two consequences, and the second matters more than the first:

1. **I cannot download the file**, so it cannot be committed, optimised, or self-hosted.
   Referencing the Gamma CDN URL directly was rejected: it is an external dependency on a
   third-party account, outside `/public`, and unverifiable.
2. **I cannot see what was generated.** Art direction means looking at the result and
   judging it. Shipping an image I have never seen, into a brief that explicitly warns
   about "cliché AI visuals", would be guessing. The one test generation also consumed 70
   of 400 Gamma credits, leaving ~4 — not enough for a coherent set even if retrieval worked.

**This is a limitation of the sandbox, not a judgement that generated art is wrong here.**
If the site is later built somewhere with open egress, the art-direction document is
written so the prompts can be run and the results dropped into the same slots.

---

## 3. What was used instead

Everything visual on this site is **original work authored here**, which turned out to be
the stronger option for this particular brand:

- **Hand-authored SVG compositions.** Crisp at any size, animatable, a few KB each,
  exactly on-palette, and — unlike a generated raster — I can see and refine every one.
  They also suit "engineering editorialism" better than photography would: the register
  *is* line drawing.
- **Procedurally generated raster texture** (Pillow): paper fibre, plate edge, halftone
  and ink-bleed layers that give the SVG work material weight.
- **Playwright as the art-direction loop**: render → screenshot → look → revise. Every
  asset in this site has been visually reviewed, which is not true of anything I could
  have generated remotely.

No image on this site was scraped, and none depicts a person.

---

## 4. Not used, and why

| Not used | Reason |
| --- | --- |
| Gamma `generate_image` output | Cannot retrieve or view it (§2) |
| Gamma `generate` / multi-page | Produces Gamma-hosted decks and sites, not assets for this codebase |
| Canva design generation | Same retrieval barrier; also brings its own visual identity |
| Stock photography | Every source blocked; licensing unverifiable |
| WebGL / three.js | Rejected on merit, not availability — a heavy dependency for something SVG does better here, and a real accessibility and performance cost |
| Video | No source footage that isn't a person or a stock cliché; motion is achieved in SVG/CSS at a fraction of the weight |
| Photography of Columbus | None approved exists. Slots remain, per `public/images/columbus/README.md` |
