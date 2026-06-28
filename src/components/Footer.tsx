import { Mail, MapPin, Linkedin, Sparkles } from "lucide-react";
import { SafeLink } from "./SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  const footerSections = [
    {
      title: language === 'en' ? 'Product' : 'Produit',
      links: [
        { name: language === 'en' ? 'Overview' : 'Vue d’ensemble', href: language === 'en' ? '/en/product' : '/produit' },
        { name: language === 'en' ? 'How it works' : 'Comment ça marche', href: '/#how' },
        { name: language === 'en' ? 'ROI calculator' : 'Calculateur ROI', href: '/#roi' },
        { name: language === 'en' ? 'Pricing' : 'Tarifs', href: language === 'en' ? '/en/pricing' : '/tarifs' },
        { name: language === 'en' ? 'Book a demo' : 'Réserver une démo', href: language === 'en' ? '/en/demo' : '/demo' },
      ],
    },
    {
      title: language === 'en' ? 'Data sources' : 'Sources de données',
      links: [
        { name: 'INPI / RNE', href: 'https://data.inpi.fr/' },
        { name: 'Sirene · INSEE', href: 'https://www.sirene.fr/' },
        { name: 'BODACC', href: 'https://www.bodacc.fr/' },
      ],
    },
    {
      title: language === 'en' ? 'Who it’s for' : 'Pour qui',
      links: [
        { name: language === 'en' ? 'Solo & micro firms' : 'Cabinets solo & micro (1-4)', href: '/#personas' },
        { name: language === 'en' ? 'Growing firms (5-30)' : 'Cabinets en croissance (5-30)', href: '/#personas' },
        { name: language === 'en' ? 'Verticalized firms' : 'Cabinets verticalisés', href: '/solutions' },
        { name: language === 'en' ? 'Multi-office networks' : 'Réseaux multi-bureaux', href: '/solutions' },
      ],
    },
    {
      title: language === 'en' ? 'Company' : 'Société',
      links: [
        { name: language === 'en' ? 'About' : 'À propos', href: language === 'en' ? '/en/about' : '/a-propos' },
        { name: language === 'en' ? 'Resources' : 'Ressources', href: language === 'en' ? '/en/resources' : '/ressources' },
        { name: language === 'en' ? 'Sign in' : 'Connexion', href: language === 'en' ? '/en/login' : '/connexion' },
        { name: 'Contact', href: 'mailto:contact@eligibly.ai' },
        { name: language === 'en' ? 'Legal' : 'Mentions légales', href: language === 'en' ? '/en/legal' : '/mentions-legales' },
        { name: language === 'en' ? 'Privacy' : 'Confidentialité', href: language === 'en' ? '/en/privacy' : '/confidentialite' },
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
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
               eligibly.ai
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-sm">
              {language === 'en'
                ? 'The lead detection engine for French accounting firms. Newly registered SASU and SAS, AI-filtered and scored, delivered every morning to your preferred channel. Flat monthly pricing — on request.'
                : "Le moteur de détection de nouveaux clients pour cabinets d’expertise comptable. SASU et SAS fraîchement immatriculées, filtrées et scorées par notre IA, livrées chaque matin dans votre canal de travail. Forfait flat — tarif sur demande."}
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
              href="https://www.linkedin.com/company/eligible-ai/" 
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
              © 2026 Eligibly — {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </div>
            <div className="flex items-center space-x-4 text-xs text-foreground/70">
              <span>{language === 'en' ? 'Made in Paris' : 'Fait à Paris'}</span>
              <span>•</span>
              <span>{language === 'en' ? 'Built with accounting firms' : 'Conçu avec des cabinets EC'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};