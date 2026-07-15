import { Mail, MapPin, Linkedin } from "lucide-react";
import { SafeLink } from "./SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  const footerSections = [
    {
      title: language === 'en' ? 'Product' : 'Produit',
      links: [
        { name: language === 'en' ? 'Product' : 'Produit',       href: language === 'en' ? '/en/product'   : '/produit' },
        { name: language === 'en' ? 'Solutions' : 'Solutions',   href: language === 'en' ? '/en/solutions' : '/solutions' },
        { name: language === 'en' ? 'Pricing' : 'Tarifs',        href: language === 'en' ? '/en/pricing'   : '/tarifs' },
        { name: language === 'en' ? 'Resources' : 'Ressources',  href: language === 'en' ? '/en/resources' : '/ressources' },
        { name: language === 'en' ? 'About' : 'À propos',        href: language === 'en' ? '/en/about'     : '/a-propos' },
        { name: language === 'en' ? 'Demo' : 'Démo',             href: language === 'en' ? '/en/demo'      : '/demo' },
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
        { name: language === 'en' ? 'Large firms & networks' : 'Grands cabinets & réseaux', href: '/solutions' },
      ],
    },
    {
      title: language === 'en' ? 'Company' : 'Société',
      links: [
        { name: language === 'en' ? 'Sign in' : 'Connexion', href: language === 'en' ? '/en/login' : '/connexion' },
        { name: 'Contact', href: 'mailto:contact@eligibly.ai' },
        { name: language === 'en' ? 'Legal' : 'Mentions légales', href: language === 'en' ? '/en/legal' : '/mentions-legales' },
        { name: language === 'en' ? 'Privacy' : 'Confidentialité', href: language === 'en' ? '/en/privacy' : '/confidentialite' },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <SafeLink to={language === 'en' ? '/en' : '/'} className="inline-flex items-center">
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                Eligibly
              </span>
            </SafeLink>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              {language === 'en'
                ? 'The lead detection engine for French accounting firms. Newly registered SASU and SAS, AI-filtered and scored, delivered every morning to your preferred channel. €290/month — 14-day free pilot, no credit card.'
                : "Le moteur de détection de nouveaux clients pour cabinets d’expertise comptable. SASU et SAS fraîchement immatriculées, filtrées et scorées par notre IA, livrées chaque matin dans votre canal de travail. 290 € HT/mois — pilote 14 jours sans carte bancaire."}
            </p>

            <div className="flex items-center gap-6 text-xs text-foreground/70 pt-1">
              <a href="mailto:contact@eligibly.ai" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>contact@eligibly.ai</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Paris</span>
              </div>
            </div>

            <a 
              href="https://www.linkedin.com/company/eligible-ai/" 
              className="inline-flex w-9 h-9 bg-background border border-border rounded-md items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-foreground/60">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('mailto:') || link.href.startsWith('tel:') || link.href.startsWith('http') ? (
                      <a 
                        href={link.href}
                        className="text-sm text-foreground/75 hover:text-primary transition-colors duration-200"
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <SafeLink 
                        to={link.href}
                        className="text-sm text-foreground/75 hover:text-primary transition-colors duration-200"
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

        {/* Legal reassurance + bottom section */}
        <div className="mt-14 pt-6 border-t border-border space-y-4">
          <p className="text-xs text-foreground/60 leading-relaxed max-w-4xl">
            {language === 'en'
              ? 'Published by Eligibly SAS — registered in Paris (France). Data hosting in France (European Union). GDPR-compliant — DPA available on request. Official sources only: INPI, INSEE/Sirene, BODACC. Contractual enrichment partners, no transfer outside the EU.'
              : "Édité par Eligibly SAS — siège social à Paris (France). Hébergement des données en France (Union européenne). Traitement conforme RGPD — DPA fourni sur demande. Sources officielles uniquement : INPI, INSEE/Sirene, BODACC. Partenaires d'enrichissement contractuels, sans transfert hors UE."}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
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