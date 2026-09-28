import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Band, CtaButton, Kicker, TextLink } from "./ui";
import { Reveal } from "./reveal";
import { ImageSlot } from "./image-slot";
import { images, type ImageKey } from "@/content/images";
import { affiliationCaption, affiliationStrip, trustStrip, type ProofPoint } from "@/content/proof";
import { primaryCta, speakingCta } from "@/content/site";
import type { Talk } from "@/content/speaking";

/* --------------------------------------------------------------- Page hero */

/**
 * Every page opens with one of these.
 *
 * It is a dark band, which is what lets the sticky masthead sit transparent
 * over the top of the page and go solid on scroll. `pt` clears the fixed bar.
 */
export function PageHero({
  kicker,
  heading,
  standfirst,
  actions,
  aside,
  wide = false,
}: {
  kicker: string;
  heading: ReactNode;
  standfirst?: ReactNode;
  actions?: ReactNode;
  /** Portrait, diagram or figure for the right-hand columns. */
  aside?: ReactNode;
  /** No aside — lets the text run wider. */
  wide?: boolean;
}) {
  return (
    <Band ground="night" rhythm="flush" className="aura field-rule" data-hero="dark">
      {/* Top padding clears the masthead, which overlays this band. */}
      <div className="shell pb-16 pt-[calc(var(--masthead-h)+3.5rem)] md:pb-24 md:pt-[calc(var(--masthead-h)+5rem)] lg:pb-28 lg:pt-[calc(var(--masthead-h)+6rem)]">
        <div className="egrid items-center gap-y-12">
          <div className={wide ? "col-span-6 md:col-span-9" : "col-span-6 md:col-span-7"}>
            <Kicker tone="night">{kicker}</Kicker>
            <h1 className="t-display mt-5 text-night-ink">{heading}</h1>
            {standfirst ? (
              <div className="t-lede measure mt-6 text-night-muted">{standfirst}</div>
            ) : null}
            {actions ? <div className="mt-9 flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {aside ? (
            <div className="col-span-6 md:col-span-4 md:col-start-9">{aside}</div>
          ) : null}
        </div>
      </div>
    </Band>
  );
}

/** The circular portrait, composed against its offset accent plate. */
export function Portrait({
  slot = "hero",
  priority = false,
}: {
  slot?: "hero" | "about";
  priority?: boolean;
}) {
  return (
    <div className="portrait mx-auto w-[min(20rem,78%)] md:w-full">
      <ImageSlot
        slot={slot}
        priority={priority}
        sizes="(min-width: 768px) 32vw, 78vw"
        className="w-full"
      />
    </div>
  );
}

/**
 * A photograph in a panel.
 *
 * Three of the four supplied photographs are low resolution, so `sizes` is kept
 * honest per usage rather than left at a default that would ask the browser for
 * a variant the file cannot supply.
 */
export function Photo({
  slot,
  className = "",
  sizes,
  priority = false,
}: {
  slot: ImageKey;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <ImageSlot
      slot={slot}
      sizes={sizes}
      priority={priority}
      className={`border border-rule ${className}`}
    />
  );
}

/**
 * A full-bleed photographic strip under a dark scrim.
 *
 * The scrim is doing real work: the panorama is 780px wide and this band is not,
 * so the image is being asked to stretch. Darkened and overlaid it reads as
 * atmosphere, which a soft image can carry, rather than as a photograph, which
 * it cannot.
 */
export function PhotoStrip({
  slot,
  children,
}: {
  slot: ImageKey;
  children?: ReactNode;
}) {
  const config = images[slot];
  if (!config.src) return null;
  return (
    <div className="on-night relative isolate overflow-hidden bg-night">
      <Image
        src={config.src}
        alt={config.alt}
        width={config.width}
        height={config.height}
        /* The file is 780px wide. Asking for 100vw would make next/image
           generate a 1920px upscale — more bytes, no more detail. Capped near
           native; the element is stretched by object-cover, not by the source. */
        sizes="828px"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/70 to-night/85"
      />
      <div className="shell py-12 md:py-16">{children}</div>
    </div>
  );
}

/* --------------------------------------------------------------- Proof */

