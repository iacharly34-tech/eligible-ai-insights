import { useEffect } from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export const WCAGAccessibilityComponent = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Set document language attribute
    const language = document.documentElement.lang;
    if (!language) {
      document.documentElement.lang = 'fr';
    }

    // SEO handled by SEOHead component; avoid duplicating meta tags
    // Removed viewport, charset, title, and description injections to prevent conflicts


    // Keyboard navigation enhancement
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Alt + M for main content
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('keydown', handleKeyboardNavigation);

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, []);

  return null; // This component doesn't render anything visible
};