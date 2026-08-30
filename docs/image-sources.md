# Image sources and licensing

## Summary

**Every visual asset on this site was authored inside this project.** Nothing was
downloaded, scraped, purchased or licensed, because every external image source is blocked
by this environment's network policy (see `docs/visual-tools-audit.md` §2).

That makes the licensing position simple: there is no third-party imagery to clear.

---

## Inventory

| Asset | Origin | Format | Licence | Production-safe |
| --- | --- | --- | --- | --- |
| All SVG compositions in `src/components/art/` | Hand-authored in this repo | Inline SVG | Original work | ✅ Yes |
| Paper, plate and halftone textures in `public/images/textures/` | Generated procedurally with Pillow (script in `scripts/`) | AVIF + WebP | Original work | ✅ Yes |
| Keynote poster artwork | Hand-authored SVG | Inline SVG | Original work | ✅ Yes |
| Insight thumbnails | Hand-authored SVG | Inline SVG | Original work | ✅ Yes |
| WAZA mark | Original reinterpretation of the historical WAZA logo described in the 2018 speaker one-sheet | Inline SVG | Original work, derived from the client's own mark | ⚠️ Columbus should confirm he is happy with the reinterpretation |

## Not used

- No stock photography (Unsplash, Pexels, Getty, Adobe Stock — none reachable, none used).
- No Wikimedia or public-domain imagery.
- No AI-generated raster art. One test image was generated via Gamma to evaluate the tool;
  it could not be retrieved and **is not in this repository or on the site**.
- No photograph of Columbus Brown, and no generated likeness of him. There is no image of
  any person anywhere on this site.

## If external imagery is ever added

Record here, before it ships: source, creator, URL, licence, and whether the licence
covers commercial use on a live site. If licensing is unclear, it does not go into
production.
