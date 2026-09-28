import { Band, CtaButton, SectionHead } from "@/components/ui";
import { FinalCta, PageHero } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { collaborationStructures, whatWazaBrings, whoItFits } from "@/content/ventures";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Venture partnerships",
  description:
    "Some ideas are better built as partnerships. Columbus selectively partners on promising ideas and platforms through business design, commercialization support and strategic guidance.",
  path: "/ventures",
});

/**
 * Ventures.
 *
 * Short on purpose. This is a pathway, not a fund — the page's job is to tell
 * the right person that a different kind of conversation is available, then
 * get out of the way. Nothing here claims capital, a portfolio or a completed
 * partnership, because there is none to claim.
 */
export default function VenturesPage() {
  return (
    <>
      <PageHero
        label="Venture partnerships"
        heading="Some ideas are better built as partnerships."
        standfirst="Columbus selectively partners on promising ideas and platforms — contributing business design, commercialization support, market positioning and strategic guidance where he can genuinely move the outcome."
        actions={
          <CtaButton href="/contact?inquiry=other" variant="night">
            Start a Conversation
          </CtaButton>
        }
      />

      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="What Columbus brings" heading="More than an engagement." />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-3">
            {whatWazaBrings.map((item, i) => (
              <li
                key={item.title}
                className="card reveal h-full p-7 md:p-8"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h2 className="t-h4 text-ink">{item.title}</h2>
                <p className="t-small mt-3">{item.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <div className="egrid gap-y-14">
            <div className="col-span-6 md:col-span-5">
              <SectionHead label="Who it fits" heading="Builders, not buyers." headingClass="t-h2" />
              <ul className="mt-9 space-y-5">
                {whoItFits.map((w) => (
                  <li key={w} className="t-small border-b border-rule pb-5 last:border-0">
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 md:col-start-7">
              <SectionHead
                label="How collaboration may work"
                heading="Structure follows the opportunity."
                headingClass="t-h2"
              />
              <p className="t-small mt-6 measure-sm">
                Every one of these is negotiated rather than offered off a shelf. WAZA is not
                a fund and holds no portfolio; this is a way of working, offered selectively.
              </p>
              <ul className="mt-9 flex flex-wrap gap-3">
                {collaborationStructures.map((label) => (
                  <li
                    key={label}
                    className="rounded-[var(--radius-btn)] border border-rule-strong bg-paper px-4 py-2.5 text-[0.9375rem] text-ink"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Have something worth exploring?"
        body="Start a conversation. Early is better than polished."
        showVentures={false}
      />
    </>
  );
}
