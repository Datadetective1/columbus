import Link from "next/link";
import { nav, site } from "@/content/site";
import { social } from "@/content/social";
import { WazaWordmark } from "./waza-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const links = social.filter((s) => s.enabled);

  return (
    <footer className="on-night">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <WazaWordmark className="text-night-ink" />
            <p className="t-label mt-5 text-night-muted">
              Strategy • Transformation • Leadership
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-4">
            <h2 className="t-label text-night-muted">Site</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.9375rem] text-night-ink/85 transition-colors hover:text-night-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="link-underline text-[0.9375rem] text-night-ink/85 transition-colors hover:text-night-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
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

        <hr className="rule mt-16 border-night-rule" />

        <div className="mt-6 flex flex-col gap-3 text-[0.8125rem] text-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <Link href="/privacy" className="link-underline transition-colors hover:text-night-ink">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
