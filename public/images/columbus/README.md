# Photography — where Columbus's approved photos go

**Nothing in this folder yet, and that is deliberate.**

We do not have approved photography of Columbus, so the site was designed to look
finished without any. No image of him was generated, and no photo was taken from
the web. Every slot renders a designed placeholder instead of a broken image.

Adding a photograph is a three-line change. No layout code needs touching.

---

## How to add a photo

1. **Put the file in this folder** — `public/images/columbus/`
2. **Open `src/content/images.ts`** and fill in the slot:
   ```ts
   hero: {
     src: "/images/columbus/hero.webp",   // was null
     alt: "Columbus Brown II",            // write a real description
     width: 1200,                          // the file's actual dimensions
     height: 1500,
     ...
   }
   ```
3. **Save.** That's it. The placeholder is replaced, the image is optimised by
   `next/image`, and the dimensions prevent layout shift.

Setting `src` back to `null` returns the slot to its placeholder at any time.

---

## Expected files

| File | Slot | Ratio | Where it appears |
| --- | --- | --- | --- |
| `hero.webp` | `hero` | 4:5 portrait | Reserved for the homepage. Not currently placed — the homepage leads with typography by design. |
| `about.webp` | `about` | 4:3 landscape | About page, beside the introduction |
| `speaking-01.webp` | `speaking01` | 16:10 landscape | Speaking page, full-bleed band |
| `speaking-02.webp` | `speaking02` | 4:5 portrait | Speaking page, beside the introduction |
| `workshop-01.webp` | `workshop01` | 16:10 landscape | Workshops page, beside the introduction |

Filenames are a convention, not a requirement — whatever you set as `src` is what
loads.

### One behaviour worth knowing

The full-bleed slot (`speaking01`) passes `hideWhenEmpty`, so while it is empty it
renders **nothing at all** rather than a 1440×900 placeholder, which would read as
a hole in the page. Set its `src` and the band appears.

---

## What to shoot

Guidance for each slot is in `src/content/images.ts` alongside it. Overall:

- **Warm, natural light.** Not a white-background studio headshot.
- **Candid over posed.** The photographs in his 2018 speaker one-sheet are
  room-level and mid-gesture — he is talking, not presenting himself. That is the
  right register, and it suits the site.
- **Working contexts.** At a wall, at a board, seated with a small group, hands
  and materials in shot.
- **Room to breathe** on one side of the frame, so type can sit beside the image.
- **No stock-photo clichés** — no handshakes, no pointing at whiteboards, no
  boardroom staging.

### Format

- Export **WebP** (or AVIF) at roughly **2× the display size**: portraits around
  1200×1500, landscapes around 1600×1000.
- Keep files under ~300 KB where you can.
- Record the **true pixel dimensions** in `images.ts` — that is what stops the
  page jumping as the image loads.

---

## Please don't

- Don't add a photo Columbus has not approved.
- Don't use an image pulled from LinkedIn, a conference site, or a search result.
- Don't generate a likeness of him. There is none on this site and there should
  not be.

Photography is on the review checklist at `docs/columbus-review-checklist.md`.
