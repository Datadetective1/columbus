import { Band, CtaButton, SectionHead, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { FinalCta, PageHero, Photo } from "@/components/sections";
import { documentedSpeakerIntro } from "@/content/bio";
import { engagements, speakingIntro, talks } from "@/content/speaking";
import { visibleTestimonials } from "@/content/testimonials";
import { additionalSessions, formatNote, workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Speaking",
  description:
    "Keynotes on transformation, technology adoption, business and IT partnership, strategy and purpose. Book Columbus Brown to speak.",
  path: "/speaking",
});

/**
 * Speaking.
 *
 * Photography leads. The previous version opened on three faint vector poster
 * boards, which read as concept art for talks rather than as evidence that a
 * real person stands in front of real rooms.
 */
export default function SpeakingPage() {
  return (
    <>
      <PageHero
        label="Speaking"
        heading={speakingIntro.headline}
        standfirst={speakingIntro.body[0]}
        aside={
          <Photo
            slot="speaking01"
            sizes="(min-width: 768px) 34vw, 92vw"
            priority
            className="w-full"
          />
        }
        actions={
          <CtaButton href="/contact?inquiry=speaking" variant="night">
            Invite Columbus to Speak
          </CtaButton>
        }
      />

      {/* The keynotes. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="Keynotes" heading="Three talks." />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-3">
            {talks.map((talk, i) => (
              <li key={talk.slug} id={talk.slug} className="h-full scroll-mt-28">
                <article
                  className="card reveal h-full p-8 md:p-9"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <h2 className="t-h3 text-ink">{talk.title}</h2>
                  <p className="mt-3 font-display text-[1.0625rem] italic leading-snug text-accent">
                    {talk.subtitle}
                  </p>
                  <p className="t-small mt-6">{talk.overview}</p>
                  <div className="mt-auto pt-8">
                    <p className="t-label text-faint">Formats</p>
                    <p className="t-small mt-2 text-ink">{talk.formats.join(" · ")}</p>
                  </div>
                </article>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* In his own words, beside the portrait whose shirt carries one of the titles. */}
      <Band ground="night" rhythm="normal">
        <div className="shell">
          <div className="egrid items-center gap-y-12">
            <div className="col-span-6 md:col-span-4">
              <Photo slot="wazaPolo" sizes="(min-width: 768px) 32vw, 80vw" className="w-full" />
            </div>
            <blockquote className="col-span-6 md:col-span-7 md:col-start-6">
              <p className="font-display text-[1.375rem] leading-[1.45] text-night-ink md:text-[1.75rem]">
                {documentedSpeakerIntro}
              </p>
              <cite className="t-small mt-6 block not-italic">
                Columbus Brown II, from his own speaker profile
              </cite>
            </blockquote>
          </div>
        </div>
      </Band>

      {/* Workshops, folded in from the retired /workshops route. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead
              label="Workshops"
              heading="Working sessions."
              standfirst="A keynote changes how a room thinks. A workshop changes what it does on Monday."
            />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-2">
            {workshops.map((w, i) => (
              <li
                key={w.slug}
                className="card reveal h-full p-7 md:p-8"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="t-h4 text-ink">{w.title}</h3>
                <p className="t-small mt-2 italic text-faint">{w.subtitle}</p>
                <p className="t-small mt-4">{w.problem}</p>
              </li>
            ))}
          </Reveal>

          <div className="mt-12 border-t border-rule pt-8">
            <p className="t-label text-faint">Also available</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {additionalSessions.map((title) => (
                <li key={title} className="t-small text-ink">
                  {title}
                </li>
              ))}
            </ul>
            <p className="t-tiny mt-6">{formatNote}</p>
          </div>
        </div>
      </Band>

      {/* What people said. */}
      {visibleTestimonials.length ? (
        <Band ground="paper2" rhythm="normal">
          <div className="shell">
            <ul className="grid gap-7 md:grid-cols-2">
              {visibleTestimonials.map((t) => (
                <li key={t.attribution} className="card h-full p-8 md:p-9">
                  <blockquote className="font-display text-[1.25rem] leading-[1.45] text-ink md:text-[1.4375rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="t-small mt-6">{t.attribution}</p>
                </li>
              ))}
            </ul>
          </div>
        </Band>
      ) : null}

      {/* Where he has spoken. Lowest on the page: it is the least persuasive thing here. */}
      <Band id="record" ground="paper" rhythm="tight" className="scroll-mt-28">
        <div className="shell">
          <div className="egrid items-start gap-y-10">
            <div className="col-span-6 md:col-span-4">
              <SectionHead
                label="Selected engagements"
                heading="Where he has spoken."
                headingClass="t-h2"
              />
            </div>

            <ul className="col-span-6 md:col-span-7 md:col-start-6">
              {engagements.map((e) => (
                <li
                  key={e.organization}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4 first:border-t"
                >
                  <span className="text-[0.9375rem] text-ink">{e.organization}</span>
                  <span className="t-tiny">{e.years}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <TextLink href="/about">More about Columbus</TextLink>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Bring Columbus to your stage."
        body="Keynotes, breakouts, leadership sessions and full-day workshops."
      />
    </>
  );
}
