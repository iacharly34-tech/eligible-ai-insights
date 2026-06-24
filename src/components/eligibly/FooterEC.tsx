export const FooterEC = () => (
  <footer className="border-t border-border-soft bg-page py-12">
    <div className="container grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
      <div>
        <a href="/" className="flex items-center gap-2.5 mb-4">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-terracotta text-cream font-display text-xl">E</span>
          <span className="font-display text-xl text-ink">Eligibly</span>
        </a>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-xs">
          Le CRM de prospection vertical des cabinets d'expertise comptable. Made in France · RGPD compliant.
        </p>
      </div>
      <div>
        <h4 className="font-display text-sm text-ink mb-3">Produit</h4>
        <ul className="space-y-2 text-sm text-ink-secondary">
          <li><a href="#preview" className="hover:text-terracotta">Aperçu</a></li>
          <li><a href="#how" className="hover:text-terracotta">Méthode</a></li>
          <li><a href="#pricing" className="hover:text-terracotta">Tarif</a></li>
          <li><a href="#faq" className="hover:text-terracotta">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm text-ink mb-3">Entreprise</h4>
        <ul className="space-y-2 text-sm text-ink-secondary">
          <li><a href="mailto:contact@eligibly.ai" className="hover:text-terracotta">Contact</a></li>
          <li><a href="/mentions-legales" className="hover:text-terracotta">Mentions légales</a></li>
          <li><a href="/confidentialite" className="hover:text-terracotta">Confidentialité</a></li>
          <li><a href="/cgu" className="hover:text-terracotta">CGU</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-sm text-ink mb-3">Conformité</h4>
        <ul className="space-y-2 text-sm text-ink-secondary">
          <li>RGPD · article 6.1.f</li>
          <li>DPA art. 28 sur demande</li>
          <li>Sources publiques uniquement</li>
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-border-soft flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-muted">
      <span>© 2026 Eligibly · Tous droits réservés.</span>
      <span>contact@eligibly.ai · Paris, France</span>
    </div>
  </footer>
);