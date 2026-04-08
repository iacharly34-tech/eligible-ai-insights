import { useLanguage } from "@/contexts/LanguageContext";
import { Brain, Target, Zap, Shield, BarChart3, Users } from "lucide-react";

const features = {
  fr: [
    { icon: BarChart3, title: "Scoring prédictif", desc: "Un score de compatibilité unique basé sur l'analyse IA du DCE et vos données d'attribution historiques." },
    { icon: Brain, title: "Analyse IA du DCE", desc: "Extraction automatique des critères, sous-critères et pondérations de chaque dossier de consultation." },
    { icon: Target, title: "Détection intelligente", desc: "200+ sources officielles surveillées en continu. Fini les AO ratés par manque de veille." },
    { icon: Zap, title: "Alertes personnalisées", desc: "Notifications en temps réel sur Slack, Teams ou email quand un AO à fort score est détecté." },
    { icon: Users, title: "Collaboration d'équipe", desc: "Partagez les analyses, attribuez les AO et suivez l'avancement des réponses en équipe." },
    { icon: Shield, title: "Conforme RGPD", desc: "Données hébergées en France. Vos DCE ne sont jamais utilisés pour entraîner nos modèles." },
  ],
  en: [
    { icon: BarChart3, title: "Predictive scoring", desc: "A unique compatibility score based on AI analysis of tender documents and historical award data." },
    { icon: Brain, title: "AI document analysis", desc: "Automatic extraction of criteria, sub-criteria and weightings from each consultation file." },
    { icon: Target, title: "Smart detection", desc: "200+ official sources monitored continuously. No more missed tenders due to poor monitoring." },
    { icon: Zap, title: "Custom alerts", desc: "Real-time notifications on Slack, Teams or email when a high-score tender is detected." },
    { icon: Users, title: "Team collaboration", desc: "Share analyses, assign tenders and track response progress as a team." },
    { icon: Shield, title: "GDPR compliant", desc: "Data hosted in France. Your tender documents are never used to train our models." },
  ],
};

export const FeaturesGrid = () => {
  const { language } = useLanguage();
  const items = features[language];

  return (
    <section className="py-24 sm:py-32 px-4" id="features" aria-label="Features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {language === "en" ? "Features" : "Fonctionnalités"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Everything you need to win more tenders"
              : "Tout ce qu'il faut pour remporter plus de marchés"}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {items.map((f) => (
            <div key={f.title} className="group p-8 sm:p-10 border border-border/30 hover:bg-card transition-all duration-500">
              <f.icon className="w-7 h-7 text-primary mb-6 group-hover:text-foreground transition-colors duration-300" />
              <h3 className="text-lg font-bold font-display mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
