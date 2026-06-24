const personas = [
  { l: "A", t: "Cabinets indépendants 5 à 30 collaborateurs", d: "Déjà bien installés, le bouche-à-oreille ne suffit plus." },
  { l: "B", t: "Cabinets en structuration commerciale", d: "Un responsable développement ou associé veut un outil vertical clé en main." },
  { l: "C", t: "Cabinets spécialisés sur une verticale", d: "Tech, conseil, santé, artisan, immobilier — uniquement les primo-entrepreneurs de votre verticale." },
  { l: "D", t: "Cabinets en sortie de cession", d: "Départ associé, transmission, réorganisation : reconstituer un flux rapidement." },
];

export const CabinetPersonas = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">Pour qui</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Quatre profils de cabinets que <em className="italic text-primary font-medium">nous équipons</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {personas.map((p) => (
            <div key={p.l} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-display italic text-xl font-semibold flex items-center justify-center shrink-0">
                {p.l}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{p.t}</h3>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};