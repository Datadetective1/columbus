"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, primaryCta, site } from "@/content/site";
import { WazaMark } from "./waza-mark";

/**
 * The masthead.
 *
 * Two storeys, like a publication nameplate rather than a logo and a menu: the
 * name and its standing descriptor above, the sections below a rule. The point
 * is to assert that WAZA is a practice with an identity, which Columbus founded
 * — not a personal site with his name at the top.
 *
 * The expanded panels are a click-and-keyboard disclosure, never hover. Hover
 * menus fail on touch, fail for keyboard users, and fail with JavaScript off.
 * Every destination inside them is also printed in the footer sitemap.
 */
export function SiteHeader() {
  const pathname = usePathname();

  // Both menus record the route they opened on, so navigation closes them by
  // derivation rather than by resetting state from an effect.
  const [mobile, setMobile] = useState({ open: false, path: pathname });
  const [panel, setPanel] = useState<{ label: string | null; path: string }>({
    label: null,
    path: pathname,
  });

  const mobileOpen = mobile.open && mobile.path === pathname;
  const openPanel = panel.path === pathname ? panel.label : null;

  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes whichever is open; click outside closes the desktop panel.
  useEffect(() => {
    if (!openPanel && !mobileOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setPanel({ label: null, path: pathname });
      if (mobileOpen) {
        setMobile({ open: false, path: pathname });
        toggleRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setPanel({ label: null, path: pathname });
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openPanel, mobileOpen, pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-paper">
      {/* Storey 1 — nameplate */}
      <div className="shell flex items-center justify-between gap-6 py-3.5">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2.5 text-ink"
          aria-label={`${site.brandName} — home`}
        >
          <WazaMark className="h-[17px] w-[25px] translate-y-[2px]" />
          <span className="font-display text-[1.375rem] leading-none tracking-[0.09em]">
            WAZA
          </span>
        </Link>

        <p className="meta hidden lg:block">
          Strategy · Transformation · Leadership · Execution
        </p>

        <div className="flex items-center gap-5">
          <Link
            href={primaryCta.href}
            className="hidden min-h-[2.5rem] items-center rounded-[2px] border border-ink px-4 text-[0.8125rem] font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-paper sm:inline-flex"
          >
            {primaryCta.label}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobile({ open: !mobileOpen, path: pathname })}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="-mr-1 flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${
                  mobileOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ${
                  mobileOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Storey 2 — sections. Desktop only; on mobile the nameplate carries the
          rule and the menu button opens the same lists. */}
      <div className="border-b border-rule lg:border-y">
        <nav aria-label="Sections" className="shell hidden lg:block">
          <ul className="flex items-stretch">
            {nav.map((group) => {
              const isOpen = openPanel === group.label;
              return (
                <li key={group.href} className="relative">
                  <span className="flex items-stretch">
                    <Link
                      href={group.href}
                      aria-current={active(group.href) ? "page" : undefined}
                      className={`flex items-center py-3 pr-1 text-[0.9375rem] transition-colors duration-200 ${
                        active(group.href) ? "text-accent" : "text-ink/85 hover:text-ink"
                      } ${group === nav[0] ? "font-display text-[1.0625rem]" : ""}`}
                    >
                      {group.label}
                    </Link>
                    {group.panel ? (
                      <button
                        type="button"
                        onClick={() =>
                          setPanel({ label: isOpen ? null : group.label, path: pathname })
                        }
                        aria-expanded={isOpen}
                        aria-controls={`panel-${group.href.replace(/\W/g, "")}`}
                        className="flex items-center px-2.5 text-ink/60 transition-colors hover:text-ink"
                      >
                        <span className="sr-only">
                          {isOpen ? `Hide ${group.label} sections` : `Show ${group.label} sections`}
                        </span>
                        <svg
                          viewBox="0 0 10 6"
                          className={`h-[5px] w-[9px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.25" />
                        </svg>
                      </button>
                    ) : null}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-px transition-colors ${
                      active(group.href) ? "bg-accent" : "bg-transparent"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Disclosure panels — printed lists, not floating cards. */}
      {nav.map((group) =>
        group.panel && openPanel === group.label ? (
          <div
            key={group.href}
            id={`panel-${group.href.replace(/\W/g, "")}`}
            className="hidden border-b border-rule bg-paper lg:block"
          >
            <div className="shell py-8">
              <div className="egrid">
                {group.panel.map((col) => (
                  <div key={col.heading} className="col-span-6 md:col-span-4">
                    <h2 className="t-label border-b border-rule pb-2 text-faint">
                      {col.heading}
                    </h2>
                    <ul>
                      {col.items.map((item) => (
                        <li key={item.href} className="border-b border-rule">
                          <Link
                            href={item.href}
                            className="row-link group flex items-baseline justify-between gap-4 py-2.5"
                          >
                            <span className="text-[0.9375rem] text-ink transition-colors group-hover:text-accent">
                              {item.label}
                            </span>
                            {item.meta ? (
                              <span className="meta shrink-0">{item.meta}</span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null,
      )}

      {/* Mobile — the same printed lists, stacked. */}
      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-b border-rule bg-paper lg:hidden"
      >
        <nav aria-label="Sections, mobile" className="shell pb-8">
          {nav.map((group) => (
            <div key={group.href} className="border-b border-rule py-4">
              <Link
                href={group.href}
                aria-current={active(group.href) ? "page" : undefined}
                className="flex items-baseline justify-between gap-3"
              >
                <span className="font-display text-[1.5rem] tracking-[-0.015em] text-ink">
                  {group.label}
                </span>
                {active(group.href) ? <span className="t-label text-accent">Now</span> : null}
              </Link>
              {group.panel ? (
                <ul className="mt-3 space-y-1.5">
                  {group.panel.flatMap((c) => c.items).map((item) => (
                    <li key={item.href} className="flex items-baseline justify-between gap-3">
                      <Link href={item.href} className="t-small text-muted">
                        {item.label}
                      </Link>
                      {item.meta ? <span className="meta shrink-0">{item.meta}</span> : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <Link
            href={primaryCta.href}
            className="mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-[2px] bg-ink px-6 text-[0.9375rem] font-medium text-paper"
          >
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
