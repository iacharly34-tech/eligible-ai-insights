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

const rows: { feature: string; dk: "y"|"n"|"p"; el: "y"|"n"|"p" }[] = [
  { feature: "Veille multi-sources (200+)", dk: "p", el: "y" },
  { feature: "Scoring prédictif IA", dk: "n", el: "y" },
  { feature: "Analyse automatique du DCE", dk: "n", el: "y" },
  { feature: "Données d'attribution historiques", dk: "p", el: "y" },
  { feature: "Blog / contenu éducatif", dk: "y", el: "y" },
  { feature: "Collaboration d'équipe", dk: "p", el: "y" },
  { feature: "Transparence tarifaire", dk: "p", el: "y" },
  { feature: "Go/No-Go data-driven", dk: "n", el: "y" },
  { feature: "Onboarding rapide (<7 jours)", dk: "y", el: "y" },
];

const EligiblyVsDoaken = () => {
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
                Eligibly vs Doaken : quelle solution de veille des marchés publics ?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Doaken est un agrégateur de marchés publics avec un blog éducatif complet. Eligibly combine veille et scoring prédictif IA. Comparaison détaillée.
              </p>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Agrégation vs Intelligence prédictive</h2>
              <p><strong>Doaken</strong> se positionne comme un agrégateur de marchés publics avec une forte dimension éditoriale. Le blog Doaken est une référence pour comprendre le BOAMP, les procédures et les bonnes pratiques. La plateforme offre une veille augmentée avec des fonctionnalités de recherche avancée.</p>
              <p><strong>Eligibly</strong> va au-delà de l'agrégation avec le <strong>scoring prédictif</strong> : Charly IA analyse chaque marché par rapport à votre profil d'entreprise et prédit vos chances de succès. L'objectif n'est pas de lister tous les marchés, mais de recommander ceux que vous pouvez gagner.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Tableau comparatif</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-4 px-4 text-left font-semibold">Critère</th>
                      <th className="py-4 px-4 text-left font-semibold">Doaken</th>
                      <th className="py-4 px-4 text-left font-semibold bg-primary/5 text-primary">Eligibly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="py-3 px-4 font-medium">{r.feature}</td>
                        <td className="py-3 px-4"><Icon v={r.dk} /></td>
                        <td className="py-3 px-4 bg-primary/5"><Icon v={r.el} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Doaken ?</h2>
              <p>Doaken est un bon choix si vous débutez dans les marchés publics et cherchez une <strong>solution accessible</strong> avec beaucoup de contenu éducatif pour monter en compétences. Le blog et les guides sont d'excellentes ressources.</p>

              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Eligibly ?</h2>
              <p>Eligibly est le meilleur choix si vous voulez <strong>maximiser votre ROI</strong> sur les marchés publics grâce au scoring prédictif, si vous perdez du temps à qualifier manuellement les opportunités, ou si vous voulez un outil qui vous dit objectivement quels marchés candidater.</p>
            </section>

            <section className="rounded-2xl bg-[hsl(var(--hero-dark))] p-8 md:p-12 text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Découvrez le scoring prédictif d'Eligibly
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Passez de la veille passive à la recommandation intelligente.
              </p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander une démo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl="/eligibly-vs-eligibly-vs-doaken" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EligiblyVsDoaken;
