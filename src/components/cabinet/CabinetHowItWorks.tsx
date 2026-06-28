import { Database, Layers, Filter, Sparkles, Brain, Send } from "lucide-react";

const stations = [
  {
    n: "01",
    icon: Database,
    title: "Collecte",
    body: "Ingestion quotidienne des registres publics officiels : immatriculations, modifications statutaires, publications légales. Aucune source privée, aucun scraping.",
    output: "Flux brut",
  },
  {
    n: "02",
    icon: Layers,
    title: "Dédoublonnage",
    body: "Normalisation des entités (SIREN, dénomination, dirigeant) et réconciliation entre sources pour éliminer les doublons et conserver une seule fiche de référence.",
    output: "Base unifiée",
  },
  {
    n: "03",
    icon: Filter,
    title: "Exclusions amont",
    body: "Filtres IA : sociétés avec CAC mandaté, procédures collectives, cessations, holdings pures (10+ sociétés), serial entrepreneurs (5+ sociétés), sociétés > 90 jours.",
    output: "Vivier adressable",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Enrichissement",
    body: "Ajout des signaux contact professionnel (email pro vérifié, profil dirigeant), de la verticale, du capital et des indicateurs de maturité du projet.",
    output: "Fiche complète",
  },
  {
    n: "05",
    icon: Brain,
    title: "Scoring IA explicable",
    body: "Score 0-100 calculé sur votre ICP cabinet, avec les 3 raisons clés affichées : signaux positifs, points à vérifier, niveau de priorité. Pas de boîte noire.",
    output: "Lead priorisé",
  },
  {
    n: "06",
    icon: Send,
    title: "Livraison ciblée",
    body: "Push automatique chaque matin dans le canal de prédilection de chaque associé. Vos feedbacks (qualifié / écarté) réentraînent en continu votre modèle propre.",
    output: "Action commerciale",
  },
];

export const CabinetHowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-14">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">
            La chaîne de production d'un lead
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            De la donnée publique brute à une <em className="italic text-primary font-medium">alerte qualifiée</em>, six étapes contrôlées.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Chaque lead reçu par votre cabinet passe par la même chaîne, documentée et auditable. À chaque étape, une transformation, une responsabilité, un livrable intermédiaire.
          </p>
        </div>

        {/* Pipeline rail (desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
          <div className="relative grid grid-cols-6 gap-4">
            {stations.map((s) => (
              <div key={s.n} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/40 text-primary flex items-center justify-center shadow-sm">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground font-semibold">{s.output}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {stations.map((s) => (
            <article key={s.n} className="rounded-2xl border border-border bg-card p-5 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <p className="font-display italic text-2xl font-semibold text-primary/70">{s.n}</p>
                <s.icon className="w-4 h-4 text-primary/60 lg:hidden" aria-hidden="true" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug">{s.title}</h3>
              <p className="text-[0.85rem] text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground max-w-3xl">
          Sources de référence : registres publics officiels (registre national des entreprises, base Sirene, bulletin officiel des annonces civiles et commerciales). Enrichissements opérés via partenaires contractuels conformes RGPD, sans transfert hors UE.
        </p>
      </div>
    </section>
  );
};