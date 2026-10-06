import { products } from "../content/products";
import { linkHandler } from "../lib/router";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-k grid grid-cols-1 items-center gap-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-7">
          <p className="eyebrow rise">Kapeta Labs — Technology company</p>
          <h1
            id="hero-title"
            className="rise mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[5.25rem]"
            style={{ animationDelay: "60ms" }}
          >
            We build products that solve real problems.
          </h1>
          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            Kapeta Labs is a technology company building digital products and platforms across industries.
          </p>
          <div
            className="rise mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href="#products"
              onClick={linkHandler("#products")}
              className="group on-ink inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-ink-soft"
            >
              Explore our products <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="#about"
              onClick={linkHandler("#about")}
              className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink underline decoration-line underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              About Kapeta Labs <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none" style={{ animationDelay: "300ms" }}>
          <HeroVisual />
        </div>
      </div>

      {/* Portfolio index */}
      <div className="border-y border-line">
        <div className="container-k flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-10">
          <span className="eyebrow shrink-0">Portfolio</span>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {products.map((p, i) => (
              <li key={p.id}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2.5 text-[0.9375rem] font-medium"
                >
                  <span className="font-mono text-[0.6875rem] text-mist">0{i + 1}</span>
                  {p.name}
                  <span className="arrow text-mist" aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
