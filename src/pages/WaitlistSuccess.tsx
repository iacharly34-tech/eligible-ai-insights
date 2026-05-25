import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SafeLink } from "@/components/SafeLink";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WaitlistSuccess = () => {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const successPath = isEnglish ? "/en/waitlist/success" : "/waitlist/success";
  const homePath = isEnglish ? "/en" : "/";
  const title = isEnglish
    ? "Waitlist confirmed — Eligibly"
    : "Inscription confirmée — Eligibly";
  const description = isEnglish
    ? "You're on the list. We'll contact you as soon as early access opens."
    : "Vous êtes sur la liste ! Nous vous contacterons dès l'ouverture de l'accès anticipé.";

  return (
    <>
      <SEOHead
        noindex
        titleOverride={title}
        descriptionOverride={description}
        canonicalOverride={`https://eligibly.ai${successPath}`}
      />

      <div className="min-h-screen bg-background">
        <Header />

        <main className="relative overflow-hidden bg-[hsl(var(--hero-dark))] px-4 pb-24 pt-32">
          <div className="absolute left-1/2 top-40 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />

          <div className="container relative z-10 mx-auto max-w-4xl">
            <div className="mx-auto max-w-2xl rounded-[32px] border border-border/50 bg-card/95 p-8 text-center shadow-card backdrop-blur-sm sm:p-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/15 bg-primary/10">
                <CheckCircle2 className="h-9 w-9 text-primary" />
              </div>

              <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                {isEnglish ? "Early access" : "Accès anticipé"}
              </span>

              <h1 className="mt-6 text-4xl font-extrabold font-display tracking-tight text-foreground sm:text-5xl">
                {isEnglish ? "You're on the list." : "Vous êtes sur la liste !"}
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {description}
              </p>

              <div className="mt-10 flex justify-center">
                <SafeLink to={homePath}>
                  <Button variant="outline" size="lg" className="h-12 border-border/60 px-8 text-sm font-semibold uppercase tracking-[0.18em]">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {isEnglish ? "Back home" : "Retour à l'accueil"}
                  </Button>
                </SafeLink>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WaitlistSuccess;
