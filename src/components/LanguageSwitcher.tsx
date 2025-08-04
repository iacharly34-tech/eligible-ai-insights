import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'fr', label: 'Fr' },
    { code: 'en', label: 'En' }
  ] as const;

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-2 h-9 px-3 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-200 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
          aria-label={t('accessibility.language.switch')}
        >
          <Globe className="w-4 h-4 text-white/80" aria-hidden="true" />
          <span className="text-white/90 font-medium text-sm">
            {currentLanguage?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[100px] bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-xl z-50 p-1"
        sideOffset={5}
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 text-center font-medium text-sm
              ${language === lang.code 
                ? 'bg-primary/10 text-primary shadow-sm' 
                : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
              }
            `}
            role="menuitem"
          >
            {lang.label}
            {language === lang.code && (
              <span className="ml-2 text-primary" aria-hidden="true">●</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};