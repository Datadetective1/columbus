/**
 * Photography slots.
 *
 * There is no approved photography of Columbus yet, so every slot is `null` and
 * every one of them renders a designed fallback instead of a broken image.
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
};

export const images = {
  hero: {
    src: null,
    alt: "",
    width: 1200,
    height: 1500,
    fallbackLabel: "Portrait",
    guidance:
      "Portrait, 4:5. Natural light, mid-tone warm background, relaxed and direct. Not a studio headshot on white.",
  },
  about: {
    src: null,
    alt: "",
    width: 1400,
    height: 1050,
    fallbackLabel: "About portrait",
    guidance:
      "Environmental portrait, 4:3. Working context rather than posed. Room to breathe on one side for type.",
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
