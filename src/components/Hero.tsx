import { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SafeLink } from "@/components/SafeLink";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

// Memoized stat card for eco-design
const StatCard = memo(({ value, label, colorClass }: { value: string; label: string; colorClass: string }) => (
  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-card border border-border/50">
    <div className={`text-2xl sm:text-3xl font-bold ${colorClass}`}>{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
));
StatCard.displayName = 'StatCard';

// Memoized trust badge
const TrustBadge = memo(({ icon: Icon, text, iconClass }: { icon: typeof Shield; text: string; iconClass: string }) => (
  <span className="flex items-center gap-1 bg-card/60 px-3 py-1.5 rounded-full">
    <Icon className={`w-3 h-3 ${iconClass}`} aria-hidden="true" /> {text}
  </span>
));
TrustBadge.displayName = 'TrustBadge';

export const Hero = memo(() => {
  const { t, language } = useLanguage();
  const { getAnimationClass, getTransition, shouldAnimate } = useOptimizedAnimation();
  
  // Memoize stats data to prevent re-renders
  const stats = useMemo(() => [
    { value: t('hero.stats.markets.value'), label: t('hero.stats.markets.label'), colorClass: 'text-primary' },
    { value: t('hero.stats.success.value'), label: t('hero.stats.success.label'), colorClass: 'text-accent' },
    { value: t('hero.stats.time.value'), label: t('hero.stats.time.label'), colorClass: 'text-success' },
    { value: t('hero.stats.ai.value'), label: t('hero.stats.ai.label'), colorClass: 'text-warning' },
  ], [t]);

  const trustBadges = useMemo(() => [
    { icon: Shield, text: t('hero.trust.rgpd'), iconClass: 'text-success' },
    { icon: TrendingUp, text: t('hero.trust.roi'), iconClass: 'text-primary' },
    { icon: Users, text: t('hero.trust.teams'), iconClass: 'text-accent' },
  ], [t]);

  const demoPath = language === 'en' ? '/en/demo' : '/demo';

  return (
    <section 
      className="section-spacing bg-gradient-hero relative overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center"
      style={{ transition: shouldAnimate ? getTransition('var(--transition-smooth)') : 'none' }}
    >
      {/* Background Pattern - conditional rendering for eco-design */}
      {shouldAnimate && <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />}
      
      <div className="container mx-auto relative">
        {/* Social Proof Banner */}
        <div className="text-center mb-6 sm:mb-8">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 sm:px-4 py-2 text-xs sm:text-sm">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" aria-hidden="true" />
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
                {t('hero.title.main')}
              </span>{" "}
              {t('hero.title.sub')}
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto px-4">
              {t('hero.description')}
            </p>

            {/* Value Propositions */}
            <div className="space-y-3 text-sm text-muted-foreground max-w-md mx-auto px-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>{t('hero.stats.opportunities')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>{t('hero.stats.time')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <span>{t('hero.stats.precision')}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:flex-row sm:gap-4 sm:justify-center">
              <SafeLink to={demoPath}>
                <Button variant="tengo" className="w-full h-12 text-sm font-semibold px-6 group min-h-[44px] whitespace-nowrap overflow-hidden">
                  {t('hero.cta.primary')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" aria-hidden="true" />
                </Button>
              </SafeLink>
              <SafeLink to={demoPath}>
                <Button variant="outline" className="w-full h-12 text-sm font-semibold px-6 group min-h-[44px] whitespace-nowrap overflow-hidden">
                  <Play className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="truncate">{t('hero.cta.secondary')}</span>
                </Button>
              </SafeLink>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {t('hero.learnMore')} <SafeLink to="/appels-d-offres-publics" className="text-primary hover:underline">
                  {t('hero.learnMore.link')}
                </SafeLink>
              </p>
            </div>

            <div className="text-xs text-muted-foreground">
              ✨ {t('hero.noCard')}
            </div>
          </div>
        </div>

        {/* Social proof stats - Optimized with memo */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            🚀 {t('hero.stats.usedBy')}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          
          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} {...badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
Hero.displayName = 'Hero';
