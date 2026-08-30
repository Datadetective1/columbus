import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaButton, Section, SectionLabel } from "@/components/ui";
import {
  categories,
  insightsIntro,
  plannedThemes,
  publishedInsights,
} from "@/content/insights";
import { social } from "@/content/social";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Working notes on strategy, transformation, technology, leadership, business architecture and teams from Columbus Brown.",
  path: "/insights",
});

export default function InsightsPage() {
  const hasContent = publishedInsights.length > 0;
  const linkedIn = social.find((s) => s.label === "LinkedIn" && s.enabled);

  return (
    <>
      <Section className="pt-14 md:pt-20 lg:pt-24">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" className="reveal">
              Insights
            </SectionLabel>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="t-h1 reveal text-ink">{insightsIntro.headline}</h1>
              </div>
              <div className="lg:col-span-5">
                <p className="t-lede reveal">{insightsIntro.body}</p>
              </div>
            </div>
          </Reveal>

          {/* Categories — the structure is real even while the shelf is empty. */}
          <Reveal className="mt-14">
            <h2 className="sr-only">Categories</h2>
            <ul className="reveal flex flex-wrap gap-x-3 gap-y-2.5 border-t border-rule pt-8">
              {categories.map((c) => (
                <li
                  key={c}
                  className="rounded-[2px] border border-rule px-3 py-1.5 text-[0.8125rem] text-muted"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-rule !pt-0">
        <div className="shell">
          {hasContent ? (
            <Reveal>
              <ol className="border-t border-rule">
                {publishedInsights.map((post, i) => (
                  <li key={post.slug} className="reveal border-b border-rule">
                    <Link
                      href={post.href ?? `/insights/${post.slug}`}
                      className="group grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                    >
                      <span className="t-label pt-2 text-faint md:col-span-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="md:col-span-5">
                        <span className="t-label text-accent">{post.category}</span>
                        <h2 className="t-h3 mt-3 text-ink transition-colors group-hover:text-accent">
                          {post.title}
                        </h2>
                      </div>
                      <div className="md:col-span-6">
                        <p className="t-body text-[1rem]">{post.excerpt}</p>
                        <p className="t-label mt-4 text-faint">
                          {post.kind}
                          {post.publishedAt
                            ? ` · ${new Date(post.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                              })}`
                            : " · Draft"}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </Reveal>
          ) : (
            <EmptyState />
          )}
        </div>
      </Section>

      <Section night className="border-t border-night-rule">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="t-h1 reveal text-night-ink">
              In the meantime, the conversation is the better version anyway.
            </h2>
            <p className="t-body reveal mt-7">
              Most of what would end up here starts as a question somebody asked in a meeting.
              {linkedIn ? " Columbus writes as things come up on LinkedIn." : ""}
            </p>
            <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="/contact" variant="night">
                Start a Conversation
              </CtaButton>
              {linkedIn ? (
                <a
                  href={linkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-[2px] border border-night-ink/35 px-6 py-3.5 text-[0.9375rem] font-medium text-night-ink transition-colors duration-300 hover:border-night-ink hover:bg-night-ink hover:text-night"
                >
                  Follow on LinkedIn
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

/**
 * The empty state.
 *
 * Deliberately honest: no invented articles, no invented dates. It says what is
 * being worked on, labelled as such, and still looks like a designed page.
 */
function EmptyState() {
  return (
    <Reveal>
      <div className="reveal border-t border-rule pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="t-h2 text-ink">{insightsIntro.emptyState.heading}</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-body">{insightsIntro.emptyState.body}</p>
          </div>
        </div>
      </div>

      <ol className="reveal mt-16 grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
        {plannedThemes.map((theme, i) => (
          <li
            key={theme.title}
            className="flex flex-col border-b border-rule py-8 sm:border-r sm:pr-8 sm:last:border-r-0"
          >
            <div className="flex items-center gap-3">
              <span className="t-label text-accent">{theme.category}</span>
              <span className="t-label text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="t-h3 mt-6 text-[1.1875rem] text-ink md:text-[1.3125rem]">
              {theme.title}
            </h3>
            <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
              {theme.note}
            </p>
            <p className="t-label mt-6 text-faint">In progress</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
