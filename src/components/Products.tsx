import { products } from "../content/products";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-k">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
          <div>
            <p className="eyebrow">Products</p>
            <h2 id="products-title" className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Our Products
            </h2>
          </div>
          <p className="max-w-sm text-lg text-graphite md:text-right">Products built by Kapeta Labs.</p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {products.map((p, i) => (
            <li key={p.id} data-reveal={i * 90} className="min-w-0">
              <ProductCard product={p} index={i} total={products.length} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
