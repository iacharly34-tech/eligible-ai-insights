import { LandingCabinetLayout } from "./LandingCabinetLayout";
import { Button } from "@/components/ui/button";

const VisibiliteExpertComptable = () => (
  <LandingCabinetLayout
    seoTitle="Visibilité expert-comptable : être trouvé, choisi et cité (2026)"
    seoDescription="Méthode de visibilité pour cabinet d'expertise comptable : fiche Google Business, référencement local, contenu, présence dans les LLM. Indicateurs et arbitrages de budget."
    canonicalPath="/visibilite-expert-comptable"
    eyebrow="Visibilité cabinet EC"
    h1a="Visibilité expert-comptable :"
    h1b="être trouvé au moment"
    h1c=" où le créateur cherche."
    intro="Un dirigeant peut vérifier un cabinet sur Google, consulter ses avis et son site, ou interroger un assistant IA avant de le contacter. Construire une présence cohérente facilite cette vérification. L'objectif est de rendre vos missions et votre expertise compréhensibles et vérifiables, puis de mesurer les prises de contact, sans promettre une position Google ni une citation IA."
    bullets={[
      "Fiche Google Business complète, catégorisée, alimentée en avis récents",
      "Site du cabinet indexable : pages par service, par verticale et par ville",
      "Contenus exploitables par ChatGPT, Perplexity, Gemini et Claude, sans garantie de citation",
      "Sortie de prospection sortante : la visibilité ne remplace pas le contact, elle le rend plus facile",
    ]}
    ctaPrimary="Voir comment Eligibly complète votre visibilité"
    ctaNote="Démo produit — 20 minutes, sans engagement."
    sections={[
      {
        title: "Comment être visible sur ChatGPT quand on est expert-comptable ?",
        body: <><p>Publiez des réponses précises aux questions de vos clients, accessibles dans le HTML initial, et faites corroborer l'identité du cabinet par des sources externes fiables. ChatGPT, Perplexity, Gemini et Claude n'utilisent pas exactement les mêmes systèmes ; l'accès d'un robot à une page ne prouve pas qu'un assistant la cite.</p><ol className="list-decimal pl-5 space-y-2"><li><strong>Identifier le cabinet :</strong> dénomination, associés, coordonnées, inscription professionnelle et zone réelle, cohérents sur le site et les annuaires.</li><li><strong>Répondre à une question par section :</strong> mission, clientèle concernée, limites, modalités et sources. Préférer les faits aux superlatifs.</li><li><strong>Rendre les pages accessibles :</strong> statut 200, texte sans JavaScript, titre et canonical propres, liens internes, sitemap et absence de blocage involontaire.</li><li><strong>Documenter les preuves :</strong> cas autorisés, résultats datés avec méthode et dénominateur ; distinguer exemple et résultat réel.</li><li><strong>Tester régulièrement :</strong> enregistrer question exacte, assistant, date, recherche web activée ou non, citation et URL citée. Répéter les tests ; une réponse isolée n'est pas un taux de visibilité.</li></ol><p>Le balisage structuré décrit vos informations ; il ne garantit pas leur sélection. Les fichiers llms.txt sont des index complémentaires, pas un mécanisme d'indexation officiel commun aux assistants. Le diagnostic Eligibly évalue qualitativement les contenus trouvés et propose des améliorations ; il ne mesure pas une probabilité de citation.</p><p className="text-sm">Références : <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google Search Central — contenus utiles</a> · <a href="https://platform.openai.com/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI — robots et contrôles d'accès</a>.</p></>,
      },
      {
        title: "Évaluer les contenus de votre propre site",
        body: <Button asChild variant="outline"><a href="/diagnostic-visibilite-ia">Lancer le diagnostic de visibilité IA</a></Button>,
      },
      {
        title: "Les quatre surfaces où un cabinet se joue",
        body: (
          <p>
            La visibilité d'un cabinet n'est pas un score global, c'est la somme de quatre surfaces distinctes. <strong>La recherche locale</strong> (« expert-comptable + ville », « comptable SASU + ville ») capte l'intention la plus chaude et se gagne surtout par la fiche Google Business et les pages ville du site. <strong>Les avis</strong> constituent le filtre de sélection : à volume d'avis comparable, une note inférieure à 4,5 fait sortir un cabinet de la short-list. <strong>Le site</strong> doit répondre aux questions réelles (quel statut, quel coût, quelles obligations la première année) : c'est ce qui transforme une visite en prise de contact. <strong>Les assistants IA</strong> forment la quatrième surface, apparue en deux ans : quand un créateur demande « quel comptable pour ma SASU à Lyon », la réponse s'appuie sur des sources textuelles indexées — pages de service, articles, mentions annuaires. Un cabinet absent de ces sources est structurellement invisible dans ce canal.
          </p>
        ),
      },
      {
        title: "Référencement local : ce qui bouge réellement les positions",
        body: (
          <p>
            Trois leviers pèsent l'essentiel du résultat en local. Premièrement la fiche Google Business : catégorie principale « Expert-comptable » (et non « Service de comptabilité »), zone d'intervention déclarée, horaires exacts, photos réelles du cabinet, description structurée reprenant vos verticales. Deuxièmement le flux d'avis : un rythme régulier de 2 à 4 avis par mois pèse davantage qu'un pic de 30 avis obtenus en une semaine, et chaque avis répondu nominativement renforce le signal. Troisièmement les pages du site alignées sur l'intention locale : une page par ville d'intervention réelle, avec un contenu spécifique (tissu économique local, verticales dominantes, cas traités) — jamais une page générique dupliquée, que Google déclasse. Un cabinet qui applique ces trois leviers passe typiquement de la page 3 au pack local en 4 à 8 mois.
          </p>
        ),
      },
      {
        title: "Être cité par les assistants IA : la nouvelle condition d'entrée",
        body: (
          <p>
            Les modèles de langage ne « classent » pas des sites, ils reconstruisent une réponse à partir de textes qu'ils jugent explicites et cohérents. Trois conditions concrètes en découlent. Le contenu doit être <strong>littéral</strong> : nommer le service, la ville, la forme juridique et le prix dans le corps du texte, pas dans une image ou un slogan. Il doit être <strong>structuré</strong> : titres hiérarchisés, données de balisage (Organization, LocalBusiness, FAQPage), pages atteignables sans JavaScript. Il doit être <strong>corroboré</strong> : une même information reprise sur votre site, votre fiche Google, votre page LinkedIn et un annuaire métier a beaucoup plus de chances d'être restituée qu'une affirmation isolée. C'est exactement le travail que nous avons mené avec EM Partners, documenté dans notre cas client.
          </p>
        ),
      },
      {
        title: "Ce que la visibilité ne fait pas",
        body: (
          <p>
            Soyons factuels : la visibilité produit un flux entrant lent et non-priorisé. Elle ne vous dit pas quelle société vient d'être immatriculée dans votre zone, ni laquelle correspond à votre ICP, ni dans quel délai la contacter. La fenêtre de décision d'un créateur se situe dans les 90 jours suivant l'immatriculation : passé ce délai, il a déjà un comptable et le coût de conquête triple. La visibilité et la détection sont donc complémentaires — l'une capte ceux qui vous cherchent, l'autre vous met en face de ceux qui ne vous connaissent pas encore mais décident maintenant. Eligibly couvre la seconde partie : détection quotidienne des immatriculations, scoring sur votre ICP, canal d'activation recommandé.
          </p>
        ),
      },
      {
        title: "Les indicateurs à suivre, et à quelle fréquence",
        body: (
          <p>
            Mensuellement : nombre d'appels et d'itinéraires générés par la fiche Google Business, nombre d'avis et note moyenne, impressions et clics Search Console sur les requêtes « expert-comptable + ville », nombre de formulaires de contact aboutis. Trimestriellement : positions moyennes sur 10 requêtes cibles, nombre de domaines référents, et un test manuel de citation IA (poser 5 questions type à ChatGPT et Perplexity, noter si le cabinet apparaît). Ces sept indicateurs suffisent. Tout tableau de bord plus large produit du reporting, pas des décisions.
          </p>
        ),
      },
    ]}
    faq={[
      { q: "Combien de temps avant de voir des résultats de visibilité ?", a: "Aucun délai de citation IA n'est garanti. Suivez les impressions, les contacts et les URL effectivement citées sur plusieurs périodes comparables. Une page accessible et indexable peut ne jamais être reprise dans une réponse." },
      { q: "Faut-il un budget publicitaire ?", a: "Non pour démarrer. La fiche Google Business, les avis et 8 à 12 pages de site bien écrites couvrent l'essentiel du potentiel local. Le SEA n'a d'intérêt que pour tester rapidement des requêtes à forte intention avant d'investir en contenu." },
      { q: "Un cabinet de 3 personnes peut-il tenir cette cadence ?", a: "Oui, à condition de cadrer : 2 heures par mois pour la fiche et les avis, une page ou un article par mois. En dessous, la visibilité stagne ; au-dessus, elle mobilise du temps facturable sans gain proportionnel." },
      { q: "La visibilité remplace-t-elle la prospection ?", a: "Non. Elle réduit le coût d'acquisition des leads entrants mais ne couvre pas les créateurs qui ne vous cherchent pas. Les deux canaux se cumulent : visibilité pour l'inbound, détection d'immatriculations pour l'outbound dans la fenêtre 90 jours." },
    ]}
    related={[
      { label: "Développer le nombre de clients du cabinet", href: "/trouver-des-clients-cabinet-comptable" },
      { label: "Diagnostic de préparation aux citations IA", href: "/diagnostic-visibilite-ia" },
      { label: "Image de marque du cabinet", href: "/image-de-marque-expert-comptable" },
      { label: "Présence digitale du cabinet", href: "/presence-digitale-cabinet-comptable" },
      { label: "Cas client EM Partners", href: "/blog/cas-client-empartners" },
      { label: "Kit marketing 2026 pour experts-comptables", href: "/blog/guide-demarchage-client-expert-comptable" },
    ]}
  />
);

export default VisibiliteExpertComptable;
