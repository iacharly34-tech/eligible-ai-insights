import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "On a déjà un compte Pappers, en quoi Eligibly est différent ?", a: "Pappers est un annuaire généraliste : il donne la donnée brute. Eligibly est verticalisé cabinet EC : filtres amont automatiques (CAC, procédure, holding, serial), score expliqué par lead, plan d'action, et apprentissage progressif sur votre feedback. Vous arrêtez de filtrer à la main." },
  { q: "Quelle est la garantie associée au forfait ?", a: "Engagement de qualité par filtres amont : tout lead non conforme à nos critères de filtrage est remplacé gratuitement. En revanche, pas de garantie chiffrée sur le nombre de RDV : votre conversion dépend de votre exécution commerciale." },
  { q: "Pouvez-vous garantir que le prospect n'a pas déjà un expert-comptable ?", a: "Non, c'est impossible à garantir : il n'existe pas de base publique des mandats d'expertise comptable. Nous ciblons les sociétés fraîchement immatriculées (≤ 90 jours) pour maximiser la fenêtre où le primo-entrepreneur n'a pas encore tranché." },
  { q: "Vos données sont-elles RGPD compliant ?", a: "Oui. Sources publiques officielles (INPI, Sirene, BODACC) et partenaires contractuels (Pappers, Kaspr, Hunter). Base légale 6.1.f intérêt légitime B2B, hébergement UE, droit d'opposition opérationnel." },
  { q: "Comment se passe l'onboarding ?", a: "Visio de 45 min pour cadrer votre ICP (zones, secteurs, exclusions). Workspace livré sous 48 h avec votre premier batch de leads. Bilan à J+14 pour ajuster filtrage et scoring." },
  { q: "Pourquoi pas faire ça en interne avec un dev ?", a: "Vous pouvez. Comptez 3-6 mois de dev, intégrations INPI/Sirene/BODACC/Pappers, modélisation des filtres et du score, maintenance continue. Eligibly est livré, à jour quotidiennement, à 290 € HT/mois." },
  { q: "Quels secteurs et zones géographiques couvrez-vous ?", a: "Toute la France métropolitaine + DROM. Tous secteurs hors filtrage : nous pouvons restreindre à vos verticales (tech, conseil, santé, artisan, immobilier, etc.) et à votre zone (région, département, métropole)." },
  { q: "Que se passe-t-il après les 14 jours de pilote gratuit ?", a: "Vous décidez : continuer à 290 € HT/mois (CB ou virement), ou arrêter sans aucune obligation. Pas de relance commerciale lourde, pas de carte bancaire demandée à l'inscription." },
  { q: "Avez-vous des références cabinets clients ?", a: "Eligibly est en phase pilote, nous ne publions pas leurs noms par respect du secret professionnel. Sur demande, nous pouvons organiser un appel avec un client pilote qui accepte d'échanger." },
];

export const CabinetFAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[0.74rem] uppercase tracking-[0.14em] text-primary font-semibold mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Les questions <em className="italic text-primary font-medium">qu'on nous pose</em>.
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display italic text-lg font-medium text-foreground hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-[0.95rem]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};