import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight, Radar, FileSearch, Lightbulb, PenTool, ShieldCheck, BarChart3 } from "lucide-react";

const MODULE_URLS: Record<string, string> = {
  detect: "/produit/veille-appels-offres",
  analyze: "/produit/analyse-dce-ia",
  decide: "/produit/go-no-go-ia",
  write: "/produit/memoire-technique-ia",
  check: "/produit/conformite-appel-offres",
  win: "/produit/pilotage-marches-publics",
};

const PRODUCT_MODULES = [
  {
    key: "detect",
    icon: Radar,
    accent: "from-blue-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-blue-500/40",
    number: "01",
  },
  {
    key: "analyze",
    icon: FileSearch,
    accent: "from-violet-500/20 to-purple-500/20",
    borderAccent: "group-hover:border-violet-500/40",
    number: "02",
  },
  {
    key: "decide",
    icon: Lightbulb,
    accent: "from-amber-500/20 to-orange-500/20",
    borderAccent: "group-hover:border-amber-500/40",
    number: "03",
  },
  {
    key: "write",
    icon: PenTool,
    accent: "from-emerald-500/20 to-green-500/20",
    borderAccent: "group-hover:border-emerald-500/40",
    number: "04",
  },
  {
    key: "check",
    icon: ShieldCheck,
    accent: "from-rose-500/20 to-pink-500/20",
    borderAccent: "group-hover:border-rose-500/40",
    number: "05",
  },
  {
    key: "win",
    icon: BarChart3,
    accent: "from-primary/20 to-primary/10",
    borderAccent: "group-hover:border-primary/40",
    number: "06",
  },
] as const;

export const ProductModules = () => {
  const { t, language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <section className="py-24 sm:py-32 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Product suite">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            {t('product.suite.badge')}
          </span>
        </div>
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.1] tracking-tight">
            {t('product.suite.title')}{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              {t('product.suite.title.highlight')}
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('product.suite.subtitle')}
          </p>
        </div>

        {/* Product modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_MODULES.map((mod) => (
            <SafeLink
              key={mod.key}
              to={MODULE_URLS[mod.key]}
              className={`group relative p-8 sm:p-10 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 ${mod.borderAccent} block`}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-4xl font-black text-muted-foreground/10 font-display select-none">
                {mod.number}
              </div>

              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.accent} border border-border/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <mod.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Product name */}
              <div className="mb-3">
                <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5">
                  Eligibly {t(`product.suite.${mod.key}.name`)}
                </Badge>
              </div>

              <h3 className="text-xl font-bold font-display mb-3 tracking-tight group-hover:text-primary transition-colors">
                {t(`product.suite.${mod.key}.title`)}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t(`product.suite.${mod.key}.desc`)}
              </p>

              {/* Key capabilities */}
              <ul className="space-y-2 mb-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {t(`product.suite.${mod.key}.cap${i}`)}
                  </li>
                ))}
              </ul>

              <span className="text-sm font-semibold text-primary group-hover:underline">
                {language === "en" ? "Learn more →" : "En savoir plus →"}
              </span>
            </SafeLink>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t('product.suite.cta.text')}
          </p>
          <SafeLink to={demoHref}>
            <Button size="lg" className="h-14 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground tracking-wide uppercase group">
              {t('common.bookDemo')}
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </SafeLink>
        </div>
      </div>
    </section>
  );
};
