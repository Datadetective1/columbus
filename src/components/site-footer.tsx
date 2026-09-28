import Link from "next/link";
import { capabilities } from "@/content/capabilities";
import { site } from "@/content/site";
import { social } from "@/content/social";
import { talks } from "@/content/speaking";
import { waza } from "@/content/waza";
import { workshops } from "@/content/workshops";
import { WazaMark } from "./waza-mark";

/**
 * The footer as a printed sitemap.
 *
 * Navigation chrome is read as an inventory: a footer naming every holding
 * reads as an organisation with holdings. It is also the no-JavaScript
 * fallback for the header’s disclosure panels — everything reachable there is
 * reachable here, without a script.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const links = social.filter((s) => s.enabled);

  const columns = [
    {
      heading: "Advisory",
      items: capabilities.map((c) => ({
        label: c.title,
        href: `/advisory/${c.slug}`,
        meta: "",
      })),
    },
    {
      heading: "Speaking",
      items: [
        ...talks.map((t) => ({ label: t.title, href: `/speaking#${t.slug}`, meta: "" })),
        { label: "Selected engagements", href: "/speaking#record", meta: "" },
      ],
    },
    {
      heading: "Workshops",
      items: workshops.map((w) => ({
        label: w.title,
        href: `/workshops#${w.slug}`,
        meta: "",
      })),
    },
    {
      heading: "The practice",
      items: [
        { label: "About Columbus", href: "/about", meta: "" },
        { label: "Venture partnerships", href: "/ventures", meta: "" },
        { label: "Why WAZA", href: "/about#why-waza", meta: "" },
        { label: "Working notes", href: "/insights", meta: "" },
        { label: "Start a conversation", href: "/contact", meta: "" },
      ],
    },
  ];

  return (
    <footer className="on-night">
      <div className="shell band-tight">
        <div className="egrid">
          {columns.map((col) => (
            <nav
              key={col.heading}
              aria-label={col.heading}
              className="col-span-6 md:col-span-3"
            >
              <h2 className="t-label border-b border-night-rule pb-2 text-night-accent">
                {col.heading}
              </h2>
              <ul>
                {col.items.map((item) => (
                  <li key={item.href + item.label} className="border-b border-night-rule">
                    <Link
                      href={item.href}
                      className="row-link group flex items-baseline justify-between gap-3 py-2"
                    >
                      <span className="text-[0.875rem] leading-snug text-night-ink/85 transition-colors group-hover:text-night-accent">
                        {item.label}
                      </span>
                      {item.meta ? <span className="meta shrink-0">{item.meta}</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Colophon */}
        <div className="egrid mt-12 border-t border-night-rule pt-8">
          <div className="col-span-6 md:col-span-5">
            <span className="inline-flex items-baseline gap-2.5 text-night-ink">
              <WazaMark className="h-[16px] w-[24px] translate-y-[2px]" />
              <span className="font-display text-[1.25rem] leading-none tracking-[0.09em]">
                WAZA
              </span>
            </span>
            <p className="meta mt-3">Strategy · Transformation · Leadership · Execution</p>
            <p className="t-tiny mt-4 max-w-[34ch]">
              <span className="text-night-ink">{waza.word}</span>{" "}
              <span className="italic">{waza.partOfSpeech}</span> — {waza.definitions[0]};{" "}
              {waza.definitions[1]}.
            </p>
          </div>

          <div className="col-span-3 md:col-span-2 md:col-start-7">
            <h2 className="t-label text-night-muted">Elsewhere</h2>
            <ul className="mt-3 space-y-2">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.875rem] text-night-ink/85 transition-colors hover:text-night-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3 md:col-span-3 md:col-start-10">
            <h2 className="t-label text-night-muted">Founder</h2>
            <p className="t-tiny mt-3">
              {site.personName}, MBA, CBA®
              <br />
              BS Mechanical Engineering · MBA Finance
              <br />
              LeTourneau University
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-night-rule pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">
            © {year} {site.legalName}
          </p>
          <Link href="/privacy" className="meta link-underline hover:text-night-ink">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
