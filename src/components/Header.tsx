import { Button } from "@/components/ui/button";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SafeLink } from "./SafeLink";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t('nav.product'), href: "/produit" },
    { name: t('nav.pricing'), href: "/tarifs" },
    { name: t('nav.resources'), href: "/ressources" },
    { name: t('nav.about'), href: "/a-propos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-sm" role="banner">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <SafeLink to="/" className="text-lg font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md" aria-label={t('accessibility.home')}>
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
                    "text-sm font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1",
                    isActive 
                      ? "text-primary font-semibold" 
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.name}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-200",
                      isActive 
                        ? "w-full" 
                        : "w-0 group-hover:w-full"
                    )} 
                    aria-hidden="true"
                  />
                </SafeLink>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <SafeLink 
              to="/connexion"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label={t('accessibility.login')}
            >
              {t('nav.login')}
            </SafeLink>
            <SafeLink to="/demo">
              <Button 
                size="sm" 
                className="bg-gradient-cta hover:shadow-glow text-white text-sm font-medium px-6 py-2 h-9 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={t('accessibility.demo')}
              >
                {t('nav.demo')}
              </Button>
            </SafeLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? t('accessibility.menu.close') : t('accessibility.menu.open')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/50",
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav 
            className="py-6 space-y-1" 
            id="mobile-navigation"
            role="navigation" 
            aria-label={t('accessibility.navigation.mobile')}
            aria-hidden={!isMenuOpen}
          >
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <SafeLink
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block text-sm font-medium transition-colors duration-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    isActive 
                      ? "text-primary font-semibold bg-primary/10" 
                      : "text-foreground/70 hover:text-foreground hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  {item.name}
                </SafeLink>
              );
            })}
            <div className="pt-4 px-4 space-y-3 border-t border-border/30 mt-4">
              <div className="flex justify-center mb-3">
                <LanguageSwitcher />
              </div>
              <SafeLink 
                to="/connexion"
                className="block w-full text-left text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
                tabIndex={isMenuOpen ? 0 : -1}
                aria-label={t('accessibility.login')}
              >
                {t('nav.login')}
              </SafeLink>
              <SafeLink to="/demo">
                <Button 
                  className="w-full bg-gradient-cta hover:shadow-glow text-white text-sm font-medium h-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
      </div>
    </header>
  );
};