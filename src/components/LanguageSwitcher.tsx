import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' }
  ] as const;

  const handleSwitch = (code: 'fr' | 'en') => {
    if (language === code) return;
    const { pathname, search, hash } = location;

    // Explicit slug mapping between FR and EN to avoid 404s
    const frToEn: Record<string, string> = {
      '/': '/en',
      '/produit': '/en/product',
      '/solutions': '/en/solutions',
      '/tarifs': '/en/pricing',
      '/ressources': '/en/resources',
      '/a-propos': '/en/about',
      '/connexion': '/en/login',
      '/demo': '/en/demo',
      '/inscription': '/en/demo',
      '/mentions-legales': '/en/legal',
      '/confidentialite': '/en/privacy',
      '/cgu': '/en/terms',
    };

    const enToFr: Record<string, string> = {
      '/en': '/',
      '/en/': '/',
      '/en/product': '/produit',
      '/en/solutions': '/solutions',
      '/en/pricing': '/tarifs',
      '/en/resources': '/ressources',
      '/en/about': '/a-propos',
      '/en/login': '/connexion',
      '/en/demo': '/demo',
      '/en/legal': '/mentions-legales',
      '/en/privacy': '/confidentialite',
      '/en/terms': '/cgu',
    };

    let newPath = pathname;
    if (code === 'en') {
      newPath = frToEn[pathname] ?? (pathname.startsWith('/en') ? pathname : `/en${pathname}`);
    } else {
      newPath = enToFr[pathname] ?? (pathname.startsWith('/en') ? pathname.replace(/^\/en/, '') || '/' : pathname);
    }

    setLanguage(code);
    navigate({ pathname: newPath, search, hash }, { replace: true });
  };

  return (
    <div className="flex">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSwitch(lang.code)}
          className={`${
            language === lang.code ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
          } px-2 py-1 text-xs font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md`}
          aria-label={`${t('accessibility.language.switch')} ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};