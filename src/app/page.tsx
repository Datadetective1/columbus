import Link from "next/link";
import { DefinitionBlock, Register, Stamp, TitleBlock } from "@/components/modules";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { HeroSystems } from "@/components/art/hero-systems";
import { NoteArt, NoteMark, SystemEvolution, WazaDuality } from "@/components/art/figures";
import { PosterAdoption, POSTERS } from "@/components/art/posters";
import { WorkshopMark } from "@/components/art/marks";
import { Band, BandHead, CtaButton, TextLink } from "@/components/ui";
import { descriptors } from "@/content/bio";
import { capabilities } from "@/content/capabilities";
import { experienceDomains, experienceStatement } from "@/content/experience";
import { lexicon } from "@/content/lexicon";
import { engagements, speakingIntro, talks } from "@/content/speaking";
import { positionStatement, themes } from "@/content/themes";
import { visibleTestimonials } from "@/content/testimonials";
import { waza } from "@/content/waza";
import { workshops } from "@/content/workshops";
import { sourceIndex } from "@/content/sources";

/**
 * The homepage.
 *
 * Band sequence is governed by two rules, both of which the previous build
 * broke: no two adjacent bands share a grid occupancy, and no two adjacent
 * bands share a module archetype. The archetypes used here, in order:
 * lead plate · lead-and-rows · manifesto rail · capability plate · single-idea
 * · triptych · drawn track · register with rail · two-column grid · dated
 * record · definition block · agenda register · closing plate.
 */

const src = sourceIndex([
  "speaker-profile",
  "waza-site",
  "public-profile",
  "editorial",
  "etymology",
]);

export default function HomePage() {
  return (
    <>
      <Lead />
      <Perspectives />
      <PointOfView />
      <HowWeHelp />
      <FeaturedIdea />
      <TheFounder />
      <CareerRecord />
      <Speaking />
      <Workshops />
      <EngagementRecord />
      <WazaStory />
      <WorkingNotes />
      <Closing />
      <SourceNotes notes={src.notes} />
    </>
  );
}

/* ------------------------------------------------------------- 01 · Lead */

