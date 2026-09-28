import { DefinitionBlock, Register, RegisterRow } from "@/components/modules";
import { SystemEvolution, WazaDuality } from "@/components/art/figures";
import { HeroSystems } from "@/components/art/hero-systems";
import { Src, SourceNotes } from "@/components/provenance";
import { Reveal } from "@/components/reveal";
import { Band, BandHead, CtaButton, Kicker, TextLink } from "@/components/ui";
import { FinalCta, PageHero, Portrait } from "@/components/sections";
import { about, documentedSpeakerIntro, documentedTagline } from "@/content/bio";
import { visibleCertifications, visibleEducation } from "@/content/credentials";
import {
  experienceDomains,
  experienceStatement,
  focusAreas,
  selectedRoles,
  showEmployerNames,
} from "@/content/experience";
import { lexicon } from "@/content/lexicon";
import { engagements, talks } from "@/content/speaking";
import { sourceIndex } from "@/content/sources";
import { workshops } from "@/content/workshops";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Columbus Brown",
  description:
    "An engineer who kept asking business questions. Columbus Brown II on the route from aircraft design to enterprise strategy, business architecture and transformation leadership.",
  path: "/about",
});

const src = sourceIndex([
  "speaker-profile",
  "public-profile",
  "editorial",
  "waza-site",
  "client-brief",
  "needs-review",
]);

const CONTENTS = [
  { n: "§1", id: "position", label: "Position", note: "What he does and for whom" },
  { n: "§2", id: "route", label: "Route", note: "Engineering to enterprise" },
  { n: "§3", id: "method", label: "Method", note: "Discover · Unstick · Navigate" },
  { n: "§4", id: "experience", label: "Experience", note: "Selected roles and focus" },
  { n: "§5", id: "record", label: "Record", note: "Education, credentials, engagements" },
  { n: "§6", id: "why-waza", label: "The name", note: "Why the practice is called WAZA" },
];

/**
 * About.
 *
 * Deliberately the deepest page on the site. Readers sample one or two pages
 * and generalise from the most thorough thing they hit, so a small practice is
 * better served by one genuinely heavyweight artefact than by eight moderately
 * good ones. Sections are numbered like a report; provenance runs in the margin.
 */
