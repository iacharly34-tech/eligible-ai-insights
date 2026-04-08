import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SafeLink } from "./SafeLink";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const base = language === 'en' ? '/en' : '';
  const homePath = base || '/';

  const navigation = [
    { name: t('nav.product'), href: language === 'en' ? '/en/product' : '/produit' },
    { name: t('nav.solutions'), href: language === 'en' ? '/en/solutions' : '/solutions' },
    { name: t('nav.pricing'), href: language === 'en' ? '/en/pricing' : '/tarifs' },
    { name: 'Appels d\'offres publics', href: '/appels-d-offres-publics' },
    { name: t('nav.resources'), href: language === 'en' ? '/en/resources' : '/ressources' },
  ];

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
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

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
            className="text-lg md:text-xl font-bold tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md ml-4 md:ml-6 h-10 leading-10 uppercase font-display" 
            aria-label={t('accessibility.home')}
          >
            eligibly.ai
          </SafeLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label={t('accessibility.navigation.main')}>
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <SafeLink
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
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
                className="text-xs font-semibold uppercase tracking-[0.15em] px-6 py-2 h-10 min-h-[40px] bg-primary text-primary-foreground hover:bg-primary/90"
                aria-label={t('accessibility.demo')}
              >
                {t('nav.demo')}
              </Button>
            </SafeLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden fixed top-2 right-4 z-[1100] w-11 h-11 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t('accessibility.menu.close') : t('accessibility.menu.open')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="fixed inset-0 z-[1060] bg-background md:hidden"
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-navigation-label"
            >
              <h2 id="mobile-navigation-label" className="sr-only">{t('accessibility.navigation.mobile')}</h2>
              <nav className="h-full flex flex-col justify-center p-6" role="navigation" aria-label={t('accessibility.navigation.mobile')}>
                <ul className="space-y-2 mb-8">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <SafeLink
                          to={item.href}
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
