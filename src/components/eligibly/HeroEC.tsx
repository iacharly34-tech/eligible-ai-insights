const leads = [
  {
    initials: "SM",
    avatar: "bg-sapin text-cream",
    name: "Sophie Martin",
    badge: "PREMIUM · 82",
    badgeClass: "bg-sapin text-cream",
    meta: "SAS LumeTech · Paris 11e · créée il y a 8 jours",
    why: "primo-entrepreneur, SaaS, email vérifié",
  },
  {
    initials: "JR",
    avatar: "bg-sapin text-cream",
    name: "Julien Rivière",
    badge: "PREMIUM · 78",
    badgeClass: "bg-sapin text-cream",
    meta: "SASU Atelier Rivière · Lyon 7e · créée il y a 12 jours",
    why: "artisan, contactabilité forte",
  },
  {
    initials: "AB",
    avatar: "bg-terracotta text-cream",
    name: "Antoine Beaulieu",
    badge: "STANDARD · 64",
    badgeClass: "bg-terracotta-soft text-terracotta-deep border border-terracotta/30",
    meta: "SAS Studio Beaulieu · Bordeaux · créée il y a 21 jours",
    why: "conseil indépendant, téléphone direct",
  },
  {
    initials: "TN",
    avatar: "bg-moutarde text-ink",
    name: "Thomas Nguyen",
    badge: "À VÉRIFIER · 52",
    badgeClass: "bg-moutarde-soft text-ink border border-moutarde/40",
    meta: "SASU TN Conseil · Marseille · créée il y a 5 jours",
    why: "multi-entrepreneur, à qualifier au 1er contact",
  },
];

export const HeroEC = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-page to-page" />
      <div className="container">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-card border border-border-warm/60 text-xs font-medium text-ink-secondary mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              CRM de prospection vertical pour cabinets d'expertise comptable
            </span>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-ink mb-6">
              Vos prochains clients sont{" "}
              <em className="text-terracotta">fraîchement immatriculés.</em>
            </h1>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-xl mb-8">
              Eligibly consolide chaque jour les SASU et SAS créées en France,
              applique des filtres amont (CAC mandaté, procédure collective, holding,
              serial entrepreneur) et vous présente les leads potentiellement
              adressables avec un score expliqué et un plan d'action.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-7">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-terracotta text-cream font-medium hover:bg-terracotta-deep transition-colors shadow-card"
              >
                Démarrer mon pilote 14 jours
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-bg-card text-ink font-medium border border-border-warm hover:border-terracotta hover:text-terracotta transition-colors"
              >
                Voir le produit
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted">
              {["14 jours gratuits, sans CB", "Filtres qualité amont", "RGPD compliant", "Made in France"].map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-terracotta" />
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-cream-deep/40 rounded-3xl -rotate-1 -z-10" />
            <div className="bg-bg-card rounded-2xl border border-border-warm/60 shadow-luxury overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border-soft bg-cream/50">
                <span className="text-sm font-medium text-ink">Top leads recommandés</span>
                <span className="text-xs text-ink-muted font-medium">Mardi 24 juin</span>
              </div>
              <div className="divide-y divide-border-soft">
                {leads.map((l) => (
                  <div key={l.initials} className="flex items-start gap-3.5 px-5 py-4 hover:bg-cream/30 transition-colors">
                    <div className={`w-10 h-10 rounded-full ${l.avatar} flex items-center justify-center font-medium text-sm flex-shrink-0`}>
                      {l.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-medium text-ink text-sm">{l.name}</span>
                        <span className={`text-[10px] tracking-wider font-semibold px-1.5 py-0.5 rounded ${l.badgeClass}`}>
                          {l.badge}
                        </span>
                      </div>
                      <div className="text-xs text-ink-muted mb-1.5">{l.meta}</div>
                      <div className="text-xs text-ink-secondary">
                        <strong className="text-ink font-medium">Pourquoi :</strong> {l.why}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};