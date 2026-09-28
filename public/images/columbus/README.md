# Photography — the approved photographs

**Four photographs, all supplied by the client, all in use.** No image of Columbus was
generated, and nothing was taken from the web.

| File | Size | Where it is used |
| --- | --- | --- |
| `columbus-headshot.jpg` | 960 × 960 | Home hero, home About preview, About page hero |
| `columbus-waza-polo.jpg` | 364 × 470 | Speaking — beside the *Make IT Easy Now* keynote |
| `columbus-speaking-room.jpg` | 477 × 301 | Speaking hero, and the Speaking card on the home page |
| `columbus-workshop-wide.jpg` | 780 × 219 | Home — the full-bleed strip above the About section |

## Resolution

⚠️ **Three of the four are low resolution**, and `src/content/images.ts` records each
file's true pixel dimensions so `next/image` never serves an upscaled, mushy variant. The
layouts are sized to suit:

- The headshot was cropped square to the exact edge of its circular frame, so the disc
  mask lands on the photograph rather than on the black field around it.
- The workshop panorama is 780px wide and carries a band far wider than that, so it is
  used under a dark scrim at 40% opacity. Darkened it reads as atmosphere, which a soft
  image can carry; presented sharp, it could not.

**Higher-resolution originals would visibly improve the site.** Drop them in with the same
filenames, update `width`/`height` in `src/content/images.ts`, and nothing else changes.

## Adding or replacing a photograph

1. Put the file in this folder.
2. In `src/content/images.ts`, set `src`, the true `width`/`height`, and a real `alt`.
3. Set `shape: "circle"` for a square portrait meant to be masked to a disc; leave it off
   for a rectangular frame.

No layout code needs touching.
