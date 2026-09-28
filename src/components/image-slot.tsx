import Image from "next/image";
import { images, type ImageKey } from "@/content/images";

/**
 * A photograph.
 *
 * Every slot now holds a real image, so the elaborate designed placeholder the
 * old build carried is gone. What remains is a plain warm panel for the case
 * where a file is removed — enough that the layout does not collapse, and
 * obvious enough that nobody ships it by accident.
 */
export function ImageSlot({
  slot,
  className = "",
  priority = false,
  sizes,
}: {
  slot: ImageKey;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  const config = images[slot];
  const round = "shape" in config && config.shape === "circle" ? "rounded-full" : "";

  if (!config.src) {
    return (
      <div
        className={`photo ${round} bg-paper-3 ${className}`}
        style={{ aspectRatio: `${config.width} / ${config.height}` }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`photo ${round} ${className}`}
      style={{ aspectRatio: `${config.width} / ${config.height}` }}
    >
      <Image
        src={config.src}
        alt={config.alt}
        width={config.width}
        height={config.height}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
