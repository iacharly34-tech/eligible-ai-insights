import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAFooter } from "@/components/CTAFooter";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { MobileCTABar } from "@/components/MobileCTABar";
import { SafeLink } from "@/components/SafeLink";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft, CheckCircle2, type LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface ProductModuleLayoutProps {
  moduleName: string;
  moduleNumber: string;
  icon: LucideIcon;
  accentColor: string;
  headline: string;
  subheadline: string;
  description: string;
  features: Feature[];
  useCases: UseCase[];
  stats: { value: string; label: string }[];
  relatedArticle?: { url: string; title: string };
  relatedModules: { url: string; name: string; number: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const ProductModuleLayout = ({
  moduleName,
  moduleNumber,
  icon: Icon,
  accentColor,
  headline,
  subheadline,
  description,
  features,
  useCases,
  stats,
  relatedArticle,
  relatedModules,
  seoTitle,
  seoDescription,
}: ProductModuleLayoutProps) => {
  const { t, language } = useLanguage();
  const demoHref = language === "en" ? "/en/demo" : "/demo";

  return (
    <>
      <SEOHead />
      <StructuredData page="product" />
      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 px-4 bg-[hsl(var(--hero-dark))]">
            <div className="container mx-auto max-w-5xl">
              <SafeLink to={language === "en" ? "/en/product" : "/produit"} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                {language === "en" ? "Back to product" : "Retour au produit"}
              </SafeLink>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accentColor} border border-border/30 flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <span className="text-5xl font-black text-muted-foreground/10 font-display">{moduleNumber}</span>
                </div>
              </div>

              <Badge variant="outline" className="text-xs font-bold uppercase tracking-widest text-primary border-primary/20 bg-primary/5 mb-4">
                Eligibly {moduleName}
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.08] tracking-tight mb-6">
                {headline}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                {subheadline}
              </p>

              <SafeLink to={demoHref}>
                <Button size="lg" className="h-14 px-10 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground tracking-wide uppercase group">
                  {t('common.bookDemo')}
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SafeLink>
            </div>
          </section>

          {/* Stats bar */}
          <section className="py-12 px-4 border-b border-border/30 bg-card/30">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-black font-display text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 px-4 bg-[hsl(var(--hero-dark))]">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-12 text-center">
                {language === "en" ? "Key capabilities" : "Fonctionnalités clés"}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-lg font-bold font-display mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-12 text-center">
                {language === "en" ? "Use cases" : "Cas d'usage concrets"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {useCases.map((uc, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-border/40 bg-card/50">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-lg font-bold text-primary">{i + 1}</span>
                    </div>
                    <h3 className="text-base font-bold font-display mb-2">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related content */}
          <section className="py-16 px-4 bg-[hsl(var(--hero-dark))]">
            <div className="container mx-auto max-w-5xl">
              {relatedArticle && (
                <div className="mb-12 p-8 rounded-2xl border border-primary/20 bg-primary/5">
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
                    {language === "en" ? "Related article" : "Article associé"}
                  </p>
                  <SafeLink to={relatedArticle.url} className="text-lg font-bold hover:text-primary transition-colors">
                    {relatedArticle.title} →
                  </SafeLink>
                </div>
              )}

              <h3 className="text-xl font-bold font-display mb-6">
                {language === "en" ? "Other modules" : "Autres modules de la suite"}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {relatedModules.map((mod, i) => (
                  <SafeLink key={i} to={mod.url} className="p-4 rounded-xl border border-border/40 bg-card/50 hover:border-primary/40 transition-colors text-center group">
                    <span className="text-2xl font-black text-muted-foreground/20 font-display">{mod.number}</span>
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors">{mod.name}</p>
                  </SafeLink>
                ))}
              </div>
            </div>
          </section>

          <CTAFooter
            title={t('cta.title')}
            subtitle={t('cta.subtitle')}
            primaryButtonText={t('cta.primary')}
            secondaryButtonText={t('cta.secondary')}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};
