import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";
import { CtaButton, Section, SectionLabel } from "@/components/ui";
import { documentedSpeakerIntro } from "@/content/bio";
import {
  engagements,
  engagementsNote,
  speakingIntro,
  talks,
} from "@/content/speaking";
import { visibleTestimonials } from "@/content/testimonials";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Speaking",
  description:
    "Keynotes and sessions on transformation, technology adoption, business and IT partnership, strategy and purpose. Book Columbus Brown to speak.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <>
      {/* Intro */}
      <Section className="pt-14 md:pt-20 lg:pt-24">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" className="reveal">
              Speaking
            </SectionLabel>
            <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="t-h1 reveal text-ink">{speakingIntro.headline}</h1>
                <p className="t-lede reveal mt-8 max-w-xl">{speakingIntro.body[0]}</p>
                <p className="t-body reveal mt-5 max-w-xl">{speakingIntro.body[1]}</p>
                <div className="reveal mt-9">
                  <CtaButton href="/contact?inquiry=speaking">Invite Columbus to Speak</CtaButton>
                </div>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <ImageSlot slot="speaking02" className="reveal" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* His own description — verbatim */}
      <Section className="border-t border-rule bg-paper-2/50 !py-16 md:!py-20">
        <div className="shell">
          <Reveal>
            <figure className="reveal mx-auto max-w-4xl">
              <blockquote className="font-display text-[1.375rem] leading-[1.45] tracking-[-0.015em] text-ink md:text-[1.75rem]">
                {documentedSpeakerIntro}
              </blockquote>
              <figcaption className="t-label mt-7 text-faint">
                From Columbus&rsquo;s published speaker profile
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* What he brings */}
      <Section className="border-t border-rule">
        <div className="shell">
          <Reveal>
            <SectionLabel index="02" className="reveal">
              In the room
            </SectionLabel>
            <h2 className="t-h2 reveal mt-8 max-w-2xl text-ink">
              Five things an audience gets, in whatever order the room needs them.
            </h2>
          </Reveal>

          <Reveal className="mt-14 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {speakingIntro.qualities.map((q, i) => (
              <article key={q.label} className="reveal border-b border-rule py-7 sm:pr-6">
                <span className="t-label text-faint">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[1.125rem] leading-snug tracking-[-0.01em] text-ink">
                  {q.label}
                </h3>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">{q.note}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* The talks */}
      <Section className="border-t border-rule bg-paper-2/50">
        <div className="shell">
          <Reveal>
            <SectionLabel index="03" className="reveal">
              Keynotes
            </SectionLabel>
            <h2 className="t-h2 reveal mt-8 max-w-2xl text-ink">
              Three talks, developed over years of delivering them.
            </h2>
            <p className="t-body reveal mt-6 max-w-xl">
              Titles and descriptions are Columbus&rsquo;s own, from his published speaker
              material.
            </p>
          </Reveal>

          <div className="mt-16 space-y-px">
            {talks.map((talk, i) => (
              <Reveal key={talk.slug} className="border-t border-rule">
                <article id={talk.slug} className="scroll-mt-28 py-10 md:py-14">
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-5">
                      <span className="t-label text-accent">
                        {String(i + 1).padStart(2, "0")} / Keynote
                      </span>
                      <h3 className="t-h3 reveal mt-5 text-[1.5rem] text-ink md:text-[2rem]">
                        {talk.title}
                      </h3>
                      <p className="reveal mt-3 font-display text-[1.0625rem] italic leading-snug text-accent md:text-[1.125rem]">
                        {talk.subtitle}
                      </p>
                    </div>

                    <div className="md:col-span-6 md:col-start-7">
                      <p className="t-body reveal">{talk.overview}</p>

                      <blockquote className="reveal mt-6 border-l border-rule-strong pl-5 text-[0.9375rem] leading-relaxed text-muted">
                        {talk.documentedDescription}
                      </blockquote>

                      <dl className="reveal mt-8 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
                        <div>
                          <dt className="t-label text-faint">Ideal audience</dt>
                          <dd className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/85">
                            {talk.audience}
                          </dd>
                        </div>
                        <div>
                          <dt className="t-label text-faint">Formats</dt>
                          <dd className="mt-2.5 flex flex-wrap gap-2">
                            {talk.formats.map((f) => (
                              <span
                                key={f}
                                className="rounded-[2px] border border-rule px-2.5 py-1 text-[0.8125rem] text-muted"
                              >
                                {f}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Full-bleed photography band. Renders nothing until a photograph is
          approved — see components/image-slot.tsx. */}
      <ImageSlot slot="speaking01" className="w-full border-0" sizes="100vw" hideWhenEmpty />

      {/* Engagements */}
      <Section night className="border-t border-night-rule">
        <div className="shell">
          <Reveal>
            <SectionLabel index="04" className="reveal">
              History
            </SectionLabel>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <h2 className="t-h1 reveal text-night-ink">Selected previous engagements</h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="t-body reveal">{engagementsNote}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <ul className="border-t border-night-rule">
              {engagements.map((e) => (
                <li
                  key={e.organization}
                  className="reveal grid gap-2 border-b border-night-rule py-5 md:grid-cols-12 md:items-baseline md:gap-8"
                >
                  <span className="font-display text-[1.125rem] leading-snug tracking-[-0.01em] text-night-ink md:col-span-5">
                    {e.organization}
                  </span>
                  <span className="text-[0.9375rem] text-night-muted md:col-span-4">
                    {e.detail}
                    {e.locations ? <span className="block text-[0.8125rem]">{e.locations}</span> : null}
                  </span>
                  <span className="t-label text-night-muted md:col-span-3 md:text-right">
                    {e.years}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Testimonials */}
      {visibleTestimonials.length > 0 ? (
        <Section className="border-t border-rule">
          <div className="shell">
            <Reveal>
              <SectionLabel index="05" className="reveal">
                What people said
              </SectionLabel>
            </Reveal>
            <Reveal className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
              {visibleTestimonials.map((t) => (
                <figure key={t.attribution} className="reveal">
                  <blockquote className="font-display text-[1.25rem] leading-[1.45] tracking-[-0.012em] text-ink md:text-[1.4375rem]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="t-label mt-6 text-faint">
                    {t.attribution} · {t.source}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* CTA */}
      <Section night className="border-t border-night-rule">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="t-h1 reveal text-night-ink">
              Tell him about the room, and what you want it thinking about afterwards.
            </h2>
            <div className="reveal mt-10">
              <CtaButton href="/contact?inquiry=speaking" variant="night">
                Invite Columbus to Speak
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
