import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../Header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { setViewport } from "@/test/setup";

function renderHeader(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </MemoryRouter>
  );
}

const BREAKPOINTS = {
  mobile: 375,
  mobileLg: 414,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const;

describe("Header — responsive breakpoints", () => {
  beforeEach(() => {
    setViewport(BREAKPOINTS.desktop);
  });

  it("renders the brand link at every breakpoint", () => {
    for (const width of Object.values(BREAKPOINTS)) {
      setViewport(width);
      const { unmount } = renderHeader();
      const brand = screen.getByRole("link", { name: /eligibly|accueil|home/i });
      expect(brand).toBeInTheDocument();
      unmount();
    }
  });

  it("exposes the mobile menu toggle in the DOM (Tailwind md:hidden gates visibility)", () => {
    setViewport(BREAKPOINTS.mobile);
    renderHeader();
    const toggle = screen.getByTestId("mobile-menu-toggle");
    expect(toggle).toBeInTheDocument();
    // Accessible name + a11y attributes
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "mobile-navigation");
    expect(toggle.getAttribute("aria-label")).toBeTruthy();
  });

  it("renders the mobile toggle with a 44x44 tap target (WCAG 2.5.5)", () => {
    setViewport(BREAKPOINTS.mobile);
    renderHeader();
    const toggle = screen.getByTestId("mobile-menu-toggle");
    expect(toggle.style.minWidth).toBe("44px");
    expect(toggle.style.minHeight).toBe("44px");
  });

  it("does not render the mobile dialog until the toggle is pressed", () => {
    setViewport(BREAKPOINTS.mobile);
    renderHeader();
    expect(screen.queryByTestId("mobile-navigation")).not.toBeInTheDocument();
  });

  it("opens the mobile menu, updates aria-expanded, and exposes a modal dialog", async () => {
    setViewport(BREAKPOINTS.mobile);
    const user = userEvent.setup();
    renderHeader();
    const toggle = screen.getByTestId("mobile-menu-toggle");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    // Every nav link inside the dialog must clear the 44px tap target
    const links = within(dialog).getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.className).toMatch(/min-h-\[44px\]|h-12/);
    }
  });

  it("locks body scroll while the mobile menu is open and restores it on close", async () => {
    setViewport(BREAKPOINTS.mobile);
    const user = userEvent.setup();
    renderHeader();
    const toggle = screen.getByTestId("mobile-menu-toggle");
    await user.click(toggle);
    expect(document.body.style.overflow).toBe("hidden");
    await user.click(toggle);
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("closes the mobile menu when Escape is pressed", async () => {
    setViewport(BREAKPOINTS.mobile);
    const user = userEvent.setup();
    renderHeader();
    await user.click(screen.getByTestId("mobile-menu-toggle"));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    await act(async () => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders the desktop primary navigation (4 links) at >= md", () => {
    setViewport(BREAKPOINTS.desktop);
    renderHeader();
    const nav = screen.getAllByRole("navigation")[0];
    const links = within(nav).getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(4);
  });
});
