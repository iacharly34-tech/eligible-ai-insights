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

  // Liens contextuels intelligents basés sur la page et le contexte
  const getContextualLinks = () => {
    const baseUrl = '';
    
    switch (context) {
      case 'article':
        return [
          {
            href: '/appels-d-offres-publics',
            title: 'Guide complet : Appels d\'offres publics',
            description: 'Tout ce que vous devez savoir pour réussir vos AO publics',
            cta: 'Lire le guide',
            priority: 'high'
          },
          {
            href: '/demo',
            title: 'Testez notre analyse IA',
            description: 'Découvrez comment Eligibly analyse vos appels d\'offres',
            cta: 'Tester gratuitement',
            priority: 'high'
          },
          {
            href: '/detection-appels-offres',
            title: 'Détecter les bons AO',
            description: 'Stratégies pour identifier les opportunités gagnantes',
            cta: 'Découvrir les techniques',
            priority: 'medium'
          }
        ];
      
      case 'product':
        return [
          {
            href: '/appels-d-offres-publics',
            title: 'Maîtriser les appels d\'offres publics',
            description: 'Guide expert avec stratégies et conseils pratiques',
            cta: 'Consulter le guide',
            priority: 'high'
          },
          {
            href: '/demo',
            title: 'Voir Eligibly en action',
            description: 'Démonstration complète de notre plateforme IA',
            cta: 'Découvrir la démo',
            priority: 'high'
          },
          {
            href: '/strategie-donnees',
            title: 'Stratégie data pour AO',
            description: 'Comment utiliser les données pour optimiser vos candidatures',
            cta: 'Apprendre la méthode',
            priority: 'medium'
          }
        ];
      
      case 'demo':
        return [
          {
            href: '/appels-d-offres-publics',
            title: 'Comprendre les appels d\'offres publics',
            description: 'Base théorique pour mieux utiliser notre outil',
            cta: 'Lire l\'article',
            priority: 'high'
          },
          {
            href: '/produit',
            title: 'Fonctionnalités complètes',
            description: 'Découvrez toutes les capacités de la plateforme Eligibly',
            cta: 'Explorer le produit',
            priority: 'high'
          },
          {
            href: '/erreurs-ao',
            title: 'Éviter les erreurs classiques',
            description: 'Les 7 erreurs qui éliminent vos candidatures',
            cta: 'Éviter les pièges',
            priority: 'medium'
          }
        ];
      
      default:
        return [
          {
            href: '/appels-d-offres-publics',
            title: 'Appels d\'offres publics : Guide 2025',
            description: 'Stratégies expertes pour remporter vos marchés publics',
            cta: 'Consulter le guide',
            priority: 'high'
          },
          {
            href: '/demo',
            title: 'Analyser vos AO avec l\'IA',
            description: 'Test gratuit de notre solution d\'analyse prédictive',
            cta: 'Essayer maintenant',
            priority: 'high'
          },
          {
            href: '/produit',
            title: 'Solution Eligibly',
            description: 'Plateforme IA complète pour optimiser vos candidatures',
            cta: 'Découvrir la solution',
            priority: 'medium'
          }
        ];
    }
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