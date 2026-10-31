import { describe, expect, it } from "vitest";
import { publicSiteUrl, isSiteSource } from "./schema";

describe("public website input", () => {
  it("accepts HTTPS public domains and removes tracking", () => {
    expect(publicSiteUrl("eligibly.ai/produit?token=secret#x").href).toBe("https://eligibly.ai/produit");
  });
  it.each(["http://eligibly.ai", "https://127.0.0.1", "https://[::1]", "https://localhost", "https://cabinet.local", "https://user:password@eligibly.ai", "https://eligibly.ai:8080", "https://2130706433"])("rejects non-public URL %s", value => {
    expect(() => publicSiteUrl(value)).toThrow();
  });
  it("never accepts evidence on unrelated domains", () => {
    expect(isSiteSource("https://eligibly.ai.evil.com/page", "eligibly.ai")).toBe(false);
    expect(isSiteSource("https://www.eligibly.ai/page", "eligibly.ai")).toBe(true);
  });
});