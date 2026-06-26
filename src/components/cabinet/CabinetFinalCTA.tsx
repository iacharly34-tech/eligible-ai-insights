import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { ArrowRight } from "lucide-react";

export const CabinetFinalCTA = () => {
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-foreground text-background px-8 py-16 md:px-16 md:py-20 text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.4), transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.3), transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
              Prêt à voir Eligibly <em className="italic text-primary">à l'œuvre</em> ?
            </h2>
            <p className="text-background/75 text-lg leading-relaxed mb-8">
              30 minutes de démo avec un de nos experts. Pas de slides : on regarde l'outil en direct sur vos vrais leads et votre ICP.
            </p>
            <SafeLink to="/demo">
              <Button className="h-12 px-8 bg-background text-foreground hover:bg-background/90 hover:shadow-glow text-sm font-semibold group">
                Programmer ma démo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </SafeLink>
          </div>
        </div>
      </div>
    </section>
  );
};