import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { SafeLink } from "@/components/SafeLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  ArrowRight,
  Target,
  TrendingUp,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContextualLinks } from "@/components/ContextualLinks";
import { SecureFormWrapper } from "@/components/SecureFormWrapper";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Demo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const { language } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const { error } = await supabase.from("demo_requests").insert({
      full_name: formData.fullName.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      message: formData.message.trim() || null,
      source: "/demo",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
    });

    if (error) {
      setSubmitting(false);
      toast({
        title: language === "en" ? "Submission failed" : "Envoi impossible",
        description:
          language === "en"
            ? "Please try again, or contact us on WhatsApp at +33 6 03 26 31 00."
            : "Réessayez, ou écrivez-nous sur WhatsApp au +33 6 03 26 31 00.",
        variant: "destructive",
        duration: 6000,
      });
      return;
    }

    toast({
      title: language === "en" ? "✅ Request received!" : "✅ Demande reçue !",
      description:
        language === "en"
          ? "We will deliver your first lead within 48 hours."
          : "Nous vous livrons votre premier lead sous 48 h.",
      duration: 5000,
    });

    navigate(language === "en" ? "/en/waitlist/success" : "/waitlist/success", { replace: true });
  };

  const testimonials = [
    {
      quote: "Avec Eligibly, on capte chaque matin les SASU créées dans notre zone. Notre pipeline a doublé en 3 mois.",
      author: "Associé · cabinet 12 collaborateurs",
      company: "Cabinet d'expertise comptable",
    },
  ];

  const productBenefits = [
    { icon: Clock, title: "Gagnez 25 h/semaine", description: "Fini les annuaires, Excel et la prospection à l'aveugle." },
    { icon: Target, title: "Leads pré-qualifiés", description: "Filtres et scoring IA sur votre profil idéal de client." },
    { icon: TrendingUp, title: "Pipeline récurrent", description: "Chaque matin, votre digest leads PREMIUM directement dans votre boîte email." },
  ];

  return (
    <>
      <SEOHead />
      <StructuredData page="demo" />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-4 bg-[hsl(var(--hero-dark))]" aria-label="Demo hero">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-[0.3em]">
              <Rocket className="w-4 h-4" />
              {language === "en" ? "Your first lead — free" : "Votre premier lead — offert"}
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
              {language === "en" ? (
                <>Receive your <span className="bg-gradient-highlight bg-clip-text text-transparent">first lead for free</span></>
              ) : (
                <>Recevez votre <span className="bg-gradient-highlight bg-clip-text text-transparent">premier lead gratuit</span></>
              )}
            </h1>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Share your ICP and professional contact details. Within 48 hours, we deliver one premium lead newly registered in your zone, qualified by Eligibly — no credit card, no commitment."
                : "Partagez votre ICP et vos coordonnées professionnelles. Sous 48 h, nous vous livrons un lead premium fraîchement immatriculé de votre zone, qualifié par Eligibly — sans CB, sans engagement."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <span>🎁 1 lead premium offert</span>
              <span>⏱️ Livraison sous 48 h</span>
              <span>🔒 Sans CB · sans engagement</span>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="rounded-2xl border border-border/50 bg-card p-8 sm:p-10" id="demo-form">
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-display tracking-tight mb-2">
                      Réclamez votre premier lead gratuit
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Donnez-nous vos coordonnées professionnelles et votre profil cible. Sous 48 h, nous vous envoyons un lead premium, qualifié selon vos critères.
                    </p>
                  </div>

                  <SecureFormWrapper onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">Nom complet *</Label>
                      <Input id="fullName" value={formData.fullName} onChange={(e) => handleInputChange("fullName", e.target.value)} placeholder="Jean Dupont" className="h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email professionnel *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="julie@startup.com" className="h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">Entreprise *</Label>
                      <Input id="company" value={formData.company} onChange={(e) => handleInputChange("company", e.target.value)} placeholder="Ma Société SARL" className="h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message / besoin spécifique</Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Votre ICP : zone géographique, formes juridiques, secteurs ciblés, capital min/max, exclusions…" className="resize-none" rows={3} />
                    </div>
                    <Button type="submit" disabled={submitting} className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.15em] text-xs font-semibold group disabled:opacity-60">
                      {submitting ? (language === "en" ? "Sending…" : "Envoi…") : "Recevoir mon premier lead gratuit"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      1 lead premium livré sous 48 h. Sans CB, sans engagement. Vos coordonnées ne sont jamais revendues.
                    </p>
                  </SecureFormWrapper>
                </>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                {/* Testimonial */}
                <div className="p-6 rounded-2xl border border-border/50 bg-card">
                  <MessageSquare className="w-5 h-5 text-primary mb-4" />
                  <blockquote className="text-sm italic text-foreground leading-relaxed mb-4">
                    "{testimonials[0].quote}"
                  </blockquote>
                  <cite className="text-xs text-muted-foreground not-italic">
                    — {testimonials[0].author}, {testimonials[0].company}
                  </cite>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-bold font-display mb-6 tracking-tight">Pourquoi choisir Eligibly ?</h3>
                  <div className="space-y-4">
                    {productBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <benefit.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-1">{benefit.title}</h4>
                          <p className="text-xs text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Repeated CTA */}
                <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <h4 className="font-bold text-sm mb-2">Encore un doute ?</h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    Jugez sur pièces : recevez d'abord un lead premium, gratuitement, avant toute décision.
                  </p>
                  <Button
                    onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.15em] text-xs font-semibold"
                  >
                    Recevoir mon premier lead gratuit
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <ContextualLinks currentPage="/demo" context="demo" />
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-32 sm:py-40 px-4 relative overflow-hidden bg-[hsl(var(--hero-dark))]" aria-label="CTA">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-[1.05] tracking-tight">
              Un lead premium vaut mille slides.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Recevez gratuitement une société fraîchement immatriculée qualifiée selon votre ICP. Sans CB, sans engagement.
            </p>
            <div className="mt-12">
              <Button
                size="lg"
                onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-12 text-sm font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Recevoir mon premier lead gratuit
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="mt-8 text-xs text-muted-foreground tracking-wide">
              ✓ Sans CB · ✓ Livraison sous 48 h · ✓ Coordonnées jamais revendues
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Demo;
