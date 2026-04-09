import { useLanguage } from "@/contexts/LanguageContext";
import { Rocket, RefreshCw, CheckCircle2 } from "lucide-react";

const steps = {
  fr: [
    { icon: Rocket, day: "Jour 1", title: "Scoring instantané", desc: "Créez votre profil en 5 minutes. Charly IA analyse immédiatement les AO en cours et vous livre vos premiers scores de compatibilité." },
    { icon: RefreshCw, day: "Jours 2–5", title: "Affinez et explorez", desc: "Parcourez vos AO scorés, ajustez vos critères et construisez votre shortlist. Les alertes intelligentes vous notifient dès qu'un nouvel AO matche votre profil." },
    { icon: CheckCircle2, day: "Jours 6–7", title: "Décidez en confiance", desc: "À la fin de l'essai, vous savez exactement quels marchés méritent votre investissement. Données claires, décision éclairée." },
  ],
  en: [
    { icon: Rocket, day: "Day 1", title: "Instant scoring", desc: "Create your profile in 5 minutes. Charly AI immediately analyzes live tenders and delivers your first compatibility scores." },
    { icon: RefreshCw, day: "Days 2–5", title: "Refine & explore", desc: "Browse your scored tenders, adjust criteria, and build your shortlist. Smart alerts notify you when new tenders match your profile." },
    { icon: CheckCircle2, day: "Days 6–7", title: "Decide with clarity", desc: "By trial's end, you know exactly which tenders deserve your investment. Clear data, informed decision." },
  ],
};

export const OnboardingTimeline = () => {
  const { language } = useLanguage();
  const items = steps[language];

  return (
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Onboarding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            🚀 {language === "en" ? "Start your trial" : "Démarrez votre essai"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Your first 7 days with Eligibly"
              : "Vos 7 premiers jours avec Eligibly"}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/30 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-16 sm:space-y-20">
            {items.map((step, i) => (
              <div key={i} className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12">
                {/* Left content (odd) / spacer (even) on desktop */}
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-12" : ""}`}>
                  {i % 2 === 0 && (
                    <div>
                      <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.4em]">{step.day}</span>
                      <h3 className="text-2xl font-bold font-display mt-2 mb-3 tracking-tight">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center icon */}
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Right content (even) / spacer (odd) on desktop */}
                <div className={`hidden md:block flex-1 ${i % 2 === 1 ? "pl-12" : ""}`}>
                  {i % 2 === 1 && (
                    <div>
                      <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.4em]">{step.day}</span>
                      <h3 className="text-2xl font-bold font-display mt-2 mb-3 tracking-tight">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  )}
                </div>

                {/* Mobile content */}
                <div className="md:hidden">
                  <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.4em]">{step.day}</span>
                  <h3 className="text-xl font-bold font-display mt-2 mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
