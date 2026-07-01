import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowRight, Target } from "lucide-react";

interface ContextualLinksProps {
  currentPage: string;
  context?: 'article' | 'product' | 'demo' | 'general';
}

export const ContextualLinks = ({ currentPage, context = 'general' }: ContextualLinksProps) => {
  const { t, language } = useLanguage();

  // Liens contextuels — cabinets d'expertise comptable
  const getContextualLinks = () => {
    const common = [
      {
        href: '/produit',
        title: 'Fonctionnalités Eligibly',
        description: 'Détection, filtres ICP, scoring expliqué et livraison sur vos canaux.',
        cta: 'Découvrir le produit',
        priority: 'high'
      },
      {
        href: '/solutions',
        title: 'Cas d\'usage cabinet',
        description: 'Lancement d\'offre, ouverture de bureau, croissance par paliers.',
        cta: 'Voir les cas d\'usage',
        priority: 'high'
      },
      {
        href: '/demo',
        title: 'Recevoir 3 leads qualifiés',
        description: 'Donnez-nous votre zone et votre ICP, on livre un échantillon sous 48 h.',
        cta: 'Demander l\'échantillon',
        priority: 'medium'
      }
    ];
    return common;
  };

  const links = getContextualLinks();

  return (
    <section className="mt-12 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-primary" />
        <h3 className="text-xl font-semibold">
          Ressources recommandées
        </h3>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <Card key={index} className="group hover:shadow-md transition-all duration-200 border-border hover:border-primary/50">
            <CardContent className="p-5">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {link.description}
                </p>
                <SafeLink 
                  to={link.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {link.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};