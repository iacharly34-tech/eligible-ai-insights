import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// matchMedia mock that respects a configurable viewport width
function buildMatchMedia(width: number) {
  return (query: string) => {
    // Parse simple `(min-width: Npx)` / `(max-width: Npx)` queries
    const minMatch = query.match(/\(min-width:\s*(\d+)px\)/);
    const maxMatch = query.match(/\(max-width:\s*(\d+)px\)/);
    let matches = false;
    if (minMatch) matches = width >= parseInt(minMatch[1], 10);
    else if (maxMatch) matches = width <= parseInt(maxMatch[1], 10);
    return {
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    } as unknown as MediaQueryList;
  };
}

export function setViewport(width: number, height = 800) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
  Object.defineProperty(window, "innerHeight", { writable: true, configurable: true, value: height });
  Object.defineProperty(window, "matchMedia", { writable: true, configurable: true, value: buildMatchMedia(width) });
  window.dispatchEvent(new Event("resize"));
}

// Default to desktop
setViewport(1280, 800);

// IntersectionObserver / ResizeObserver stubs (used by some Radix / framer-motion deps)
class IOStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
// @ts-ignore
window.IntersectionObserver = window.IntersectionObserver || IOStub;
// @ts-ignore
window.ResizeObserver = window.ResizeObserver || IOStub;

// Avoid noisy framer-motion warnings
vi.spyOn(console, "warn").mockImplementation(() => {});