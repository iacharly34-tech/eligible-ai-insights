import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSync = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const isEn = location.pathname.startsWith('/en');
    const target = isEn ? 'en' : 'fr';
    if (language !== target) {
      setLanguage(target);
    }
  }, [location.pathname, language, setLanguage]);

  return null;
};
