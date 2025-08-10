import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SafeLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  'aria-label'?: string;
}

export const SafeLink = ({ to, children, className, onClick, tabIndex, 'aria-label': ariaLabel }: SafeLinkProps) => {
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
};