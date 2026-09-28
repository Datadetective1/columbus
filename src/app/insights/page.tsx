import Link from "next/link";
import { Register, RegisterRow } from "@/components/modules";
import { NoteArt, NoteMark } from "@/components/art/figures";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections";
import { Band, BandHead, CtaButton, StatusTag, TextLink } from "@/components/ui";
import { capabilities } from "@/content/capabilities";
import { categories, insightsIntro, publishedInsights } from "@/content/insights";
import { lexicon } from "@/content/lexicon";
import { social } from "@/content/social";
import { sourceIndex } from "@/content/sources";
import { talks } from "@/content/speaking";
import { themes } from "@/content/themes";
import { workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Working notes",
  description:
    "An agenda, not an archive. Six arguments WAZA is working out on strategy, transformation, technology, leadership, business architecture and teams.",
  path: "/insights",
});

const src = sourceIndex(["editorial", "speaker-profile", "waza-site"]);

/** The second taxonomy: form. Counted from what actually exists. */
const forms = [
  { label: "Notes", n: themes.length, href: "#notes", meta: "In development" },
  { label: "Keynotes", n: talks.length, href: "/speaking", meta: "Delivered 2015–2019" },
  { label: "Workshops", n: workshops.length, href: "/workshops", meta: "Delivered 2015–2019" },
  { label: "Capabilities", n: capabilities.length, href: "/advisory", meta: "Advisory" },
];

