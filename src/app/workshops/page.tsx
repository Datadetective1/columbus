import { Register, RegisterRow, Stamp } from "@/components/modules";
import { WorkshopMark } from "@/components/art/marks";
import { Src, SourceNotes } from "@/components/provenance";
import { PageHero } from "@/components/sections";
import { Band, BandHead, CtaButton, TextLink } from "@/components/ui";
import { capabilities } from "@/content/capabilities";
import { sourceIndex } from "@/content/sources";
import { talks } from "@/content/speaking";
import { formatNote, workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Workshops",
  description:
    "Working sessions on strategy to execution, change management, business modeling, team alignment and conflict — facilitated by Columbus Brown.",
  path: "/workshops",
});

const src = sourceIndex(["speaker-profile", "editorial"]);

/** Which capability each session sits closest to. */
const LINKS: Record<string, string> = {
  "aligning-products-to-corporate-strategy": "strategy-execution",
  "business-strategy-masterclass": "strategy-execution",
  "business-modeling-101": "business-architecture",
  "foundational-change-management": "transformation-adoption",
  "ambidextrous-teamwork": "leadership-teams",
  "conflict-without-chaos": "leadership-teams",
};

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        kicker={`Workshops · W-01 to W-0${workshops.length}`}
        heading="From listening to doing."
        standfirst="A keynote changes how a room thinks. A workshop changes what it does on Monday — the group does the work, and leaves with something it built rather than something it was shown."
        wide
      />

      <Band ground="paper" rhythm="tight">
        <div className="shell">
          {/* Contents plate — the catalogue up front */}
          <nav aria-label="Sessions" className="mt-10 border-t-2 border-ink pt-4">
            <h2 className="t-label text-faint">The catalogue</h2>
            <ol className="mt-3 grid md:grid-cols-3">
              {workshops.map((w, i) => (
                <li
                  key={w.slug}
                  className={`${i % 3 !== 0 ? "md:border-l md:border-rule md:pl-5" : ""} md:pr-5`}
                >
                  <a href={`#${w.slug}`} className="group block border-t border-rule py-3">
                    <span className="art-zoom art-tile mb-3 block aspect-[4/3] border border-rule">
                      <span className="art-inner block h-full w-full">
                        <WorkshopMark slug={w.slug} className="h-full w-full" />
                      </span>
                    </span>
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="meta">{w.subject}</span>
                    </span>
                    <span className="mt-1.5 block font-display text-[1.0625rem] leading-snug text-ink transition-colors group-hover:text-accent">
                      {w.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Band>

      {/* The sessions */}
      {workshops.map((w, i) => (
        <Band
          key={w.slug}
          id={w.slug}
          rhythm="tight"
          ground={i % 2 === 1 ? "paper2" : "paper"}
          rule
          className="scroll-mt-32"
        >
          <div className="shell">
            <div className="egrid">
              <figure className="art-tile col-span-6 mb-6 aspect-[4/3] self-start border border-rule md:col-span-3 md:mb-0">
                <WorkshopMark slug={w.slug} className="h-full w-full" />
              </figure>

              <div className="col-span-6 md:col-span-4">
                <Stamp parts={["Workshop", w.ref, w.subject]} />
                <h2 className="t-h2 mt-4 text-ink">{w.title}</h2>
                <p className="mt-3 font-display text-[1.0625rem] italic leading-snug text-accent md:text-[1.1875rem]">
                  {w.subtitle}
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </p>

                <dl className="mt-7 border-t border-rule pt-4">
                  <dt className="t-label-sm text-faint">Who it&rsquo;s for</dt>
                  <dd className="t-small mt-2">{w.who}</dd>
                </dl>
              </div>

              <div className="col-span-6 md:col-span-5">
                <dl>
                  <dt className="t-label-sm text-faint">The problem</dt>
                  <dd className="t-body mt-2 text-[1rem]">{w.problem}</dd>
                </dl>
                <dl className="mt-7 border-t border-rule pt-4">
                  <dt className="t-label-sm text-faint">Possible outcome</dt>
                  <dd className="t-small mt-2">{w.outcome}</dd>
                </dl>
              </div>

              <div className="col-span-6 md:col-span-4 md:col-start-9">
                <dl>
                  <dt className="t-label-sm text-faint">Focus</dt>
                  <dd>
                    <ul className="mt-2 space-y-2">
                      {w.focus.map((f) => (
                        <li key={f} className="t-small flex gap-2.5">
                          <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
                <p className="meta mt-5 border-t border-rule pt-3">{formatNote}</p>
                <div className="mt-3">
                  <TextLink href={`/advisory/${LINKS[w.slug]}`}>
                    {capabilities.find((c) => c.slug === LINKS[w.slug])?.title}
                  </TextLink>
                </div>
              </div>
            </div>
          </div>
        </Band>
      ))}

      {/* Shaping a session */}
      <Band ground="night" rhythm="tight">
        <div className="shell">
          <BandHead
            label="Shaping a session"
            heading="None of these arrive off the shelf."
            night
            standfirst={
              <>
                No duration and no price is quoted anywhere on this site, because none is
                documented. Format is shaped around the group.
                <Src n={src.ref("editorial")} id="editorial" />
              </>
            }
          />

          <div className="egrid mt-10">
            <p className="t-lede col-span-6 md:col-span-6">
              Every one is shaped around what your group is actually stuck on, how much time you
              have, and whether they are in a room together. Tell him the situation and he will
              say which of these is the right starting point — or whether it is a different
              session entirely.
            </p>

            <div className="col-span-6 md:col-span-5 md:col-start-8">
              <h2 className="t-label border-b border-night-rule pb-2 text-night-accent">
                Or a keynote
              </h2>
              <Register>
                {talks.map((t) => (
                  <RegisterRow
                    key={t.slug}
                    title={t.title}
                    right="Keynote"
                    href={`/speaking#${t.slug}`}
                    night
                  />
                ))}
              </Register>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
            <CtaButton href="/contact?inquiry=workshop" variant="night">
              Plan a Workshop
            </CtaButton>
            <CtaButton href="/speaking" variant="outlineNight">
              See speaking topics
            </CtaButton>
          </div>
        </div>
      </Band>

      <SourceNotes notes={src.notes} />
    </>
  );
}
