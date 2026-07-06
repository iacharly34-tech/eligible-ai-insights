import { Helmet } from "react-helmet-async";
import { LandingCabinetLayout } from "./LandingCabinetLayout";

type Term = { term: string; definition: string };

const terms: Term[] = [
  { term: "SIRENE", definition: "Répertoire tenu par l'INSEE identifiant toutes les entreprises françaises via un numéro SIREN (9 chiffres) et chaque établissement via un SIRET (14 chiffres). Source primaire pour la détection d'immatriculations." },
  { term: "INPI", definition: "Institut national de la propriété industrielle. Gère le Registre national des entreprises (RNE) depuis 2023 : dépôts de statuts, dirigeants, bénéficiaires effectifs, actes." },
  { term: "BODACC", definition: "Bulletin officiel des annonces civiles et commerciales. Publie les événements juridiques : immatriculations, modifications, ventes de fonds, procédures collectives, radiations." },
  { term: "Infogreffe", definition: "Portail des greffes des tribunaux de commerce. Publications légales, actes déposés, données financières." },
  { term: "ICP (Ideal Customer Profile)", definition: "Profil de client idéal d'un cabinet : forme juridique cible, secteur d'activité, capital minimum, zone géographique, profil du dirigeant. Base du filtrage et du scoring d'un moteur de leads." },
  { term: "Scoring prédictif", definition: "Note attribuée à un prospect (0–100) qui estime sa probabilité de devenir client. Combine ajustement ICP, signaux d'intention et filtres d'exclusion. Doit être explicable pour être utilisable par une équipe cabinet." },
  { term: "Lead qualifié", definition: "Prospect ayant passé les filtres amont (CAC, procédures collectives, holdings pures, serial entrepreneur exclus) et correspondant à l'ICP du cabinet. À distinguer du lead brut (fichier de SIRET non trié)." },
  { term: "CAC (Coût d'acquisition client)", definition: "Somme dépensée pour acquérir un nouveau client, divisée par le nombre de nouveaux clients. Pour un cabinet EC, se situe généralement entre 300 € et 1 200 € par lettre de mission signée." },
  { term: "LTV (Lifetime Value)", definition: "Chiffre d'affaires moyen généré par un client sur toute la durée de la mission. En cabinet EC, souvent 3 à 8 ans pour une TPE cliente, soit 4 000 à 20 000 € cumulés." },
  { term: "Code APE 6920Z", definition: "Code d'activité principale exercée pour les activités comptables (expertise comptable, tenue, révision). Sert à identifier les cabinets dans SIRENE — et à les exclure d'un ciblage de leads (dirigeant lui-même expert-comptable)." },
  { term: "SASU", definition: "Société par actions simplifiée unipersonnelle. Forme juridique majoritaire des créations en France depuis 2020. Cible principale des cabinets d'expertise comptable en acquisition." },
  { term: "SAS", definition: "Société par actions simplifiée (pluripersonnelle). Deuxième forme la plus créée. Souvent associée à des projets à fort potentiel (startups, plusieurs associés)." },
  { term: "EURL", definition: "Entreprise unipersonnelle à responsabilité limitée. Alternative fiscale à la SASU (IR par défaut). Souvent choisie par les commerçants et artisans." },
  { term: "Immatriculation", definition: "Inscription officielle d'une société au Registre du commerce et des sociétés (RCS). Déclenche la publication BODACC et l'attribution du SIREN. Point de départ du délai 0–90 jours pertinent pour un cabinet EC." },
  { term: "Holding pure", definition: "Société holding sans activité opérationnelle, créée uniquement pour détenir des titres. Souvent exclue d'un ciblage de leads cabinet (pas de tenue courante, pas de paie)." },
  { term: "Serial entrepreneur", definition: "Dirigeant ayant créé plusieurs sociétés en peu de temps. Signal ambigu : peut indiquer un profil à forte valeur ou au contraire un porteur de coquilles. Souvent filtré à l'écart en scoring cabinet." },
  { term: "Canal d'activation", definition: "Moyen d'entrer en contact avec un prospect : email direct, LinkedIn (message ou InMail), appel téléphonique, courrier à en-tête, Instagram DM. Le canal optimal dépend du profil du dirigeant." },
  { term: "Digest quotidien", definition: "Format de livraison des leads : email/Slack/Teams résumant les leads scorés du jour avec un lien vers la fiche complète. Alternative à l'export CSV brut." },
  { term: "Engagement de moyens", definition: "Type d'engagement contractuel : le prestataire s'engage sur la qualité de l'exécution (donnée conforme, filtres appliqués), pas sur un résultat commercial. Standard sur le marché du lead B2B." },
];

const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossaire — Prospection et génération de leads pour cabinets d'expertise comptable",
  description: "Définitions courtes des termes techniques utilisés en acquisition client pour cabinets EC.",
  hasDefinedTerm: terms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
  })),
};

const Glossaire = () => (
  <>
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(definedTermSetJsonLd)}</script>
    </Helmet>
    <LandingCabinetLayout
      seoTitle="Glossaire — Prospection & génération de leads cabinet d'expertise comptable"
      seoDescription="Définitions courtes et précises : SIRENE, INPI, BODACC, ICP, scoring prédictif, CAC, LTV, code APE 6920Z, SASU, SAS, EURL, canal d'activation. Glossaire pour cabinets EC."
      canonicalPath="/cabinet/glossaire"
      eyebrow="Glossaire cabinet EC"
      h1a="Glossaire — prospection &"
      h1b="génération de leads"
      h1c="pour cabinets EC"
      intro="Définitions courtes, précises et sourcées des termes utilisés en acquisition client pour cabinets d'expertise comptable. Pensé pour être lu par un humain — et cité proprement par les assistants IA (ChatGPT, Perplexity, Gemini, Claude)."
      bullets={[
        "Sources officielles : SIRENE, INPI, BODACC, Infogreffe",
        "Concepts métier : ICP, scoring, CAC, LTV, canal d'activation",
        "Formes juridiques : SASU, SAS, EURL, holding pure",
      ]}
      ctaPrimary="Voir le moteur en démo"
      sections={[
        {
          title: "Termes",
          body: (
            <dl className="space-y-6">
              {terms.map((t) => (
                <div key={t.term} className="rounded-xl border border-border bg-card p-5">
                  <dt className="font-display text-lg font-semibold text-foreground">{t.term}</dt>
                  <dd className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.definition}</dd>
                </div>
              ))}
            </dl>
          ),
        },
      ]}
      related={[
        { label: "Génération de leads pour experts-comptables", href: "/leads-experts-comptables" },
        { label: "Alternatives à PrimoLead", href: "/alternatives-primolead-experts-comptables" },
        { label: "Cas d'usage cabinets", href: "/cabinet/cas-usage" },
        { label: "Prospection cabinet comptable — méthode 2026", href: "/prospection-cabinet-comptable" },
      ]}
    />
  </>
);

export default Glossaire;