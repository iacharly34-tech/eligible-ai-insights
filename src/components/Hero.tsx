import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SafeLink } from "@/components/SafeLink";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

export const Hero = () => {
  const { t, language } = useLanguage();
  const { getAnimationClass, getTransition } = useOptimizedAnimation();
  return (
    <section 
      className="section-spacing bg-gradient-hero relative overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center"
      style={{ transition: getTransition('var(--transition-smooth)') }}
    >
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
        <div className={`max-w-4xl mx-auto text-center ${getAnimationClass('animate-fade-in')}`}>
          <div className="space-y-6 sm:space-y-8">
            <div className="text-xs sm:text-sm font-medium text-muted-foreground tracking-widest uppercase">
              {t('hero.badge')}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight px-2">
              <span className="text-primary font-medium bg-gradient-primary bg-clip-text text-transparent">
                La seule IA qui prédit vos chances
              </span>{" "}
              sur les marchés publics avant de candidater
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto px-4">
              Eligibly est la première IA spécialisée dans les appels d'offres publics (AO) et les marchés publics, qui prédit vos chances de succès avant de candidater.
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
            
            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:flex-row sm:gap-4">
              <SafeLink to={language === 'en' ? '/en/demo' : '/demo'}>
                <Button variant="tengo" className="w-full h-12 text-sm font-semibold px-6 group min-h-[44px] whitespace-nowrap overflow-hidden">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </SafeLink>
              <SafeLink to={language === 'en' ? '/en/demo' : '/demo'}>
                <Button variant="outline" className="w-full h-12 text-sm font-semibold px-6 group min-h-[44px] whitespace-nowrap overflow-hidden">
                  <Play className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{t('hero.cta.secondary')}</span>
                </Button>
              </SafeLink>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                En savoir plus : <a href="/appels-d-offres-publics" className="text-primary hover:underline">
                  Comment l'IA transforme les appels d'offres publics
                </a>
              </p>
            </div>

            <div className="text-xs text-muted-foreground">
              ✨ Aucune carte bancaire requise • Essai 14 jours • Plus de compétitivité = meilleures affaires publiques
            </div>
          </div>
        </div>

        {/* Social proof stats - Enhanced */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            🚀 Utilisé par les équipes commerciales les plus performantes
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-primary">+15M€</div>
              <div className="text-xs text-muted-foreground">marchés remportés</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-accent">47%</div>
              <div className="text-xs text-muted-foreground">taux de succès</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-success">6h/sem</div>
              <div className="text-xs text-muted-foreground">temps économisé</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-warning">94%</div>
              <div className="text-xs text-muted-foreground">précision IA</div>
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 bg-white/60 px-3 py-1.5 rounded-full">
              <Shield className="w-3 h-3 text-success" /> RGPD Compliant
            </span>
            <span className="flex items-center gap-1 bg-white/60 px-3 py-1.5 rounded-full">
              <TrendingUp className="w-3 h-3 text-primary" /> ROI moyen x3
            </span>
            <span className="flex items-center gap-1 bg-white/60 px-3 py-1.5 rounded-full">
              <Users className="w-3 h-3 text-accent" /> Équipes jusqu'à 50 users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};