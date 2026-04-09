import { ArticleLayout } from "@/components/ArticleLayout";
import { ShieldCheck } from "lucide-react";

const ChecklistConformiteAO = () => (
  <ArticleLayout
    badge="Optimiser sa réponse"
    badgeIcon={<ShieldCheck className="w-4 h-4" />}
    title="Checklist conformité AO : ne plus jamais être éliminé pour un oubli"
    subtitle="30% des candidatures aux marchés publics sont rejetées pour non-conformité administrative. Voici la checklist définitive pour éliminer ce risque."
    date="9 avril 2026"
    readTime="8 min de lecture"
    url="/checklist-conformite-ao"
  >
    <h2>Le fléau de l'élimination administrative</h2>
    <p>Chaque année, des milliers d'entreprises sont éliminées d'appels d'offres non pas à cause de la qualité de leur réponse, mais pour un <strong>document manquant, une signature oubliée ou un formulaire mal rempli</strong>. C'est la forme la plus frustrante de perte : vous avez investi 40 à 80 heures de travail, et tout est annulé par un oubli de 5 minutes.</p>
    <p>Selon les données de la DAJ (Direction des Affaires Juridiques), <strong>environ 30% des candidatures</strong> présentent au moins une non-conformité susceptible d'entraîner un rejet. Ce chiffre monte à 45% pour les PME qui répondent occasionnellement.</p>

    <h2>Les 3 niveaux de conformité</h2>
    <h3>1. Conformité administrative</h3>
    <p>C'est la plus éliminatoire. Elle concerne les <strong>pièces de candidature</strong> :</p>
    <ul>
      <li><strong>DC1</strong> (lettre de candidature) : correctement rempli, signé par le représentant légal</li>
      <li><strong>DC2</strong> (déclaration du candidat) : chiffre d'affaires, effectifs, références</li>
      <li><strong>DUME</strong> (Document Unique de Marché Européen) : alternative aux DC1/DC2 pour les marchés européens</li>
      <li><strong>Attestations fiscales et sociales</strong> : à jour, datées de moins de 6 mois</li>
      <li><strong>Assurance RC professionnelle</strong> : en cours de validité, couvrant l'objet du marché</li>
      <li><strong>Extrait Kbis</strong> : de moins de 3 mois</li>
      <li><strong>Habilitations et certifications</strong> : Qualibat, ISO, RGE... selon le marché</li>
    </ul>

    <h3>2. Conformité technique</h3>
    <p>L'offre technique doit répondre <strong>point par point</strong> aux exigences du CCTP :</p>
    <ul>
      <li>Toutes les prestations demandées sont couvertes</li>
      <li>Les variantes ne sont proposées que si autorisées</li>
      <li>Le mémoire technique respecte le nombre de pages maximum (si imposé)</li>
      <li>Les annexes demandées sont toutes fournies</li>
      <li>Les fiches techniques des produits/matériaux sont jointes</li>
    </ul>

    <h3>3. Conformité financière</h3>
    <p>L'offre financière présente ses propres pièges :</p>
    <ul>
      <li><strong>BPU complet</strong> : aucune ligne vide, aucun prix à zéro (sauf justification)</li>
      <li><strong>DQE cohérent</strong> : les totaux correspondent aux prix unitaires × quantités</li>
      <li><strong>Rabais/remises</strong> : présentés dans le format demandé</li>
      <li><strong>Sous-détail de prix</strong> : si demandé dans le RC</li>
    </ul>

    <h2>La matrice de traçabilité : votre meilleur outil</h2>
    <p>La matrice de traçabilité est un tableau qui met en correspondance <strong>chaque exigence du DCE avec l'élément de votre réponse</strong> qui y répond. C'est l'outil le plus puissant pour garantir la complétude de votre dossier.</p>
    <p>Structure recommandée :</p>
    <ul>
      <li><strong>Colonne 1</strong> : Référence dans le DCE (page, article)</li>
      <li><strong>Colonne 2</strong> : Exigence ou document demandé</li>
      <li><strong>Colonne 3</strong> : Emplacement dans votre réponse</li>
      <li><strong>Colonne 4</strong> : Statut (✅ Conforme / ⚠️ Partiel / ❌ Manquant)</li>
    </ul>

    <h2>Les 10 erreurs de conformité les plus fréquentes</h2>
    <ol>
      <li><strong>Signature manquante</strong> sur le DC1 ou l'acte d'engagement</li>
      <li><strong>Attestation périmée</strong> (assurance, Kbis, URSSAF)</li>
      <li><strong>Dépôt hors délai</strong> — même 1 minute de retard est éliminatoire</li>
      <li><strong>Mauvais format de fichier</strong> (PDF demandé, Word envoyé)</li>
      <li><strong>Ligne vide dans le BPU</strong> interprétée comme un prix de 0€</li>
      <li><strong>Variante non autorisée</strong> proposée en solution de base</li>
      <li><strong>Pages manquantes</strong> dans un document scanné</li>
      <li><strong>Confusion entre lots</strong> sur un marché alloti</li>
      <li><strong>Sous-traitant non déclaré</strong> alors qu'il apparaît dans le mémoire</li>
      <li><strong>Paraphe manquant</strong> sur les pages du BPU</li>
    </ol>

    <h2>Le protocole J-1 : vérification finale</h2>
    <p>La veille du dépôt, appliquez ce protocole en 30 minutes :</p>
    <ul>
      <li>✅ Relire le RC (Règlement de Consultation) une dernière fois</li>
      <li>✅ Vérifier chaque document demandé avec la matrice de traçabilité</li>
      <li>✅ Contrôler les signatures et paraphes</li>
      <li>✅ Vérifier la cohérence des montants (BPU × DQE = total AE)</li>
      <li>✅ Tester l'ouverture de chaque fichier PDF</li>
      <li>✅ Vérifier la taille totale (limites de la plateforme)</li>
      <li>✅ Déposer avec 2h de marge minimum</li>
    </ul>

    <h2>Comment Eligibly Check automatise la conformité</h2>
    <p>Le module <strong>Eligibly Check</strong> automatise l'intégralité de ce processus. L'IA analyse le DCE, génère automatiquement la matrice de traçabilité, vérifie chaque document de votre dossier et vous alerte sur les manques et incohérences. En 5 minutes, vous avez un <strong>score de conformité de 0 à 100</strong> avec les actions correctives précises à mener.</p>
    <p><a href="/produit/conformite-appel-offres">Découvrir Eligibly Check →</a></p>
  </ArticleLayout>
);

export default ChecklistConformiteAO;
