import { site } from "../content/site";
import { linkHandler } from "../lib/router";
import { useTitle } from "./useTitle";

interface Props {
  title: string;
}

/**
 * PLACEHOLDER — replace with the final legal text once it has been prepared.
 */
export function LegalPlaceholder({ title }: Props) {
  useTitle(`${title} — Kapeta Labs`);

  return (
    <section aria-labelledby="legal-title" className="py-20 sm:py-28">
      <div className="container-k max-w-3xl">
        <a href="/" onClick={linkHandler("/#")} className="group inline-flex items-center gap-2 text-sm text-graphite hover:text-ink">
          <span aria-hidden="true">←</span> Back to home
        </a>
        <p className="eyebrow mt-12">Legal</p>
        <h1 id="legal-title" className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
          {title}
        </h1>
        <div className="mt-12 rounded-[18px] border border-dashed border-ink/25 p-8">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-mist">Placeholder</p>
          <p className="mt-3 text-lg leading-relaxed text-graphite">
            The {title} for {site.name} is being prepared and will be published on this page.
          </p>
        </div>
      </div>
    </section>
  );
}
