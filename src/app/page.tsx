import Link from "next/link";
import { Band, BandHead, CtaButton, Kicker, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import {
  FinalCta,
  PageHero,
  Photo,
  PhotoStrip,
  Portrait,
  StatBlock,
} from "@/components/sections";
import { AdvisoryFigure, VentureFigure } from "@/components/art/figures";
import { heroCopy, method } from "@/content/bio";
import { affiliationStrip, impactHome, trustStrip } from "@/content/proof";
import { speakingCta } from "@/content/site";

/**
 * Home.
 *
 * Six moments: who he is, how to work with him, what he has done, what he
 * thinks, who he is as a person, and the ask. Everything else — the capability
 * catalogue, the workshop register, the engagement history — lives on the page
 * that owns it.
 *
 * The rule applied to every paragraph here was: if the headline and the visual
 * already make the point, the paragraph goes. Most of them did.
 */

/** The three ways in. One visual, one sentence, one link. No bullet lists. */
const PATHWAYS = [
  {
    href: "/advisory",
    kicker: "Advisory",
    body: "Clarity on strategy, transformation, business architecture and execution.",
    cta: "Explore advisory",
  },
  {
    href: "/ventures",
    kicker: "Venture partnerships",
    body: "Business design, commercialization and market support for promising ideas and platforms.",
    cta: "Explore partnerships",
  },
  {
    href: "/speaking",
    kicker: "Speaking & workshops",
    body: "Keynotes and working sessions that help teams see problems differently, and move.",
    cta: "Explore speaking",
  },
] as const;

/** Three ideas. Headline and one sentence — the tile does the rest. */
const IDEAS = [
  {
    href: "/advisory#engagement",
    title: "Discover. Unstick. Navigate.",
    body: "Find out where you actually are, work out what is holding, then move.",
  },
  {
    href: "/speaking#make-it-easy-now",
    title: "Make IT Easy Now",
    body: "The gap between technology and the business is a relationship problem that got formalised into process.",
  },
  {
    href: "/speaking#i-built-it-and-they-didnt-come",
    title: "I Built It, & They Didn’t Come",
    body: "Capable systems, delivered on time, quietly unused.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------ 1 · Hero */}
      <PageHero
        kicker={heroCopy.eyebrow}
        heading={heroCopy.headline}
        standfirst={heroCopy.standfirst}
        aside={<Portrait priority />}
        actions={
          <>
            <CtaButton href="/contact?inquiry=advisory" variant="night">
              Work with Columbus
            </CtaButton>
            <CtaButton href={speakingCta.href} variant="outlineNight">
              {speakingCta.label}
            </CtaButton>
          </>
        }
      />

      {/* The seam: the method, and the span of the career. One row, no section. */}
      <Band ground="night2" rhythm="flush">
        <div className="shell border-t border-night-rule py-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
            <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
              {method.map((m) => (
                <li key={m.word} className="flex items-baseline gap-2.5">
                  <span className="font-display text-[1.25rem] text-night-ink">{m.word}</span>
                  <span className="t-tiny text-night-muted">{m.note}</span>
                </li>
              ))}
            </ul>
            <p className="t-tiny text-night-muted">
              <span className="text-night-ink">{trustStrip[0].lead}</span> {trustStrip[0].body}
            </p>
          </div>
        </div>
      </Band>

      {/* ------------------------------- 2 · Ways to work with Columbus */}
      <Band ground="paper" rhythm="normal" id="work">
        <div className="shell">
          <Reveal>
            <BandHead n="01" label="Ways to work" heading="Three ways in." />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
            {PATHWAYS.map((p, i) => (
              <li key={p.href} className="h-full">
                <article
                  className="card card-link reveal h-full overflow-hidden"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <div className="aspect-[4/3] overflow-hidden border-b border-rule bg-paper-2">
                    {i === 0 ? (
                      <span className="flex h-full w-full items-center justify-center p-6 text-ink [--figure-accent:var(--color-accent)]">
                        <AdvisoryFigure className="w-full" />
                      </span>
                    ) : i === 1 ? (
                      <span className="flex h-full w-full items-center justify-center p-6 text-ink [--figure-accent:var(--color-accent)]">
                        <VentureFigure className="w-full" />
                      </span>
                    ) : (
                      <Photo
                        slot="speaking01"
                        sizes="(min-width: 768px) 30vw, 92vw"
                        className="h-full w-full border-0"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="t-h4 text-ink">
                      <Link href={p.href} className="card-hit link-underline">
                        {p.kicker}
                      </Link>
                    </h3>
                    <p className="t-small mt-3 text-muted">{p.body}</p>
                    <span className="t-label-sm mt-auto pt-6 text-accent">{p.cta} →</span>
                  </div>
                </article>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* --------------------------------------------- 3 · Selected impact */}
      <Band ground="night" rhythm="normal" className="field-rule">
        <div className="shell">
          <Reveal>
            <BandHead
              n="02"
              label="Selected career impact"
              heading="Work that moved a number."
              standfirst="Across engineering, consulting and enterprise transformation roles."
              night
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-x-8 gap-y-10 md:mt-16 md:grid-cols-4">
            {impactHome.map((point, i) => (
              <StatBlock key={point.figure + point.label} point={point} index={i} />
            ))}
          </Reveal>

          <ul className="strip mt-14 gap-x-8 gap-y-3 border-t border-night-rule pt-8 sm:gap-x-10">
            {affiliationStrip.map((name) => (
              <li key={name} className="t-label text-night-muted">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* --------------------------------------------- 4 · Signature ideas */}
      <Band ground="paper2" rhythm="normal" className="aura-light">
        <div className="shell">
          <Reveal>
            <BandHead n="03" label="Signature ideas" heading="The work has a point of view." />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
            {IDEAS.map((idea, i) => (
              <li key={idea.title} className="h-full">
                <Link
                  href={idea.href}
                  className="card card-link card-edge reveal group h-full p-7 md:p-8"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <h3 className="t-h3 text-ink transition-colors group-hover:text-accent">
                    {idea.title}
                  </h3>
                  <p className="t-small measure-sm mt-4 text-muted">{idea.body}</p>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* The room, as a strip. Its screen reads “I Built It and They Didn’t Come”. */}
      <PhotoStrip slot="workshop01">
        <div className="egrid items-center gap-y-6">
          <p className="col-span-6 t-h3 text-night-ink md:col-span-7">
            Three keynotes and a catalogue of working sessions.
          </p>
          <div className="col-span-6 md:col-span-4 md:col-start-9 md:justify-self-end">
            <CtaButton href="/speaking" variant="outlineNight">
              Explore Speaking
            </CtaButton>
          </div>
        </div>
      </PhotoStrip>

      {/* --------------------------------------------------- 5 · The person */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="egrid items-center gap-y-12">
            <div className="col-span-6 md:col-span-4">
              <Portrait slot="about" />
            </div>

            <div className="col-span-6 md:col-span-7 md:col-start-6">
              <Kicker>About Columbus</Kicker>
              <h2 className="t-h1 mt-5 text-ink">
                From aircraft design to enterprise transformation.
              </h2>
              <p className="t-lede measure mt-6 text-muted">
                Columbus began in aircraft design and grew into strategy, consulting,
                enterprise architecture, business design and transformation leadership. He
                brings an engineer&rsquo;s discipline to problems that are ultimately about
                people, decisions and execution.
              </p>
              <div className="mt-8">
                <TextLink href="/about">Read Columbus&rsquo;s story</TextLink>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* ----------------------------------------------- 6 · Final CTA */}
      <FinalCta />
    </>
  );
}
