import { useState } from "react";
import { site } from "../content/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const range = document.createRange();
      const node = document.getElementById("contact-email");
      if (node) {
        range.selectNodeContents(node);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="container-k">
        <p className="eyebrow" data-reveal>
          Contact
        </p>
        <h2
          id="contact-title"
          className="mt-4 max-w-5xl text-[2.75rem] font-semibold leading-[1] tracking-[-0.04em] sm:text-7xl lg:text-[6rem]"
          data-reveal
        >
          Let’s build something meaningful.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-12" data-reveal="80">
          <div className="md:col-span-4">
            <p className="text-[0.9375rem] font-semibold">Kapeta Labs</p>
            <p className="mt-1 text-[0.9375rem] text-graphite">{site.domain}</p>
          </div>
          <div className="min-w-0 md:col-span-8">
            <p className="max-w-lg text-lg leading-relaxed text-graphite">
              For partnerships, investment, careers or anything else, write to us.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <a
                href={`mailto:${site.email}`}
                className="group on-ink inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-ink-soft"
              >
                Get in touch <span className="arrow" aria-hidden="true">→</span>
              </a>
              <div className="flex items-center gap-3">
                <span id="contact-email" className="font-mono text-[0.9375rem] break-all">
                  {site.email}
                </span>
                <button
                  type="button"
                  onClick={copy}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-graphite transition-colors hover:border-ink hover:text-ink"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? "Email address copied" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
