/**
 * Photography slots.
 *
 * Four approved photographs, all supplied by the client and all in use.
 *
 * ⚠️ THREE OF THEM ARE LOW RESOLUTION and are used at or near their native size
 * on purpose. `width`/`height` below are the true pixel dimensions of each file,
 * which is what stops `next/image` from serving an upscaled, mushy variant:
 *
 *   columbus-headshot        960 x 960   ok at any size the site uses
 *   columbus-waza-polo       364 x 470   small and medium frames only
 *   columbus-speaking-room   477 x 301   small and medium frames only
 *   columbus-workshop-wide   780 x 219   full-bleed strip, darkened
 *
 * The workshop panorama is the one deliberate stretch: at 780px wide it is
 * softer than a full-bleed band would like, so it is treated as an atmospheric
 * strip under a dark scrim rather than presented as a sharp photograph. If
 * higher-resolution originals turn up, drop them in and nothing else changes.
 *
 * TO ADD A PHOTO (this is the whole process):
 *   1. Put the file in  public/images/columbus/
 *   2. Set `src` below to  "/images/columbus/<filename>"
 *   3. Write a real `alt` description
 * Nothing else needs to change. See public/images/columbus/README.md.
 *
 * Do not point these at images found on the web. They must be photographs
 * Columbus has approved.
 */

export type ImageSlot = {
  /** Path under /public, or null while unapproved. */
  src: string | null;
  alt: string;
  /** Intrinsic dimensions of the file you add — prevents layout shift. */
  width: number;
  height: number;
  /** Shown in the fallback so it is obvious what belongs here. */
  fallbackLabel: string;
  /** Guidance for whoever supplies the photograph. */
  guidance: string;
  /**
   * Circular slots are masked to a disc. The approved headshot is already a
   * monochrome circular crop on a black field, so a disc is the honest frame
   * for it — squaring it off would mean either letterboxing or cropping into
   * his head.
   */
  shape?: "rect" | "circle";
};

export const images = {
  hero: {
    src: "/images/columbus/columbus-headshot.jpg",
    alt: "Columbus Brown II",
    width: 960,
    height: 960,
    fallbackLabel: "Portrait",
    shape: "circle",
    guidance:
      "The approved headshot. Cropped square to the edge of its circular frame so the disc mask lands exactly on the photograph. Monochrome, which suits the dark register.",
  },
  about: {
    src: "/images/columbus/columbus-headshot.jpg",
    alt: "Columbus Brown II",
    width: 960,
    height: 960,
    fallbackLabel: "Portrait",
    shape: "circle",
    guidance:
      "Currently the same headshot. Replace with a second frame when one is available — one portrait doing every job is the compromise, not the intent.",
  },
  speaking01: {
    src: "/images/columbus/columbus-speaking-room.jpg",
    alt: "Columbus Brown speaking at the front of a room, mid-gesture, to a seated audience",
    width: 477,
    height: 301,
    fallbackLabel: "Speaking",
    guidance:
      "Front-of-room, candid, room-level. Low resolution — do not use above about 600px wide.",
  },
  wazaPolo: {
    src: "/images/columbus/columbus-waza-polo.jpg",
    alt: "Columbus Brown outdoors, wearing a WAZA polo shirt reading “Make IT easy NOW!”",
    width: 364,
    height: 470,
    fallbackLabel: "Portrait",
    guidance:
      "The warmest of the four and the only one in colour. It carries the WAZA mark and the Make IT Easy Now line on the shirt, so it belongs beside that keynote or the section about the name. Low resolution.",
  },
  workshop01: {
    src: "/images/columbus/columbus-workshop-wide.jpg",
    alt: "A full conference room seated in front of a screen reading “I Built It and They Didn’t Come”",
    width: 780,
    height: 219,
    fallbackLabel: "Facilitation",
    guidance:
      "A 3.6:1 panorama of a full room. Used as a full-bleed strip under a dark scrim, which is what lets a 780px-wide file carry a band that size.",
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
