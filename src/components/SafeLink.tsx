import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactNode, forwardRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SafeLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  'aria-label'?: string;
}

export const SafeLink = forwardRef<HTMLAnchorElement, SafeLinkProps>(({ to, children, className, onClick, tabIndex, 'aria-label': ariaLabel }, ref) => {
  const { language } = useLanguage();
  const isExternal = /^(https?:)?\/\//.test(to);
  const isEnglish = language === 'en';

  const frToEn: Record<string, string> = {
    '/': '/en',
    '/produit': '/en/product',
    '/solutions': '/en/solutions',
    '/tarifs': '/en/pricing',
    '/ressources': '/en/resources',
    '/a-propos': '/en/about',
    '/connexion': '/en/login',
    '/demo': '/en/demo',
    '/mentions-legales': '/en/legal',
    '/confidentialite': '/en/privacy',
    '/cgu': '/en/terms',
    // Articles - keeping same URLs for both languages for now
    '/futur-ia': '/futur-ia',
    '/criteres-rse': '/criteres-rse', 
    '/pme-vs-grands-groupes': '/pme-vs-grands-groupes',
    '/marches-innovation': '/marches-innovation',
    '/ao-perdus-avance': '/ao-perdus-avance',
    '/anticipation-ao': '/anticipation-ao',
    '/signaux-faibles': '/signaux-faibles',
    '/strategie-donnees': '/strategie-donnees',
    '/erreurs-ao': '/erreurs-ao',
    '/detection-appels-offres': '/detection-appels-offres',
    '/appels-d-offres-publics': '/appels-d-offres-publics'
  };
  const enToFr: Record<string, string> = Object.fromEntries(
    Object.entries(frToEn).map(([fr, en]) => [en, fr])
  );

  const [pathOnly, rest] = to.split(/(?=[?#])/);

  const mappedPath = (() => {
    if (isExternal) return to;
    if (isEnglish) {
      // Map FR slugs to EN
      if (frToEn[pathOnly]) return frToEn[pathOnly] + (rest || '');
      // Ensure /en prefix if not mapped
      return (pathOnly.startsWith('/en') ? pathOnly : `/en${pathOnly}`) + (rest || '');
    } else {
      // Map EN slugs to FR
      if (enToFr[pathOnly]) return enToFr[pathOnly] + (rest || '');
      // Remove /en prefix if present
      const frPath = pathOnly.startsWith('/en') ? pathOnly.replace(/^\/en/, '') || '/' : pathOnly;
      return frPath + (rest || '');
    }
  })();

  const localizedTo = mappedPath;

  if (isExternal) {
    return (
      <a 
        ref={ref}
        href={to}
        className={className}
        onClick={onClick}
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {children}
      </a>
    );
  }

  try {
    // Test if we're inside a Router context
    useLocation();
    return (
      <Link 
        ref={ref}
        to={localizedTo} 
        className={className} 
        onClick={onClick} 
        tabIndex={tabIndex}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  } catch (error) {
    // Fallback to regular anchor tag if Router context is not available
    return (
      <a 
        ref={ref}
        href={localizedTo} 
        className={className} 
        onClick={onClick} 
        tabIndex={tabIndex}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
});