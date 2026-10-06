import type { Product } from "../content/products";
import { ProductVisual } from "./ProductVisual";

interface Props {
  product: Product;
  index: number;
  total: number;
}

export function ProductCard({ product, index, total }: Props) {
  const dark = Boolean(product.flagship);
  const surface = dark
    ? "on-ink bg-ink text-paper border-ink"
    : product.visual === "shotkit"
      ? "bg-panel text-ink border-line"
      : "bg-white text-ink border-line";
  const muted = dark ? "text-[#a3a3a8]" : "text-graphite";
  const hair = dark ? "border-line-dark" : "border-line";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden md:flex-row lg:flex-col rounded-[18px] border transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quint)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-28px_rgba(11,11,12,0.45)] focus-within:-translate-y-1.5 ${surface}`}
      aria-labelledby={`product-${product.id}`}
    >
      <div
        className={`relative aspect-[4/3] w-full max-w-full shrink-0 overflow-hidden border-b md:aspect-auto md:min-h-[300px] md:w-1/2 md:border-b-0 md:border-r lg:aspect-[4/3] lg:min-h-0 lg:w-full lg:border-b lg:border-r-0 ${hair}`}
      >
        <ProductVisual product={product} />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] ${
              dark ? "bg-paper text-ink" : "bg-ink text-paper"
            }`}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {product.flagship && (
            <span className="rounded-full border border-paper/40 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-paper">
              Flagship
            </span>
          )}
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <p className={`font-mono text-[0.6875rem] uppercase tracking-[0.14em] ${dark ? "text-[#a3a3a8]" : "text-mist"}`}>
          {product.category}
        </p>
        <h3
          id={`product-${product.id}`}
          className="mt-3 text-[2rem] font-semibold leading-none tracking-[-0.03em] sm:text-[2.5rem]"
        >
          {product.name}
        </h3>
        <p className={`mt-4 max-w-[34ch] text-[0.9875rem] mb-8 leading-relaxed ${muted}`}>{product.description}</p>

        <div className={`mt-auto flex flex-wrap items-end justify-between gap-x-4 gap-y-3 border-t pt-5 ${hair}`}>
          <span className={`min-w-0 break-all font-mono text-xs ${dark ? "text-[#a3a3a8]" : "text-mist"}`}>
            {product.displayUrl}
          </span>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium after:absolute after:inset-0 after:rounded-[18px] after:content-['']"
          >
            {product.cta} <span className="arrow" aria-hidden="true">→</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
