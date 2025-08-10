import { Brain, Mail, MapPin, Linkedin } from "lucide-react";
import { SafeLink } from "./SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();
  const base = language === 'en' ? '/en' : '';

  const footerSections = [
    {
      title: t('footer.product'),
      links: [
        { name: t('nav.product'), href: language === 'en' ? '/en/product' : '/produit' },
        { name: t('nav.solutions'), href: language === 'en' ? '/en/solutions' : '/solutions' },
        { name: t('nav.pricing'), href: language === 'en' ? '/en/pricing' : '/tarifs' },
        { name: t('nav.demo'), href: language === 'en' ? '/en/demo' : '/demo' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { name: t('nav.about'), href: language === 'en' ? '/en/about' : '/a-propos' },
        { name: t('nav.resources'), href: language === 'en' ? '/en/resources' : '/ressources' },
        { name: t('nav.login'), href: language === 'en' ? '/en/login' : '/connexion' },
        { name: 'Contact', href: 'mailto:contact@eligibly.ai' },
      ],
    },
    {
      title: t('footer.support'),
      links: [
        { name: t('nav.demo'), href: language === 'en' ? '/en/demo' : '/demo' },
        { name: 'Email', href: 'mailto:contact@eligibly.ai' },
        { name: 'Tel', href: 'tel:+33123456789' },
        { name: t('nav.resources'), href: language === 'en' ? '/en/resources' : '/ressources' },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { name: language === 'en' ? 'Legal notice' : 'Mentions légales', href: language === 'en' ? '/en/legal' : '/mentions-legales' },
        { name: language === 'en' ? 'Privacy' : 'Confidentialité', href: language === 'en' ? '/en/privacy' : '/confidentialite' },
        { name: language === 'en' ? 'Terms' : 'CGU', href: language === 'en' ? '/en/terms' : '/cgu' },
        { name: 'Contact', href: 'mailto:contact@eligibly.ai' },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-6 gap-6">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
               eligibly.ai
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-sm">
              {language === 'en' ? 'AI platform to identify the best public tender opportunities.' : "Plateforme IA pour identifier les meilleures opportunités d'appels d'offres publics."}
            </p>

            <div className="flex items-center space-x-6 text-xs text-foreground/70">
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>contact@eligibly.ai</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>Paris</span>
              </div>
            </div>

            <a 
              href="https://www.linkedin.com/company/eligibly-ai/" 
              className="inline-flex w-8 h-8 bg-secondary rounded flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('tel:') || link.href.startsWith('http') ? (
                      <a 
                        href={link.href}
                        className="text-xs text-foreground/70 hover:text-foreground transition-colors duration-200"
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <SafeLink 
                        to={link.href}
                        className="text-xs text-foreground/70 hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </SafeLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-4 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-xs text-foreground/70">
              {t('footer.copyright')}
            </div>
            <div className="flex items-center space-x-4 text-xs text-foreground/70">
              <span>{t('footer.madeIn')}</span>
              <span>•</span>
              <span>{t('footer.poweredByAI')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};