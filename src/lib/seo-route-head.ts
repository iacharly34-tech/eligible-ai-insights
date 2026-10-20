import { getCanonicalUrl, getRouteMeta, isKnownRoute } from "./route-meta";

// Preserve existing intentional exclusions, identically in SSR and navigation.
const NOINDEX_PATHS = new Set([
  "/cgu", "/confidentialite", "/mentions-legales", "/waitlist/success",
]);

const SHARE_IMAGE = "https://eligibly.ai/og-image.jpg";

export function isIndexableContentRoute(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return isKnownRoute(path) && !NOINDEX_PATHS.has(path);
}

export function getContentRouteHead(pathname: string) {
  const page = getRouteMeta(pathname);
  const known = isKnownRoute(pathname);
  const canonical = getCanonicalUrl(pathname);
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "robots", content: isIndexableContentRoute(pathname)
        ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        : "noindex, nofollow" },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: pathname.startsWith("/blog/") ? "article" : "website" },
      ...(known ? [{ property: "og:url", content: canonical }] : []),
      { property: "og:image", content: SHARE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
    ],
    links: known ? [{ rel: "canonical", href: canonical }] : [],
  };
}