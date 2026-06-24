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

const Demo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const { language } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "✅ Demande envoyée !",
      description: "Notre équipe revient vers vous sous 24h avec votre démo personnalisée.",
      duration: 5000,
    });

    navigate(language === "en" ? "/en/waitlist/success" : "/waitlist/success", { replace: true });
  };

  const testimonials = [
    {
      quote: "Grâce à Charly IA, nous avons réduit de 70% le temps de veille sur les AO.",
      author: "Responsable achats PME IT",
      company: "TechStart Solutions",
    },
  ];

  const productBenefits = [
    { icon: Clock, title: "Gagnez du temps", description: "Ne perdez plus des heures à trier les AO." },
    { icon: Target, title: "Augmentez vos chances", description: "Charly IA filtre les faux espoirs et repère les vraies opportunités." },
    { icon: TrendingUp, title: "Anticipez", description: "Accédez aux signaux faibles avant vos concurrents." },
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
              {language === "en" ? "Personalized demo" : "Démonstration personnalisée"}
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.05] tracking-tight">
              {language === "en" ? (
                <>Discover your <span className="bg-gradient-highlight bg-clip-text text-transparent">AI potential</span> with Charly AI</>
              ) : (
                <>Découvrez votre <span className="bg-gradient-highlight bg-clip-text text-transparent">potentiel IA</span> avec Charly IA</>
              )}
            </h1>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Book a personalized 30-minute demo and see how Charly AI can transform your public tender approach."
                : "Réservez une démonstration personnalisée de 30 minutes et voyez comment Charly IA peut transformer votre approche des marchés publics."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <span>⏱️ 30 minutes personnalisées</span>
              <span>📅 Créneaux disponibles</span>
              <span>🔒 Sans engagement</span>
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
                      Réservez votre démonstration
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Découvrez comment Charly IA peut transformer votre prospection commerciale.
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
                      <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Décrivez brièvement vos besoins..." className="resize-none" rows={3} />
                    </div>
                    <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.15em] text-xs font-semibold group">
                      Réserver ma démonstration
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Démonstration personnalisée, sans engagement. Réponse sous 24h.
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
                  <h3 className="text-lg font-bold font-display mb-6 tracking-tight">Pourquoi choisir Charly IA ?</h3>
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
                  <h4 className="font-bold text-sm mb-2">Prêt à découvrir Charly IA ?</h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    Rejoignez les entreprises qui optimisent leur prospection avec l'IA.
                  </p>
                  <Button
                    onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-[0.15em] text-xs font-semibold"
                  >
                    Réserver ma démonstration
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
              Transformez votre prospection dès aujourd'hui
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Découvrez comment Charly IA peut vous faire gagner du temps et augmenter vos chances de succès.
            </p>
            <div className="mt-12">
              <Button
                size="lg"
                onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
                className="h-14 px-12 text-sm font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:bg-primary/90 group"
              >
                Réserver ma démonstration
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="mt-8 text-xs text-muted-foreground tracking-wide">
              ✓ Sans engagement · ✓ Setup en 5 min · ✓ Support dédié
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Demo;
