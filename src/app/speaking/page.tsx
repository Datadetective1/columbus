import { Register, RegisterRow, Stamp } from "@/components/modules";
import { POSTERS } from "@/components/art/posters";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { Band, BandHead, CtaButton, TextLink } from "@/components/ui";
import { documentedSpeakerIntro } from "@/content/bio";
import { capabilities } from "@/content/capabilities";
import { engagements, engagementsNote, speakingIntro, talks } from "@/content/speaking";
import { sourceIndex } from "@/content/sources";
import { visibleTestimonials } from "@/content/testimonials";
import { themes } from "@/content/themes";
import { workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Speaking",
  description:
    "Keynotes on transformation, technology adoption, business and IT partnership, strategy and purpose. Book Columbus Brown to speak.",
  path: "/speaking",
});

const src = sourceIndex(["speaker-profile", "editorial", "needs-review"]);

/** Which advisory capability each keynote sits closest to. */
const TALK_LINKS: Record<string, string> = {
  "power-of-a-name": "leadership-teams",
  "make-it-easy-now": "business-technology",
  "i-built-it-and-they-didnt-come": "transformation-adoption",
};

export default function SpeakingPage() {
  return (
    <>
      <Band rhythm="tight" className="border-t-2 border-accent">
        <div className="shell">
          <div className="egrid items-end">
            <div className="col-span-6 md:col-span-8">
              <Stamp parts={["Speaking", "Three keynotes", "K-01 to K-03"]} />
              <h1 className="t-display mt-5 text-ink">{speakingIntro.headline}</h1>
            </div>
            <div className="col-span-6 md:col-span-3 md:col-start-10">
              <p className="t-small measure-xs">{speakingIntro.body[0]}</p>
              <div className="mt-5">
                <CtaButton href="/contact?inquiry=speaking">Invite Columbus to Speak</CtaButton>
              </div>
            </div>
          </div>

          {/* Contents plate */}
          <nav aria-label="Keynotes" className="mt-10 border-t-2 border-ink pt-4">
            <ol className="grid md:grid-cols-3">
              {talks.map((t, i) => (
                <li key={t.slug} className={i > 0 ? "md:border-l md:border-rule md:pl-5" : "md:pr-5"}>
                  <a href={`#${t.slug}`} className="group block border-t border-rule py-3 md:border-t-0">
                    <span className="art-zoom art-tile mb-3 block aspect-[4/5] border border-rule">
                      <span className="art-inner block h-full w-full">
                        {(() => {
                          const P = POSTERS[t.slug as keyof typeof POSTERS];
                          return P ? <P className="h-full w-full" /> : null;
                        })()}
                      </span>
                    </span>
                    <span className="t-label-sm text-accent">{t.ref}</span>
                    <span className="mt-1.5 block font-display text-[1.125rem] leading-snug text-ink transition-colors group-hover:text-accent">
                      {t.title}
                    </span>
                    <span className="meta mt-1 block">{t.subtitle}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Band>

      {/* His own words, given a whole band */}
      <Band rhythm="tight" ground="night">
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-3">
              <h2 className="t-label text-night-accent">In his own words</h2>
              <p className="meta mt-4">Speaker profile · verbatim</p>
            </div>
            <blockquote className="col-span-6 md:col-span-8 md:col-start-5">
              <p className="font-display text-[1.25rem] leading-[1.45] text-night-ink md:text-[1.75rem]">
                {documentedSpeakerIntro}
              </p>
              <cite className="meta mt-5 block not-italic">
                Columbus Brown II, published speaker profile
                <Src n={src.ref("speaker-profile")} id="speaker-profile" />
              </cite>
            </blockquote>
          </div>

          <ul className="mt-12 grid border-t border-night-rule md:grid-cols-5">
            {speakingIntro.qualities.map((q, i) => (
              <li
                key={q.label}
                className={`border-b border-night-rule py-4 md:border-b-0 ${
                  i > 0 ? "md:border-l md:border-night-rule md:pl-4" : ""
                }`}
              >
                <span className="t-label-sm block text-night-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-display text-[1.0625rem] text-night-ink">
                  {q.label}
                </span>
                <span className="t-tiny mt-1.5 block">{q.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* The keynotes, each a full editorial entry */}
      {talks.map((talk, i) => (
        <Band
          key={talk.slug}
          id={talk.slug}
          rhythm="tight"
          ground={i % 2 === 1 ? "paper2" : "paper"}
          rule
          className="scroll-mt-32"
        >
          <div className="shell">
            <div className="egrid items-end">
              <div className="col-span-6 md:col-span-8">
                <Stamp parts={["Keynote", talk.ref]} />
                <h2 className="t-h1 mt-4 text-ink">{talk.title}</h2>
                <p className="mt-3 font-display text-[1.125rem] italic leading-snug text-accent md:text-[1.375rem]">
                  {talk.subtitle}
                </p>
              </div>
              <div className="col-span-6 md:col-span-3 md:col-start-10">
                <dl>
                  <dt className="t-label-sm text-faint">Formats</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {talk.formats.map((f) => (
                      <span key={f} className="meta border border-rule-strong px-2 py-1">
                        {f}
                      </span>
                    ))}
                  </dd>
                </dl>
              </div>
            </div>

            <div className="egrid mt-8 border-t border-rule pt-7">
              <figure className="art-zoom art-tile col-span-6 mb-6 aspect-[4/5] border border-rule md:col-span-3 md:mb-0">
                <span className="art-inner block h-full w-full">
                  {(() => {
                    const P = POSTERS[talk.slug as keyof typeof POSTERS];
                    return P ? <P className="h-full w-full" /> : null;
                  })()}
                </span>
              </figure>

              <blockquote className="col-span-6 md:col-span-4">
                <p className="font-display text-[1.0625rem] leading-[1.5] text-ink md:text-[1.1875rem]">
                  &ldquo;{talk.documentedDescription}&rdquo;
                </p>
                <cite className="meta mt-3 block not-italic">
                  Verbatim, speaker profile
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </cite>
              </blockquote>

              <div className="col-span-6 md:col-span-5 md:col-start-8">
                <p className="t-body measure">{talk.overview}</p>
                <dl className="mt-6 border-t border-rule pt-4">
                  <dt className="t-label-sm text-faint">Ideal audience</dt>
                  <dd className="t-small mt-2">
                    {talk.audience}
                    <Src n={src.ref("editorial")} id="editorial" />
                  </dd>
                </dl>
              </div>

              <aside className="col-span-6 md:col-span-5 md:col-start-8">
                <h3 className="t-label-sm border-b border-rule pb-2 text-faint">See also</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <TextLink href={`/advisory/${TALK_LINKS[talk.slug]}`}>
                      {capabilities.find((c) => c.slug === TALK_LINKS[talk.slug])?.title}
                    </TextLink>
                  </li>
                  <li>
                    <TextLink href={`/insights#${themes[i]?.id ?? "adoption"}`}>
                      {themes[i]?.title}
                    </TextLink>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </Band>
      ))}

      {/* The record */}
      <Band id="record" rhythm="tight" rule className="scroll-mt-32">
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-3">
              <h2 className="t-h2 text-ink">Selected previous engagements</h2>
              <p className="t-tiny measure-xs mt-4">{engagementsNote}</p>
              <p className="meta mt-4">2015–2019 · {engagements.length} entries</p>
            </div>

            <div className="col-span-6 md:col-span-8 md:col-start-5">
              <Reveal>
                <ul className="register reveal">
                  {engagements.map((e) => (
                    <li key={e.organization}>
                      <span className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-4">
                        <span>
                          <span className="block font-display text-[1.125rem] leading-snug text-ink md:text-[1.25rem]">
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

      {/* Testimonials */}
      {visibleTestimonials.length ? (
        <Band ground="paper2" rhythm="tight" rule>
          <div className="shell">
            <h2 className="t-label border-b border-rule pb-2 text-faint">What people said</h2>
            <div className="egrid mt-8">
              {visibleTestimonials.map((t) => (
                <figure key={t.attribution} className="col-span-6 md:col-span-6">
                  <blockquote className="font-display text-[1.1875rem] leading-[1.45] text-ink md:text-[1.375rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="meta mt-4">
                    {t.attribution} · {t.source}
                    <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="t-tiny mt-8 border-t border-rule pt-4">
              Both reproduced character-for-character with the attribution as printed. They are
              approximately seven years old.
              <Src n={src.ref("needs-review")} id="needs-review" />
            </p>
          </div>
        </Band>
      ) : null}

      {/* Also available */}
      <Band ground="night" rhythm="tight">
        <div className="shell">
          <BandHead
            n="W"
            label="Also available"
            heading="Six working sessions."
            headingClass="t-h2"
            night
            standfirst="Where a keynote changes how a room thinks, a workshop changes what it does."
          />
          <div className="mt-8">
            <Register>
              {workshops.map((w) => (
                <RegisterRow
                  key={w.slug}
                  refCode={w.ref}
                  title={w.title}
                  meta={w.subtitle}
                  right={w.subject}
                  href={`/workshops#${w.slug}`}
                  night
                />
              ))}
            </Register>
          </div>
          <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
            <CtaButton href="/contact?inquiry=speaking" variant="night">
              Invite Columbus to Speak
            </CtaButton>
            <CtaButton href="/workshops" variant="outlineNight">
              The workshop catalogue
            </CtaButton>
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
    </>
  );
}
