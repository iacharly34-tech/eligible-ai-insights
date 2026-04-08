import { ArticleLayout } from "@/components/ArticleLayout";
import { Brain } from "lucide-react";

const IAAnalyseDCE = () => (
  <ArticleLayout
    badge="IA et marchés publics"
    badgeIcon={<Brain className="w-4 h-4" />}
    title="Comment l'IA analyse un DCE en 5 minutes au lieu de 3 heures"
    subtitle="L'analyse d'un dossier de consultation peut prendre des heures. L'IA le fait en quelques minutes. Voici comment."
    date="12 mars 2026"
    readTime="7 min de lecture"
    url="/ia-analyse-dce"
  >
    <h2>Le problème : analyser un DCE prend trop de temps</h2>
    <p>Un dossier de consultation des entreprises (DCE) typique comprend :</p>
    <ul>
      <li>Le <strong>Règlement de Consultation (RC)</strong> : 10-30 pages</li>
      <li>Le <strong>CCTP</strong> (Cahier des Clauses Techniques Particulières) : 20-100 pages</li>
      <li>Le <strong>CCAP</strong> (Cahier des Clauses Administratives Particulières) : 15-40 pages</li>
      <li>Les annexes : plans, BPU, DQE, etc.</li>
    </ul>
    <p>Au total, un DCE peut représenter <strong>50 à 200 pages de documents techniques</strong>. Lire et analyser tout ça pour un seul marché prend 2 à 4 heures à un professionnel expérimenté.</p>

    <h2>Ce que l'IA extrait automatiquement</h2>
    <h3>Du Règlement de Consultation</h3>
    <ul>
      <li>Critères d'attribution et pondérations exactes</li>
      <li>Sous-critères et leur poids relatif</li>
      <li>Conditions de candidature (CA minimum, certifications requises)</li>
      <li>Dates clés (remise des offres, début d'exécution)</li>
      <li>Procédure (MAPA, AO ouvert, négociation prévue ?)</li>
    </ul>

    <h3>Du CCTP</h3>
    <ul>
      <li>Périmètre exact de la prestation</li>
      <li>Exigences techniques spécifiques</li>
      <li>Compétences et certifications nécessaires</li>
      <li>Livrables attendus</li>
    </ul>

    <h3>Du CCAP</h3>
    <ul>
      <li>Conditions financières (avances, acomptes, délais de paiement)</li>
      <li>Pénalités de retard</li>
      <li>Clause de révision des prix</li>
      <li>Assurances requises</li>
    </ul>

    <h2>En 5 minutes au lieu de 3 heures</h2>
    <p>L'IA d'Eligibly traite l'ensemble du DCE et produit une <strong>fiche synthétique</strong> avec :</p>
    <ul>
      <li>Score de compatibilité global</li>
      <li>Points forts et points faibles de votre candidature</li>
      <li>Critères à enjeu (ceux sur lesquels vous pouvez gagner ou perdre des points)</li>
      <li>Alerte sur les risques (pénalités, exigences inhabituelles)</li>
    </ul>
    <p>Vous décidez en 5 minutes si le marché mérite 20 heures de rédaction.</p>

    <h2>Les limites de l'IA</h2>
    <p>L'IA ne remplace pas l'expertise humaine pour la rédaction du mémoire technique. Elle automatise la <strong>phase de qualification</strong> pour que vous consacriez votre expertise aux marchés où elle sera la plus rentable.</p>
  </ArticleLayout>
);

export default IAAnalyseDCE;
