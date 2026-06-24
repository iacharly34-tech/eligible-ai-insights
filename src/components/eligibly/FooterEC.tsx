export const FooterEC = () => (
  <footer className="border-t border-border-soft bg-page py-12">
    <div className="container grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
      <div>
        <a href="/" className="flex items-center gap-2.5 mb-4">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-terracotta text-cream font-display text-xl">E</span>
          <span className="font-display text-xl text-ink">Eligibly</span>
        </a>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-xs">
          Le CRM de prospection vertical pour cabinets d'expertise comptable français.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm text-ink mb-3">Produit</h4>
        <ul className="space-y-2 text-sm text-ink-secondary">
          <li><a href="#how" className="hover:text-terracotta">Comment ça marche</a></li>
          <li><a href="#preview" className="hover:text-terracotta">Le produit</a></li>
          <li><a href="#pricing" className="hover:text-terracotta">Tarifs</a></li>
          <li><a href="#faq" className="hover:text-terracotta">FAQ</a></li>
          <li><a href="#demo" className="hover:text-terracotta">Démo gratuite</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm text-ink mb-3">Sources</h4>
        <ul className="space-y-2 text-sm text-ink-secondary">
          <li><a href="https://data.inpi.fr" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">INPI / RNE</a></li>
          <li><a href="https://www.sirene.fr" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Sirene · INSEE</a></li>
          <li><a href="https://www.bodacc.fr" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">BODACC</a></li>
          <li><a href="https://www.pappers.fr" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta">Pappers</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm text-ink mb-3">Légal</h4>
        <ul className="space-y-2 text-sm text-ink-secondary">
          <li><a href="/mentions-legales" className="hover:text-terracotta">Mentions légales</a></li>
          <li><a href="/cgu" className="hover:text-terracotta">CGU</a></li>
          <li><a href="/confidentialite" className="hover:text-terracotta">Politique RGPD</a></li>
          <li><a href="mailto:contact@eligibly.ai" className="hover:text-terracotta">contact@eligibly.ai</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-border-soft text-xs text-ink-muted leading-relaxed">
      © 2026 Eligibly · Conçu en France · Toutes données issues de sources publiques (INPI, Sirene, BODACC) ou partenaires contractuels.
    </div>
  </footer>
);