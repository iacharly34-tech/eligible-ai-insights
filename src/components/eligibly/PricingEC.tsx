const features = [
  "Leads quotidiens potentiellement adressables, priorisés et scorés",
  "Pour chaque lead : pourquoi ce lead, score expliqué, signaux positifs, points à vérifier",
  "Plan d'action concret : préparer mon appel, générer une relance, marquer non pertinent",
  "Copilote IA conversationnel intégré",
  "Filtres amont systématiques (CAC, procédure, cessation, holding, serial)",
  "Amélioration progressive de la priorisation sur votre feedback",
  "Module suivi de conversion + workspace multi-utilisateur",
  "Support email + visio mensuelle de bilan",
];

export const PricingEC = () => (
  <section id="pricing" className="py-20 md:py-28 bg-cream/60">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-terracotta font-medium mb-4">Tarif simple</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-ink">
          Un seul forfait. <em className="text-terracotta">Résiliable à tout moment.</em>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto bg-bg-card border border-border-warm rounded-3xl p-8 md:p-10 shadow-luxury relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-terracotta text-cream text-xs font-medium tracking-wider uppercase">
          Forfait Pro
        </span>

        <h3 className="font-display text-2xl text-ink mb-2 mt-2 text-center">Pour les cabinets en croissance</h3>

        <div className="text-center my-6">
          <span className="font-display text-6xl md:text-7xl text-ink">290</span>
          <span className="text-ink-secondary ml-2">€ HT / mois</span>
        </div>

        <p className="text-center text-sm text-ink-muted mb-7">
          14 premiers jours gratuits, sans CB · résiliable à tout moment avec préavis 30 jours
        </p>

        <div className="bg-sapin-soft border border-sapin/20 rounded-xl p-5 mb-7 text-sm text-ink-secondary leading-relaxed">
          <strong className="text-sapin block mb-2">Engagement de qualité par filtres amont.</strong>
          Aucun lead avec CAC mandaté, procédure collective, cessation, holding pure (10+ sociétés)
          ou serial entrepreneur (5+ sociétés). Lead non conforme détecté →
          <strong className="text-ink"> remplacement gratuit</strong>.
          <em className="block mt-2 text-ink-muted">Pas de garantie de résultats sur le nombre de RDV : votre conversion dépend de votre exécution commerciale.</em>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-[0.95rem] text-ink-secondary">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#demo"
          className="block w-full text-center px-6 py-4 rounded-lg bg-terracotta text-cream font-medium hover:bg-terracotta-deep transition-colors shadow-card"
        >
          Démarrer mon pilote 14 jours
        </a>
      </div>
    </div>
  </section>
);