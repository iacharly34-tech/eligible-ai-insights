import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { CTAFooter } from "@/components/CTAFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { useLang, localizedHref } from "@/hooks/useLang";

export interface LandingCabinetProps {
  eyebrow: string;
  h1a: string;
  h1b: string;
  h1c?: string;
  intro: string;
  bullets: string[];
  ctaPrimary: string;
  ctaNote?: string;
  sections: {
    title: string;
    body: ReactNode;
  }[];
  faq?: { q: string; a: string }[];
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  related?: { label: string; href: string }[];
  children?: ReactNode;
}

export const LandingCabinetLayout = ({
  eyebrow,
  h1a,
  h1b,
  h1c,
  intro,
  bullets,
  ctaPrimary,
  ctaNote,
  sections,
  faq,
  seoTitle,
  seoDescription,
  canonicalPath,
  related,
  children,
}: LandingCabinetProps) => {
  const lang = useLang();
  const canonical = `https://eligibly.ai${canonicalPath}`;
  const faqJsonLd = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {faqJsonLd && (
          <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        )}
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <MobileCTABar />

        <main id="main-content" tabIndex={-1} className="focus:outline-none" role="main">
          {/* Hero */}
          <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-hero overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" aria-hidden="true" />
            <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="container mx-auto relative px-4 max-w-4xl">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 px-3 py-1.5 text-xs sm:text-sm mb-6 inline-flex">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
                {eyebrow}
              </Badge>
              <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground font-semibold">
                {h1a}{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent italic font-display inline-block">
                  {h1b}
                </span>
                {h1c ? ` ${h1c}` : ""}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {intro}
              </p>

              <ul className="mt-6 space-y-3 max-w-2xl">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <SafeLink to={localizedHref("/demo", lang)}>
                  <Button variant="tengo" className="h-12 px-6 text-sm font-semibold group">
                    {ctaPrimary}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </SafeLink>
                {ctaNote && <p className="text-xs text-muted-foreground">{ctaNote}</p>}
              </div>
            </div>
          </section>

          {/* Custom content between hero and sections */}
          {children}

          {/* Sections */}
          <div className="container mx-auto px-4 max-w-4xl py-16 md:py-20 space-y-14">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-5">
                  {s.title}
                </h2>
                <div className="text-foreground/85 leading-relaxed space-y-4 text-[1.02rem]">{s.body}</div>
              </section>
            ))}
          </div>

          {/* FAQ */}
          {faq && faq.length > 0 && (
            <section className="bg-muted/30 border-y border-border py-16 md:py-20">
              <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-8">
                  FAQ
                </h2>
                <div className="space-y-6">
                  {faq.map((f, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <div className="font-semibold text-foreground">{f.q}</div>
                      <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Related */}
          {related && related.length > 0 && (
            <section className="py-14">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-[0.7rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
                  À lire aussi
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {related.map((r) => (
                    <SafeLink key={r.href} to={r.href} className="block rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                      <span className="text-sm font-medium text-foreground">{r.label} →</span>
                    </SafeLink>
                  ))}
                </div>
              </div>
            </section>
          )}

          <CTAFooter
            title="Prêt à recevoir vos premiers leads ?"
            subtitle="3 leads test livrés sous 48 h, sans engagement ni carte bancaire."
            primaryButtonText="Demander mes 3 leads"
            secondaryButtonText="Voir la démo produit"
          />
        </main>

        <Footer />
      </div>
    </>
  );
};