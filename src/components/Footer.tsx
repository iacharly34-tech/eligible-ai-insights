import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Produit",
      links: [
        { name: "Fonctionnalités", href: "#features" },
        { name: "Intégrations", href: "#integrations" },
        { name: "Tarifs", href: "#pricing" },
        { name: "Démonstration", href: "#contact" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#about" },
        { name: "Blog", href: "/blog" },
        { name: "Carrières", href: "/careers" },
        { name: "Presse", href: "/press" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "/help" },
        { name: "Documentation", href: "/docs" },
        { name: "API", href: "/api" },
        { name: "Statut", href: "/status" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Confidentialité", href: "/privacy" },
        { name: "Conditions", href: "/terms" },
        { name: "Cookies", href: "/cookies" },
        { name: "RGPD", href: "/gdpr" }
      ]
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                eligible.ai
              </span>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              La plateforme IA qui transforme votre veille commerciale en identifiant automatiquement 
              les meilleures opportunités d'appels d'offres publics.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@eligible.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 eligible.ai. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
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