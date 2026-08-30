"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, primaryCta, site } from "@/content/site";
import { WazaWordmark } from "./waza-mark";

export function SiteHeader() {
  const pathname = usePathname();
  // The menu records which route it was opened on, so navigating away closes it
  // by derivation rather than by resetting state from an effect.
  const [menu, setMenu] = useState({ open: false, path: pathname });
  const open = menu.open && menu.path === pathname;
  const setOpen = (next: boolean) => setMenu({ open: next, path: pathname });

  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile panel is open: lock scroll, trap Escape, restore focus.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu({ open: false, path: pathname });
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-rule bg-paper/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        <Link
          href="/"
          className="shrink-0 text-ink transition-opacity duration-300 hover:opacity-70"
          aria-label={`${site.brandName} — home`}
        >
          <WazaWordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                aria-current={active ? "page" : undefined}
                className="link-grow text-[0.9375rem] text-ink/85 transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={primaryCta.href}
            className="inline-flex min-h-[2.75rem] items-center rounded-[2px] border border-ink px-5 py-2.5 text-[0.875rem] font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            {primaryCta.label}
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel. Kept in the DOM but hidden so the toggle stays associated. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-rule bg-paper lg:hidden"
      >
        <nav aria-label="Primary, mobile" className="shell flex flex-col py-3">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="flex min-h-[3.5rem] items-center justify-between border-b border-rule text-[1.375rem] font-display tracking-[-0.015em] text-ink"
              >
                {item.label}
                {active ? <span className="t-label text-accent">Now</span> : null}
              </Link>
            );
          })}
          <Link
            href={primaryCta.href}
            className="mt-6 mb-4 inline-flex min-h-[3.25rem] items-center justify-center rounded-[2px] bg-ink px-6 text-[0.9375rem] font-medium text-paper"
          >
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
