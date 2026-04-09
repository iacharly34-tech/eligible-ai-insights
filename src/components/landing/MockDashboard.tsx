import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, MapPin, Euro, ChevronRight, Bookmark, Archive } from "lucide-react";

type Tender = {
  title: string;
  score: number;
  deadline: string;
  location: string;
  value: string;
  tag: string;
};

const tenders: Record<string, Tender[]> = {
  fr: [
    { title: "Développement plateforme numérique de gestion documentaire", score: 94, deadline: "28 mai 2026", location: "France", value: "850 000 €", tag: "Excellent match" },
    { title: "Modernisation infrastructure cloud pour collectivité", score: 87, deadline: "12 juin 2026", location: "Belgique", value: "1 200 000 €", tag: "Très bon match" },
    { title: "Audit cybersécurité et mise en conformité RGPD", score: 79, deadline: "3 juil. 2026", location: "France", value: "320 000 €", tag: "Bon match" },
    { title: "Développement application mobile de services publics", score: 72, deadline: "18 juil. 2026", location: "Suisse", value: "580 000 €", tag: "Match correct" },
  ],
  en: [
    { title: "Digital document management platform development", score: 94, deadline: "May 28, 2026", location: "France", value: "€850,000", tag: "Excellent match" },
    { title: "Cloud infrastructure modernization for public agency", score: 87, deadline: "Jun 12, 2026", location: "Belgium", value: "€1,200,000", tag: "Great match" },
    { title: "Cybersecurity audit and GDPR compliance", score: 79, deadline: "Jul 3, 2026", location: "France", value: "€320,000", tag: "Good match" },
    { title: "Public services mobile app development", score: 72, deadline: "Jul 18, 2026", location: "Switzerland", value: "€580,000", tag: "Fair match" },
  ],
};

const ScoreRing = ({ score, size = 44 }: { score: number; size?: number }) => {
  const r = (size - 6) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 90 ? "hsl(var(--success))" : score >= 80 ? "hsl(var(--primary))" : "hsl(var(--warning))";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="hsl(var(--border))" strokeWidth="3" fill="none" opacity="0.3" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={color} strokeWidth="3.5" fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-foreground">{score}%</span>
      </div>
    </div>
  );
};

export const MockDashboard = () => {
  const { language } = useLanguage();
  const items = tenders[language];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 sm:py-32 px-4 bg-background" aria-label="Dashboard preview">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {language === "en" ? "Live preview" : "Aperçu en direct"}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {language === "en"
              ? "Your scored tenders at a glance"
              : "Vos appels d'offres scorés en un coup d'œil"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {language === "en"
              ? "Charly AI analyzes each tender against your profile and assigns a compatibility score."
              : "Charly IA analyse chaque AO par rapport à votre profil et attribue un score de compatibilité."}
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <Card className="border border-border/50 bg-card shadow-xl rounded-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-border/40 bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">app.eligibly.ai/dashboard</span>
            </div>

            {/* Sidebar + content */}
            <div className="flex min-h-[420px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-56 border-r border-border/30 bg-muted/20 p-4 gap-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">E</span>
                  </div>
                  <span className="font-semibold text-sm">Eligibly</span>
                </div>
                {[
                  language === "en" ? "Dashboard" : "Tableau de bord",
                  language === "en" ? "My tenders" : "Mes AO",
                  "Charly IA",
                  language === "en" ? "Settings" : "Paramètres",
                ].map((label, i) => (
                  <div key={i} className={`px-3 py-2 rounded-lg text-sm cursor-default ${i === 1 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
                    {label}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col lg:flex-row">
                {/* Tender list */}
                <div className="flex-1 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm">
                      {language === "en" ? "Opportunities matched for you" : "Opportunités matchées pour vous"}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {language === "en" ? "4 new" : "4 nouveaux"}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    {items.map((tender, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedIdx(i)}
                        className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                          selectedIdx === i
                            ? "bg-primary/5 border border-primary/20 shadow-sm"
                            : "hover:bg-muted/50 border border-transparent"
                        }`}
                      >
                        <ScoreRing score={tender.score} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{tender.title}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <CalendarClock className="w-3 h-3" /> {tender.deadline}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {tender.location}
                            </span>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 shrink-0">
                          <span className="text-xs font-medium text-muted-foreground">{tender.value}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detail panel */}
                <div className="hidden lg:block w-80 border-l border-border/30 p-6 bg-muted/10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`text-xs ${items[selectedIdx].score >= 90 ? "bg-success/10 text-success border-success/20" : items[selectedIdx].score >= 80 ? "bg-primary/10 text-primary border-primary/20" : "bg-warning/10 text-warning border-warning/20"}`}>
                      {items[selectedIdx].tag}
                    </Badge>
                    <div className="flex gap-1">
                      <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                        <Bookmark className="w-4 h-4 text-muted-foreground" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                        <Archive className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  <ScoreRing score={items[selectedIdx].score} size={80} />
                  
                  <h4 className="mt-4 font-semibold text-sm leading-snug">{items[selectedIdx].title}</h4>

                  <div className="mt-6 space-y-3">
                    {[
                      { icon: CalendarClock, label: language === "en" ? "Deadline" : "Date limite", value: items[selectedIdx].deadline },
                      { icon: MapPin, label: language === "en" ? "Location" : "Localisation", value: items[selectedIdx].location },
                      { icon: Euro, label: language === "en" ? "Value" : "Valeur", value: items[selectedIdx].value },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <row.icon className="w-4 h-4 text-muted-foreground/60" />
                        <div>
                          <span className="text-muted-foreground text-xs">{row.label}</span>
                          <p className="font-medium text-xs">{row.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
