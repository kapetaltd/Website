/**
 * The Kapeta Labs product portfolio. Add new products here; the Products
 * section and the portfolio index render from this list.
 */
import hajjaamLogo from "../assets/products/hajjaam-logo.png";
import shotkitIcon from "../assets/products/shotkit-icon.png";

export type ProductVisual = "hajjaam" | "shotkit" | "cutout";

export interface ProductLogo {
  src: string;
  alt: string;
  /** "mark": a logo on a transparent background. "appIcon": a square app icon. */
  shape: "mark" | "appIcon";
}

export interface Product {
  id: string;
  name: string;
  url: string;
  /** URL as shown on the card, without protocol. */
  displayUrl: string;
  category: string;
  description: string;
  cta: string;
  visual: ProductVisual;
  /** Official logo. Products without one fall back to an abstract graphic. */
  logo?: ProductLogo;
  /** Darker, more energetic treatment for the flagship product. */
  flagship?: boolean;
}

export const products: Product[] = [
  {
    id: "hajjaam",
    name: "Hajjaam.pk",
    url: "https://www.hajjaam.pk",
    displayUrl: "hajjaam.pk",
    category: "On-Demand Grooming",
    description:
      "A digital platform connecting customers with professional barbers for grooming services at home.",
    cta: "Visit Hajjaam.pk",
    visual: "hajjaam",
    logo: { src: hajjaamLogo, alt: "Hajjaam.pk logo", shape: "mark" },
    flagship: true,
  },
  {
    id: "shotkit",
    name: "Shot Kit",
    url: "https://shotkit.kapetalabs.com",
    displayUrl: "shotkit.kapetalabs.com",
    category: "Productivity / Creative Tools",
    description: "A digital tool built to simplify and streamline professional workflows.",
    cta: "Visit Shot Kit",
    visual: "shotkit",
    logo: { src: shotkitIcon, alt: "Shot Kit app icon", shape: "appIcon" },
  },
  {
    id: "cutout",
    name: "Cut Out",
    url: "https://cutout.kapetalabs.com",
    displayUrl: "cutout.kapetalabs.com",
    category: "Creative Tool",
    description: "A simple digital tool designed to make image editing workflows easier.",
    cta: "Visit Cut Out",
    visual: "cutout",
    // TODO: add the Cut Out logo when available (the live site only has a placeholder icon).
  },
];