export default function AboutPage() {
  return (
    <>
      {/* Masthead */}
      <PageHero
        kicker="Columbus Brown II, MBA, CBA®"
        heading={<>An engineer&rsquo;s mind. A strategist&rsquo;s perspective.</>}
        standfirst={
          <>
            &ldquo;{documentedTagline}&rdquo;
            <Src n={src.ref("speaker-profile")} id="speaker-profile" />
          </>
        }
        aside={<Portrait slot="about" priority />}
      />

      {/* The four converging systems, and the contents plate. */}
      <Band ground="paper" rhythm="tight">
        <div className="shell">
          <figure>
            <HeroSystems />
          </figure>

          <nav aria-label="Contents" className="mt-10 border-t-2 border-ink pt-4">
            <h2 className="t-label text-faint">Contents</h2>
            <ol className="mt-3 grid md:grid-cols-6">
              {CONTENTS.map((c, i) => (
                <li key={c.id} className={i > 0 ? "md:border-l md:border-rule md:pl-4" : ""}>
                  <a href={`#${c.id}`} className="group block border-t border-rule py-3 md:border-t-0">
                    <span className="t-label-sm text-accent">{c.n}</span>
                    <span className="mt-1.5 block font-display text-[1.0625rem] text-ink transition-colors group-hover:text-accent">
                      {c.label}
                    </span>
                    <span className="meta mt-1 block">{c.note}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Band>

      {/* §1 Position */}
      <Band id="position" rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-2">
              <h2 className="t-h2 text-ink">
                <span className="t-label mb-3 block text-accent">§1</span>
                Position
              </h2>
            </div>

            <div className="col-span-6 has-rail md:col-span-6 md:col-start-3">
              <p className="t-lede measure">{about.intro[0]}</p>

              <aside className="sidenote">
                Everything on this page traces to a documented source. Where a claim rests on a
                page that could not be opened directly, it says so.
                <Src n={src.ref("editorial")} id="editorial" />
              </aside>

              <p className="t-body measure mt-5">{about.intro[1]}</p>
              <p className="t-body measure mt-5">{about.bridge[0]}</p>
              <p className="t-body measure mt-5">{about.bridge[1]}</p>

              <blockquote className="mt-8 border-l-2 border-accent pl-6">
                <p className="font-display text-[1.1875rem] leading-[1.45] text-ink md:text-[1.375rem]">
                  {documentedSpeakerIntro}
                </p>
                <cite className="meta mt-4 block not-italic">
                  Speaker profile, verbatim
                  <Src n={src.ref("speaker-profile")} id="speaker-profile" />
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </Band>

      {/* §2 Route */}
      <Band id="route" ground="paper2" rhythm="tight" rule>
        <div className="shell">
          <BandHead
            n="§2"
            label="Route"
            heading="Each step changed the size of the system, not the way of thinking about it."
            headingClass="t-h2"
            standfirst={
              <>
                No dates, no employers, no titles. What changed at each step is the point.
                <Src n={src.ref("editorial")} id="editorial" />
              </>
            }
          />

          <Reveal className="mt-10">
            <figure className="reveal">
              <SystemEvolution />
              <figcaption className="meta mt-6">
                The same way of seeing, pointed at successively larger systems
              </figcaption>
            </figure>
          </Reveal>

          <div className="egrid mt-10 border-t border-rule pt-8">
            <p className="t-body col-span-6 measure md:col-span-6">
              {experienceStatement}
              <Src n={src.ref("public-profile")} id="public-profile" />
            </p>
            <ul className="col-span-6 flex flex-wrap gap-2 self-start md:col-span-5 md:col-start-8">
              {experienceDomains.map((d) => (
                <li key={d} className="meta border border-rule-strong px-2 py-1">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* §3 Method */}
      <Band id="method" ground="night" rhythm="tight">
        <div className="shell">
          <BandHead
            n="§3"
            label="Method"
            heading="Discover. Unstick. Navigate."
            night
            standfirst={
              <>
                Not a framework with a trademark — a sentence from his own speaker profile that
                happens to describe exactly how the work runs.
                <Src n={src.ref("speaker-profile")} id="speaker-profile" />
              </>
            }
          />

          <blockquote className="mt-9 border-l-2 border-night-accent pl-6">
            <p className="font-display text-[1.125rem] leading-relaxed text-night-ink md:text-[1.3125rem]">
              &ldquo;Columbus enables your audience to <em className="not-italic text-night-accent">discover where they are</em>,
              helps them <em className="not-italic text-night-accent">get unstuck</em>, and{" "}
              <em className="not-italic text-night-accent">navigates them</em> towards achieving
              their strategic direction.&rdquo;
            </p>
            <cite className="meta mt-3 block not-italic">Speaker profile, verbatim</cite>
          </blockquote>

          <h3 className="t-label mt-12 text-night-accent">{about.philosophy.heading}</h3>
          <ol className="register mt-4">
            {about.philosophy.principles.map((p, i) => (
              <li key={p.title}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-4 md:grid-cols-[2.5rem_18rem_1fr] md:gap-x-8">
                  <span className="t-label-sm pt-1.5 text-night-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-[1.125rem] leading-snug text-night-ink">
                    {p.title}
                  </h4>
                  <p className="t-small col-start-2 mt-2 md:col-start-3 md:mt-0">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* His own vocabulary, as a glossary */}
          <h3 className="t-label mt-12 text-night-accent">In his own words</h3>
          <dl className="mt-4 grid gap-x-8 border-t border-night-rule md:grid-cols-2">
            {lexicon.slice(0, 6).map((l) => (
              <div key={l.term} className="border-b border-night-rule py-4">
                <dt className="t-label-sm text-night-ink">{l.term}</dt>
                <dd className="t-small mt-2">
                  &ldquo;{l.phrase}&rdquo;
                  <span className="meta mt-1 block">{l.from}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="meta mt-4">
            All quoted verbatim
            <Src n={src.ref("speaker-profile")} id="speaker-profile" />
          </p>
        </div>
      </Band>

      {/* §4 Record */}
      {/* §4 Selected experience */}
      <Band id="experience" ground="night2" rhythm="normal" rule className="aura">
        <div className="shell">
          <BandHead
            n="§4"
            label="Experience"
            heading="Selected roles."
            headingClass="t-h2"
            night
            standfirst={
              <>
                A curated selection rather than a full employment history, and no dates — we
                hold none we can verify.
                <Src n={src.ref("client-brief")} id="client-brief" />
              </>
            }
          />

          {showEmployerNames ? (
            <Reveal as="ol" className="mt-10 md:mt-14">
              {selectedRoles.map((role, i) => (
                <li
                  key={role.title + role.org}
                  className="reveal grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-night-rule py-4 md:grid-cols-[3rem_1fr_16rem] md:gap-x-8"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="t-label-sm pt-1.5 text-night-numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-[1.0625rem] leading-snug text-night-ink md:text-[1.1875rem]">
                      {role.title}
                    </span>
                    <span className="meta mt-1 block">{role.org}</span>
                  </span>
                  {role.note ? (
                    <span className="t-small col-start-2 mt-2 block text-night-muted md:col-start-3 md:mt-0">
                      {role.note}
                    </span>
                  ) : null}
                </li>
              ))}
            </Reveal>
          ) : null}

          <div className="mt-12 border-t border-night-rule pt-8">
            <Kicker tone="night">Focus</Kicker>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {focusAreas.map((f) => (
                <li key={f} className="t-label-sm text-night-muted">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      <Band id="record" rhythm="tight" rule>
        <div className="shell">
          <BandHead
            n="§5"
            label="Record"
            heading="Education, credentials and a documented speaking history."
            headingClass="t-h2"
            standfirst={
              <>
                Listed plainly. Nothing here is a badge, and nothing implies a client
                relationship.
              </>
            }
          />

          <div className="egrid mt-10">
            <div className="col-span-6 md:col-span-4">
              <h3 className="t-label border-b border-rule pb-2 text-faint">Education</h3>
              <dl className="register">
                {visibleEducation.map((c) => (
                  <div key={c.label} className="border-b border-rule py-3">
                    <dt className="font-display text-[1.0625rem] text-ink">{c.label}</dt>
                    <dd className="meta mt-1">{c.detail}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="t-label mt-8 border-b border-rule pb-2 text-faint">
                Credentials
              </h3>
              <dl className="register">
                {visibleCertifications.map((c) => (
                  <div key={c.label} className="border-b border-rule py-3">
                    <dt className="font-display text-[1.0625rem] text-ink">{c.label}</dt>
                    {c.detail ? <dd className="meta mt-1">{c.detail}</dd> : null}
                  </div>
                ))}
              </dl>
              <p className="t-tiny mt-3">
                Supplied by the client for this build. Awaiting Columbus&rsquo;s confirmation
                before launch.
                <Src n={src.ref("client-brief")} id="client-brief" />
              </p>
            </div>

            <div className="col-span-6 md:col-span-7 md:col-start-6">
              <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-2">
                <h3 className="t-label text-faint">Selected engagements</h3>
                <span className="meta">2015–2019 · {engagements.length} entries</span>
              </div>
              <ul className="register">
                {engagements.map((e) => (
                  <li key={e.organization}>
                    <span className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-3">
                      <span>
                        <span className="block font-display text-[1.0625rem] leading-snug text-ink">
                          {e.organization}
                        </span>
                        <span className="meta mt-1 block">
                          {[e.detail, e.locations].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                      <span className="meta tabular whitespace-nowrap text-right">{e.years}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="t-tiny mt-3">
                Speaking history from his published speaker profile.
                <Src n={src.ref("speaker-profile")} id="speaker-profile" /> Not client
                relationships and not endorsements.
              </p>
            </div>
          </div>

          {/* The catalogue, cross-linked */}
          <div className="egrid mt-12 border-t-2 border-ink pt-6">
            <div className="col-span-6 md:col-span-3">
              <h3 className="t-label text-accent">The catalogue</h3>
              <p className="t-tiny measure-xs mt-3">
                Nine documented sessions, developed and delivered between 2015 and 2019.
              </p>
            </div>
            <div className="col-span-6 md:col-span-4">
              <Register>
                {talks.map((t) => (
                  <RegisterRow
                    key={t.slug}
                    title={t.title}
                    href={`/speaking#${t.slug}`}
                    compact
                  />
                ))}
              </Register>
            </div>
            <div className="col-span-6 md:col-span-4 md:col-start-9">
              <Register>
                {workshops.map((w) => (
                  <RegisterRow
                    key={w.slug}
                    title={w.title}
                    href={`/workshops#${w.slug}`}
                    compact
                  />
                ))}
              </Register>
            </div>
          </div>
        </div>
      </Band>

      {/* §6 The name */}
      <Band id="why-waza" ground="paper2" rhythm="tight" rule>
        <div className="shell">
          <div className="egrid">
            <div className="col-span-6 md:col-span-5">
              <span className="t-label block text-accent">§6</span>
              <figure className="mt-5">
                <WazaDuality className="w-full" />
                <figcaption className="meta mt-3">
                  Technique and imagination in one frame
                </figcaption>
              </figure>
              <div className="mt-8">
                <DefinitionBlock />
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <h2 className="t-h2 text-ink">Good form. Technique. Thinking differently.</h2>
              <p className="t-body measure mt-5">
                Both halves are the job. Difficult organizational problems need disciplined
                technique, and they need somebody willing to look at them differently. Rigour
                without imagination produces a very well-made answer to the wrong question.
                Imagination without rigour produces a good idea nobody can execute.
                <Src n={src.ref("waza-site")} id="waza-site" />
              </p>
              <p className="t-body measure mt-5">
                There is a second reason the name matters. One of Columbus&rsquo;s own keynotes
                argues that understanding why a thing was named is the key to moving it. The
                practice is an instance of its own argument.
              </p>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <CtaButton href="/speaking#power-of-a-name" variant="outline">
                  The keynote it comes from
                </CtaButton>
              </div>
              <div className="mt-6">
                <TextLink href="/advisory">See the advisory capabilities</TextLink>
              </div>
            </div>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Work with Columbus."
        body="Advisory, workshops or a keynote — start with the problem."
      />

      <SourceNotes notes={src.notes} />
    </>
  );
}
