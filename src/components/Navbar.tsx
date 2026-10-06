import { useEffect, useRef, useState } from "react";
import { navLinks } from "../content/site";
import { linkHandler, useRoute } from "../lib/router";
import { Wordmark } from "./Wordmark";

export function Navbar() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Section links point at the home page when viewed from Privacy/Terms.
  const prefix = route === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-[env(safe-area-inset-top,0px)] z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-paper/85 backdrop-blur-md" : "border-transparent bg-paper"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="container-k flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="/" onClick={linkHandler("/#", close)} className="-mx-1 px-1 py-2" aria-label="Kapeta Labs — home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={prefix + l.href}
                  onClick={linkHandler(prefix + l.href)}
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={prefix + "#products"}
            onClick={linkHandler(prefix + "#products")}
            className="group inline-flex h-9 items-center gap-2 rounded-full border border-ink px-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Explore Products <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <ul className="container-k flex flex-col py-3">
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-line last:border-b-0">
              <a
                href={prefix + l.href}
                onClick={linkHandler(prefix + l.href, close)}
                className="flex items-center justify-between py-4 text-2xl font-medium tracking-tight"
              >
                {l.label}
                <span className="text-mist" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="container-k pb-6">
          <a
            href={prefix + "#products"}
            onClick={linkHandler(prefix + "#products", close)}
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-paper"
          >
            Explore Products <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
