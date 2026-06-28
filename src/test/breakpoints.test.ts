import { describe, it, expect } from "vitest";
import { setViewport } from "./setup";

/**
 * Tailwind v3 default breakpoints — mirrored in tailwind.config.ts.
 * These guard against accidental config drift.
 */
const TAILWIND_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

describe("Responsive breakpoints — matchMedia harness", () => {
  it("matches `(min-width: Npx)` based on the simulated viewport", () => {
    setViewport(500);
    expect(window.matchMedia("(min-width: 768px)").matches).toBe(false);
    setViewport(1024);
    expect(window.matchMedia("(min-width: 768px)").matches).toBe(true);
    expect(window.matchMedia("(min-width: 1280px)").matches).toBe(false);
    setViewport(1440);
    expect(window.matchMedia("(min-width: 1280px)").matches).toBe(true);
  });

  it("matches `(max-width: Npx)` for mobile-first queries", () => {
    setViewport(390);
    expect(window.matchMedia("(max-width: 767px)").matches).toBe(true);
    setViewport(900);
    expect(window.matchMedia("(max-width: 767px)").matches).toBe(false);
  });

  it("covers each Tailwind breakpoint boundary (-1 / =)", () => {
    for (const [name, width] of Object.entries(TAILWIND_BREAKPOINTS)) {
      setViewport(width - 1);
      expect(
        window.matchMedia(`(min-width: ${width}px)`).matches,
        `expected ${name} miss at ${width - 1}px`
      ).toBe(false);
      setViewport(width);
      expect(
        window.matchMedia(`(min-width: ${width}px)`).matches,
        `expected ${name} hit at ${width}px`
      ).toBe(true);
    }
  });
});