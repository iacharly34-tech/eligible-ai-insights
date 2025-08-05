import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface SafeLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  'aria-label'?: string;
}

export const SafeLink = ({ to, children, className, onClick, tabIndex, 'aria-label': ariaLabel }: SafeLinkProps) => {
  try {
    // Test if we're inside a Router context
    useLocation();
    return (
      <Link 
        to={to} 
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
        href={to} 
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