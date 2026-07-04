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

  // Définition des liens prioritaires par page — cabinet EC / leads
  const linkStructure: Record<string, InternalLink[]> = {
    homepage: [
      {
        href: '/produit',
        text: t('nav.product'),
        description: 'Détection, scoring et activation multicanale des nouveaux entrepreneurs',
        priority: 'high'
      },
      {
        href: '/demo',
        text: t('nav.demo'),
        description: 'Voir Eligibly sur les données réelles de votre zone',
        priority: 'high'
      },
      {
        href: '/tarifs',
        text: t('nav.pricing'),
        description: 'Pilote 14 jours gratuit, sans carte bancaire',
        priority: 'high'
      },
      {
        href: '/solutions',
        text: t('nav.solutions'),
        description: 'Cas d\'usage par type de cabinet',
        priority: 'medium'
      },
      {
        href: '/ressources',
        text: t('nav.resources'),
        description: 'Playbooks prospection cabinet',
        priority: 'medium'
      }
    ],
    produit: [
      {
        href: '/demo',
        text: t('nav.demo'),
        description: 'Voir la fiche lead prioritaire en direct',
        priority: 'high'
      },
      {
        href: '/tarifs',
        text: t('nav.pricing'),
        description: '3 offres : Essentiel, Pro, Business',
        priority: 'high'
      },
      {
        href: '/solutions',
        text: t('nav.solutions'),
        description: 'Cas d\'usage par verticale cabinet',
        priority: 'medium'
      },
      {
        href: '/ressources',
        text: t('nav.resources'),
        description: 'Baromètres et playbooks prospection cabinet',
        priority: 'medium'
      }
    ],
    demo: [
      {
        href: '/produit',
        text: t('nav.product'),
        description: 'Détail des modules détection / scoring / activation',
        priority: 'high'
      },
      {
        href: '/tarifs',
        text: t('nav.pricing'),
        description: 'Pilote 14 jours gratuit',
        priority: 'high'
      },
      {
        href: '/solutions',
        text: t('nav.solutions'),
        description: 'Approche par type de cabinet',
        priority: 'medium'
      }
    ],
    ressources: [
      {
        href: '/blog/playbook-prospection-cabinet-ec-2026',
        text: 'Playbook prospection cabinet 2026',
        description: 'Méthode opérationnelle : ICP, séquences, mesure',
        priority: 'high'
      },
      {
        href: '/blog/barometre-acquisition-cabinet-ec-2026',
        text: 'Baromètre acquisition cabinet 2026',
        description: 'CAC, cycle de vente, taux de conversion',
        priority: 'high'
      },
      {
        href: '/blog/icp-cabinet-expertise-comptable',
        text: 'ICP cabinet d\'expertise-comptable',
        description: 'Comment définir votre client idéal',
        priority: 'medium'
      },
      {
        href: '/blog/cout-acquisition-client-cabinet-comptable',
        text: 'Coût d\'acquisition client en cabinet',
        description: 'Décomposer et réduire le CAC',
        priority: 'medium'
      },
      {
        href: '/blog/observatoire-sasu-sas-juin-2026',
        text: 'Observatoire SASU / SAS',
        description: 'Volumes, géographie, secteurs',
        priority: 'low'
      }
    ]
  };

  // Liens par défaut si la page n'est pas définie
  const defaultLinks: InternalLink[] = [
    {
      href: '/produit',
      text: t('nav.product'),
      description: 'Détection, scoring, activation des nouveaux entrepreneurs',
      priority: 'high'
    },
    {
      href: '/demo',
      text: t('nav.demo'),
      priority: 'high'
    },
    {
      href: '/tarifs',
      text: t('nav.pricing'),
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