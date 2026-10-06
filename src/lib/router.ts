import { useEffect, useState, type MouseEvent } from "react";

/**
 * Minimal client-side router for the three pages this site needs.
 * Avoids a routing dependency. Static hosts must rewrite unknown paths to
 * /index.html (see vercel.json / public/_redirects).
 */
export type Route = "/" | "/privacy" | "/terms";

const routes: Route[] = ["/", "/privacy", "/terms"];

function parse(pathname: string): Route {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return (routes as string[]).includes(clean) ? (clean as Route) : "/";
}

let current: Route = typeof window === "undefined" ? "/" : parse(window.location.pathname);
const listeners = new Set<(r: Route) => void>();

function emit(route: Route) {
  current = route;
  listeners.forEach((fn) => fn(route));
}

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => emit(parse(window.location.pathname)));
}

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0 });
    return;
  }
  const el = document.getElementById(hash.replace(/^#/, ""));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Move focus for keyboard and screen-reader users without a second jump.
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }
}

/** Navigate to an internal href such as "/privacy", "/#products" or "#about". */
export function navigate(href: string) {
  const [pathPart, hashPart = ""] = href.split("#");
  const target = pathPart ? parse(pathPart) : current;
  const hash = hashPart ? `#${hashPart}` : "";

  try {
    const url = target + hash;
    if (url !== window.location.pathname + window.location.hash) {
      window.history.pushState(null, "", url);
    }
  } catch {
    // Some sandboxed previews disallow history changes; in-app state still updates.
  }

  if (target !== current) {
    emit(target);
    // Wait for the new page to render before scrolling.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(hash)));
  } else {
    scrollToHash(hash);
  }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(current);
  useEffect(() => {
    listeners.add(setRoute);
    return () => {
      listeners.delete(setRoute);
    };
  }, []);
  return route;
}

/** onClick handler for internal links that keeps modifier-click behaviour intact. */
export function linkHandler(href: string, after?: () => void) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    after?.();
    navigate(href);
  };
}
