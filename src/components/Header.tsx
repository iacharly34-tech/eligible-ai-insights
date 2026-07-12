import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SafeLink } from "./SafeLink";
import { useLocation } from "react-router-dom";

type NavChild = { name: string; href: string; desc?: string };
type NavItem = { name: string; href?: string; children?: NavChild[] };

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const desktopTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const desktopMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const slugify = (s: string) =>
    s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const base = language === 'en' ? '/en' : '';
  const homePath = base || '/';

  const navigation: NavItem[] = language === 'en'
    ? [
        { name: t('nav.product'), href: '/en/product' },
        { name: t('nav.solutions'), href: '/en/solutions' },
        { name: t('nav.pricing'), href: '/en/pricing' },
        { name: t('nav.resources'), href: '/en/resources' },
        { name: 'About', href: '/en/about' },
      ]
    : [
        { name: 'Produit',    href: '/produit' },
        { name: 'Solutions',  href: '/solutions' },
        { name: 'Tarifs',     href: '/tarifs' },
        { name: 'Ressources', href: '/ressources' },
        { name: 'À propos',   href: '/a-propos' },
      ];

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    // Move focus into the panel for accessibility
    const t = window.setTimeout(() => firstLinkRef.current?.focus(), 30);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(t);
      // Return focus to the trigger when closing
      toggleRef.current?.focus();
    };
  }, [isMenuOpen]);

  // Close on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenMenu(null);
    setMobileOpenGroup(null);
  }, [location.pathname]);

  // Global Escape closes any open desktop dropdown and restores focus to its trigger.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const trigger = desktopTriggerRefs.current[openMenu];
        setOpenMenu(null);
        trigger?.focus();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      const menu = desktopMenuRefs.current[openMenu];
      const trigger = desktopTriggerRefs.current[openMenu];
      const target = e.target as Node;
      if (menu && !menu.contains(target) && trigger && !trigger.contains(target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [openMenu]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      )}
      role="banner"
      style={{ height: 'var(--header-height)' }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Brand — centered on mobile, left on desktop */}
          <SafeLink 
            to={homePath} 
            className="text-lg md:text-xl font-semibold tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md ml-4 md:ml-6 h-10 leading-10 font-display" 
            aria-label={t('accessibility.home')}
          >
            Eligibly
          </SafeLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label={t('accessibility.navigation.main')}>
            {navigation.map((item) => {
              if (item.children) {
                const isOpen = openMenu === item.name;
                const isActive = item.children.some((c) => c.href === location.pathname);
                const menuId = `desktop-menu-${slugify(item.name)}`;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        if (openMenu === item.name) setOpenMenu(null);
                      }
                    }}
                  >
                    <button
                      ref={(el) => { desktopTriggerRefs.current[item.name] = el; }}
                      type="button"
                      onClick={() => setOpenMenu(isOpen ? null : item.name)}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setOpenMenu(item.name);
                          window.setTimeout(() => {
                            const first = desktopMenuRefs.current[item.name]?.querySelector<HTMLAnchorElement>('[role="menuitem"]');
                            first?.focus();
                          }, 0);
                        } else if (e.key === 'Escape') {
                          setOpenMenu(null);
                        }
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={menuId}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                        isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn("w-3 h-3 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                    </button>
                    {isOpen && (
                      <div
                        ref={(el) => { desktopMenuRefs.current[item.name] = el; }}
                        id={menuId}
                        role="menu"
                        aria-label={item.name}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[360px]"
                        onKeyDown={(e) => {
                          const items = Array.from(
                            desktopMenuRefs.current[item.name]?.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]') ?? []
                          );
                          const idx = items.indexOf(document.activeElement as HTMLAnchorElement);
                          if (e.key === 'ArrowDown') {
                            e.preventDefault();
                            items[(idx + 1) % items.length]?.focus();
                          } else if (e.key === 'ArrowUp') {
                            e.preventDefault();
                            items[(idx - 1 + items.length) % items.length]?.focus();
                          } else if (e.key === 'Home') {
                            e.preventDefault();
                            items[0]?.focus();
                          } else if (e.key === 'End') {
                            e.preventDefault();
                            items[items.length - 1]?.focus();
                          } else if (e.key === 'Escape' || e.key === 'Tab') {
                            if (e.key === 'Escape') e.preventDefault();
                            setOpenMenu(null);
                            if (e.key === 'Escape') desktopTriggerRefs.current[item.name]?.focus();
                          }
                        }}
                      >
                        <div className="rounded-xl border border-border bg-card shadow-lg p-2">
                          {item.children.map((c) => {
                            const active = location.pathname === c.href;
                            return (
                              <SafeLink
                                key={c.href}
                                to={c.href}
                                role="menuitem"
                                className={cn(
                                  "block rounded-lg px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                  active ? "bg-primary/10" : "hover:bg-muted/60",
                                )}
                              >
                                <div className={cn("text-sm font-semibold", active ? "text-primary" : "text-foreground")}>
                                  {c.name}
                                </div>
                                {c.desc && (
                                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{c.desc}</div>
                                )}
                              </SafeLink>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = location.pathname === item.href;
              return (
                <SafeLink
                  key={item.name}
                  to={item.href!}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )} 
                    aria-hidden="true"
                  />
                </SafeLink>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <SafeLink to={language === 'en' ? '/en/demo' : '/demo'}>
              <Button 
                size="sm" 
                className="text-sm font-semibold px-5 py-2 h-10 min-h-[40px] rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label={t('accessibility.demo')}
              >
                {t('nav.demo')}
              </Button>
            </SafeLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            data-testid="mobile-menu-toggle"
            type="button"
            className="md:hidden relative z-[1100] mr-4 w-11 h-11 hover:bg-muted rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t('accessibility.menu.close') : t('accessibility.menu.open')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-[1050] bg-background/90 backdrop-blur-md"
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className="fixed inset-0 z-[1060] bg-background md:hidden overflow-y-auto"
              style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
              id="mobile-navigation"
              data-testid="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-label"
            >
              <h2 id="mobile-navigation-label" className="sr-only">{t('accessibility.navigation.mobile')}</h2>
              <nav className="h-full flex flex-col justify-center p-6" role="navigation" aria-label={t('accessibility.navigation.mobile')}>
                <ul className="space-y-2 mb-8">
                  {navigation.map((item, idx) => {
                    if (item.children) {
                      const isOpen = mobileOpenGroup === item.name;
                      const isActive = item.children.some((c) => c.href === location.pathname);
                      const panelId = `mobile-panel-${slugify(item.name)}`;
                      return (
                        <li key={item.name}>
                          <button
                            type="button"
                            onClick={() => setMobileOpenGroup(isOpen ? null : item.name)}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            className={cn(
                              "w-full flex items-center justify-center gap-2 text-lg font-medium uppercase tracking-[0.1em] transition-colors duration-200 px-6 py-4 rounded-xl min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                              isActive ? "text-primary font-semibold bg-primary/10" : "text-foreground/80 hover:text-foreground hover:bg-muted",
                            )}
                          >
                            {item.name}
                            <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                          </button>
                          {isOpen && (
                            <ul id={panelId} role="region" aria-label={item.name} className="mt-1 mb-1 space-y-1">
                              {item.children.map((c) => {
                                const active = location.pathname === c.href;
                                return (
                                  <li key={c.href}>
                                    <SafeLink
                                      to={c.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      tabIndex={isMenuOpen ? 0 : -1}
                                      className={cn(
                                        "block text-sm px-6 py-3 rounded-lg text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                        active ? "text-primary font-semibold bg-primary/10" : "text-foreground/70 hover:text-foreground hover:bg-muted",
                                      )}
                                    >
                                      {c.name}
                                    </SafeLink>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    }
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <SafeLink
                          ref={idx === 0 ? firstLinkRef : undefined}
                          to={item.href!}
                          className={cn(
                            "block text-lg font-medium uppercase tracking-[0.1em] transition-colors duration-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 min-h-[44px] text-center",
                            isActive 
                              ? "text-primary font-semibold bg-primary/10" 
                              : "text-foreground/80 hover:text-foreground hover:bg-muted"
                          )}
                          onClick={() => setIsMenuOpen(false)}
                          tabIndex={isMenuOpen ? 0 : -1}
                        >
                          {item.name}
                        </SafeLink>
                      </li>
                    );
                  })}
                </ul>
                <div className="space-y-4 px-6">
                  <div className="flex justify-center mb-4">
                    <LanguageSwitcher />
                  </div>
                  <SafeLink to={language === 'en' ? '/en/demo' : '/demo'}>
                    <Button 
                      className="w-full h-12 text-sm font-semibold uppercase tracking-[0.15em] bg-primary text-primary-foreground"
                      onClick={() => setIsMenuOpen(false)}
                      tabIndex={isMenuOpen ? 0 : -1}
                      aria-label={t('accessibility.demo')}
                    >
                      {t('nav.demo')}
                    </Button>
                  </SafeLink>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
