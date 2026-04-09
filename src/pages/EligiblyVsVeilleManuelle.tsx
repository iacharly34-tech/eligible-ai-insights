import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { Check, X, ArrowRight, BarChart3 } from "lucide-react";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";

const Icon = ({ v }: { v: "y" | "n" }) => {
  if (v === "y") return <Check className="w-5 h-5 text-success" />;
  return <X className="w-5 h-5 text-red-400" />;
};

const rows: { feature: string; manual: "y"|"n"; el: "y"|"n" }[] = [
  { feature: "Détection automatique des nouveaux AO", manual: "n", el: "y" },
  { feature: "Scoring prédictif Go/No-Go", manual: "n", el: "y" },
  { feature: "Analyse automatique du DCE", manual: "n", el: "y" },
  { feature: "Couverture de toutes les sources (BOAMP, TED, PLACE…)", manual: "n", el: "y" },
  { feature: "Alertes en temps réel", manual: "n", el: "y" },
  { feature: "Temps de qualification par AO", manual: "n", el: "y" },
  { feature: "Historique des attributions passées", manual: "n", el: "y" },
  { feature: "Coût (hors temps humain)", manual: "y", el: "n" },
  { feature: "Indépendance totale (pas d'outil tiers)", manual: "y", el: "n" },
];

const EligiblyVsVeilleManuelle = () => {
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
                Eligibly vs veille manuelle : BOAMP + Excel, est-ce encore viable ?
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Beaucoup de PME font encore leur veille AO à la main : BOAMP, PLACE, TED, un tableur Excel et beaucoup de temps. Comparaison honnête avec une approche automatisée.
              </p>
            </header>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">La réalité de la veille manuelle</h2>
              <p>Consulter chaque jour le BOAMP, les profils d'acheteurs, les plateformes régionales, TED… c'est un travail à temps plein. Une PME y consacre en moyenne <strong>6 à 10 heures par semaine</strong>, souvent réparties entre plusieurs personnes sans process structuré.</p>
              <p>Le problème n'est pas seulement le temps : c'est la <strong>qualité de la qualification</strong>. Sans données historiques ni analyse objective, la décision Go/No-Go repose sur l'intuition. Résultat : beaucoup d'efforts perdus sur des marchés inadaptés.</p>

              <h2 className="text-2xl font-bold font-display">Ce qu'Eligibly change</h2>
              <p>Eligibly automatise la détection et ajoute une couche que la veille manuelle ne peut pas offrir : le <strong>scoring prédictif</strong>. En croisant l'analyse du DCE avec les données d'attribution historiques et votre profil entreprise, l'IA génère un score de compatibilité pour chaque AO.</p>
              <p>Concrètement, ce qui prenait une demi-journée de veille se fait en 5 minutes. Et surtout, vous ne perdez plus de temps à répondre à des marchés où vous n'avez aucune chance.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Tableau comparatif</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="py-4 px-4 text-left font-semibold">Critère</th>
                      <th className="py-4 px-4 text-left font-semibold">BOAMP + Excel</th>
                      <th className="py-4 px-4 text-left font-semibold bg-primary/5 text-primary">Eligibly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="py-3 px-4 font-medium">{r.feature}</td>
                        <td className="py-3 px-4"><Icon v={r.manual} /></td>
                        <td className="py-3 px-4 bg-primary/5"><Icon v={r.el} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold font-display">Le calcul économique</h2>
              <p>Considérons une PME dont un chargé d'affaires passe 8 heures par semaine en veille manuelle :</p>
              <ul>
                <li><strong>Coût annuel</strong> : ~15 000€ (temps salarié)</li>
                <li><strong>Nombre d'AO qualifiés</strong> : 5-10 par semaine maximum</li>
                <li><strong>Taux de succès moyen</strong> : 15-20%</li>
              </ul>
              <p>Avec Eligibly (plan Croissance à 149€/mois) :</p>
              <ul>
                <li><strong>Coût annuel</strong> : 1 788€</li>
                <li><strong>Nombre d'AO qualifiés</strong> : illimité, en temps réel</li>
                <li><strong>Taux de succès moyen</strong> : 35-40% (grâce à la qualification prédictive)</li>
              </ul>
              <p>Le ROI est immédiat dès le premier marché supplémentaire remporté grâce à une meilleure qualification.</p>

              <h2 className="text-2xl font-bold font-display">Quand la veille manuelle reste pertinente</h2>
              <ul>
                <li>Vous répondez à moins de 2 AO par mois</li>
                <li>Vos marchés sont très spécialisés et faciles à identifier</li>
                <li>Vous avez un réseau d'acheteurs qui vous informe en amont</li>
                <li>Votre budget ne permet aucun abonnement</li>
              </ul>
            </section>

            <section className="bg-gradient-to-br from-primary via-accent to-primary rounded-2xl p-8 text-center text-white mb-12">
              <h2 className="text-2xl font-bold font-display mb-4">Passez de la veille manuelle au scoring prédictif</h2>
              <p className="text-white/80 mb-6">14 jours d'essai gratuit. Voyez en 5 minutes ce que vous ratez avec Excel.</p>
              <SafeLink to="/demo">
                <Button size="lg" className="bg-card text-primary hover:bg-card font-bold">
                  Essai gratuit <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </SafeLink>
            </section>

            <ArticleRecommendations currentArticleUrl="/eligibly-vs-veille-manuelle" />
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default EligiblyVsVeilleManuelle;
