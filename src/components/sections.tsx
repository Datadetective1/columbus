import Link from "next/link";
import type { ReactNode } from "react";
import { Band, CtaButton, TextLink } from "./ui";
import { ImageSlot } from "./image-slot";
import type { ImageKey } from "@/content/images";
import { primaryCta, speakingCta } from "@/content/site";

/* --------------------------------------------------------------- Page hero */

/**
 * Every page opens with one of these.
 *
 * It is a dark band, which is what lets the sticky masthead sit transparent
 * over the top of the page and go solid on scroll. The band pads itself to
 * clear the bar.
 */
export function PageHero({
  label,
  heading,
  standfirst,
  actions,
  aside,
}: {
  label?: string;
  heading: ReactNode;
  standfirst?: ReactNode;
  actions?: ReactNode;
  /** A photograph for the right-hand columns. */
  aside?: ReactNode;
}) {
  return (
    <Band ground="night" rhythm="flush" data-hero="dark">
      <div className="shell pb-16 pt-[calc(var(--masthead-h)+3.5rem)] md:pb-24 md:pt-[calc(var(--masthead-h)+5.5rem)] lg:pb-28 lg:pt-[calc(var(--masthead-h)+6.5rem)]">
        <div className="egrid items-center gap-y-14">
          <div className={aside ? "col-span-6 md:col-span-7" : "col-span-6 md:col-span-9"}>
            {label ? <p className="t-label text-night-accent">{label}</p> : null}
            <h1 className={`t-display text-night-ink ${label ? "mt-5" : ""}`}>{heading}</h1>
            {standfirst ? <div className="t-lede measure mt-6">{standfirst}</div> : null}
            {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {aside ? (
            /* On a phone the image goes first. Stacked the other way it lands
               about a screen and a half down, which wastes the one element
               that humanises the page immediately. */
            <div className="order-first col-span-6 md:order-none md:col-span-4 md:col-start-9">
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </Band>
  );
}

/* -------------------------------------------------------------- Photography */

/**
 * The hero portrait.
 *
 * The supplied headshot is a circular crop on a near-black field, so it is
 * shown as a disc. Squaring it off would mean either showing the black corners
 * or cropping into his head.
 */
export function Portrait({
  slot = "hero",
  priority = false,
  className = "",
}: {
  slot?: ImageKey;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`portrait w-44 sm:w-52 md:w-full ${className}`}>
      <ImageSlot slot={slot} priority={priority} sizes="(min-width: 768px) 34vw, 80vw" />
    </div>
  );
}

/** A photograph in a rectangular frame. */
export function Photo({
  slot,
  sizes,
  className = "",
  priority = false,
}: {
  slot: ImageKey;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return <ImageSlot slot={slot} sizes={sizes} priority={priority} className={className} />;
}

/**
 * A full-bleed photographic strip.
 *
 * The workshop frame is a 3.6:1 panorama of a full room. In a column it reads
 * as a small letterbox; run edge to edge at its own proportion it reads as a
 * room. Nothing is overlaid on it, so the softness of an 780px-wide file is
 * not being asked to carry text.
 */
export function PhotoBand({ slot }: { slot: ImageKey }) {
  return (
    <div className="w-full overflow-hidden">
      <ImageSlot slot={slot} sizes="100vw" className="w-full rounded-none" />
    </div>
  );
}

/* ------------------------------------------------------------------- Cards */

/**
 * One of the three ways to work together.
 *
 * `image` is a photograph where a truthful one exists. Two of the three do;
 * the ventures card takes `tone` instead and is set as a dark typographic
 * panel, because inventing a photograph of a partnership would be a lie and a
 * stock one would be worse.
 */
export function PathwayCard({
  href,
  title,
  body,
  cta,
  image,
  index = 0,
}: {
  href: string;
  title: string;
  body: string;
  cta: string;
  image?: { slot: ImageKey };
  index?: number;
}) {
  return (
    <article
      className="card card-link reveal h-full"
      style={{ "--i": index } as React.CSSProperties}
    >
      <div className="aspect-[5/4] w-full overflow-hidden">
        {image ? (
          <Photo
            slot={image.slot}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
            className="photo-zoom h-full w-full rounded-none"
          />
        ) : (
          <div className="flex h-full w-full items-end bg-night p-7">
            <p className="font-display text-[1.75rem] leading-[1.15] text-night-ink">
              Build it,
              <br />
              don&rsquo;t just
              <br />
              advise on it.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="t-h3 text-ink">
          <Link href={href} className="card-hit">
            {title}
          </Link>
        </h3>
        <p className="t-small mt-3">{body}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.9375rem] font-medium text-accent">
          {cta}
          <svg viewBox="0 0 16 16" className="row-arrow h-3 w-3" fill="none" aria-hidden="true">
            <path
              d="M1 8h13M9 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </article>
  );
}

/**
 * A proof point.
 *
 * The figure is display type at reading size. A statistic set enormous reads
 * as marketing, which is the opposite of what a number is for here.
 */
export function StatCard({
  figure,
  label,
  index = 0,
}: {
  figure: string;
  label: string;
  index?: number;
}) {
  return (
    <li
      className="card reveal h-full p-7 md:p-8"
      style={{ "--i": index } as React.CSSProperties}
    >
      <p className="font-display text-[2.75rem] leading-none tracking-[-0.02em] text-ink md:text-[3.25rem]">
        {figure}
      </p>
      <p className="t-small mt-5">{label}</p>
    </li>
  );
}

/** A signature idea, as an editorial block. */
export function IdeaCard({
  href,
  title,
  body,
  index = 0,
}: {
  href: string;
  title: string;
  body: string;
  index?: number;
}) {
  return (
    <li className="h-full">
      <Link
        href={href}
        className="card card-link reveal group h-full p-7 md:p-9"
        style={{ "--i": index } as React.CSSProperties}
      >
        <h3 className="t-h3 text-ink transition-colors group-hover:text-accent">{title}</h3>
        <p className="t-small measure-sm mt-4">{body}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.875rem] font-medium text-accent">
          Read more
          <svg viewBox="0 0 16 16" className="row-arrow h-3 w-3" fill="none" aria-hidden="true">
            <path
              d="M1 8h13M9 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </li>
  );
}

/* ----------------------------------------------------------------- Closing */

/** The closing call to action. The same question on every page, by design. */
export function FinalCta({
  heading = "Ready to move something forward?",
  body = "Advisory, venture partnerships, keynotes and workshops.",
  showVentures = true,
}: {
  heading?: string;
  body?: string;
  showVentures?: boolean;
}) {
  return (
    <Band ground="night" rhythm="normal">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="t-h1 text-night-ink">{heading}</h2>
          <p className="t-lede mt-5">{body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <CtaButton href={primaryCta.href} variant="night">
              {primaryCta.label}
            </CtaButton>
            <CtaButton href={speakingCta.href} variant="outlineNight">
              {speakingCta.label}
            </CtaButton>
          </div>
          {showVentures ? (
            <p className="mt-8">
              <TextLink href="/ventures" night>
                Explore venture partnerships
              </TextLink>
            </p>
          ) : null}
        </div>
      </div>
    </Band>
  );
}
