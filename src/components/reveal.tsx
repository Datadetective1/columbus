"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Adds `is-in` to the wrapper once it enters the viewport, which lets CSS handle
 * the animation (see .reveal / .rule-draw in globals.css).
 *
 * Three deliberate properties:
 *  - The class is written straight to the DOM rather than held in React state.
 *    The DOM is the external system here, so there is nothing for React to
 *    re-render, and no cascading render.
 *  - Threshold is 0, not a fraction. A wrapper taller than the viewport can
 *    never reach a fractional intersection ratio, which silently strands tall
 *    sections as permanently blank.
 *  - The hidden starting state is scoped to `html.js` in CSS, so if JavaScript
 *    fails or is blocked the content is simply visible rather than invisible.
 *
 * It observes once, then disconnects.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  threshold = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver, or motion is unwelcome: show it immediately.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
