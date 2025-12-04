import { memo, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Bell, Target, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useOptimizedAnimation } from "@/hooks/useOptimizedAnimation";

// Memoized stat block for eco-design
const StatBlock = memo(({ value, label, sublabel, colorClass }: { 
  value: string; label: string; sublabel: string; colorClass: string 
}) => (
  <div className={`bg-gradient-to-br from-${colorClass}/10 to-${colorClass}/5 rounded-2xl p-6 text-center border border-${colorClass}/20`}>
    <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-${colorClass} mb-2`}>{value}</div>
    <div className="text-sm sm:text-base font-medium">{label}</div>
    <div className="text-xs text-muted-foreground mt-1">{sublabel}</div>
  </div>
));
StatBlock.displayName = 'StatBlock';

// Memoized feature card
const FeatureCard = memo(({ icon: Icon, title, description, badge, color }: {
  icon: typeof Brain; title: string; description: string; badge: string; color: string
}) => {
  const { shouldAnimate } = useOptimizedAnimation();
  
  return (
    <Card className={`group ${shouldAnimate ? 'hover:shadow-elegant transition-all duration-300' : ''} border bg-card shadow-card`}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shadow-lg`}>
            <Icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {badge}
          </Badge>
        </div>
        <CardTitle className={`text-xl ${shouldAnimate ? 'group-hover:text-primary transition-colors' : ''}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
});
FeatureCard.displayName = 'FeatureCard';

export const Features = memo(() => {
  const { t, language } = useLanguage();
  const { shouldAnimate } = useOptimizedAnimation();
  
  const features = useMemo(() => [
    {
      icon: Brain,
      title: t('features.multisource.title'),
      description: t('features.multisource.desc'),
      badge: "24h/24",
      color: "bg-primary"
    },
    {
      icon: Zap,
      title: t('features.ai.title'),
      description: t('features.ai.desc'),
      badge: "LLM",
      color: "bg-accent"
    },
    {
      icon: Bell,
      title: t('features.notifications.title'),
      description: t('features.notifications.desc'),
      badge: language === 'en' ? 'Real-time' : 'Temps réel',
      color: "bg-success"
    },
    {
      icon: Target,
      title: t('features.scoring.title'),
      description: t('features.scoring.desc'),
      badge: language === 'en' ? 'Precision' : 'Précision',
      color: "bg-warning"
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.desc'),
      badge: "Insights",
      color: "bg-secondary"
    },
    {
      icon: Shield,
      title: t('features.compliance.title'),
      description: t('features.compliance.desc'),
      badge: language === 'en' ? 'Secure' : 'Sécurisé',
      color: "bg-destructive"
    }
  ], [t, language]);

  const stats = useMemo(() => [
    { value: t('features.stats.tenders.value'), label: t('features.stats.tenders.label'), sublabel: t('features.stats.tenders.sublabel'), colorClass: 'primary' },
    { value: t('features.stats.market.value'), label: t('features.stats.market.label'), sublabel: t('features.stats.market.sublabel'), colorClass: 'accent' },
    { value: t('features.stats.speed.value'), label: t('features.stats.speed.label'), sublabel: t('features.stats.speed.sublabel'), colorClass: 'success' },
    { value: t('features.stats.renewals.value'), label: t('features.stats.renewals.label'), sublabel: t('features.stats.renewals.sublabel'), colorClass: 'warning' },
  ], [t]);

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <Badge variant="outline" className="text-primary border-primary">
            {t('features.badge')}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
            {t('features.title')}{" "}
            <span className="text-primary">
              {t('features.title.highlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Enhanced Stats Section - Eco-optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-${stat.colorClass}/10 to-${stat.colorClass}/5 rounded-2xl p-6 text-center border border-${stat.colorClass}/20`}
            >
              <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-${stat.colorClass} mb-2`}>{stat.value}</div>
              <div className="text-sm sm:text-base font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 sm:mb-16 space-y-4 px-4">
          <h3 className="text-xl sm:text-2xl font-bold">{t('features.flow.title')}</h3>
          <p className="text-lg sm:text-xl text-primary font-semibold">{t('features.flow.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 bg-card rounded-2xl p-6 sm:p-8 shadow-card max-w-4xl mx-auto">
            <div className="text-center min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('features.stats.sources')}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" aria-hidden="true" />
            <div className="w-full sm:hidden h-px bg-border" aria-hidden="true" />
            <div className="text-center min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-accent">99.9%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('features.stats.uptime')}</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" aria-hidden="true" />
            <div className="w-full sm:hidden h-px bg-border" aria-hidden="true" />
            <div className="text-center min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-success">15min</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t('features.stats.alertDelay')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Features.displayName = 'Features';