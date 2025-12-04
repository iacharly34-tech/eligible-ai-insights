import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Bell, Target, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();
  const features = [
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
      badge: "Temps réel",
      color: "bg-success"
    },
    {
      icon: Target,
      title: t('features.scoring.title'),
      description: t('features.scoring.desc'),
      badge: "Précision",
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
      badge: "Sécurisé",
      color: "bg-destructive"
    }
  ];

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

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 text-center border border-primary/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">+600</div>
            <div className="text-sm sm:text-base font-medium">Appels d'offres/jour</div>
            <div className="text-xs text-muted-foreground mt-1">analysés automatiquement</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 text-center border border-accent/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">80Md€</div>
            <div className="text-sm sm:text-base font-medium">Marché accessible</div>
            <div className="text-xs text-muted-foreground mt-1">en France chaque année</div>
          </div>
          <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 text-center border border-success/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-success mb-2">10x</div>
            <div className="text-sm sm:text-base font-medium">Plus rapide</div>
            <div className="text-xs text-muted-foreground mt-1">que la veille manuelle</div>
          </div>
          <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-2xl p-6 text-center border border-warning/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warning mb-2">+50K</div>
            <div className="text-sm sm:text-base font-medium">Renouvellements</div>
            <div className="text-xs text-muted-foreground mt-1">de marchés détectés</div>
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16 space-y-4 px-4">
          <h3 className="text-xl sm:text-2xl font-bold">{t('features.flow.title')}</h3>
          <p className="text-lg sm:text-xl text-primary font-semibold">{t('features.flow.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border bg-white shadow-card"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 bg-white rounded-2xl p-6 sm:p-8 shadow-card max-w-4xl mx-auto">
            <div className="text-center min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Sources surveillées</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="w-full sm:hidden h-px bg-border" />
            <div className="text-center min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-accent">99.9%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Disponibilité</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="w-full sm:hidden h-px bg-border" />
            <div className="text-center min-w-0 flex-1">
              <div className="text-xl sm:text-2xl font-bold text-success">15min</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Délai moyen d'alerte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};