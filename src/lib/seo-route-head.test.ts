import { describe, expect, it } from "vitest";
import { getContentRouteHead, isIndexableContentRoute } from "./seo-route-head";

describe("content route indexing policy", () => {
  it("keeps the offers page indexable and self-canonical", () => {
    expect(isIndexableContentRoute("/produit")).toBe(true);
    expect(getContentRouteHead("/produit").links).toEqual([
      { rel: "canonical", href: "https://eligibly.ai/produit" },
    ]);
  });
  it("does not give unknown blog URLs a homepage canonical", () => {
    expect(isIndexableContentRoute("/blog/unknown-article")).toBe(false);
    expect(getContentRouteHead("/blog/unknown-article").links).toEqual([]);
  });
  it("preserves legal page indexing exclusions including trailing slashes", () => {
    for (const path of ["/cgu", "/confidentialite", "/mentions-legales", "/waitlist/success"]) {
      expect(isIndexableContentRoute(path)).toBe(false);
      expect(isIndexableContentRoute(`${path}/`)).toBe(false);
    }
  });
});