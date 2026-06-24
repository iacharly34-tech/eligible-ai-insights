const sources = ["INPI / RNE", "Sirene · INSEE", "BODACC", "Pappers", "Kaspr", "Hunter.io"];

export const SourcesBar = () => (
  <section className="py-12 border-y border-border-soft bg-beige/40">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-muted mb-6">
        Données issues de sources publiques officielles et partenaires
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {sources.map((s) => (
          <span key={s} className="font-display text-base md:text-lg text-ink-secondary tracking-tight">
            {s}
          </span>
        ))}
      </div>
    </div>
  </section>
);