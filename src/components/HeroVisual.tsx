import { products } from "../content/products";

/**
 * "Portfolio grid": a measured field of modules, one per live product (shown
 * with its logo where available), and a pulsing outline for what comes next.
 */
export function HeroVisual() {
  const logo = (id: string) => products.find((p) => p.id === id)?.logo?.src;
  const hajjaam = logo("hajjaam");
  const shotkit = logo("shotkit");

  const dots = [];
  for (let x = 40; x <= 440; x += 40) {
    for (let y = 40; y <= 440; y += 40) {
      dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={1.1} fill="#c4c4c0" />);
    }
  }

  return (
    <svg
      viewBox="0 0 480 480"
      className="h-auto w-full max-w-full"
      role="img"
      aria-label="The Kapeta Labs portfolio: Hajjaam.pk, Shot Kit, Cut Out and space for the next product"
    >
      <defs>
        <pattern id="hv-stripes" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="14" fill="#0b0b0c" />
          <rect width="5" height="14" fill="#161618" />
        </pattern>
        <clipPath id="hv-icon">
          <rect x="240" y="200" width="120" height="120" rx="26" />
        </clipPath>
        <pattern id="hv-check" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#fafaf9" />
          <rect width="10" height="10" fill="#ececea" />
          <rect x="10" y="10" width="10" height="10" fill="#ececea" />
        </pattern>
      </defs>

      {dots}

      {/* Construction lines */}
      <g stroke="#d9d9d6" strokeWidth="1" fill="none">
        <line x1="80" y1="0" x2="80" y2="480" />
        <line x1="0" y1="200" x2="480" y2="200" />
        <line x1="360" y1="0" x2="360" y2="480" strokeDasharray="2 6" />
      </g>

      {/* 01 — Hajjaam.pk (flagship) */}
      <rect x="80" y="40" width="160" height="160" fill="url(#hv-stripes)" />
      {hajjaam && <image href={hajjaam} x="113" y="58" width="94" height="125" preserveAspectRatio="xMidYMid meet" />}
      {/* 02 — Shot Kit */}
      {shotkit ? (
        <image href={shotkit} x="240" y="200" width="120" height="120" clipPath="url(#hv-icon)" />
      ) : (
        <rect x="240" y="200" width="120" height="120" fill="#e4e4e1" stroke="#0b0b0c" strokeWidth="1.25" />
      )}
      {/* 03 — Cut Out (abstract until its logo is available) */}
      <rect x="120" y="280" width="120" height="120" fill="url(#hv-check)" stroke="#0b0b0c" strokeWidth="1.25" />
      <circle cx="180" cy="340" r="30" fill="#0b0b0c" />
      {/* Next */}
      <rect
        x="360"
        y="360"
        width="80"
        height="80"
        fill="none"
        stroke="#0b0b0c"
        strokeWidth="1.25"
        strokeDasharray="4 5"
        className="cell-pulse"
      />

      <g fontFamily="'Geist Mono', ui-monospace, monospace" fontSize="9.5" letterSpacing="1.2" fill="#55555a">
        <text x="248" y="52">01</text>
        <text x="368" y="212">02</text>
        <text x="98" y="292">03</text>
        <text x="448" y="372">→</text>
      </g>
    </svg>
  );
}
