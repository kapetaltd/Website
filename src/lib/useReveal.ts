import { useEffect } from "react";

/**
 * Fades [data-reveal] elements in as they scroll into view. Elements already
 * on screen at load are left untouched so the first frame is complete.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = els.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
    below.forEach((el) => el.classList.add("reveal-pending"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.reveal) || 0;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("reveal-done");
          el.classList.remove("reveal-pending");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    below.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
