import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

// High contrast mode toggle
export const HighContrastToggle = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const savedPreference = localStorage.getItem('high-contrast');
    if (savedPreference === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('high-contrast', 'false');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleHighContrast}
      className="fixed top-20 right-4 z-50 bg-background/90 backdrop-blur-sm"
      aria-label={isHighContrast ? 'Désactiver le contraste élevé' : 'Activer le contraste élevé'}
    >
      {isHighContrast ? '🔆' : '🌗'} {isHighContrast ? 'Contraste normal' : 'Contraste élevé'}
    </Button>
  );
};

// Font size adjuster
export const FontSizeAdjuster = () => {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const savedSize = localStorage.getItem('font-size');
    if (savedSize) {
      const size = parseInt(savedSize);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}%`;
    }
  }, []);

  const adjustFontSize = (direction: 'increase' | 'decrease' | 'reset') => {
    let newSize = fontSize;
    
    switch (direction) {
      case 'increase':
        newSize = Math.min(fontSize + 10, 150);
        break;
      case 'decrease':
        newSize = Math.max(fontSize - 10, 80);
        break;
      case 'reset':
        newSize = 100;
        break;
    }
    
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem('font-size', newSize.toString());
  };

  return (
    <div className="fixed top-32 right-4 z-50 flex flex-col gap-2 bg-background/90 backdrop-blur-sm rounded-lg p-2 border">
      <Button
        variant="outline"
        size="sm"
        onClick={() => adjustFontSize('increase')}
        aria-label="Augmenter la taille du texte"
        disabled={fontSize >= 150}
      >
        A+
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => adjustFontSize('reset')}
        aria-label="Taille de texte normale"
      >
        A
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => adjustFontSize('decrease')}
        aria-label="Diminuer la taille du texte"
        disabled={fontSize <= 80}
      >
        A-
      </Button>
    </div>
  );
};

// Focus visible enhancer
export const FocusEnhancer = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus-visible {
        outline: 3px solid hsl(var(--primary)) !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 2px white, 0 0 0 5px hsl(var(--primary)) !important;
      }
      
      .high-contrast .focus-visible:focus-visible {
        outline: 4px solid #000 !important;
        background-color: #ff0 !important;
        color: #000 !important;
      }
    `;
    document.head.appendChild(style);

    // Add focus-visible class to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    interactiveElements.forEach(el => {
      el.classList.add('focus-visible');
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

// Screen reader announcements
export const ScreenReaderAnnouncer = () => {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Listen for custom announcement events
    const handleAnnouncement = (event: CustomEvent) => {
      setAnnouncement(event.detail.message);
      setTimeout(() => setAnnouncement(''), 100);
    };

    window.addEventListener('screen-reader-announce', handleAnnouncement as EventListener);
    
    return () => {
      window.removeEventListener('screen-reader-announce', handleAnnouncement as EventListener);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
      role="status"
    >
      {announcement}
    </div>
  );
};

// Announce function for components
export const announceToScreenReader = (message: string) => {
  window.dispatchEvent(
    new CustomEvent('screen-reader-announce', {
      detail: { message }
    })
  );
};

// Keyboard navigation enhancer
export const KeyboardNavigationEnhancer = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + M: Focus main content
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
          announceToScreenReader('Navigation vers le contenu principal');
        }
      }

      // Alt + N: Focus navigation
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const nav = document.querySelector('nav a');
        if (nav) {
          (nav as HTMLElement).focus();
          announceToScreenReader('Navigation vers le menu principal');
        }
      }

      // Alt + S: Focus search (if exists)
      if (event.altKey && event.key === 's') {
        event.preventDefault();
        const search = document.querySelector('input[type="search"], input[aria-label*="recherche"]');
        if (search) {
          (search as HTMLElement).focus();
          announceToScreenReader('Navigation vers la recherche');
        }
      }

      // Escape: Close modals/dropdowns
      if (event.key === 'Escape') {
        const closeButtons = document.querySelectorAll('[aria-label*="fermer"], [aria-label*="close"]');
        closeButtons.forEach(button => {
          if ((button as HTMLElement).offsetParent !== null) {
            (button as HTMLElement).click();
          }
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};