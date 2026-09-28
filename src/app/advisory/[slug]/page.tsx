import { notFound } from "next/navigation";
import Link from "next/link";
import { Band, CtaButton, SectionHead, TextLink } from "@/components/ui";
import { FinalCta, PageHero } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { capabilities } from "@/content/capabilities";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = capabilities.find((x) => x.slug === slug);
  if (!c) return buildMetadata({ title: "Advisory", description: "", path: "/advisory" });
  return buildMetadata({
    title: c.title,
    description: c.short,
    path: `/advisory/${c.slug}`,
  });
}

/**
 * One advisory capability.
 *
 * Four plain blocks: what it sounds like, what gets clear, what is actually
 * done, what it aims at. The previous version wrapped the same content in a
 * capability-focus diagram, a catalogue code, a running head and a margin
 * citation apparatus.
 */
export default async function CapabilityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = capabilities.find((x) => x.slug === slug);
  if (!c) notFound();

  const others = capabilities.filter((x) => x.slug !== c.slug);

  return (
    <>
      <PageHero
        label="Advisory"
        heading={c.title}
        standfirst={c.lede}
        actions={
          <CtaButton href="/contact?inquiry=advisory" variant="night">
            Start a Conversation
          </CtaButton>
        }
      />

      {/* What it sounds like. */}
      <Band ground="paper" rhythm="normal">
        <div className="shell">
          <div className="egrid gap-y-10">
            <div className="col-span-6 md:col-span-4">
              <SectionHead label="Heard as" heading="What it sounds like." headingClass="t-h2" />
            </div>
            <ul className="col-span-6 space-y-6 md:col-span-7 md:col-start-6">
              {c.challenges.map((q) => (
                <li key={q} className="font-display text-[1.25rem] leading-snug text-ink md:text-[1.4375rem]">
                  &ldquo;{q}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>

      {/* What the work is. */}
      <Band ground="paper2" rhythm="normal">
        <div className="shell">
          <Reveal>
            <SectionHead label="The work" heading="What actually happens." />
          </Reveal>

          <Reveal as="ul" className="mt-14 grid gap-7 md:mt-18 md:grid-cols-3">
            {c.work.map((w, i) => (
              <li
                key={w.title}
                className="card reveal h-full p-7 md:p-8"
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="t-h4 text-ink">{w.title}</h3>
                <p className="t-small mt-3">{w.body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </Band>

      {/* What gets clear, and what it aims at. */}
      <Band ground="night" rhythm="normal">
        <div className="shell">
          <div className="egrid gap-y-14">
            <div className="col-span-6 md:col-span-6">
              <SectionHead label="What gets clear" heading="By the end." headingClass="t-h2" night />
              <ul className="mt-9 space-y-5">
                {c.clarifies.map((x) => (
                  <li key={x} className="t-small border-b border-night-rule pb-5 last:border-0">
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6 md:col-span-5 md:col-start-8">
              <SectionHead label="What it aims at" heading="Never a guarantee." headingClass="t-h2" night />
              <ul className="mt-9 space-y-5">
                {c.aims.map((x) => (
                  <li key={x} className="t-small border-b border-night-rule pb-5 last:border-0">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Band>

      {/* The other four. */}
      <Band ground="paper" rhythm="tight">
        <div className="shell">
          <h2 className="t-h2 text-ink">The other four.</h2>
          <ul className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug} className="h-full">
                <Link href={`/advisory/${o.slug}`} className="card card-link group h-full p-6">
                  <h3 className="t-h4 text-ink transition-colors group-hover:text-accent">
                    {o.title}
                  </h3>
                  <p className="t-small mt-3">{o.short}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <TextLink href="/advisory">All advisory capabilities</TextLink>
          </div>
        </div>
      </Band>

      <FinalCta
        heading="Tell him what is stuck."
        body="A first conversation is about the problem, not the proposal."
      />
    </>
  );
}
