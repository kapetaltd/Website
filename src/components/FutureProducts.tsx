import { products } from "../content/products";

const upcomingSlots = 3;

export function FutureProducts() {
  return (
    <section aria-labelledby="future-title" className="py-24 sm:py-32">
      <div className="container-k">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <h2 id="future-title" className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            And we’re just getting started.
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-graphite">
            {products.length === 3 ? "Three" : products.length} products live. More products are on the way.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-6" data-reveal="80">
          {products.map((p, i) => (
            <li key={p.id} className="flex min-h-[132px] flex-col justify-between bg-paper p-5">
              <span className="flex items-center gap-2 font-mono text-[0.6875rem] text-mist">
                {String(i + 1).padStart(2, "0")}
                <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />
                <span className="uppercase tracking-[0.14em]">Live</span>
              </span>
              <span className="text-lg font-semibold tracking-[-0.015em]">{p.name}</span>
            </li>
          ))}
          {Array.from({ length: upcomingSlots }, (_, i) => (
            <li
              key={`next-${i}`}
              className="relative flex min-h-[132px] flex-col justify-between bg-paper p-5"
              aria-label={i === 0 ? "Next product, coming soon" : "Future product"}
            >
              <span className="font-mono text-[0.6875rem] text-mist">{String(products.length + i + 1).padStart(2, "0")}</span>
              <span
                className={`block h-7 rounded-md border border-dashed border-ink/25 ${i === 0 ? "cell-pulse !border-ink/60" : ""}`}
                style={{ width: `${70 - i * 18}%` }}
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
