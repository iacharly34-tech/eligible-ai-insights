import { useLanguage } from "@/contexts/LanguageContext";
import { Search, BarChart3, FileText, ArrowRight } from "lucide-react";

const steps = {
  fr: [
    { icon: Search, num: "01", title: "Détecter", desc: "Notre IA scanne 200+ sources officielles en temps réel et identifie les AO pertinents pour votre profil." },
    { icon: BarChart3, num: "02", title: "Scorer", desc: "Chaque AO reçoit un score de compatibilité basé sur vos compétences, votre historique et les critères du DCE." },
    { icon: FileText, num: "03", title: "Répondre", desc: "Concentrez vos efforts uniquement sur les marchés où votre score est élevé. Résultat : plus de victoires, moins d'efforts perdus." },
  ],
  en: [
    { icon: Search, num: "01", title: "Detect", desc: "Our AI scans 200+ official sources in real time and identifies relevant tenders for your profile." },
    { icon: BarChart3, num: "02", title: "Score", desc: "Each tender gets a compatibility score based on your skills, history and DCE criteria." },
    { icon: FileText, num: "03", title: "Respond", desc: "Focus your efforts only on tenders where your score is high. Result: more wins, less wasted effort." },
  ],
};

export const SolutionSteps = () => {
  const { language } = useLanguage();
  const items = steps[language];

  return (
    <section className="py-16 sm:py-24 px-4 bg-secondary/30" aria-label="Solution">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {language === "en" ? "How it works" : "Comment ça marche"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
            {language === "en"
              ? "From detection to decision in 3 steps"
              : "De la détection à la décision en 3 étapes"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {items.map((step, i) => (
            <div key={step.num} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-6 shadow-glow relative z-10">
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">{step.num}</span>
              <h3 className="text-xl font-bold font-display mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < 2 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-16 w-5 h-5 text-primary/30 z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
