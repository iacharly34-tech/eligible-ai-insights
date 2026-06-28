import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, ArrowRight } from "lucide-react";

interface InternalLink {
  href: string;
  text: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
}

interface InternalLinksProps {
  currentPage?: string;
  maxLinks?: number;
  variant?: 'inline' | 'sidebar' | 'footer';
}

export const InternalLinksManager = ({ 
  currentPage = '', 
  maxLinks = 5,
  variant = 'inline' 
}: InternalLinksProps) => {
  const { t, language } = useLanguage();

  // Définition des liens prioritaires par page
  const linkStructure: Record<string, InternalLink[]> = {
    homepage: [
      {
        href: '/appels-d-offres-publics',
        text: 'Appels d\'offres publics',
        description: 'Guide complet pour réussir vos AO',
        priority: 'high'
      },
      {
        href: '/produit',
        text: t('nav.product'),
        description: 'Découvrez notre plateforme IA',
        priority: 'high'
      },
      {
        href: '/demo',
        text: t('nav.demo'),
        description: 'Testez gratuitement notre solution',
        priority: 'high'
      },
      {
        href: '/detection-appels-offres',
        text: 'Détection automatique des AO',
        description: 'Comment identifier les bons appels d\'offres',
        priority: 'medium'
      },
      {
        href: '/strategie-donnees',
        text: 'Stratégie data pour AO',
        description: 'Optimisez vos candidatures avec la data',
        priority: 'medium'
      }
    ],
    'appels-d-offres-publics': [
      {
        href: '/produit',
        text: 'Solution Eligibly',
        description: 'Notre plateforme IA pour analyser les AO',
        priority: 'high'
      },
      {
        href: '/demo',
        text: 'Tester la démo',
        description: 'Analysez votre premier appel d\'offres',
        priority: 'high'
      },
      {
        href: '/detection-appels-offres',
        text: 'Détecter les bons AO',
        description: 'Stratégies pour identifier les opportunités',
        priority: 'medium'
      },
      {
        href: '/erreurs-ao',
        text: 'Éviter les erreurs AO',
        description: 'Les 7 pièges qui éliminent les candidatures',
        priority: 'medium'
      },
      {
        href: '/marches-innovation',
        text: 'Marchés publics innovants',
        description: 'Opportunités dans l\'innovation publique',
        priority: 'low'
      }
    ],
    produit: [
      {
        href: '/appels-d-offres-publics',
        text: 'Guide AO publics',
        description: 'Tout savoir sur les appels d\'offres publics',
        priority: 'high'
      },
      {
        href: '/demo',
        text: t('nav.demo'),
        description: 'Testez notre analyse IA',
        priority: 'high'
      },
      {
        href: '/tarifs',
        text: t('nav.pricing'),
        description: 'Découvrez nos tarifs',
        priority: 'medium'
      },
      {
        href: '/strategie-donnees',
        text: 'Stratégie data',
        description: 'Approche data-driven pour les AO',
        priority: 'medium'
      }
    ],
    demo: [
      {
        href: '/appels-d-offres-publics',
        text: 'Guide complet AO',
        description: 'Maîtrisez les appels d\'offres publics',
        priority: 'high'
      },
      {
        href: '/produit',
        text: 'Fonctionnalités complètes',
        description: 'Toutes les capacités de la plateforme',
        priority: 'high'
      },
      {
        href: '/detection-appels-offres',
        text: 'Techniques de détection',
        description: 'Comment repérer les bonnes opportunités',
        priority: 'medium'
      }
    ],
    ressources: [
      {
        href: '/appels-d-offres-publics',
        text: 'Appels d\'offres publics',
        description: 'Article fondamental sur les AO',
        priority: 'high'
      },
      {
        href: '/detection-appels-offres',
        text: 'Détection des AO',
        priority: 'medium'
      },
      {
        href: '/erreurs-ao',
        text: 'Erreurs à éviter',
        priority: 'medium'
      },
      {
        href: '/strategie-donnees',
        text: 'Stratégie données',
        priority: 'medium'
      },
      {
        href: '/marches-innovation',
        text: 'Marchés innovants',
        priority: 'low'
      }
    ]
  };

  // Liens par défaut si la page n'est pas définie
  const defaultLinks: InternalLink[] = [
    {
      href: '/appels-d-offres-publics',
      text: 'Appels d\'offres publics',
      description: 'Guide expert pour réussir vos AO',
      priority: 'high'
    },
    {
      href: '/produit',
      text: t('nav.product'),
      priority: 'high'
    },
    {
      href: '/demo',
      text: t('nav.demo'),
      priority: 'high'
    }
  ];

  const getLinksForPage = (): InternalLink[] => {
    const pageKey = currentPage.replace('/', '') || 'homepage';
    const links = linkStructure[pageKey] || defaultLinks;
    
    // Filtrer et limiter selon la priorité
    return links
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      })
      .slice(0, maxLinks);
  };

  const links = getLinksForPage();

  if (variant === 'inline') {
    return (
      <div className="space-y-3">
        {links.map((link, index) => (
          <SafeLink
            key={index}
            to={link.href}
            className="group flex items-start p-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-sm"
          >
            <div className="flex-1">
              <div className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {link.text}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {link.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {link.description}
                </p>
              )}
            </div>
          </SafeLink>
        ))}
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <aside className="space-y-2">
        <h3 className="font-semibold text-sm text-foreground mb-3">
          Articles recommandés
        </h3>
        {links.map((link, index) => (
          <SafeLink
            key={index}
            to={link.href}
            className="block p-2 rounded-md hover:bg-muted transition-colors text-sm text-muted-foreground hover:text-foreground"
          >
            {link.text}
          </SafeLink>
        ))}
      </aside>
    );
  }

  // variant === 'footer'
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {links.map((link, index) => (
        <SafeLink
          key={index}
          to={link.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.text}
        </SafeLink>
      ))}
    </div>
  );
};