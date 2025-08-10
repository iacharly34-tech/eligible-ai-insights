import { useLanguage } from "@/contexts/LanguageContext";
import { SafeLink } from "@/components/SafeLink";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t, language } = useLanguage();
  const homePath = language === 'en' ? '/en' : '/';

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <section className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-lg text-muted-foreground mb-6">{t('notfound.description')}</p>
        <SafeLink to={homePath}>
          <Button variant="tengo" aria-label={t('notfound.backHome')}>
            {t('notfound.backHome')}
          </Button>
        </SafeLink>
      </section>
    </main>
  );
};

export default NotFound;