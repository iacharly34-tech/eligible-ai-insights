import { ArticleShell } from "./ArticleShell";

const FicheGoogleCabinetComptable = () => (
  <ArticleShell
    badge="Visibilité locale"
    title="Fiche Google d'un cabinet d'expertise comptable : la méthode pour être choisi localement"
    subtitle="Catégories, services, avis, photos et publications : les réglages qui comptent pour apparaître quand un créateur cherche « expert-comptable » près de chez lui."
    date="2026-10-31"
    readTime="7 min de lecture"
    url="/blog/fiche-google-cabinet-expertise-comptable"
    description="Optimiser la fiche Google Business Profile d'un cabinet d'expertise comptable : catégories, services, avis clients, photos, publications et règles déontologiques."
    category="Visibilité locale"
    sources={[
      { label: "Google — Conseils pour améliorer votre classement local", url: "https://support.google.com/business/answer/7091" },
      { label: "Google — Règles relatives aux avis", url: "https://support.google.com/contributionpolicy/answer/7400114" },
      { label: "BrightLocal — Local Consumer Review Survey 2025", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" },
      { label: "Légifrance — Décret n° 2012-432 (déontologie des experts-comptables)", url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025582476" },
    ]}
    related={[
      { title: "Référencement local d'un expert-comptable", href: "/blog/referencement-local-expert-comptable" },
      { title: "Cas client EM Partners", href: "/blog/cas-client-empartners" },
    ]}
  >
    <h2>Les trois critères retenus par Google</h2>
    <p>
      Google indique classer les résultats locaux selon trois critères : la <strong>pertinence</strong> (la fiche correspond-elle à la recherche ?), la <strong>distance</strong> et la <strong>notoriété</strong>, qui intègre le nombre et la note des avis (<a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer">source Google</a>). La distance ne se pilote pas ; les deux autres critères, si.
    </p>

    <h2>Réglages de base</h2>
    <ul>
      <li><strong>Catégorie principale</strong> : « Expert-comptable ». Catégories secondaires seulement si elles reflètent une activité réelle (ex. « Conseiller fiscal »).</li>
      <li><strong>Nom</strong> : la dénomination réelle du cabinet, sans mots-clés ajoutés, ce que les règles Google interdisent.</li>
      <li><strong>Services</strong> : un service par mission (création de société, tenue, bilan, social, juridique annuel), avec une description factuelle.</li>
      <li><strong>Horaires, téléphone, site</strong> : identiques à ceux du site et des annuaires de l'Ordre.</li>
      <li><strong>Lien de prise de rendez-vous</strong> : renvoyer vers une page dédiée plutôt que vers l'accueil.</li>
    </ul>

    <h2>Les avis : le levier le plus direct</h2>
    <p>
      D'après l'enquête <a href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noopener noreferrer">BrightLocal 2025</a>, la grande majorité des consommateurs consultent les avis avant de choisir un prestataire local. Pour un créateur qui compare trois cabinets, la note et la récence des avis pèsent directement sur la prise de contact.
    </p>
    <ul>
      <li>Demander l'avis à un moment de satisfaction identifiable : remise du premier bilan, création de société finalisée.</li>
      <li>Envoyer un lien direct vers le formulaire d'avis, par e-mail ou QR code au cabinet.</li>
      <li>Répondre à chaque avis, y compris négatif, sans divulguer d'information couverte par le secret professionnel.</li>
      <li>Ne jamais conditionner un avis à un avantage ni filtrer les clients sollicités : c'est contraire aux <a href="https://support.google.com/contributionpolicy/answer/7400114" target="_blank" rel="noopener noreferrer">règles Google</a>.</li>
    </ul>
    <blockquote>
      Exemple vérifiable : le cabinet EM Partners affiche 95 avis Google avec une note de 5,0/5. <a href="/blog/cas-client-empartners">Lire le cas client</a>.
    </blockquote>

    <h2>Photos et publications</h2>
    <ul>
      <li>Photos réelles de l'équipe et des locaux ; elles rassurent davantage qu'une banque d'images.</li>
      <li>Une publication par mois sur un sujet daté : échéances fiscales, facturation électronique, aides à la création.</li>
      <li>Questions-réponses : préremplir les questions fréquentes (délai de création, tarif d'un bilan, accompagnement à distance).</li>
    </ul>

    <h2>Cadre déontologique</h2>
    <p>
      Le code de déontologie autorise la communication et la sollicitation personnalisée, à condition de rester loyal et de ne pas comporter d'élément comparatif dénigrant. Une fiche Google factuelle (missions, horaires, avis authentiques) s'inscrit dans ce cadre.
    </p>

    <h2>Checklist en 30 minutes</h2>
    <ul>
      <li>Vérifier la catégorie principale et le nom.</li>
      <li>Ajouter la liste des missions dans « Services ».</li>
      <li>Harmoniser adresse, téléphone et horaires avec le site.</li>
      <li>Ajouter 5 photos réelles.</li>
      <li>Envoyer une demande d'avis aux 10 derniers clients satisfaits.</li>
    </ul>
    <p>
      La fiche Google fait partie de l'offre <a href="/marque-et-visibilite-expert-comptable">Marque &amp; visibilité</a> : la couche qui permet à un prospect contacté de vérifier le cabinet avant de répondre.
    </p>
  </ArticleShell>
);

export default FicheGoogleCabinetComptable;
