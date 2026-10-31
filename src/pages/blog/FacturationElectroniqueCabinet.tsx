import { ArticleShell } from "./ArticleShell";

const FacturationElectroniqueCabinet = () => (
  <ArticleShell
    badge="Réglementation"
    title="Facturation électronique 2026 : ce qui change pour les clients du cabinet, et l'opportunité à saisir"
    subtitle="Calendrier officiel, obligations de réception et d'émission, rôle des plateformes agréées : comment transformer la réforme en missions et en nouveaux clients."
    date="2026-10-31"
    readTime="8 min de lecture"
    url="/blog/facturation-electronique-cabinet-expertise-comptable"
    description="Réforme de la facturation électronique : calendrier 2026-2027, obligations des TPE/PME, plateformes agréées et missions à proposer par le cabinet d'expertise comptable."
    category="Réglementation"
    sources={[
      { label: "impots.gouv.fr — Facturation électronique et plateformes agréées", url: "https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees" },
      { label: "economie.gouv.fr — Facturation électronique entre entreprises : calendrier", url: "https://www.economie.gouv.fr/cedef/facturation-electronique-entreprises" },
      { label: "Légifrance — Loi n° 2024-344 du 15 avril 2024 de finances pour 2024, art. 91", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048727345" },
      { label: "Conseil national de l'Ordre des experts-comptables", url: "https://www.experts-comptables.fr" },
    ]}
    related={[
      { title: "Churn en cabinet EC : mesurer et réduire l'attrition", href: "/blog/churn-cabinet-expertise-comptable" },
      { title: "Construire l'ICP d'un cabinet d'expertise comptable", href: "/blog/icp-cabinet-expertise-comptable" },
    ]}
  >
    <h2>Le calendrier officiel</h2>
    <p>
      La loi de finances pour 2024 a fixé un déploiement en deux temps, confirmé par l'administration fiscale sur{" "}
      <a href="https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees" target="_blank" rel="noopener noreferrer">impots.gouv.fr</a> :
    </p>
    <ul>
      <li><strong>1er septembre 2026</strong> : toutes les entreprises assujetties à la TVA doivent être en mesure de <strong>recevoir</strong> des factures électroniques. Les grandes entreprises et ETI doivent également les <strong>émettre</strong> et transmettre leurs données (e-reporting).</li>
      <li><strong>1er septembre 2027</strong> : obligation d'<strong>émission</strong> et d'e-reporting étendue aux PME, TPE et micro-entreprises.</li>
    </ul>
    <p>
      Les factures transitent par des <strong>plateformes agréées</strong> (anciennement PDP) immatriculées par l'administration. Le portail public de facturation joue un rôle d'annuaire et de concentrateur de données, et non de plateforme d'échange gratuite pour toutes les factures. Vérifiez la liste à jour des plateformes sur le site officiel avant toute recommandation à un client.
    </p>

    <h2>Ce que cela change concrètement pour une TPE</h2>
    <ul>
      <li>Choisir une plateforme agréée, directement ou via son logiciel de gestion ou celui du cabinet.</li>
      <li>Fiabiliser les données de facturation : SIREN du client, adresse de facturation, nature de l'opération (biens, services, mixte), option pour le paiement de la TVA d'après les débits.</li>
      <li>Transmettre des données de transaction (e-reporting) pour les ventes à des particuliers ou à l'international, et des données de paiement pour les prestations de services.</li>
      <li>Adapter ses processus : réception, validation et archivage des factures fournisseurs dans un format structuré.</li>
    </ul>
    <blockquote>
      Point de vigilance : depuis septembre 2026, un fournisseur peut déjà adresser une facture électronique à une TPE cliente. Une TPE qui n'a désigné aucune plateforme risque de manquer des factures ou de retarder leur traitement.
    </blockquote>

    <h2>Les missions que le cabinet peut proposer</h2>
    <ul>
      <li><strong>Diagnostic de préparation</strong> : audit du logiciel de facturation, des mentions obligatoires et du flux fournisseurs. Mission courte, forfaitaire, facilement packagée.</li>
      <li><strong>Choix et paramétrage de la plateforme</strong> : accompagnement dans la sélection d'une plateforme agréée compatible avec l'outil de production du cabinet.</li>
      <li><strong>Reprise de la pré-comptabilité</strong> : les factures structurées réduisent la saisie ; le temps libéré peut être réaffecté au conseil (tableaux de bord, trésorerie).</li>
      <li><strong>Formation des dirigeants</strong> : séances collectives par verticale (BTP, commerce, professions libérales) pour mutualiser le temps passé.</li>
    </ul>

    <h2>Pourquoi c'est un levier d'acquisition</h2>
    <p>
      Les sociétés créées depuis 2025 n'ont souvent ni outil de facturation structuré ni expert-comptable désigné. Leur premier exercice tombe en pleine généralisation de la réforme : c'est un sujet concret et daté pour ouvrir un premier échange, sans discours commercial générique.
    </p>
    <ul>
      <li>Angle de contact : « Votre société devra émettre ses factures au format électronique au 1er septembre 2027 ; voici les trois décisions à prendre dès maintenant. »</li>
      <li>Support : une checklist d'une page aux couleurs du cabinet, envoyée au premier contact.</li>
      <li>Cible prioritaire : SASU et SAS de services immatriculées dans les 90 derniers jours, qui facturent déjà des clients professionnels.</li>
    </ul>
    <p>
      Eligibly détecte chaque jour ces nouvelles sociétés dans votre zone et propose un angle d'approche par lead. <a href="/pourquoi-ce-lead-est-prioritaire">Voir un exemple de fiche lead</a> ou <a href="/demo">demander une démonstration</a>.
    </p>

    <h2>Checklist cabinet</h2>
    <ul>
      <li>Recenser les clients sans plateforme désignée à la date de réception obligatoire.</li>
      <li>Segmenter le portefeuille selon le logiciel de facturation utilisé.</li>
      <li>Définir un forfait « mise en conformité » et l'ajouter aux lettres de mission.</li>
      <li>Préparer un contenu pédagogique réutilisable (article, webinaire, fiche).</li>
      <li>Utiliser la réforme comme sujet d'entrée auprès des nouvelles sociétés de la zone.</li>
    </ul>
  </ArticleShell>
);

export default FacturationElectroniqueCabinet;
