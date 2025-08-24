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
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = () => {
    const form = document.getElementById('demo-form') || document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        window.scrollBy(0, -80);
      }, 300);
    } else {
      navigate('/demo');
    }
  };

  if (!visible) return null;

  return (
    <div 
      className="md:hidden fixed left-0 right-0 z-[999] px-3"
      style={{ top: 'calc(var(--header-height) + 0.5rem)' }}
    >
      <Button
        variant="tengo"
        className="w-full h-12 text-sm font-semibold px-4 shadow-glow rounded-xl overflow-hidden"
        aria-label={t('accessibility.demo')}
        onClick={handleClick}
      >
        <span className="truncate">{t('nav.demo')}</span>
      </Button>
    </div>
  );
};
