/**
 * Central site configuration. Edit values here rather than in components.
 */
export const site = {
  name: "Kapeta Labs",
  domain: "kapetalabs.com",
  url: "https://kapetalabs.com",
  /**
   * PLACEHOLDER — confirm or replace with the real contact address.
   * This is the only place the email is defined.
   */
  email: "hello@kapetalabs.com",
  year: 2026,
} as const;

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
