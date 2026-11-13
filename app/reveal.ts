import { useEffect } from "react";

/**
 * Scroll reveal: blocks below the first screen fade and rise into place as they
 * are scrolled into view. Everything here is an enhancement added by script:
 * without it (or with "reduce motion" switched on) the page simply shows as normal.
 */

/** What gets revealed. Items that share a parent are staggered one after another. */
const targets = [
  // Home
  ".mission-inner > *", ".section-top", ".news-card", ".highlight-frame", ".section-heading", ".game-card", ".join-cta > *",
  // Lists and cards on the other pages
  ".news-row", ".member-card", ".tool-card", ".gallery-item", ".toolkit-category-heading", ".icg-section-title",
  ".standings-table-wrap", ".rule-table-wrap", ".schedule-table-wrap", ".results-table-wrap", ".scoring-strip",
  ".format-grid article", ".rule-card", ".snapshot-grid article", ".join-panel", ".qr-panel", ".faq details", ".registration-cta > *",
  // Articles
  ".article-body > section", ".article-body > figure", ".article-body > div",
].join(",");

const staggerStep = 70;   // milliseconds between neighbouring items
const staggerMax = 420;
const duration = 700;     // keep in sync with .reveal in globals.css

export function useReveal(route: string) {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: number[] = [];
    const show = (element: HTMLElement) => {
      element.classList.add("is-visible");
      // Once it has arrived, hand the element back to its normal styles (hover effects and so on).
      const delay = parseFloat(element.style.transitionDelay) || 0;
      timers.push(window.setTimeout(() => {
        element.classList.remove("reveal", "is-visible");
        element.style.transitionDelay = "";
      }, duration + delay + 80));
    };

    let observerWorks = false;
    const observer = new IntersectionObserver(entries => {
      observerWorks = true;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        show(entry.target as HTMLElement);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    const perParent = new Map<Element, number>();
    for (const element of document.querySelectorAll<HTMLElement>(targets)) {
      // Leave what is already on screen alone; the page-enter animation covers it.
      if (element.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
      const parent = element.parentElement ?? document.body;
      const index = perParent.get(parent) ?? 0;
      perParent.set(parent, index + 1);
      element.style.transitionDelay = `${Math.min(index * staggerStep, staggerMax)}ms`;
      element.classList.add("reveal");
      observer.observe(element);
    }

    // Safety net: a working observer reports back within a moment of being set up.
    // If it never does (the page is not being drawn), show everything rather than leave it hidden.
    timers.push(window.setTimeout(() => {
      if (observerWorks) return;
      observer.disconnect();
      document.querySelectorAll<HTMLElement>(".reveal").forEach(element => {
        element.classList.remove("reveal", "is-visible");
        element.style.transitionDelay = "";
      });
    }, 1500));

    return () => {
      observer.disconnect();
      timers.forEach(timer => window.clearTimeout(timer));
      document.querySelectorAll<HTMLElement>(".reveal").forEach(element => {
        element.classList.remove("reveal", "is-visible");
        element.style.transitionDelay = "";
      });
    };
  }, [route]);
}
