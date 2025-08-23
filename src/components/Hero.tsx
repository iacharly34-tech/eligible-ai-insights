import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import heroImage from "@/assets/js-development-workspace.jpg";
import bannerGradient from "@/assets/banner-gradient.jpg";
import { ArrowRight, Zap, Target, Brain, Play, CheckCircle, TrendingUp } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { SafeLink } from "@/components/SafeLink";

export const Hero = () => {
  const { t, language } = useLanguage();
  return (
    <section className="section-spacing bg-gradient-hero relative overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto relative">
        {/* Social Proof Banner */}
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 sm:px-4 py-2 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            {t('hero.stats.opportunities')}
          </Badge>
        </div>

        {/* Main Content - Centered Layout */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-xs sm:text-sm font-medium text-muted-foreground tracking-widest uppercase">
              {t('hero.badge')}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight px-2">
              {t('hero.title')}{" "}
              <span className="text-primary font-medium bg-gradient-primary bg-clip-text text-transparent">
                {t('hero.title.highlight')}
              </span>{" "}
              {t('hero.title.end')}
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto px-4">
              {t('hero.subtitle')}
            </p>

            {/* Value Propositions */}
            <div className="space-y-3 text-sm text-muted-foreground max-w-md mx-auto px-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t('hero.stats.opportunities')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t('hero.stats.time')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{t('hero.stats.precision')}</span>
              </div>
            </div>
            
            <div className="cta-row">
              <SafeLink to={language === 'en' ? '/en/demo' : '/demo'}>
                <Button variant="tengo" className="cta-button group">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <SafeLink to={language === 'en' ? '/en/demo' : '/demo'}>
                <Button variant="outline" className="cta-button">
                  <Play className="w-4 h-4 mr-2" />
                  {t('hero.cta.secondary')}
                </Button>
              </SafeLink>
            </div>

            <div className="text-xs text-muted-foreground">
              ✨ Aucune carte bancaire requise • Essai 14 jours • Plus de compétitivité = meilleures affaires publiques
            </div>
          </div>
        </div>

        {/* Social proof stats */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            Rejoint par plus de 2000+ professionnels des marchés publics
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-center">
            <div className="min-w-0 flex-1 sm:flex-initial">
              <div className="text-2xl sm:text-3xl font-bold text-primary">+15M€</div>
              <div className="text-xs sm:text-sm text-muted-foreground">de marchés remportés</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border opacity-50"></div>
            <div className="min-w-0 flex-1 sm:flex-initial">
              <div className="text-2xl sm:text-3xl font-bold text-primary">47%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">d'augmentation du taux de succès</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border opacity-50"></div>
            <div className="min-w-0 flex-1 sm:flex-initial">
              <div className="text-2xl sm:text-3xl font-bold text-primary">6h/semaine</div>
              <div className="text-xs sm:text-sm text-muted-foreground">économisées en veille</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};