import { ArticleLayout } from "@/components/ArticleLayout";
import { BookOpen } from "lucide-react";

const PlateformeMarchesPublics = () => (
  <ArticleLayout
    title="Plateforme marchés publics : comparez les meilleures solutions IA en 2026"
    subtitle="Comparatif des plateformes de marchés publics en 2026 : Doubletrade, Tengo, Libel, Eligibly. Fonctionnalités, tarifs et scoring IA pour choisir la bonne solution."
    badge="Solutions"
    badgeIcon={<BookOpen className="w-4 h-4" />}
    url="/plateforme-marches-publics"
    readTime="10 min de lecture"
    date="9 avril 2026"
  >
    <h2>Pourquoi utiliser une plateforme de marchés publics ?</h2>
    <p>
      Les <strong>plateformes de marchés publics</strong> centralisent la veille, la qualification et la réponse
      aux appels d'offres. Elles permettent de passer de la recherche manuelle sur des dizaines de sources
      à un flux unique et intelligent d'opportunités qualifiées.
    </p>

    <h2>Les critères de choix d'une plateforme</h2>
    <ul>
      <li><strong>Couverture</strong> : nombre de sources surveillées (BOAMP, JOUE, profils acheteurs)</li>
      <li><strong>Intelligence</strong> : scoring IA, analyse DCE, recommandations</li>
      <li><strong>Facilité d'usage</strong> : prise en main, interface, onboarding</li>
      <li><strong>Tarification</strong> : transparence, rapport qualité/prix</li>
      <li><strong>Support</strong> : réactivité, accompagnement, formation</li>
    </ul>

    <h2>Panorama des plateformes en 2026</h2>

    <h3>Doubletrade — l'acteur historique</h3>
    <p>
      Leader depuis 1998, Doubletrade dispose de la base de données la plus ancienne avec plus de 10 000 clients.
      Points forts : couverture exhaustive, données d'attribution historiques, solutions pour grands comptes.
      Points faibles : tarification élevée et opaque, peu d'intelligence artificielle, interface datée.
    </p>

    <h3>Libel — le tout-en-un premium</h3>
    <p>
      Solution complète combinant veille, logiciel de réponse et accompagnement humain.
      Points forts : mémoire technique IA, accompagnement expert, 25 ans d'expérience.
      Points faibles : positionnement premium, moins adapté aux petites structures.
    </p>

    <h3>Tengo — le challenger IA</h3>
    <p>
      Startup fondée en 2023, Tengo mise sur l'IA pour démocratiser l'accès aux marchés publics.
      Points forts : interface moderne, IA pour la rédaction, communauté active.
      Points faibles : couverture de sources en construction, historique limité.
    </p>

    <h3>Eligibly — le scoring prédictif</h3>
    <p>
      Eligibly se distingue par son approche <strong>scoring prédictif</strong> : au lieu de simplement lister
      les marchés, <strong>Charly IA</strong> analyse chaque opportunité et prédit vos chances de succès.
      Points forts : scoring 0-100, analyse DCE automatique, ROI x3, interface intuitive.
    </p>

    <h3>Autres acteurs</h3>
    <ul>
      <li><strong>Doaken</strong> : agrégateur avec blog SEO fort sur les marchés publics</li>
      <li><strong>Remporte</strong> : focus IA pour la rédaction des réponses</li>
      <li><strong>MarchesPublics.ai</strong> : indexation temps réel de 42 500+ marchés</li>
      <li><strong>TenderNow</strong> : logiciel de réponse aux appels d'offres</li>
    </ul>

    <h2>Agrégateur classique vs plateforme IA : les différences</h2>
    <ul>
      <li><strong>Agrégateur</strong> : "voici tous les marchés publiés" → veille passive, tri manuel</li>
      <li><strong>Plateforme IA</strong> : "voici les marchés que vous pouvez gagner" → scoring, recommandation, prédiction</li>
    </ul>
    <p>
      La valeur ajoutée d'une plateforme IA ne réside pas dans le nombre de marchés listés, mais dans la
      <strong>précision de la qualification</strong>. Candidater à 50 marchés avec 15% de chances chacun
      est moins rentable que candidater à 15 marchés avec 38% de chances.
    </p>

    <h2>Pourquoi les PME choisissent Eligibly</h2>
    <ul>
      <li><strong>Scoring prédictif</strong> : chaque marché reçoit un score de 0 à 100</li>
      <li><strong>Analyse DCE en 5 minutes</strong> : extraction automatique des critères et exigences</li>
      <li><strong>200+ sources</strong> : couverture BOAMP, JOUE, profils acheteurs, presse</li>
      <li><strong>ROI x3 constaté</strong> : moins de réponses, plus de victoires</li>
      <li><strong>Tarification transparente</strong> : prix affichés, sans engagement long</li>
      <li><strong>Onboarding en 7 jours</strong> : opérationnel dès la première semaine</li>
    </ul>
  </ArticleLayout>
);

export default PlateformeMarchesPublics;
