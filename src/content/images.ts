/**
 * Photography slots.
 *
 * The client has supplied one approved headshot of Columbus. Until the file is
 * placed in public/images/columbus/ every slot stays `null` and renders a
 * designed fallback instead of a broken image, so the site is complete either
 * way.
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
    src: null,
    alt: "Columbus Brown II",
    width: 1000,
    height: 1000,
    fallbackLabel: "Portrait",
    shape: "circle",
    guidance:
      "The approved headshot. Square file, subject centred — it is masked to a disc and composed against a cobalt plate on the navy hero. Monochrome suits the dark register; a colour file will also work.",
  },
  about: {
    src: null,
    alt: "Columbus Brown II",
    width: 1000,
    height: 1000,
    fallbackLabel: "Portrait",
    shape: "circle",
    guidance:
      "Same approved headshot, or a second frame if one is available. Square, subject centred, masked to a disc.",
  },
  speaking01: {
    src: null,
    alt: "",
    width: 1600,
    height: 1000,
    fallbackLabel: "Speaking",
    guidance:
      "On stage or front-of-room, mid-gesture. The historical photos are candid and room-level — keep that.",
  },
  speaking02: {
    src: null,
    alt: "",
    width: 1200,
    height: 1500,
    fallbackLabel: "Speaking, close",
    guidance: "Closer frame, 4:5. Audience visible or implied.",
  },
  workshop01: {
    src: null,
    alt: "",
    width: 1600,
    height: 1000,
    fallbackLabel: "Facilitation",
    guidance:
      "Facilitating — at a wall, a board, or seated with a small group. Hands and materials in shot. No stock-photo whiteboard pointing.",
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
