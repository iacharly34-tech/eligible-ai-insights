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
  const localizedTo = !isExternal && isEnglish
    ? (to.startsWith('/en') ? to : `/en${to}`)
    : (to.startsWith('/en') && !isEnglish ? to.replace(/^\/en/, '') : to);

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