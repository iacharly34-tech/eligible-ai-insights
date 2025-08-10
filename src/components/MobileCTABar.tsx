import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export const MobileCTABar: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [topOffset, setTopOffset] = useState<number>(64);

  useEffect(() => {
    const computeTop = () => {
      const header = document.querySelector('header');
      const h = header ? (header as HTMLElement).clientHeight : 64;
      setTopOffset(h);
    };
    const onScroll = () => setVisible(window.scrollY > 60);
    computeTop();
    onScroll();
    window.addEventListener('resize', computeTop);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', computeTop);
      window.removeEventListener('scroll', onScroll);
    };
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
    <div className="md:hidden fixed left-0 right-0 z-50 px-3" style={{ top: `calc(${topOffset}px + env(safe-area-inset-top))` }}>
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
