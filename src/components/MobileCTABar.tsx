import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const MobileCTABar: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const form = document.getElementById('demo-form') || document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/demo');
    }
  };

  if (!visible) return null;

  return (
    <div className="md:hidden fixed top-16 left-0 right-0 z-40 px-3">
      <Button
        variant="tengo"
        className="w-full h-12 text-base font-semibold rounded-2xl shadow-glow"
        aria-label={t('accessibility.demo')}
        onClick={handleClick}
      >
        {t('nav.demo')}
      </Button>
    </div>
  );
};