function Lead() {
  return (
    <section className="relative overflow-hidden border-t-2 border-accent paper-grain">
      <div className="shell relative pt-12 pb-0 md:pt-20 lg:pt-24 lg:pb-16">
        <div className="egrid items-center">
          <div className="col-span-6 md:col-span-8 lg:col-span-5">
            <Reveal>
              <Stamp
                className="reveal"
                parts={["WAZA", "Founded by Columbus Brown II, MBA, CBA®"]}
              />
              <h1 className="t-display reveal mt-5 text-ink">
                Make complex
                <br />
                change easier.
              </h1>
              <p className="t-lede reveal measure mt-6 text-ink/80">
                Strategy, transformation, leadership and execution for organizations
                working through consequential change.
              </p>
              <div className="reveal mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <CtaButton href="/contact">Work With Columbus</CtaButton>
                <CtaButton href="/insights" variant="outline">
                  Explore His Thinking
                </CtaButton>
              </div>
            </Reveal>
          </div>
          {/* The drawing is the environment, not an illustration beside the
              text: it holds seven of twelve columns and bleeds past the shell's
              right edge so the sheet reads as larger than the page. */}
          <div className="col-span-6 mt-6 lg:col-span-7 lg:mt-0 lg:mr-[calc(var(--gutter)*-1)] xl:mr-[-4vw]">
            <HeroSystems />
          </div>
        </div>
      </div>

      {/* Standing descriptor rail — a masthead line, not a row of pills. */}
      <div className="relative border-y border-rule bg-paper/80 backdrop-blur-[2px]">
        <div className="shell">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {descriptors.map((d, i) => (
              <li
                key={d}
                className={`py-3 md:py-3.5 ${i % 2 === 1 ? "border-l border-rule pl-4" : ""} ${
                  i < 2 ? "border-b border-rule md:border-b-0" : ""
                } ${i === 2 ? "md:border-l md:border-rule md:pl-4" : ""} ${
                  i === 3 ? "md:pl-4" : ""
                }`}
              >
                <span className="t-label text-ink/70">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------- 02 · Current perspective */

function Perspectives() {
  const [lead, ...rest] = themes;

  return (
    <Band rhythm="tight">
      <div className="shell">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-rule pb-3">
          <h2 className="t-label text-accent">What we&rsquo;re thinking about</h2>
          <TextLink href="/insights">All working notes</TextLink>
        </div>

        <Reveal>
          <div className="egrid">
            {/* Rank 1 */}
            <article className="reveal col-span-6 md:col-span-6">
              <Link
                href={`/insights/${lead.id}`}
                aria-hidden="true"
                tabIndex={-1}
                className="art-zoom art-tile group mb-6 block aspect-[16/9] border border-rule"
              >
                <span className="art-inner block h-full w-full">
                  <NoteArt id={lead.id} className="h-full w-full" />
                </span>
              </Link>
              <Stamp parts={["Perspective", lead.n, "In development"]} />
              <h3 className="t-h1 mt-4 text-ink">
                <Link href={`/insights#${lead.id}`} className="link-underline">
                  {lead.title}
                </Link>
              </h3>
              <p className="t-lede measure mt-5">{lead.claim}</p>
              <p className="t-body measure mt-4">{lead.body}</p>
              <blockquote className="mt-6 border-l-2 border-accent pl-5">
                <p className="font-display text-[1.0625rem] leading-snug text-ink">
                  &ldquo;{lead.evidence}&rdquo;
                </p>
                <cite className="meta mt-2 block not-italic">
                  {lead.evidenceFrom}
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </cite>
              </blockquote>
            </article>

            {/* Rank 2 — ruled rows, no figures, metadata only */}
            <div className="col-span-6 md:col-span-5 md:col-start-8">
              <Register className="reveal">
                {rest.map((t) => (
                  <li key={t.id} className="border-b border-rule">
                    <Link
                      href={`/insights/${t.id}`}
                      className="row-link group -mx-3 flex items-start gap-4 px-3 py-4"
                    >
                      <span className="art-tile w-16 shrink-0 border border-rule sm:w-20">
                        <NoteMark id={t.id} className="h-full w-full" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="t-label-sm text-faint">{t.n}</span>
                          <span className="meta">{t.category}</span>
                        </span>
                        <span className="mt-1.5 block font-display text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-accent md:text-[1.1875rem]">
                          {t.title}
                        </span>
                        <span className="t-small mt-1 block">{t.claim}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </Register>
            </div>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* ------------------------------------------------------ 03 · Point of view */

function PointOfView() {
  return (
    <Band ground="night" rhythm="normal">
      <div className="shell">
        <Reveal>
          <p className="t-label reveal text-night-accent">Point of view</p>
          <h2 className="t-display reveal measure mt-6 text-night-ink">
            {positionStatement.headline}
          </h2>

          {/* The six parts as a rail, not six cards. */}
          <ul className="reveal mt-10 grid grid-cols-2 border-t border-night-rule md:grid-cols-6">
            {positionStatement.parts.map((p, i) => (
              <li
                key={p}
                className={`border-b border-night-rule py-4 md:border-b-0 md:py-5 ${
                  i > 0 ? "md:border-l md:border-night-rule md:pl-4" : ""
                } ${i % 2 === 1 ? "border-l border-night-rule pl-4 md:pl-4" : ""}`}
              >
                <span className="t-label-sm block text-night-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-display text-[1.125rem] text-night-ink">
                  {p}
                </span>
              </li>
            ))}
          </ul>

          <div className="egrid mt-10">
            <p className="t-lede reveal col-span-6 md:col-span-7">{positionStatement.body}</p>
            <p className="t-small reveal col-span-6 md:col-span-4 md:col-start-9">
              This is the argument the whole practice rests on. It is also why the advisory
              work, the keynotes and the workshops are not three businesses — they are three
              distances from the same problem.
              <Src n={src.ref("editorial")} id="editorial" />
            </p>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* -------------------------------------------------------- 04 · Capability */

function HowWeHelp() {
  return (
    <Band rhythm="tight" rule>
      <div className="shell">
        <BandHead
          n="A"
          label="How WAZA helps"
          heading="Turning ambition into action."
          standfirst={
            <>
              Five capabilities, each of which begins with a sentence a leader actually says
              out loud.
              <Src n={src.ref("editorial")} id="editorial" />
            </>
          }
        />

        <Reveal className="mt-10">
          <Register className="reveal">
            {capabilities.map((c) => (
              <li key={c.slug} className="border-b border-rule">
                <Link
                  href={`/advisory/${c.slug}`}
                  className="row-link group -mx-3 grid grid-cols-[3.25rem_1fr] gap-x-4 px-3 py-5 md:grid-cols-[3.25rem_minmax(0,20rem)_minmax(0,1fr)] md:gap-x-8"
                >
                  <span className="t-label-sm pt-1.5 text-faint">{c.n}</span>
                  <span>
                    <span className="block font-display text-[1.25rem] leading-snug tracking-[-0.012em] text-ink transition-colors group-hover:text-accent md:text-[1.4375rem]">
                      {c.title}
                    </span>
                    <span className="t-small measure mt-1.5 block">{c.short}</span>
                  </span>
                  <span className="col-start-2 mt-3 md:col-start-3 md:mt-0">
                    <span className="t-label-sm block text-faint">Heard as</span>
                    <ul className="mt-2 space-y-1">
                      {c.challenges.slice(0, 2).map((ch) => (
                        <li key={ch} className="t-small italic text-ink/75">
                          &ldquo;{ch}&rdquo;
                        </li>
                      ))}
                    </ul>
                  </span>
                </Link>
              </li>
            ))}
          </Register>
        </Reveal>
      </div>
    </Band>
  );
}

/* ------------------------------------------------------ 05 · Featured idea */

function FeaturedIdea() {
  const talk = talks[2];

  return (
    <Band ground="night" rhythm="flush" className="overflow-hidden">
      <div className="grid lg:grid-cols-12">
        {/* The poster runs to the edge of the viewport */}
        <div className="art-zoom relative lg:col-span-5 lg:min-h-[38rem]">
          <div className="art-inner absolute inset-0">
            <PosterAdoption className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex items-center px-[var(--gutter)] py-14 lg:col-span-7 lg:py-20 lg:pl-14 xl:pl-20">
          <Reveal>
            <Stamp className="reveal" parts={["Featured idea", "Keynote", talk.ref]} />
            <h2 className="t-display reveal mt-5 text-night-ink">{talk.title}</h2>
            <p className="reveal mt-4 font-display text-[1.25rem] italic leading-snug text-night-accent md:text-[1.5rem]">
              {talk.subtitle}
            </p>

            <blockquote className="reveal mt-8 border-l-2 border-night-accent pl-6">
              <p className="font-display text-[1.125rem] leading-[1.45] text-night-ink md:text-[1.375rem]">
                &ldquo;{talk.documentedDescription}&rdquo;
              </p>
              <cite className="meta mt-4 block not-italic">
                Columbus Brown, speaker profile
                <Src n={src.ref("speaker-profile")} id="speaker-profile" />
              </cite>
            </blockquote>

            <p className="t-body reveal measure mt-6">{talk.overview}</p>

            <div className="reveal mt-8 flex flex-col gap-2.5 sm:flex-row">
              <CtaButton href={`/speaking#${talk.slug}`} variant="night">
                Explore the talk
              </CtaButton>
              <CtaButton href="/advisory/transformation-adoption" variant="outlineNight">
                The advisory work behind it
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Band>
  );
}

/* ---------------------------------------------------------- 06 · Founder */

function TheFounder() {
  const triptych = [
    {
      k: "An engineer’s mind",
      v: "Mechanical engineering and aircraft design. Work where tolerances are real and a decision made early travels a long way.",
    },
    {
      k: "A strategist’s perspective",
      v: "Business strategy, consulting and business architecture. The same discipline, pointed at a different kind of machine.",
    },
    {
      k: "A leader’s experience",
      v: "Transformation and organizational leadership. Accountable for the change, not only for the recommendation.",
    },
  ];

  return (
    <Band rhythm="tight" rule>
      <div className="shell">
        <Reveal>
          <div className="egrid">
            <div className="col-span-6 md:col-span-7">
              <p className="t-label reveal text-accent">The founder</p>
              <h2 className="t-h1 reveal mt-5 text-ink">
                Columbus has spent his career moving between technical systems and human
                systems.
              </h2>
            </div>
            <div className="col-span-6 md:col-span-4 md:col-start-9">
              <blockquote className="reveal">
                <p className="t-small measure">
                  &ldquo;As a former aircraft design engineer who transitioned into a business
                  strategy consulting career, Columbus brings captivating storytelling that
                  resonates with both business leaders and technologists.&rdquo;
                </p>
                <cite className="meta mt-3 block not-italic">
                  Speaker profile
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </cite>
              </blockquote>
            </div>
          </div>

          <ul className="reveal mt-10 grid gap-8 border-t border-rule pt-8 md:grid-cols-3 md:gap-0">
            {triptych.map((t, i) => (
              <li key={t.k} className={i > 0 ? "md:border-l md:border-rule md:pl-8" : "md:pr-8"}>
                <h3 className="font-display text-[1.25rem] leading-snug text-ink">{t.k}</h3>
                <p className="t-small mt-3">{t.v}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8">
            <TextLink href="/about">Read the full account</TextLink>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* ----------------------------------------------------- 07 · Career record */

function CareerRecord() {
  return (
    <Band ground="paper2" rhythm="tight" rule>
      <div className="shell">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3">
            <h2 className="t-label text-accent">Selected career experience</h2>
            <p className="meta">Career history · not WAZA client engagements</p>
          </div>

          <figure className="reveal">
            <SystemEvolution />
            <figcaption className="mt-8">
              <TitleBlock
                figure="02"
                title="The same way of seeing, at five scales"
                drawnFrom="Documented career arc"
              />
            </figcaption>
          </figure>

          <div className="egrid mt-8">
            <p className="t-body reveal col-span-6 measure md:col-span-6">
              {experienceStatement}
              <Src n={src.ref("public-profile")} id="public-profile" />
            </p>
            <ul className="reveal col-span-6 flex flex-wrap gap-x-2 gap-y-2 self-start md:col-span-5 md:col-start-8">
              {experienceDomains.map((d) => (
                <li key={d} className="meta border border-rule-strong px-2 py-1">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* --------------------------------------------------------- 08 · Speaking */

function Speaking() {
  const quote = visibleTestimonials[0];

  return (
    <Band rhythm="tight" rule>
      <div className="shell">
        <BandHead
          n="K"
          label="Speaking"
          heading="Ideas that move a room."
          standfirst={
            <>
              {speakingIntro.body[1]}
              <Src n={src.ref("speaker-profile")} id="speaker-profile" />
            </>
          }
        />

        <div className="egrid mt-10">
          <div className="col-span-6 md:col-span-8">
            <Reveal>
              <ul className="reveal grid gap-6 sm:grid-cols-3">
                {talks.map((t) => {
                  const Poster = POSTERS[t.slug as keyof typeof POSTERS];
                  return (
                    <li key={t.slug}>
                      <Link href={`/speaking#${t.slug}`} className="group block">
                        <span className="art-zoom art-tile block aspect-[4/5] border border-rule">
                          <span className="art-inner block h-full w-full">
                            {Poster ? <Poster className="h-full w-full" /> : null}
                          </span>
                        </span>
                        <span className="mt-3 flex items-baseline justify-between gap-2">
                          <span className="t-label-sm text-faint">{t.ref}</span>
                          <span className="meta">Keynote</span>
                        </span>
                        <span className="mt-1.5 block font-display text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-accent md:text-[1.1875rem]">
                          {t.title}
                        </span>
                        <span className="t-small mt-1 block italic">{t.subtitle}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          {/* Margin rail: the documented testimonial, set as marginalia. */}
          <aside className="col-span-6 md:col-span-3 md:col-start-10">
            {quote ? (
              <figure className="border-t-2 border-ink pt-5">
                <blockquote className="font-display text-[1.0625rem] leading-snug text-ink">
                  &ldquo;{quote.quote}&rdquo;
                </blockquote>
                <figcaption className="meta mt-3">
                  {quote.attribution} · {quote.source}
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </figcaption>
              </figure>
            ) : null}
            <div className="mt-6">
              <TextLink href="/speaking">All speaking</TextLink>
            </div>
          </aside>
        </div>
      </div>
    </Band>
  );
}

/* -------------------------------------------------------- 09 · Workshops */

function Workshops() {
  return (
    <Band rhythm="tight" rule>
      <div className="shell">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3">
          <h2 className="t-label text-accent">Workshops · From listening to doing</h2>
          <p className="meta">
            {workshops.length} documented sessions · W-01 to W-{String(workshops.length).padStart(2, "0")}
          </p>
        </div>

        <Reveal>
          <ul className="reveal grid border-t border-rule md:grid-cols-2">
            {workshops.map((w, i) => (
              <li
                key={w.slug}
                className={`border-b border-rule ${i % 2 === 0 ? "md:border-r md:border-rule" : ""}`}
              >
                <Link
                  href={`/workshops#${w.slug}`}
                  className="row-link group flex h-full gap-4 px-0 py-5 md:px-4"
                >
                  <span className="art-tile hidden w-20 shrink-0 self-start border border-rule sm:block">
                    <WorkshopMark slug={w.slug} className="h-full w-full" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="t-label-sm text-faint">{w.ref}</span>
                      <span className="meta">{w.subject}</span>
                    </span>
                    <span className="mt-2 block font-display text-[1.125rem] leading-snug text-ink transition-colors group-hover:text-accent md:text-[1.25rem]">
                      {w.title}
                    </span>
                    <span className="t-small mt-1.5 block italic text-muted">{w.subtitle}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-7">
          <TextLink href="/workshops">The full workshop catalogue</TextLink>
        </div>
      </div>
    </Band>
  );
}

/* ------------------------------------------------ 10 · Engagement record */

function EngagementRecord() {
  return (
    <Band rhythm="tight" rule>
      <div className="shell">
        <div className="egrid">
          <div className="col-span-6 md:col-span-3">
            <h2 className="t-label text-accent">Selected engagements</h2>
            <p className="t-tiny measure-xs mt-4">
              Where Columbus has presented, from his published speaker profile.
              <Src n={src.ref("speaker-profile")} id="speaker-profile" /> These are speaking
              engagements — not client relationships and not endorsements.
            </p>
            <p className="meta mt-4">2015–2019 · {engagements.length} entries</p>
          </div>

          <div className="col-span-6 md:col-span-8 md:col-start-5">
            <Reveal>
              <ul className="register reveal">
                {engagements.map((e) => (
                  <li key={e.organization}>
                    <span className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-3">
                      <span>
                        <span className="block font-display text-[1.0625rem] leading-snug text-ink md:text-[1.125rem]">
                          {e.organization}
                        </span>
                        <span className="meta mt-1 block">
                          {[e.detail, e.locations].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                      <span className="meta tabular whitespace-nowrap text-right">
                        {e.years}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </Band>
  );
}

/* ------------------------------------------------------- 11 · Why WAZA */

function WazaStory() {
  return (
    <Band ground="night" rhythm="normal" id="why-waza">
      <div className="shell">
        <Reveal>
          <div className="egrid">
            <div className="col-span-6 md:col-span-5">
              <p className="t-label reveal text-night-accent">The name</p>
              <figure className="reveal mt-6">
                <WazaDuality className="w-full" />
                <figcaption className="meta mt-3">
                  Fig. 03 · Technique and imagination in one frame
                </figcaption>
              </figure>
              <div className="reveal mt-8">
                <DefinitionBlock night />
              </div>
            </div>

            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <h2 className="t-h1 reveal text-night-ink">{waza.standfirst}</h2>
              {waza.body.map((p) => (
                <p key={p.slice(0, 20)} className="t-body reveal measure mt-5">
                  {p}
                </p>
              ))}

              {/* A short specimen of his own language — the lexicon in miniature. */}
              <dl className="reveal mt-8 border-t border-night-rule">
                {lexicon.slice(0, 3).map((l) => (
                  <div
                    key={l.term}
                    className="grid grid-cols-1 gap-x-6 border-b border-night-rule py-3 md:grid-cols-[9rem_1fr]"
                  >
                    <dt className="t-label-sm pt-1 text-night-accent">{l.term}</dt>
                    <dd className="t-small">
                      &ldquo;{l.phrase}&rdquo;
                      <span className="meta ml-2">{l.from}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="meta mt-4">
                From the WAZA lexicon
                <Src n={src.ref("waza-site")} id="waza-site" />
                <Src n={src.ref("etymology")} id="etymology" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* --------------------------------------------------- 12 · Working notes */

function WorkingNotes() {
  return (
    <Band rhythm="tight">
      <div className="shell">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3">
          <h2 className="t-label text-accent">Working notes</h2>
          <p className="meta">An agenda, not an archive · nothing published yet</p>
        </div>

        <div className="egrid">
          <div className="col-span-6 md:col-span-3">
            <p className="t-small measure-xs">
              WAZA has published nothing under this name. Rather than fill the space with
              placeholder writing, this is the agenda — the six arguments the practice is
              working out, each traceable to material Columbus has already delivered.
            </p>
            <div className="mt-6">
              <TextLink href="/insights">Open the agenda</TextLink>
            </div>
          </div>

          <div className="col-span-6 md:col-span-8 md:col-start-5">
            <Reveal>
              <Register className="reveal">
                {themes.map((t) => (
                  <li key={t.id} className="border-b border-rule">
                    <Link
                      href={`/insights/${t.id}`}
                      className="row-link group -mx-3 flex items-center gap-4 px-3 py-3.5"
                    >
                      <span className="art-tile w-12 shrink-0 border border-rule">
                        <NoteMark id={t.id} className="h-full w-full" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-accent">
                          {t.title}
                        </span>
                        <span className="meta mt-1 block">Note · {t.category}</span>
                      </span>
                      <span className="meta hidden shrink-0 text-right sm:block">
                        {t.evidenceFrom}
                      </span>
                    </Link>
                  </li>
                ))}
              </Register>
            </Reveal>
          </div>
        </div>
      </div>
    </Band>
  );
}

/* --------------------------------------------------------- 13 · Closing */

function Closing() {
  return (
    <Band ground="paper2" rhythm="tight" className="border-t-2 border-ink">
      <div className="shell">
        <Reveal>
          <div className="egrid items-end">
            <div className="col-span-6 md:col-span-8">
              <h2 className="t-display reveal text-ink">
                Complex change doesn&rsquo;t need more noise.
              </h2>
              <p className="reveal mt-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-accent">
                It needs clarity.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-10">
              <div className="reveal flex flex-col gap-2.5">
                <CtaButton href="/contact">Start a Conversation</CtaButton>
                <CtaButton href="/contact?inquiry=speaking" variant="outline">
                  Book Columbus to Speak
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}
