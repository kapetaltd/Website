import { site } from "../content/site";
import { linkHandler, useRoute } from "../lib/router";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const route = useRoute();
  const prefix = route === "/" ? "" : "/";
  const links = [
    { label: "Products", href: prefix + "#products" },
    { label: "About", href: prefix + "#about" },
    { label: "Contact", href: prefix + "#contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-k flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="/" onClick={linkHandler("/#")} aria-label="Kapeta Labs — home" className="inline-block py-1">
            <Wordmark />
          </a>
          <p className="mt-4 text-sm text-mist">
            © {site.year} Kapeta Labs. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={linkHandler(l.href)}
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
