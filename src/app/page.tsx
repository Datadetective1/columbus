import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SystemsFigure } from "@/components/systems-figure";
import { CtaButton, Section, SectionLabel, TextLink } from "@/components/ui";
import { careerArc, descriptors, heroCopy } from "@/content/bio";
import { experienceDomains, experienceStatement } from "@/content/experience";
import { insightsIntro, plannedThemes, publishedInsights } from "@/content/insights";
import { pathways } from "@/content/services";
import { speakingIntro, talks } from "@/content/speaking";
import { visibleTestimonials } from "@/content/testimonials";
import { waza } from "@/content/waza";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CareerBridge />
      <Pathways />
      <FeaturedIdeas />
      <Experience />
      <SpeakingBand />
      <WazaStory />
      <InsightsPreview />
      <ClosingCta />
    </>
  );
}

/* ------------------------------------------------------------------ 01 Hero */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="systems-grid pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden="true"
      />

      <div className="shell relative pt-16 pb-14 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal className="max-w-2xl">
              <p className="t-label reveal text-accent">{heroCopy.eyebrow}</p>

              <h1 className="t-display reveal mt-6 text-ink">{heroCopy.headline}</h1>

              <p className="t-lede reveal mt-7 max-w-xl text-ink/80">{heroCopy.standfirst}</p>

              <p className="t-body reveal mt-5 max-w-lg">{heroCopy.body}</p>

              <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CtaButton href="/contact">Work With Columbus</CtaButton>
                <CtaButton href="/contact?inquiry=speaking" variant="outline">
                  Book Columbus to Speak
                </CtaButton>
              </div>
            </Reveal>
          </div>

          {/* The motif stands in for photography — and earns its place by
              carrying the argument of the site rather than decorating it. */}
          <div className="lg:col-span-5">
            <SystemsFigure className="mx-auto w-full max-w-[22rem] lg:max-w-none" />
          </div>
        </div>
      </div>

      {/* Descriptor strip */}
      <Reveal className="border-y border-rule bg-paper-2/60">
        <div className="shell">
          <ul className="grid grid-cols-2 divide-rule sm:grid-cols-4 sm:divide-x">
            {descriptors.map((d, i) => (
              <li
                key={d}
                className={`reveal py-4 sm:py-5 ${i % 2 === 1 ? "border-l border-rule sm:border-l-0" : ""} ${
                  i < 2 ? "border-b border-rule sm:border-b-0" : ""
                }`}
              >
                <span className="t-label block px-0 text-ink/70 sm:px-6 sm:text-center">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------------------------------- 02 Career bridge */

function CareerBridge() {
  return (
    <Section>
      <div className="shell">
        <Reveal>
          <SectionLabel index="01" className="reveal">
            The career
          </SectionLabel>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="t-h1 reveal text-ink">Two worlds. One perspective.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-lede reveal">
                Columbus started where things are built — mechanical engineering, then aircraft
                design. He moved to where things are decided: strategy, consulting, business
                architecture, transformation, leadership.
              </p>
              <p className="t-body reveal mt-6">
                He did not swap one for the other. He kept both, which turns out to be the useful
                part.
              </p>
              <p className="reveal mt-8 border-l-2 border-accent pl-6 font-display text-[1.375rem] leading-[1.35] tracking-[-0.015em] text-ink md:text-[1.625rem]">
                Technical change is rarely only technical. Business transformation is rarely only
                business. The strongest decisions require understanding both.
              </p>
            </div>
          </div>
        </Reveal>

        {/* The arc. A progression, not a résumé — no dates, no employers. */}
        <Reveal className="mt-16 md:mt-24">
          <ol className="grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {careerArc.map((step, i) => (
              <li
                key={step.stage}
                className="reveal group relative border-b border-rule pt-6 pb-8 sm:pr-8"
              >
                <span
                  className="absolute left-0 top-0 h-px w-full origin-left bg-accent transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] scale-x-0 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="t-label text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-[1.1875rem] leading-tight tracking-[-0.01em] text-ink">
                  {step.stage}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{step.note}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- 03 Pathways */

function Pathways() {
  return (
    <Section className="border-t border-rule bg-paper-2/50">
      <div className="shell">
        <Reveal>
          <SectionLabel index="02" className="reveal">
            Three ways to work together
          </SectionLabel>
          <h2 className="t-h2 reveal mt-8 max-w-2xl text-ink">
            Advisory, speaking, and workshops.
          </h2>
        </Reveal>

        <Reveal className="mt-14 grid gap-px border-t border-rule lg:grid-cols-3">
          {pathways.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="reveal group flex flex-col border-b border-rule bg-paper p-7 transition-colors duration-500 hover:bg-paper lg:border-r lg:p-9 lg:last:border-r-0"
            >
              <span className="t-label text-accent">{p.kicker}</span>
              <h3 className="t-h3 mt-6 text-ink">{p.headline}</h3>
              <p className="t-body mt-4 flex-1 text-[1rem]">{p.body}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
                <span className="link-grow" data-active="false">
                  {p.cta}
                </span>
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8h13M9 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------- 04 Featured ideas */

function FeaturedIdeas() {
  return (
    <Section>
      <div className="shell">
        <Reveal>
          <SectionLabel index="03" className="reveal">
            The talks
          </SectionLabel>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="t-h2 reveal max-w-xl text-ink">
              Ideas he has been working on for years.
            </h2>
            <p className="t-body reveal max-w-sm text-[1rem] md:text-right">
              Three keynotes, taken from his published speaker material. The titles and
              descriptions are his.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <ol className="border-t border-rule">
            {talks.map((talk, i) => (
              <li key={talk.slug} className="reveal border-b border-rule">
                <Link
                  href={`/speaking#${talk.slug}`}
                  className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <span className="t-label pt-2 text-faint md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-5">
                    <h3 className="t-h3 text-ink transition-colors duration-300 group-hover:text-accent">
                      {talk.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] italic leading-snug text-muted">
                      {talk.subtitle}
                    </p>
                  </div>
                  <p className="t-body text-[1rem] md:col-span-6">{talk.overview}</p>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-10">
          <div className="reveal">
            <TextLink href="/speaking">See all speaking topics</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- 05 Experience */

function Experience() {
  return (
    <Section className="border-t border-rule">
      <div className="shell">
        <Reveal>
          <SectionLabel index="04" className="reveal">
            Experience
          </SectionLabel>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="t-h2 reveal text-ink">Both ends of the organization.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-lede reveal">{experienceStatement}</p>
              <p className="t-body reveal mt-6">
                A career that has run from the floor of aviation operations to enterprise
                strategy — designing aircraft, then designing the way organizations work. Both
                ends of that range inform how he reads a problem.
              </p>
              <ul className="reveal mt-8 flex flex-wrap gap-x-3 gap-y-2.5">
                {experienceDomains.map((d) => (
                  <li
                    key={d}
                    className="rounded-[2px] border border-rule px-3 py-1.5 text-[0.8125rem] text-muted"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.8125rem] leading-relaxed text-faint">
                Career experience. WAZA does not publish client relationships, and nothing here
                implies one.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- 06 Speaking */

function SpeakingBand() {
  const quote = visibleTestimonials[0];

  return (
    <Section night className="border-t border-night-rule">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="05" className="reveal">
                Speaking &amp; facilitation
              </SectionLabel>
              <h2 className="t-h1 reveal mt-8 text-night-ink">
                Ideas worth carrying back to work.
              </h2>
              <p className="t-lede reveal mt-7 max-w-lg">{speakingIntro.body[0]}</p>
              <p className="t-body reveal mt-5 max-w-lg">{speakingIntro.body[1]}</p>
              <div className="reveal mt-9">
                <CtaButton href="/speaking" variant="night">
                  Explore Speaking
                </CtaButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <ul className="reveal border-t border-night-rule">
                {speakingIntro.qualities.map((q) => (
                  <li key={q.label} className="border-b border-night-rule py-4">
                    <span className="font-display text-[1.125rem] tracking-[-0.01em] text-night-ink">
                      {q.label}
                    </span>
                    <span className="mt-1 block text-[0.875rem] leading-relaxed text-night-muted">
                      {q.note}
                    </span>
                  </li>
                ))}
              </ul>

              {quote ? (
                <figure className="reveal mt-10">
                  <blockquote className="font-display text-[1.25rem] leading-[1.45] tracking-[-0.012em] text-night-ink md:text-[1.375rem]">
                    “{quote.quote}”
                  </blockquote>
                  <figcaption className="t-label mt-5 text-night-muted">
                    {quote.attribution} · {quote.source}
                  </figcaption>
                </figure>
              ) : null}
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- 07 WAZA story */

function WazaStory() {
  return (
    <Section id="why-waza" className="border-t border-rule">
      <div className="shell">
        <Reveal>
          <SectionLabel index="06" className="reveal">
            The name
          </SectionLabel>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="t-h1 reveal text-ink">{waza.headline}</h2>

              {/* The original dictionary entry, recovered from the dormant WAZA
                  site and set as the typographic centrepiece it deserves. */}
              <div className="reveal mt-10 border-t-2 border-ink pt-6">
                <p className="font-display text-[2rem] leading-none tracking-[0.02em] text-ink">
                  {waza.word}
                </p>
                <p className="mt-2 text-[0.875rem] italic text-muted">
                  {waza.partOfSpeech} · pronounced “{waza.pronunciation}”
                </p>
                <ol className="mt-5 space-y-2">
                  {waza.definitions.map((d, i) => (
                    <li key={d} className="flex gap-3 text-[1.0625rem] text-ink">
                      <span className="t-label pt-1.5 text-accent">{i + 1}</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-rule pt-4 text-[0.8125rem] leading-relaxed text-faint">
                  {waza.etymologyNote}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="t-lede reveal">{waza.standfirst}</p>
              {waza.body.map((p) => (
                <p key={p.slice(0, 24)} className="t-body reveal mt-5">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- 08 Insights */

function InsightsPreview() {
  const hasPublished = publishedInsights.length > 0;

  return (
    <Section className="border-t border-rule bg-paper-2/50">
      <div className="shell">
        <Reveal>
          <SectionLabel index="07" className="reveal">
            Insights
          </SectionLabel>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="t-h2 reveal max-w-lg text-ink">{insightsIntro.headline}</h2>
            <p className="t-body reveal max-w-sm text-[1rem] md:text-right">
              {insightsIntro.body}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {(hasPublished ? publishedInsights.slice(0, 3) : plannedThemes).map((item) => (
            <article
              key={item.title}
              className="reveal flex flex-col border-b border-rule bg-paper p-7 sm:border-r sm:last:border-r-0"
            >
              <span className="t-label text-accent">{item.category}</span>
              <h3 className="t-h3 mt-6 text-[1.25rem] text-ink md:text-[1.375rem]">
                {item.title}
              </h3>
              <p className="t-body mt-3 flex-1 text-[0.9375rem]">
                {"note" in item ? item.note : item.excerpt}
              </p>
              {!hasPublished ? (
                <p className="t-label mt-6 text-faint">In progress</p>
              ) : null}
            </article>
          ))}
        </Reveal>

        <Reveal className="mt-10">
          <div className="reveal">
            <TextLink href="/insights">Explore Insights</TextLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- 09 Closing CTA */

function ClosingCta() {
  return (
    <Section night className="border-t border-night-rule">
      <div className="shell">
        <Reveal className="max-w-4xl">
          <h2 className="t-display reveal text-night-ink">
            Complex change doesn&rsquo;t need more noise.
          </h2>
          <p className="reveal mt-6 font-display text-[1.5rem] leading-[1.3] tracking-[-0.015em] text-night-accent md:text-[2rem]">
            It needs clarity, alignment, and action.
          </p>
          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/contact" variant="night">
              Start a Conversation
            </CtaButton>
            <CtaButton href="/contact?inquiry=speaking" variant="outlineNight">
              Book Columbus
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
