export const FinalCTA = () => (
  <section id="demo" className="py-20 md:py-28 bg-sapin text-cream relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--cream)) 1px, transparent 0)",
      backgroundSize: "32px 32px"
    }} />
    <div className="container relative text-center max-w-2xl">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream mb-5 leading-tight">
        Prêt à voir Eligibly <em className="text-moutarde">à l'œuvre</em> ?
      </h2>
      <p className="text-cream/80 text-lg leading-relaxed mb-8">
        30 minutes de démo avec un de nos experts. Pas de slides : on regarde
        l'outil en direct sur vos vrais leads et votre ICP.
      </p>
      <a
        href="mailto:contact@eligibly.ai?subject=Démo%20Eligibly%20-%20Demande%20de%20RDV"
        className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-cream text-sapin font-medium hover:bg-cream-deep transition-colors shadow-luxury"
      >
        Programmer ma démo
      </a>
      <p className="mt-6 text-sm text-cream/60">
        Ou écrivez-nous à <a href="mailto:contact@eligibly.ai" className="underline underline-offset-4 hover:text-moutarde transition-colors">contact@eligibly.ai</a>
      </p>
    </div>
  </section>
);