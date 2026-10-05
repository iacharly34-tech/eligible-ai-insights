import { LandingCabinetLayout } from "./LandingCabinetLayout";
import { LeadFicheDemo } from "@/components/cabinet/LeadFicheDemo";

const PourquoiCeLeadEstPrioritaire = () => (
  <LandingCabinetLayout
   seoTitle="Fiche lead cabinet EC : score expliqué, récence et qualité (exemple fictif)"
   seoDescription="Exemple fictif de fiche lead : SASU tech, score 82/100, récence, profil du dirigeant, points de contact trouvés, date du premier bilan et courrier prêt à envoyer."
    canonicalPath="/pourquoi-ce-lead-est-prioritaire"
    eyebrow="Fiche lead — exemple"
    h1a="Pourquoi ce lead"
    h1b="est prioritaire"
    h1c="cette semaine ?"
    intro="Ce que vous recevez pour chaque société qualifiée : une fiche unique qui condense la donnée officielle, le contexte dirigeant, le score expliqué et l'accroche recommandée. Voici un exemple entièrement fictif, avec les taux de qualité réellement mesurés."
    bullets={[
      "Score et niveau de priorité (PREMIUM, STANDARD, À VÉRIFIER), raisons visibles",
      "Récence du lead et date de clôture du premier exercice",
      "Canal d'approche recommandé + accroche prête à envoyer",
      "Points de contact trouvés, courrier au siège prêt à envoyer",
    ]}
    ctaPrimary="Recevoir une fiche réelle"
    ctaNote="3 fiches leads livrées sous 48 h pour votre zone."
  >
    <section className="py-14 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <LeadFicheDemo />
      </div>
    </section>
  </LandingCabinetLayout>
);

export default PourquoiCeLeadEstPrioritaire;