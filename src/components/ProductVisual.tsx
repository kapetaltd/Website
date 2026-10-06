import type { Product } from "../content/products";

/**
 * The graphic area of a product card. Shows the product's official logo where
 * one exists; otherwise an abstract graphic that suggests the category without
 * depicting unconfirmed features.
 */
export function ProductVisual({ product }: { product: Product }) {
  switch (product.visual) {
    case "hajjaam":
      return <HajjaamVisual product={product} />;
    case "shotkit":
      return <ShotKitVisual product={product} />;
    case "cutout":
      return <CutOutVisual />;
  }
}

const fill = "absolute inset-0 h-full w-full";
const zoom = "transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-[1.03]";

/** Flagship: the Hajjaam.pk logo over a slow diagonal field. */
function HajjaamVisual({ product }: { product: Product }) {
  const stripes = [];
  for (let i = -12; i < 30; i++) {
    stripes.push(<rect key={i} x={i * 28} y={-200} width={12} height={700} fill="#161618" />);
  }
  return (
    <>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={fill} aria-hidden="true">
        <rect width="400" height="300" fill="#0b0b0c" />
        <g transform="rotate(-35 200 150)">
          <g className="stripes">{stripes}</g>
        </g>
      </svg>
      {product.logo && (
        <img
          src={product.logo.src}
          alt={product.logo.alt}
          className={`absolute left-1/2 top-1/2 h-[60%] w-auto max-w-[80%] -translate-x-1/2 -translate-y-[42%] object-contain ${zoom}`}
          loading="lazy"
          decoding="async"
        />
      )}
    </>
  );
}

/** Shot Kit: the app icon resting on a measured grid. */
function ShotKitVisual({ product }: { product: Product }) {
  return (
    <>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={fill} aria-hidden="true">
        <rect width="400" height="300" fill="#e9e9e6" />
        <g stroke="#d6d6d2" strokeWidth="1">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
          ))}
        </g>
      </svg>
      {product.logo && (
        <img
          src={product.logo.src}
          alt={product.logo.alt}
          className="absolute left-1/2 top-1/2 aspect-square h-[46%] w-auto max-w-full -translate-x-1/2 -translate-y-[46%] rounded-[22%] shadow-[0_18px_40px_-16px_rgba(11,21,32,0.55)] transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:-translate-y-[52%]"
          loading="lazy"
          decoding="async"
        />
      )}
    </>
  );
}

/** Cut Out: a subject lifted from a transparent ground with a live selection. */
function CutOutVisual() {
  const checks = [];
  for (let x = 0; x < 400; x += 20) {
    for (let y = 0; y < 300; y += 20) {
      if ((x / 20 + y / 20) % 2 === 0) checks.push(<rect key={`${x}-${y}`} x={x} y={y} width="20" height="20" fill="#efefed" />);
    }
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={`${fill} ${zoom}`} aria-hidden="true">
      <rect width="400" height="300" fill="#ffffff" />
      {checks}
      <circle cx="200" cy="150" r="62" fill="none" stroke="#c4c4c0" strokeWidth="1" strokeDasharray="3 4" />
      <g className="transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:-translate-y-2 group-hover:translate-x-2">
        <circle cx="200" cy="150" r="62" fill="#0b0b0c" />
        <rect
          x="126"
          y="76"
          width="148"
          height="148"
          fill="none"
          stroke="#0b0b0c"
          strokeWidth="1.25"
          strokeDasharray="5 3"
          className="marching"
        />
        {[
          [126, 76],
          [274, 76],
          [126, 224],
          [274, 224],
          [200, 76],
          [200, 224],
          [126, 150],
          [274, 150],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width="8" height="8" fill="#ffffff" stroke="#0b0b0c" strokeWidth="1.25" />
        ))}
      </g>
    </svg>
  );
}
