import Link from "next/link";
import { Band, BandHead, CtaButton, Kicker, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import {
  AffiliationStrip,
  FinalCta,
  PageHero,
  Portrait,
  StatBlock,
  TalkCard,
  TrustStrip,
} from "@/components/sections";
import { CAPABILITY_MARKS } from "@/components/art/icons";
import { aboutPreview, heroCopy, method } from "@/content/bio";
import { capabilities } from "@/content/capabilities";
import { impact } from "@/content/proof";
import { primaryCta, speakingCta } from "@/content/site";
import { engagements, talks } from "@/content/speaking";
import { additionalSessions, workshops } from "@/content/workshops";

/**
 * Home.
 *
 * Eight bands, in the order the brief set: position, proof, what he does, the
 * ideas, the numbers, the speaking, the person, the ask. The copy is
 * deliberately thin — every band here is a door into a page that carries the
 * detail, and the home page's job is to make someone want to open one.
 */

/**
 * The three cards. Two map straight onto a capability; the third groups the
 * architecture work under the name the brief asked for, and links to the
 * capability page that carries it. Micro-outcomes are pulled from each
 * capability's own `clarifies` and `aims`, trimmed to four.
 */
const HELPS = [
  {
    slug: "strategy-execution",
    title: "Strategy & Execution",
    descriptor: "Turning direction into decisions, priorities and work that is actually happening.",
    outcomes: [
      "Clarify direction",
      "Make trade-offs explicit",
      "Rebuild the decision path",
      "Translate strategy into execution",
    ],
  },
  {
    slug: "transformation-adoption",
    title: "Transformation & Adoption",
    descriptor: "Getting change past the pilot and into how the organisation actually works.",
    outcomes: [
      "Diagnose honestly",
      "Design for the adopter",
      "Improve adoption",
      "Connect the portfolio",
    ],
  },
  {
    slug: "business-architecture",
    title: "Business & Technology Architecture",
    descriptor: "Making the shape of the organisation visible enough to argue about honestly.",
    outcomes: [
      "Map what is, not what was designed",
      "Resolve ownership",
      "Reduce friction across business and technology",
      "Build practical operating approaches",
    ],
  },
] as const;

/** The signature ideas. Three are keynotes; the first is the method itself. */
const IDEAS = [
  {
    label: "The method",
    title: "Discover. Unstick. Navigate.",
    body: "Find out where you actually are, work out what is holding, then move toward direction. It is the shape of every engagement.",
    href: "/advisory#engagement",
  },
  {
    label: "K-02",
    title: "Make IT Easy Now",
    body: "The gap between technology and the business is a relationship problem that has been formalised into process.",
    href: "/speaking#make-it-easy-now",
  },
  {
    label: "K-03",
    title: "I Built It, & They Didn’t Come",
    body: "Capable systems, delivered on time, quietly unused. The causes are knowable — including the uncomfortable ones.",
    href: "/speaking#i-built-it-and-they-didnt-come",
  },
  {
    label: "K-01",
    title: "Power of a Name",
    body: "Organisations carry their history in what they call things. Stalled transformations are often serving a purpose nobody has questioned in a decade.",
    href: "/speaking#power-of-a-name",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------- 1 · Hero */}
      <PageHero
        kicker={heroCopy.eyebrow}
        heading={heroCopy.headline}
        standfirst={heroCopy.standfirst}
        aside={<Portrait priority />}
        actions={
          <>
            <CtaButton href={primaryCta.href} variant="night">
              {primaryCta.label}
            </CtaButton>
            <CtaButton href={speakingCta.href} variant="outlineNight">
              {speakingCta.label}
            </CtaButton>
          </>
        }
      />

      {/* The method, carried on the seam between the hero and the proof strip. */}
      <Band ground="night2" rhythm="flush">
        <div className="shell border-t border-night-rule py-6">
          <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-3">
            {method.map((m) => (
              <li key={m.word} className="flex items-baseline gap-2.5">
                <span className="font-display text-[1.25rem] text-night-ink">{m.word}</span>
                <span className="t-tiny text-night-muted">{m.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ------------------------------------------- 2 · Trust strip */}
      <TrustStrip />

      {/* ------------------------------ 3 · What Columbus helps with */}
      <Band ground="paper" rhythm="normal" id="help">
        <div className="shell">
          <Reveal>
            <BandHead
              n="01"
              label="Advisory"
              heading="What Columbus helps with"
              standfirst="Three kinds of problem, one underlying question: what is actually stopping this from moving?"
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
            {HELPS.map((card, i) => {
              const Mark = CAPABILITY_MARKS[card.slug];
              return (
                <li key={card.slug} className="h-full">
                  <article
                    className="card card-link card-edge reveal h-full p-6 md:p-7"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <span className="text-accent">
                      <Mark />
                    </span>
                    <h3 className="t-h4 mt-6 text-ink">
                      <Link href={`/advisory/${card.slug}`} className="card-hit link-underline">
                        {card.title}
                      </Link>
                    </h3>
                    <p className="t-small mt-3 text-muted">{card.descriptor}</p>
                    <ul className="register mt-auto pt-6">
                      {card.outcomes.map((o) => (
                        <li key={o} className="py-2 text-[0.875rem] text-ink">
                          {o}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </Reveal>

          <div className="mt-10">
            <TextLink href="/advisory">All five capabilities</TextLink>
          </div>
        </div>
      </Band>

      {/* ---------------------------------------- 4 · Signature ideas */}
      <Band ground="night2" rhythm="normal" className="aura">
        <div className="shell">
          <Reveal>
            <BandHead
              n="02"
              label="Signature ideas"
              heading="The work has a point of view."
              standfirst="Four ideas he keeps coming back to, on stage and in the room."
              night
            />
          </Reveal>

          <Reveal
            as="ul"
            className="mt-12 grid gap-px border border-night-rule bg-night-rule md:mt-16 md:grid-cols-2"
          >
            {IDEAS.map((idea, i) => (
              <li key={idea.title} className="bg-night-2">
                <Link
                  href={idea.href}
                  className="reveal group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-night-3 md:p-9"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="t-label-sm text-night-accent">{idea.label}</span>
                  <h3 className="t-h3 mt-4 text-night-ink">{idea.title}</h3>
                  <p className="t-small measure-sm mt-4 text-night-muted">{idea.body}</p>
                  <span className="t-label-sm mt-auto pt-8 text-night-muted transition-colors group-hover:text-night-accent">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </Reveal>

          <p className="mt-10">
            <TextLink href="/insights" night>
              Working notes and the lexicon
            </TextLink>
          </p>
        </div>
      </Band>

      {/* ---------------------------------------- 5 · Selected impact */}
      <Band ground="night" rhythm="normal" className="field-rule">
        <div className="shell">
          <Reveal>
            <BandHead
              n="03"
              label="Selected impact"
              heading="Work that moved a number."
              standfirst="A selection from engineering, consulting and enterprise transformation. Figures are Columbus’s across his career, not WAZA engagements."
              night
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-x-8 gap-y-10 md:mt-16 md:grid-cols-3">
            {impact.map((point, i) => (
              <StatBlock key={point.figure + point.label} point={point} index={i} />
            ))}
          </Reveal>

          <div className="mt-14 border-t border-night-rule pt-8">
            <AffiliationStrip night />
          </div>
        </div>
      </Band>

      {/* -------------------------------------- 6 · Speaking & workshops */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <Reveal>
            <BandHead
              n="04"
              label="Speaking & workshops"
              heading="Keynotes and working sessions"
              standfirst="Three keynotes and a catalogue of sessions, all of them built to be used the following Monday."
            />
          </Reveal>

          <Reveal as="ul" className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
            {talks.map((talk, i) => (
              <li key={talk.slug} className="h-full">
                <TalkCard talk={talk} index={i} compact />
              </li>
            ))}
          </Reveal>

          <div className="egrid mt-14 gap-y-10">
            <div className="col-span-6 md:col-span-7">
              <h3 className="t-label text-accent">Workshops & sessions</h3>
              <ul className="register mt-4">
                {workshops.map((w) => (
                  <li key={w.slug}>
                    <Link
                      href={`/workshops#${w.slug}`}
                      className="row-link group flex items-baseline justify-between gap-4 py-3"
                    >
                      <span className="text-[0.9375rem] text-ink transition-colors group-hover:text-accent">
                        {w.title}
                      </span>
                      <span className="meta shrink-0">{w.ref}</span>
                    </Link>
                  </li>
                ))}
                {additionalSessions.map((title) => (
                  <li key={title}>
                    <span className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-[0.9375rem] text-muted">{title}</span>
                      <span className="meta shrink-0">—</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-4 md:col-start-9">
              <h3 className="t-label text-accent">Selected engagements</h3>
              <ul className="mt-4 space-y-3">
                {engagements.map((e) => (
                  <li key={e.organization} className="rule-hair pt-3">
                    <p className="text-[0.875rem] leading-snug text-ink">{e.organization}</p>
                    <p className="meta mt-1">{e.years}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <TextLink href="/speaking">Speaking in full</TextLink>
              </p>
            </div>
          </div>
        </div>
      </Band>

      {/* ------------------------------------------- 7 · About preview */}
      <Band ground="paper2" rhythm="normal" rule className="aura-light">
        <div className="shell">
          <div className="egrid items-center gap-y-12">
            <div className="col-span-6 md:col-span-4">
              <Portrait slot="about" />
            </div>

            <div className="col-span-6 md:col-span-7 md:col-start-6">
              <Kicker>About Columbus</Kicker>
              <h2 className="t-h1 mt-5 text-ink">{aboutPreview.heading}</h2>
              <p className="t-lede measure mt-6 text-muted">{aboutPreview.body}</p>

              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {capabilities.slice(0, 3).map((c) => (
                  <li key={c.slug} className="t-label-sm text-faint">
                    {c.title}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <TextLink href="/about">The longer story</TextLink>
              </div>
            </div>
          </div>
        </div>
      </Band>

      {/* ----------------------------------------------- 8 · Final CTA */}
      <FinalCta />
    </>
  );
}
