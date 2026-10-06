import { products } from "../content/products";

const foundations = ["Technology", "Product development", "Business foundation"];

/** Company / group positioning: one foundation underneath every product. */
export function Platform() {
  return (
    <section aria-labelledby="platform-title" className="on-ink bg-ink py-24 text-paper sm:py-32">
      <div className="container-k grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow !text-[#8d8d92]">The company</p>
          <h2 id="platform-title" className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            One company. Multiple products.
          </h2>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-[#a3a3a8]">
            Kapeta Labs provides the technology, product development and business foundation behind a growing portfolio
            of digital products.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-6 lg:col-start-7" data-reveal="100">
          <div aria-hidden="true" className="select-none">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {products.map((p) => (
                <div
                  key={p.id}
                  className={`flex aspect-[4/5] flex-col justify-between rounded-xl border p-3 sm:p-4 ${
                    p.flagship ? "border-paper bg-paper text-ink" : "border-line-dark bg-ink-soft text-paper"
                  }`}
                >
                  <span className="font-mono text-[0.5625rem] uppercase tracking-[0.14em] opacity-60 sm:text-[0.625rem]">
                    Product
                  </span>
                  <span className="text-sm font-semibold leading-tight tracking-[-0.01em] sm:text-lg">{p.name}</span>
                </div>
              ))}
            </div>
            <div className="mx-[16.66%] flex justify-between px-px" >
              {products.map((p) => (
                <span key={p.id} className="h-6 w-px bg-line-dark" />
              ))}
            </div>
            <div className="rounded-xl border border-line-dark">
              <div className="flex items-center justify-between border-b border-line-dark px-4 py-3 sm:px-5">
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.22em]">Kapeta Labs</span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-[#8d8d92]">Foundation</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-line-dark">
                {foundations.map((f) => (
                  <span key={f} className="px-3 py-4 text-[0.75rem] leading-snug text-[#a3a3a8] sm:px-5 sm:text-sm">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="sr-only">
            Diagram: Hajjaam.pk, Shot Kit and Cut Out each sit on a shared Kapeta Labs foundation of technology, product
            development and business foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
