import { LandingCabinetLayout } from "./LandingCabinetLayout";

const PresenceDigitaleCabinetComptable = () => (
  <LandingCabinetLayout
    seoTitle="Présence digitale cabinet comptable : socle technique et cadence"
    seoDescription="Checklist de présence digitale pour cabinet d'expertise comptable : site, fiche Google, LinkedIn, annuaires métier, avis, contenu. Priorités, coûts et cadence réaliste."
    canonicalPath="/presence-digitale-cabinet-comptable"
    eyebrow="Présence digitale cabinet EC"
    h1a="Présence digitale :"
    h1b="le socle minimum"
    h1c=" pour exister en 2026."
    intro="Un cabinet n'a pas besoin d'une stratégie digitale de cinquante pages. Il a besoin d'un socle : six actifs correctement installés, puis une cadence tenue. Voici la checklist que nous déployons avec nos cabinets partenaires, dans l'ordre d'impact décroissant, avec les coûts et le temps réellement mobilisés."
    bullets={[
      "6 actifs à installer une fois : site, fiche Google, LinkedIn, annuaires, avis, tracking",
      "Une cadence de publication tenable : 1 page ou article par mois",
      "Un site indexable sans JavaScript, balisé, et rapide sur mobile",
      "Un point de mesure unique : Search Console + fiche Google",
    ]}
    ctaPrimary="Voir la brique acquisition d'Eligibly"
    ctaNote="Démo produit — 20 minutes, sans carte bancaire."
    sections={[
      {
        title: "Les six actifs, dans l'ordre d'impact",
        body: (
          <p>
            <strong>1. La fiche Google Business</strong> — le meilleur rapport effort/résultat pour un cabinet local : catégorie « Expert-comptable », zone d'intervention, horaires, photos réelles, description mentionnant vos verticales. <strong>2. Le site du cabinet</strong> — une page par service, une par verticale, une par ville d'intervention réelle, plus une page « contact » avec un formulaire qui fonctionne (à tester tous les trimestres). <strong>3. Les avis</strong> — un processus explicite : demande systématique à la remise du bilan ou à la fin d'un accompagnement de création, réponse à chaque avis. <strong>4. LinkedIn</strong> — page entreprise renseignée et profils des associés qui prospectent alignés sur le positionnement. <strong>5. Les annuaires métier</strong> — Compta Online, annuaires de l'ordre, annuaires régionaux : ils apportent des liens et des signaux de marque français. <strong>6. La mesure</strong> — Search Console et statistiques de la fiche Google. Aucun autre outil n'est nécessaire les six premiers mois.
          </p>
        ),
      },
      {
        title: "Ce qu'un site de cabinet doit contenir, page par page",
        body: (
          <p>
            Une arborescence de huit à douze pages suffit et surpasse la plupart des sites de la profession : accueil (positionnement + preuves + contact), une page par service à forte intention (création de société, comptabilité annuelle, paie, TVA, accompagnement fiscal), une page par verticale traitée, une page par ville d'intervention, une page équipe avec les associés nommés et leurs domaines, une page tarifs ou au minimum une grille indicative, et un espace articles. Chaque page doit répondre à une question réelle et non décrire une prestation en termes internes. Deux erreurs coûteuses et fréquentes : les informations essentielles (ville, service, prix) placées dans une image ou un slider, et l'absence de page ville, qui laisse la totalité de la recherche locale à la concurrence.
          </p>
        ),
      },
      {
        title: "Les exigences techniques qui conditionnent l'indexation",
        body: (
          <p>
            Quatre points techniques suffisent à écarter la majorité des cabinets mal indexés. Le contenu doit être présent dans le HTML servi, pas uniquement injecté par JavaScript — de nombreux crawlers, dont ceux des assistants IA, n'exécutent pas de scripts. Chaque page doit avoir un titre et une méta-description uniques, une URL stable et une balise canonique auto-référente. Le balisage structuré doit décrire l'entité : <em>Organization</em> ou <em>LocalBusiness</em> avec adresse et téléphone, <em>FAQPage</em> sur les pages de questions, <em>Article</em> sur les publications. Enfin la performance mobile : sous 2,5 s de LCP sur 4G, sinon le taux de sortie annule le bénéfice du référencement. Un sitemap.xml à jour et un robots.txt autorisant les crawlers IA complètent le socle.
          </p>
        ),
      },
      {
        title: "Cadence réaliste et coûts observés",
        body: (
          <p>
            Installation du socle : 20 à 40 heures cumulées, réparties sur six à huit semaines, en interne ou avec un prestataire. Maintien : 2 heures par mois pour la fiche Google et les avis, 3 à 4 heures pour une page ou un article. Le format le plus rentable pour un cabinet n'est pas le billet d'actualité fiscale — largement couvert par des sites nationaux mieux positionnés — mais le contenu chiffré et local : évolution des immatriculations dans votre département, questions récurrentes des créateurs de votre verticale, comparatif de statuts appliqué à un cas concret. Ce type de contenu se fait citer, se reprend en lien, et alimente les réponses des assistants IA. C'est la logique de nos propres baromètres mensuels d'immatriculations.
          </p>
        ),
      },
      {
        title: "Où s'arrête la présence digitale et où commence la détection",
        body: (
          <p>
            Le socle digital capte les créateurs qui vous cherchent activement — soit une fraction du marché de votre zone. Les autres se décident sur les conseils d'un tiers, d'une banque, d'un juriste, ou du premier cabinet qui les a contactés après leur immatriculation. C'est précisément le rôle d'Eligibly : détecter chaque immatriculation SASU, SAS, EURL, SARL ou SEL de votre zone via les sources publiques (INPI, Sirene, BODACC), la scorer sur votre ICP, et vous livrer chaque matin à 7h une liste priorisée avec le canal d'activation recommandé. Présence digitale et détection ne se substituent pas : l'une réduit le coût des leads entrants, l'autre garantit un volume de contacts qualifiés indépendant de votre notoriété actuelle.
          </p>
        ),
      },
    ]}
    faq={[
      { q: "Faut-il refaire le site du cabinet ou l'améliorer ?", a: "Améliorer, dans la plupart des cas : ajouter les pages service, verticale et ville manquantes, corriger titres et balisage, réduire le poids des images. Une refonte ne se justifie que si le site n'est pas indexable ou pas responsive." },
      { q: "Combien de temps pour installer le socle complet ?", a: "20 à 40 heures de travail réparties sur six à huit semaines. La fiche Google Business et les trois premières pages produisent l'essentiel des premiers résultats." },
      { q: "Les annuaires métier ont-ils encore un intérêt ?", a: "Oui, pour deux raisons distinctes de l'audience : ils apportent des liens entrants français et ils corroborent les informations du cabinet, ce qui augmente la probabilité d'être restitué par un assistant IA." },
      { q: "Faut-il publier sur LinkedIn en tant que cabinet ou en tant qu'associé ?", a: "Les deux, avec un partage clair : la page cabinet porte les publications institutionnelles et les contenus chiffrés, les profils d'associés portent l'expertise et la relation directe, qui génère la plupart des réponses en prospection." },
    ]}
    related={[
      { label: "Visibilité de l'expert-comptable", href: "/visibilite-expert-comptable" },
      { label: "Image de marque du cabinet", href: "/image-de-marque-expert-comptable" },
      { label: "Canaux d'activation multicanal", href: "/canaux-activation" },
      { label: "Cas client EM Partners", href: "/blog/cas-client-empartners" },
    ]}
  />
);

export default PresenceDigitaleCabinetComptable;
