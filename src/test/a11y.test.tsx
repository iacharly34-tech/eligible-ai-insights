import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import axe from "axe-core";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import HomePage from "@/pages/HomePage";

async function runAxe(container: HTMLElement) {
  const results = await axe.run(container, {
    runOnly: { type: "tag", values: ["wcag2a", "wcag2aa"] },
    rules: {
      // Region/landmark rules can be noisy in isolated component renders
      region: { enabled: false },
    },
  });
  return results.violations;
}

function withProviders(ui: React.ReactNode) {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return (
    <HelmetProvider>
      <QueryClientProvider client={qc}>
        <LanguageProvider>
          <MemoryRouter>{ui}</MemoryRouter>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

describe("Accessibility (axe-core)", () => {
  it("Header has no critical/serious WCAG A/AA violations", async () => {
    const { container } = render(withProviders(<Header />));
    const violations = await runAxe(container);
    const blocking = violations.filter((v) => v.impact === "critical" || v.impact === "serious");
    if (blocking.length) {
      // Surface a readable report in CI output
      console.error(JSON.stringify(blocking.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })), null, 2));
    }
    expect(blocking).toEqual([]);
  }, 20000);

  it("HomePage has no critical/serious WCAG A/AA violations", async () => {
    const { container } = render(withProviders(<HomePage />));
    const violations = await runAxe(container);
    const blocking = violations.filter((v) => v.impact === "critical" || v.impact === "serious");
    if (blocking.length) {
      console.error(JSON.stringify(blocking.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })), null, 2));
    }
    expect(blocking).toEqual([]);
  }, 30000);
});