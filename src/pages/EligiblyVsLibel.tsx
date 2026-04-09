import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { Check, X, Minus, ArrowRight, BarChart3 } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

const Icon = ({ v }: { v: "y" | "n" | "p" }) => {
  if (v === "y") return <Check className="w-5 h-5 text-success" />;
  if (v === "n") return <X className="w-5 h-5 text-red-400" />;
  return <Minus className="w-5 h-5 text-amber-400" />;
};

const rows: { feature: string; lb: "y"|"n"|"p"; el: "y"|"n"|"p" }[] = [
  { feature: "Veille multi-sources (200+)", lb: "y", el: "y" },
  { feature: "Scoring prédictif IA", lb: "n", el: "y" },
  { feature: "Analyse automatique du DCE", lb: "p", el: "y" },
  { feature: "Mémoire technique IA", lb: "y", el: "p" },
  { feature: "Accompagnement humain", lb: "y", el: "p" },
  { feature: "Collaboration d'équipe", lb: "p", el: "y" },
  { feature: "Transparence tarifaire", lb: "n", el: "y" },
  { feature: "Onboarding rapide (<7 jours)", lb: "n", el: "y" },
  { feature: "Adapté aux PME / petites équipes", lb: "p", el: "y" },
];

const EligiblyVsLibel = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            <header className="mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <BarChart3 className="w-4 h-4 mr-2" />
                Comparaison
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold font-display mb-6 leading-tight">
                Eligibly vs Libel : quelle solution pour vos appels d'offres ?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Libel est une solution complète de veille et réponse aux marchés publics depuis 25 ans. Eligibly mise sur le scoring prédictif IA. Comparaison factuelle.
              </p>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Deux philosophies différentes</h2>
              <p><strong>Libel</strong> propose une solution tout-en-un : veille des marchés, logiciel de réponse avec mémoire technique IA, et accompagnement expert. C'est une approche premium destinée aux entreprises qui veulent être accompagnées de A à Z.</p>
              <p><strong>Eligibly</strong> se concentre sur l'intelligence prédictive : au lieu de vous aider à répondre à tous les marchés, Charly IA identifie ceux que vous avez les meilleures chances de remporter, avec un score objectif de 0 à 100.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Tableau comparatif</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-4 px-4 text-left font-semibold">Critère</th>
                      <th className="py-4 px-4 text-left font-semibold">Libel</th>
                      <th className="py-4 px-4 text-left font-semibold bg-primary/5 text-primary">Eligibly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="py-3 px-4 font-medium">{r.feature}</td>
                        <td className="py-3 px-4"><Icon v={r.lb} /></td>
                        <td className="py-3 px-4 bg-primary/5"><Icon v={r.el} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Libel ?</h2>
              <p>Libel est idéal si vous recherchez un <strong>accompagnement complet</strong> avec un interlocuteur dédié, si vous avez besoin d'aide à la rédaction de mémoires techniques, ou si vous préférez une solution premium avec formation incluse.</p>

              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Eligibly ?</h2>
              <p>Eligibly est le meilleur choix si vous souhaitez <strong>maximiser votre taux de succès</strong> grâce au scoring prédictif, si vous êtes une PME qui veut un outil rapide à prendre en main, ou si vous voulez réduire drastiquement le temps passé en veille et qualification.</p>
            </section>

            <section className="rounded-2xl bg-[hsl(var(--hero-dark))] p-8 md:p-12 text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Testez le scoring prédictif d'Eligibly
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Découvrez en 5 minutes quels marchés correspondent réellement à votre profil.
              </p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander une démo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl="/eligibly-vs-eligibly-vs-libel" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EligiblyVsLibel;