export default function InsightsPage() {
  const linkedIn = social.find((s) => s.label === "LinkedIn" && s.enabled);
  const hasPublished = publishedInsights.length > 0;

  return (
    <>
      <PageHero
        kicker="Working notes"
        heading={insightsIntro.headline}
        standfirst={insightsIntro.body}
        wide
      />

      <Band ground="paper" rhythm="tight">
        <div className="shell">
          <figure className="mt-10 border-t border-rule pt-8">
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {themes.map((t) => (
                <li key={t.id} className="art-tile border border-rule">
                  <NoteMark id={t.id} className="h-full w-full" />
                </li>
              ))}
            </ul>
            <figcaption className="meta mt-3">
              Six arguments in development
            </figcaption>
          </figure>

          {/* The honest standing note. */}
          <p className="t-body measure mt-8 border-t-2 border-ink pt-6">
            WAZA has published nothing under this name, and nothing here is backdated to
            pretend otherwise. What follows is the agenda: six arguments the practice is
            working out, each traceable to material Columbus has already delivered in front of
            a room.
            <Src n={src.ref("editorial")} id="editorial" />
          </p>

          {/* Two taxonomies, so the small catalogue is reachable several ways. */}
          <div className="egrid mt-10">
            <div className="col-span-6 md:col-span-6">
              <h2 className="t-label border-b border-rule pb-2 text-faint">By form</h2>
              <ul>
                {forms.map((f) => (
                  <li key={f.label} className="border-b border-rule">
                    <Link
                      href={f.href}
                      className="row-link group -mx-3 flex items-baseline justify-between gap-4 px-3 py-2.5"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="t-label-sm tabular text-accent">
                          {String(f.n).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.0625rem] text-ink transition-colors group-hover:text-accent">
                          {f.label}
                        </span>
                      </span>
                      <span className="meta">{f.meta}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-5 md:col-start-8">
              <h2 className="t-label border-b border-rule pb-2 text-faint">By subject</h2>
              <ul className="flex flex-wrap gap-2 pt-4">
                {categories.map((c) => {
                  const match = themes.find((t) => t.category === c);
                  return (
                    <li key={c}>
                      {match ? (
                        <Link
                          href={`#${match.id}`}
                          className="meta inline-block border border-rule-strong px-2.5 py-1.5 transition-colors hover:border-ink hover:text-ink"
                        >
                          {c}
                        </Link>
                      ) : (
                        <span className="meta inline-block border border-rule px-2.5 py-1.5 opacity-60">
                          {c}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
              <p className="t-tiny mt-4">
                Every subject currently has exactly one note in development. Nothing is listed
                that does not exist.
              </p>
            </div>
          </div>
        </div>
      </Band>

      {/* The agenda */}
      <Band id="notes" rhythm="tight" rule className="scroll-mt-32">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3">
            <h2 className="t-label text-accent">The agenda</h2>
            <p className="meta">
              {themes.length} notes · N-01 to N-{String(themes.length).padStart(2, "0")} · none published
            </p>
          </div>

          <Reveal>
            <ol className="reveal grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {themes.map((t) => (
                <li key={t.id} id={t.id} className="scroll-mt-32">
                  <Link href={`/insights/${t.id}`} className="group block">
                    <span className="art-zoom art-tile block aspect-[16/9] border border-rule">
                      <span className="art-inner block h-full w-full">
                        <NoteArt id={t.id} className="h-full w-full" />
                      </span>
                    </span>
                    <span className="mt-4 flex items-baseline justify-between gap-3">
                      <span className="t-label-sm text-accent">{t.n}</span>
                      <span className="meta">{t.category}</span>
                    </span>
                    <span className="mt-2 block font-display text-[1.3125rem] leading-snug tracking-[-0.012em] text-ink transition-colors group-hover:text-accent">
                      {t.title}
                    </span>
                    <span className="t-small mt-2 block">{t.claim}</span>
                    <span className="mt-3 flex items-baseline justify-between gap-3">
                      <StatusTag status="In development" />
                      <span className="meta">after &ldquo;{t.evidenceFrom}&rdquo;</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>

          {!hasPublished ? (
            <p className="t-tiny mt-6">
              Each note opens onto the documented talk or workshop it derives from. When one is
              finished it gains a date and a byline; until then it does not have either.
            </p>
          ) : null}
        </div>
      </Band>

      {/* The lexicon */}
      <Band id="lexicon" ground="night" rhythm="tight" className="scroll-mt-32">
        <div className="shell">
          <BandHead
            label="The WAZA lexicon"
            heading="His own words, quoted exactly."
            headingClass="t-h2"
            night
            standfirst={
              <>
                The most distinctive material in the archive is Columbus&rsquo;s own phrasing.
                Nobody else writes &ldquo;the field of dreams marked by the graves of expertly
                built solutions&rdquo;.
                <Src n={src.ref("speaker-profile")} id="speaker-profile" />
              </>
            }
          />

          <dl className="mt-10 grid gap-x-10 md:grid-cols-2">
            {lexicon.map((l) => (
              <div key={l.term} className="border-t border-night-rule py-4">
                <dt className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <span className="font-display text-[1.125rem] text-night-ink">{l.term}</span>
                  <span className="meta">{l.from}</span>
                </dt>
                <dd className="mt-2">
                  <p className="t-small italic">&ldquo;{l.phrase}&rdquo;</p>
                  <p className="t-tiny mt-2">{l.gloss}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* Cross-links so the page is not a dead end */}
      <Band rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-4">
              <h2 className="t-label border-b border-rule pb-2 text-faint">
                Where the notes come from
              </h2>
              <Register>
                {talks.map((t) => (
                  <RegisterRow
                    key={t.slug}
                    refCode={t.ref}
                    title={t.title}
                    right="Keynote"
                    href={`/speaking#${t.slug}`}
                  />
                ))}
              </Register>
            </div>

            <div className="col-span-6 md:col-span-4">
              <h2 className="t-label border-b border-rule pb-2 text-faint">
                Where they are applied
              </h2>
              <Register>
                {capabilities.map((c) => (
                  <RegisterRow
                    key={c.slug}
                    refCode={c.n}
                    title={c.title}
                    href={`/advisory/${c.slug}`}
                  />
                ))}
              </Register>
            </div>

            <div className="col-span-6 md:col-span-3 md:col-start-10">
              <h2 className="t-label border-b border-rule pb-2 text-faint">In the meantime</h2>
              <p className="t-small mt-4">
                Most of what would end up here starts as a question somebody asked in a
                meeting. The conversation is usually the better version anyway.
              </p>
              <div className="mt-6 flex flex-col gap-2.5">
                <CtaButton href="/contact">Start a Conversation</CtaButton>
                {linkedIn ? (
                  <CtaButton href={linkedIn.href} variant="outline" external>
                    Follow on LinkedIn
                  </CtaButton>
                ) : null}
              </div>
              <div className="mt-5">
                <TextLink href="/about">About Columbus</TextLink>
              </div>
            </div>
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
    </>
  );
}
