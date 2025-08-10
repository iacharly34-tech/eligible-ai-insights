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
    // Compute new path preserving query and hash
    const { pathname, search, hash } = location;
    let newPath = pathname;
    if (code === 'en') {
      newPath = pathname.startsWith('/en') ? pathname : `/en${pathname}`;
    } else {
      newPath = pathname.startsWith('/en') ? pathname.replace(/^\/en/, '') || '/' : pathname;
    }
    setLanguage(code);
    // Navigate to keep LanguageSync consistent with URL
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