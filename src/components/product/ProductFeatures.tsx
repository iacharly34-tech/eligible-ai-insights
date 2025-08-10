import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { CORE_FEATURES } from "@/data/constants";

export const ProductFeatures = () => {
  const { t } = useLanguage();

  const technicalFeatures = CORE_FEATURES.map((feature) => ({
    ...feature,
    // Ajout de détails techniques spécifiques pour la page Produit
    technicalDetails: feature.details,
    integrations: (feature as any).key === 'alerts' ? ['Slack', 'Microsoft Teams', 'Email', 'Webhooks'] : [],
    apiAccess: (feature as any).key === 'surveillance'
  }));

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('product.features.title')}{" "}
            <span className="bg-gradient-highlight bg-clip-text text-transparent">{t('product.features.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('product.features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {t(`features.core.${(feature as any).key}.title`)}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t(`features.core.${(feature as any).key}.desc`)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.technicalDetails.map((detail, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};