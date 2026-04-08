import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
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
          const duration = 2500;
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

  const circumference = 2 * Math.PI * 58;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div ref={ref} className="relative w-48 h-48 mx-auto">
      <svg className="w-48 h-48 -rotate-90" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="58" stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.3" />
        <circle
          cx="64" cy="64" r="58"
          stroke="url(#heroScoreGradient)" strokeWidth="4" fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-100"
        />
        <defs>
          <linearGradient id="heroScoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--success))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-extrabold font-display text-foreground tracking-tight">
          {score}
        </span>
        <span className="text-xs text-muted-foreground font-medium mt-1 uppercase tracking-widest">/100</span>
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
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[hsl(var(--hero-dark))]" aria-label="Hero">
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto relative z-10 py-32 sm:py-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              {language === "en" ? "Predictive AI for public tenders" : "IA prédictive pour marchés publics"}
            </span>
          </div>

          {/* Main headline - Tudor-style bold centered */}
          <h1 className={`mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight font-display transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {language === "en" ? (
              <>
                Know your{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">win probability</span>
                <br />before you bid
              </>
            ) : (
              <>
                Connaissez votre{" "}
                <span className="bg-gradient-highlight bg-clip-text text-transparent">score de succès</span>
                <br />avant de candidater
              </>
            )}
          </h1>

          {/* Sub-headline */}
          <p className={`mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            {language === "en"
              ? "Eligibly analyzes each public tender against your company profile and predicts your chances of winning — so you only invest time where it counts."
              : "Eligibly analyse chaque appel d'offres par rapport à votre profil entreprise et prédit vos chances de succès — pour investir votre temps uniquement là où ça compte."}
          </p>

          {/* Score Animation */}
          <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <AnimatedScore />
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
              {language === "en"
                ? "AI analysis based on 847 similar past tenders"
                : "Analyse IA basée sur 847 marchés similaires passés"}
            </div>
          </div>

          {/* CTAs */}
          <div className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <SafeLink to={demoHref}>
              <Button size="lg" className="h-14 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground tracking-wide uppercase group">
                {language === "en" ? "Get your first score" : "Obtenir votre score"}
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SafeLink>
            <SafeLink to={demoHref}>
              <Button variant="outline" size="lg" className="h-14 px-10 text-base font-semibold border-border/50 hover:bg-card/50 tracking-wide uppercase group">
                <Play className="w-4 h-4 mr-3" />
                {language === "en" ? "Watch demo" : "Voir la démo"}
              </Button>
            </SafeLink>
          </div>

          <p className={`mt-6 text-xs text-muted-foreground tracking-wide transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {language === "en"
              ? "No credit card required · 14-day free trial · Cancel anytime"
              : "Sans carte bancaire · Essai 14 jours · Annulation libre"}
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
