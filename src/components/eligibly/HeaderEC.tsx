import { useState, useEffect } from "react";

export const HeaderEC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-page/85 backdrop-blur-md border-b border-border-warm/40"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <a href="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-terracotta text-cream font-display text-xl font-semibold shadow-card group-hover:bg-terracotta-deep transition-colors">
            E
          </span>
          <span className="font-display text-xl text-ink tracking-tight">Eligibly</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-secondary">
          <a href="#how" className="hover:text-terracotta transition-colors">Comment ça marche</a>
          <a href="#preview" className="hover:text-terracotta transition-colors">Le produit</a>
          <a href="#pricing" className="hover:text-terracotta transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-terracotta transition-colors">FAQ</a>
        </nav>

        <a
          href="#demo"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-terracotta text-cream text-sm font-medium hover:bg-terracotta-deep transition-colors shadow-card"
        >
          Démo gratuite
        </a>
      </div>
    </header>
  );
};