"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, primaryCta, site } from "@/content/site";

/**
 * Sticky masthead.
 *
 * Five destinations and one call to action, over a dark register. Every page
 * opens with a navy hero band, which is what lets the bar sit transparent at
 * the top of the page and go solid once you have scrolled past it.
 *
 * The lifted state is driven by an IntersectionObserver on a one-pixel sentinel
 * rather than a scroll handler — no listener firing at 60Hz, and no layout
 * thrash. The solid state is the no-JS default: a legible bar is the safe
 * fallback, a transparent one is not.
 *
 * The mobile menu is a click-and-keyboard disclosure, never hover.
 */
export function SiteHeader() {
  const pathname = usePathname();

  // The menu records the route it opened on, so navigating closes it by
  // derivation rather than by resetting state from an effect.
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const open = menu.open && menu.path === pathname;

  const [lifted, setLifted] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setLifted(!entry.isIntersecting),
      { rootMargin: "0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Escape closes the menu and returns focus to the control that opened it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu({ open: false, path: pathname });
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, pathname]);

  // The menu covers the viewport, so the page behind it must not scroll.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Watched by the observer above. Zero height, so it changes no layout. */}
      <div ref={sentinelRef} aria-hidden="true" className="-mb-px h-px w-full" />

      <header
        className="masthead on-night border-b"
        data-lifted={lifted || open ? "true" : "false"}
      >
        <div className="shell flex h-[var(--masthead-h)] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-baseline gap-2.5"
            aria-label={`${site.personShortName} — home`}
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 translate-y-[-0.1rem] bg-night-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45"
            />
            <span className="font-display text-[1.0625rem] tracking-[-0.02em] text-night-ink sm:text-[1.1875rem]">
              {site.personShortName}
            </span>
          </Link>

          {/* ---------------------------------------------------- desktop */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    data-active={isCurrent(item.href)}
                    className="link-grow py-2 text-[0.9375rem] text-night-ink transition-colors duration-300 hover:text-night-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[2.75rem] items-center rounded-[2px] bg-night-accent px-5 text-[0.875rem] font-medium tracking-[-0.01em] text-night transition-colors duration-300 hover:bg-night-ink"
            >
              {primaryCta.label}
            </Link>
          </div>

          {/* ----------------------------------------------------- mobile */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenu({ open: !open, path: pathname })}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-night-ink lg:hidden"
          >
            <span className="t-label-sm">{open ? "Close" : "Menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="on-night fixed inset-x-0 bottom-0 top-[var(--masthead-h)] z-40 overflow-y-auto bg-night lg:hidden"
        >
          <nav aria-label="Primary" className="shell py-8">
            <ul>
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-night-rule">
                  <Link
                    href={item.href}
                    onClick={() => setMenu({ open: false, path: pathname })}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-5 text-night-ink"
                  >
                    <span className="t-label-sm w-6 shrink-0 text-night-numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="t-h3">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={primaryCta.href}
              onClick={() => setMenu({ open: false, path: pathname })}
              className="mt-8 inline-flex min-h-[3rem] w-full items-center justify-center rounded-[2px] bg-night-accent px-6 font-medium text-night"
            >
              {primaryCta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
