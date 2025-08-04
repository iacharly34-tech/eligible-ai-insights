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

    // Add viewport meta tag if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }

    // Add charset meta tag if not present
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Add title if not present or empty
    if (!document.title || document.title.trim() === '') {
      document.title = 'eligibly.ai - IA pour les marchés publics';
    }

    // Add meta description if not present
    if (!document.querySelector('meta[name="description"]')) {
      const description = document.createElement('meta');
      description.name = 'description';
      description.content = 'Plateforme IA pour détecter, analyser et remporter les marchés publics. Notre intelligence artificielle scrute 600+ sources officielles pour trouver les meilleures opportunités.';
      document.head.appendChild(description);
    }

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