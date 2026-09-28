import Link from "next/link";
import { nav, primaryCta, site } from "@/content/site";
import { social } from "@/content/social";

/**
 * The footer.
 *
 * Reduced to what a visitor might actually want at the bottom of a page: where
 * to go next, how to get in touch, and who this is. The previous version was a
 * four-column printed sitemap listing every capability, keynote and workshop
 * with its catalogue code — an inventory, which is a publisher's instinct, not
 * a practice's.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const links = social.filter((s) => s.enabled);

  return (
    <footer className="on-night bg-night-2">
      <div className="shell band-tight">
        <div className="egrid gap-y-12">
          <div className="col-span-6 md:col-span-5">
            <p className="font-display text-[1.5rem] leading-none text-night-ink">
              {site.personName}
            </p>
            <p className="t-small mt-4 measure-sm">{site.descriptor}</p>
            <div className="mt-7">
              <Link
                href={primaryCta.href}
                className="inline-flex min-h-[3rem] items-center rounded-[var(--radius-btn)] bg-night-accent px-6 text-[0.9375rem] font-medium text-night transition-colors duration-300 hover:bg-night-ink"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>

          <nav aria-label="Footer" className="col-span-3 md:col-span-2 md:col-start-8">
            <h2 className="t-label text-night-muted">Site</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-night-ink/85 transition-colors hover:text-night-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-[0.9375rem] text-night-ink/85 transition-colors hover:text-night-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="col-span-3 md:col-span-3 md:col-start-10">
            <h2 className="t-label text-night-muted">Elsewhere</h2>
            <ul className="mt-5 space-y-3">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.9375rem] text-night-ink/85 transition-colors hover:text-night-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-night-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-tiny">
            © {year} {site.legalName}
          </p>
          <Link href="/privacy" className="t-tiny link-underline hover:text-night-ink">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
