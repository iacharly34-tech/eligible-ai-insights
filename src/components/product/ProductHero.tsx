import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, BarChart3 } from "lucide-react";

export const ProductHero = () => {
  const { t, language } = useLanguage();
  const demoHref = language === 'en' ? '/en/demo' : '/demo';

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200">
            {t('product.badge')}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('product.hero.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('product.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SafeLink to={demoHref}>
              <Button size="lg" className="px-8 py-4 h-auto group">
                {t('common.bookDemo')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SafeLink>
          </div>
        </div>
      </div>
    </section>
  );
};