/** The four-item credibility strip. Short claims, hairline-divided. */
export function TrustStrip() {
  return (
    <Band ground="paper" rhythm="xtight" rule>
      <div className="shell">
        <Reveal as="ul" className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustStrip.map((item, i) => (
            <li
              key={item.lead}
              className="reveal border-t border-rule pt-4 lg:border-t-0 lg:pt-0"
              style={{ "--i": i } as React.CSSProperties}
            >
              <p className="text-[0.9375rem] leading-snug text-ink">
                <span className="font-medium">{item.lead}</span>{" "}
                <span className="text-muted">{item.body}</span>
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </Band>
  );
}

/** Former employers, set as text and captioned so it cannot read as a client list. */
export function AffiliationStrip({ night = false }: { night?: boolean }) {
  return (
    <div>
      <ul className="strip gap-x-8 gap-y-3 sm:gap-x-10">
        {affiliationStrip.map((name) => (
          <li
            key={name}
            className={`t-label ${night ? "text-night-muted" : "text-faint"}`}
          >
            {name}
          </li>
        ))}
      </ul>
      <p className={`t-tiny mt-4 ${night ? "text-night-muted" : "text-faint"}`}>
        {affiliationCaption}
      </p>
    </div>
  );
}

/**
 * A proof point.
 *
 * The figure is display type at reading size rather than poster size — a
 * statistic set enormous reads as marketing, which is the opposite of what a
 * number is supposed to do here.
 */
export function StatBlock({
  point,
  night = true,
  index = 0,
}: {
  point: ProofPoint;
  night?: boolean;
  /** Drives the stagger delay on reveal. */
  index?: number;
}) {
  return (
    <li className="rule-hair reveal pt-5" style={{ "--i": index } as React.CSSProperties}>
      <p className={`stat-fig ${night ? "text-night-ink" : "text-ink"}`}>{point.figure}</p>
      <p className={`mt-3 text-[0.9375rem] leading-snug ${night ? "text-night-ink/85" : "text-ink"}`}>
        {point.label}
      </p>
      {point.note ? (
        <p className={`t-tiny mt-2 ${night ? "text-night-muted" : "text-faint"}`}>{point.note}</p>
      ) : null}
    </li>
  );
}

/* --------------------------------------------------------------- Cards */

/** A keynote, as a card. Used on the home page and the speaking page. */
export function TalkCard({
  talk,
  night = false,
  index = 0,
  compact = false,
}: {
  talk: Talk;
  night?: boolean;
  index?: number;
  /** Title and subtitle only. Used where the card is a door, not the content. */
  compact?: boolean;
}) {
  return (
    <article
      className="card card-link card-edge reveal h-full p-6 md:p-7"
      style={{ "--i": index } as React.CSSProperties}
    >
      <h3 className={`t-h4 mt-4 ${night ? "text-night-ink" : "text-ink"}`}>
        <Link href={`/speaking#${talk.slug}`} className="card-hit link-underline">
          {talk.title}
        </Link>
      </h3>
      <p className={`mt-2 text-[0.9375rem] leading-snug ${night ? "text-night-muted" : "text-muted"}`}>
        {talk.subtitle}
      </p>
      {compact ? null : (
        <p className={`t-small mt-5 ${night ? "text-night-muted" : "text-muted"}`}>
          {talk.overview}
        </p>
      )}
      <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-6">
        {talk.formats.map((f) => (
          <li key={f} className={`t-label-sm ${night ? "text-night-muted" : "text-faint"}`}>
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* --------------------------------------------------------------- Closing */

/**
 * The closing call to action. Identical on every page by design — by the time
 * someone reaches the bottom, the question should always be the same one.
 */
export function FinalCta({
  heading = "Ready to move something forward?",
  body = "Advisory, venture partnerships, keynotes and workshops.",
  showVentures = true,
}: {
  heading?: string;
  body?: string;
  /** The third path, offered quietly rather than as a third button. */
  showVentures?: boolean;
}) {
  return (
    <Band ground="night" rhythm="normal" className="aura">
      <div className="shell">
        <div className="egrid items-end gap-y-8">
          <div className="col-span-6 md:col-span-7">
            <h2 className="t-h1 text-night-ink">{heading}</h2>
            <p className="t-lede mt-4 text-night-muted">{body}</p>
          </div>
          <div className="col-span-6 md:col-span-5 md:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <CtaButton href={primaryCta.href} variant="night">
                {primaryCta.label}
              </CtaButton>
              <CtaButton href={speakingCta.href} variant="outlineNight">
                {speakingCta.label}
              </CtaButton>
            </div>
            {showVentures ? (
              <p className="mt-6">
                <TextLink href="/ventures" night>
                  Explore venture partnerships
                </TextLink>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Band>
  );
}
