import { createContext, useContext, useEffect, useState, type AnchorHTMLAttributes } from "react";
import { news } from "./news";
import meta from "./siteMeta.json";

/** A route is a site path such as "/news". NOT_FOUND marks an unknown address. */
export const NOT_FOUND = "*";
export const mainRoutes = ["/", ...Object.keys(meta.pages)];

const isKnown = (path: string) => mainRoutes.includes(path) || path.startsWith("/news/");

// The VHCG section used to live under /icg; keep old shared links working.
const legacyPrefix = "/" + "icg";
// Two early posts were merged into the welcome post; their old links lead there.
const mergedPosts = ["/news/mobile-pc-community", "/news/icg-rules-player-toolkit"];
function cleanPath(path: string) {
  let result = path === legacyPrefix || path.startsWith(`${legacyPrefix}/`) ? `/vhcg${path.slice(legacyPrefix.length)}` : path;
  if (result === "/index.html") result = "/";
  if (mergedPosts.includes(result)) result = "/news/welcome-to-vh-esports";
  // "/vhcg/" and "/vhcg" are the same page.
  if (result.length > 1 && result.endsWith("/")) result = result.replace(/\/+$/, "") || "/";
  return result;
}

function requestedPath() {
  // public/404.html forwards unknown addresses as /?route=<path>.
  return new URLSearchParams(window.location.search).get("route") || window.location.pathname;
}

type Go = (to: string) => void;
const RouterContext = createContext<Go>(() => {});
export const RouterProvider = RouterContext.Provider;
export const useGo = () => useContext(RouterContext);

export function useRoute() {
  const current = () => {
    const path = cleanPath(requestedPath());
    return isKnown(path) ? path : NOT_FOUND;
  };
  const [route, setRoute] = useState(current);
  useEffect(() => {
    const raw = requestedPath();
    const path = cleanPath(raw);
    // Show the real address (also for unknown pages); only same-site paths are accepted.
    if ((raw !== window.location.pathname || path !== raw) && /^\/(?!\/)/.test(path)) window.history.replaceState({}, "", path);
    const onPopState = () => setRoute(current());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const go: Go = to => {
    window.history.pushState({}, "", to);
    setRoute(isKnown(to) ? to : NOT_FOUND);
    // Jump straight to the top: the new page fades in, so a scrolling animation would only fight it.
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return { route, go };
}

/** An in-site link: a real <a href>, so "open in new tab" and search engines work. */
export function Link({ to, onNavigate, ...rest }: { to: string; onNavigate?: () => void } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const go = useGo();
  return <a {...rest} href={to} onClick={event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    go(to);
    onNavigate?.();
  }} />;
}

export function titleFor(route: string) {
  const pages: Record<string, { title: string }> = meta.pages;
  const name = route === NOT_FOUND ? "Page Not Found"
    : route.startsWith("/news/") ? (news.find(entry => entry.slug === route.slice(6))?.title ?? "Page Not Found")
    : pages[route]?.title;
  return name ? `${name} | ${meta.siteName}` : meta.defaultTitle;
}
