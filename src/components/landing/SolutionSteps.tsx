import { useLanguage } from "@/contexts/LanguageContext";
import { Search, BarChart3, FileText } from "lucide-react";

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
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Solution">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {language === "en" ? "How it works" : "Comment ça marche"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "From detection to decision in 3 steps"
              : "De la détection à la décision en 3 étapes"}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px bg-border/40" />

          {items.map((step) => (
            <div key={step.num} className="relative text-center group">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/15 transition-all duration-500 relative z-10">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary/50 uppercase tracking-[0.4em]">{step.num}</span>
              <h3 className="text-2xl font-bold font-display mt-3 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
