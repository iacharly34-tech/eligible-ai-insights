import { Brain, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { SafeLink } from "./SafeLink";

export const Footer = () => {
  const footerSections = [
    {
      title: "Produit",
      links: [
        { name: "Produit", href: "/produit" },
        { name: "Solutions", href: "/solutions" },
        { name: "Tarifs", href: "/tarifs" },
        { name: "Démonstration", href: "/demo" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "/a-propos" },
        { name: "Ressources", href: "/ressources" },
        { name: "Connexion", href: "/connexion" },
        { name: "Contact", href: "mailto:contact@eligibly.ai" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Démonstration", href: "/demo" },
        { name: "Contact", href: "mailto:contact@eligibly.ai" },
        { name: "Aide", href: "tel:+33123456789" },
        { name: "Documentation", href: "/ressources" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Mentions légales", href: "/mentions-legales" },
        { name: "Confidentialité", href: "/confidentialite" },
        { name: "CGU", href: "/cgu" },
        { name: "Contact", href: "mailto:contact@eligibly.ai" }
      ]
    }
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
              Plateforme IA pour identifier les meilleures opportunités d'appels d'offres publics.
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
              className="inline-flex w-8 h-8 bg-secondary rounded flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
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
              © 2025 eligibly.ai. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-4 text-xs text-foreground/70">
              <span>Made with ❤️ in France</span>
              <span>•</span>
              <span>Propulsé par l'IA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};