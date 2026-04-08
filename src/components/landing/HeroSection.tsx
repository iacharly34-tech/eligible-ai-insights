import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedScore = () => {
  const [score, setScore] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const target = 87;
          const duration = 2000;
          const step = target / (duration / 16);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setScore(target);
              clearInterval(interval);
            } else {
              setScore(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const getScoreColor = () => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-amber-500";
    return "text-red-500";
  };

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div ref={ref} className="relative w-40 h-40 mx-auto">
      <svg className="w-40 h-40 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" stroke="hsl(var(--border))" strokeWidth="8" fill="none" />
        <circle
          cx="60" cy="60" r="54"
          stroke="url(#scoreGradient)" strokeWidth="8" fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-100"
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(258, 89%, 66%)" />
            <stop offset="100%" stopColor="hsl(142, 76%, 36%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-extrabold font-display ${getScoreColor()}`}>
          {score}
        </span>
        <span className="text-xs text-muted-foreground font-medium mt-1">/100</span>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const { language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 relative overflow-hidden min-h-[85vh] flex items-center" aria-label="Hero">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary text-xs px-3 py-1.5">
              {language === "en" ? "Predictive AI for public tenders" : "IA prédictive pour appels d'offres"}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight font-display">
              {language === "en" ? (
                <>Know your <span className="bg-gradient-highlight bg-clip-text text-transparent">win probability</span> before you bid</>
              ) : (
                <>Connaissez votre <span className="bg-gradient-highlight bg-clip-text text-transparent">score de succès</span> avant de candidater</>
              )}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {language === "en"
                ? "Eligibly analyzes each public tender against your company profile and predicts your chances of winning — so you only invest time where it counts."
                : "Eligibly analyse chaque appel d'offres par rapport à votre profil entreprise et prédit vos chances de succès — pour investir votre temps uniquement là où ça compte."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <SafeLink to={demoHref}>
                <Button size="lg" className="w-full sm:w-auto h-13 px-8 text-base font-semibold bg-gradient-cta hover:opacity-90 transition-opacity group">
                  {language === "en" ? "Get your first score free" : "Obtenez votre premier score gratuit"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
              <SafeLink to={demoHref}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-13 px-8 text-base font-semibold group">
                  <Play className="w-4 h-4 mr-2" />
                  {language === "en" ? "Watch demo" : "Voir la démo"}
                </Button>
              </SafeLink>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              {language === "en"
                ? "✦ No credit card required · 14-day free trial · Cancel anytime"
                : "✦ Sans carte bancaire · Essai 14 jours · Annulation libre"}
            </p>
          </div>

          {/* Right — Score Animation + Mini Dashboard */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="bg-card border border-border rounded-2xl shadow-elegant p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {language === "en" ? "Compatibility score" : "Score de compatibilité"}
                  </p>
                  <h3 className="text-lg font-bold font-display">
                    {language === "en" ? "IT infrastructure — Île-de-France Region" : "Infra. informatique — Région Île-de-France"}
                  </h3>
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  {language === "en" ? "High match" : "Fort potentiel"}
                </Badge>
              </div>

              <AnimatedScore />

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: language === "en" ? "Technical" : "Technique", value: "92%" },
                  { label: language === "en" ? "Financial" : "Financier", value: "85%" },
                  { label: language === "en" ? "Experience" : "Expérience", value: "88%" },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary/50 rounded-xl p-3">
                    <div className="text-lg font-bold text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border pt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {language === "en"
                  ? "AI analysis based on 847 similar past tenders"
                  : "Analyse IA basée sur 847 marchés similaires passés"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
