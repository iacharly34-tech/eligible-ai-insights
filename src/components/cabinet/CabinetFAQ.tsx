import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Lock, FileText } from "lucide-react";

const faqs = [
  { q: "On achète déjà des leads chez un fournisseur, c'est pas la même chose ?", a: "Non. Les fournisseurs de leads vous vendent un contact à l'unité, souvent mutualisé entre 3 à 5 cabinets, sans expliciter pourquoi ce lead est prioritaire pour vous. Eligibly est un outil de production de leads : votre cabinet possède la source, vous paramétrez vos critères ICP, vous recevez 30 à 50 leads PREMIUM par mois (contre 5 à 20 chez les fournisseurs classiques) pour 290 € HT/mois forfaitaire (contre 500 à 1 500 € en achat unitaire). Vous gagnez en autonomie, en volume et en qualité." },
  { q: "Si je m'abonne à Eligibly, je peux arrêter mes autres fournisseurs de leads ?", a: "La majorité de nos cabinets pilotes le font après 2 à 3 mois. Eligibly produit en autonomie 30 à 50 leads qualifiés par mois, ce qui couvre largement le besoin d'un cabinet de 5 à 30 collaborateurs. Vous économisez 500 à 1 200 €/mois sur votre stack lead. Notre recommandation : conservez vos autres canaux les 2 premiers mois en parallèle, comparez la qualité et le coût par rendez-vous, puis arrêtez ceux qui ne tiennent pas la comparaison." },
  { q: "Mes leads sont-ils exclusifs ou mutualisés avec d'autres cabinets ?", a: "Exclusivement à vous. Chaque cabinet dispose d'un workspace logiquement isolé. Vos critères ICP vous sont propres, vos leads aussi. Aucun lead n'est partagé entre cabinets. Si deux cabinets ont des ICP très proches dans la même zone, ils peuvent théoriquement recevoir certains leads en commun (les SASU et SAS étant publiques), mais sans jamais savoir qu'un autre cabinet les contacte — vous restez en compétition sur l'exécution, comme dans toute prospection commerciale." },
  { q: "On a déjà un compte Pappers, en quoi Eligibly est différent ?", a: "Pappers est un annuaire généraliste : il fournit la donnée brute. Eligibly est un moteur d'alertes verticalisé pour les cabinets d'expertise comptable : filtres IA amont automatiques (CAC, procédure, holding, serial), scoring IA expliqué par lead, et livraison directe dans votre canal de prédilection. Vous cessez de filtrer manuellement." },
  { q: "Quelle est la garantie associée au forfait ?", a: "Engagement de qualité par filtres amont : tout lead non conforme à nos critères de filtrage est remplacé gratuitement. En revanche, aucune garantie chiffrée sur le nombre de rendez-vous : votre conversion dépend de votre exécution commerciale." },
  { q: "Pouvez-vous garantir que le prospect n'a pas déjà un expert-comptable ?", a: "Non, cette garantie est impossible à donner : il n'existe pas de base publique exhaustive des mandats d'expertise comptable. Nous ciblons les sociétés fraîchement immatriculées (≤ 90 jours) pour maximiser la fenêtre où le primo-entrepreneur n'a pas encore tranché." },
  { q: "Vos données sont-elles conformes au RGPD ?", a: "Oui, de manière native. Nous utilisons exclusivement des sources publiques officielles (INPI, Sirene, BODACC) et des partenaires contractuels (Pappers, Kaspr, Hunter). Notre base légale est l'article 6.1.f du RGPD (intérêt légitime B2B). Les données sont hébergées en Union européenne, chiffrées au repos (AES-256) et en transit (TLS 1.3). Le droit d'opposition est opérationnel sous 48 heures. Notre politique de confidentialité est validée par nos conseillers juridiques." },
  { q: "Où et comment sont hébergées mes données ?", a: "Toutes les données de prospection, les critères ICP et les modèles de scoring sont hébergés sur des serveurs situés en France et en Europe. Aucun transfert de données en dehors de l'UE. Chaque cabinet dispose d'un workspace isolé : vos feedbacks et votre historique de scoring ne sont jamais partagés avec d'autres clients. Traçabilité complète de chaque alerte : source, date de collecte, critères appliqués." },
  { q: "Quel est votre processus de collecte et de traitement des données ?", a: "Nous suivons une procédure documentée et contrôlée. L'ingestion se fait uniquement à partir de sources officielles (INPI, INSEE, BODACC) et de partenaires contractuels. Nous vérifions automatiquement la fraîcheur des immatriculations (≤ 90 jours). Aucun scraping sauvage : uniquement des données publiées légalement. Chaque traitement est logué et auditable." },
  { q: "Comment se passe l'onboarding ?", a: "Un rendez-vous visio de 45 minutes pour cadrer votre ICP (zones géographiques, secteurs d'activité, exclusions). Votre workspace est livré sous 48 heures avec votre premier lot de leads. Un bilan est réalisé à J+14 pour ajuster le filtrage et le scoring selon vos retours." },
  { q: "Pourquoi ne pas développer cela en interne ?", a: "Vous pouvez le faire, mais il faut compter 3 à 6 mois de développement, les intégrations INPI, Sirene, BODACC et Pappers, l'entraînement des modèles IA de filtrage et de scoring, les connecteurs vers vos outils, et la maintenance continue. Eligibly est livré clé en main, mis à jour quotidiennement, pour 290 € HT/mois." },
  { q: "Quels secteurs et zones géographiques couvrez-vous ?", a: "Toute la France métropolitaine ainsi que les DROM. Tous secteurs sont couverts, avec possibilité de restriction à vos verticales (technologie, conseil, santé, artisanat, immobilier, etc.) et à votre zone géographique (région, département, métropole)." },
  { q: "Que se passe-t-il après les 14 jours de pilote gratuit ?", a: "Vous décidez : continuer à 290 € HT/mois (par carte bancaire ou virement), ou arrêter sans aucune obligation. Aucune relance commerciale agressive, aucune carte bancaire demandée à l'inscription." },
  { q: "Pouvez-vous fournir des références de cabinets clients ?", a: "Eligibly est en phase pilote. Nous ne publions pas les noms de nos clients par respect du secret professionnel. Sur demande, nous pouvons organiser un échange avec un client pilote qui a accepté de témoigner." },
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