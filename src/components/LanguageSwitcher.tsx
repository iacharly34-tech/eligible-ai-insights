import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' }
  ] as const;

  return (
    <div className="flex">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            console.log('Switching language to:', lang.code);
            setLanguage(lang.code);
          }}
          className={`
            px-2 py-1 text-xs font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md
            ${language === lang.code 
              ? 'text-primary' 
              : 'text-foreground/60 hover:text-foreground'
            }
          `}
          aria-label={`${t('accessibility.language.switch')} ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};