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

const rows: { feature: string; rm: "y"|"n"|"p"; el: "y"|"n"|"p" }[] = [
  { feature: "Veille multi-sources (200+)", rm: "p", el: "y" },
  { feature: "Scoring prédictif IA", rm: "n", el: "y" },
  { feature: "Analyse automatique du DCE", rm: "p", el: "y" },
  { feature: "IA pour rédaction de réponses", rm: "y", el: "p" },
  { feature: "Données d'attribution historiques", rm: "n", el: "y" },
  { feature: "Collaboration d'équipe", rm: "p", el: "y" },
  { feature: "Transparence tarifaire", rm: "y", el: "y" },
  { feature: "Onboarding rapide (<7 jours)", rm: "y", el: "y" },
  { feature: "Go/No-Go data-driven", rm: "n", el: "y" },
];

const EligiblyVsRemporte = () => {
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
                Eligibly vs Remporte : quelle plateforme IA pour vos marchés publics ?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Remporte mise sur l'IA pour la rédaction de réponses. Eligibly mise sur le scoring prédictif pour la qualification. Comparaison des deux approches.
              </p>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Rédiger vs Qualifier : deux visions complémentaires</h2>
              <p><strong>Remporte</strong> se positionne sur l'IA de rédaction : la plateforme aide les entreprises à produire des réponses aux appels d'offres plus rapidement grâce à l'intelligence artificielle. Le focus est sur la phase de réponse.</p>
              <p><strong>Eligibly</strong> intervient en amont : avant de rédiger, Charly IA détermine si le marché vaut la peine d'être candidaté. Le scoring prédictif analyse la compatibilité entre votre profil et l'appel d'offres, pour une décision Go/No-Go objective.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Tableau comparatif</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-4 px-4 text-left font-semibold">Critère</th>
                      <th className="py-4 px-4 text-left font-semibold">Remporte</th>
                      <th className="py-4 px-4 text-left font-semibold bg-primary/5 text-primary">Eligibly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="py-3 px-4 font-medium">{r.feature}</td>
                        <td className="py-3 px-4"><Icon v={r.rm} /></td>
                        <td className="py-3 px-4 bg-primary/5"><Icon v={r.el} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Remporte ?</h2>
              <p>Remporte convient si votre enjeu principal est la <strong>rédaction des mémoires techniques</strong> et que vous identifiez déjà bien vos marchés cibles. L'IA de rédaction peut accélérer significativement la production de dossiers.</p>

              <h2 className="text-2xl font-bold font-display">Dans quels cas choisir Eligibly ?</h2>
              <p>Eligibly est le meilleur choix si vous perdez du temps à <strong>qualifier les marchés</strong>, si votre taux de succès est inférieur à 20%, ou si vous souhaitez un outil qui couvre toute la chaîne : détection, scoring, analyse DCE et aide à la décision.</p>
            </section>

            <section className="rounded-2xl bg-[hsl(var(--hero-dark))] p-8 md:p-12 text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                Passez au scoring prédictif
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ne rédigez plus de réponses sur des marchés que vous ne pouvez pas gagner.
              </p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander une démo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl="/eligibly-vs-eligibly-vs-remporte" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EligiblyVsRemporte;
