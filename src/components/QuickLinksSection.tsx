import { SafeLink } from "@/components/SafeLink";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, TrendingUp } from "lucide-react";

export const QuickLinksSection = () => {
  const quickLinks = [
    {
      category: "Guides Essentiels",
      links: [
        {
          href: "/appels-d-offres-publics",
          title: "Appels d'offres publics",
          description: "Guide complet 2025",
          priority: "high"
        },
        {
          href: "/detection-appels-offres",
          title: "Détecter les bons AO",
          description: "Stratégies expertes",
          priority: "high"
        },
        {
          href: "/erreurs-ao",
          title: "Éviter les erreurs",
          description: "7 pièges classiques",
          priority: "medium"
        }
      ]
    },
    {
      category: "Solutions IA",
      links: [
        {
          href: "/produit",
          title: "Plateforme Eligibly",
          description: "Analyse IA complète",
          priority: "high"
        },
        {
          href: "/demo",
          title: "Démo gratuite",
          description: "Test personnalisé",
          priority: "high"
        },
        {
          href: "/tarifs",
          title: "Nos forfaits",
          description: "Prix transparents",
          priority: "medium"
        }
      ]
    },
    {
      category: "Stratégies Avancées",
      links: [
        {
          href: "/strategie-donnees",
          title: "Stratégie data",
          description: "Approche data-driven",
          priority: "medium"
        },
        {
          href: "/marches-innovation",
          title: "Marchés innovants",
          description: "Nouvelles opportunités",
          priority: "medium"
        },
        {
          href: "/pme-vs-grands-groupes",
          title: "PME vs Grands Groupes",
          description: "Stratégies de différenciation",
          priority: "low"
        }
      ]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">
            <TrendingUp className="w-6 h-6 inline mr-2 text-primary" />
            Ressources les plus consultées
          </h2>
          <p className="text-muted-foreground">
            Guides, stratégies et outils pour optimiser vos appels d'offres
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <SafeLink
                      key={linkIndex}
                      to={link.href}
                      className="block group p-2 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {link.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {link.description}
                      </div>
                    </SafeLink>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};