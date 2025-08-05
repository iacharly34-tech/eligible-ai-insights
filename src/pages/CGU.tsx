import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme Eligibly, 
              solution d'intelligence artificielle dédiée à l'analyse et au traitement des marchés publics, 
              éditée par GM2.0 SAS.
            </p>
            <p>
              L'utilisation de la plateforme implique l'acceptation pleine et entière des présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Définitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plateforme :</strong> la solution Eligibly accessible via eligibly.ai</li>
              <li><strong>Utilisateur :</strong> toute personne physique ou morale utilisant la plateforme</li>
              <li><strong>Client :</strong> utilisateur ayant souscrit à un abonnement payant</li>
              <li><strong>Services :</strong> ensemble des fonctionnalités proposées par GM2.0</li>
              <li><strong>Données :</strong> informations traitées par la plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Accès aux services</h2>
            <h3 className="text-xl font-medium text-foreground mb-3">3.1 Inscription</h3>
            <p>
              L'accès aux services nécessite une inscription préalable. L'utilisateur s'engage à fournir 
              des informations exactes et à les maintenir à jour.
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">3.2 Compte utilisateur</h3>
            <p>
              L'utilisateur est responsable de la confidentialité de ses identifiants de connexion et 
              s'engage à ne pas les communiquer à des tiers.
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">3.3 Prérequis techniques</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Connexion internet stable</li>
              <li>Navigateur web compatible (Chrome, Firefox, Safari, Edge)</li>
              <li>JavaScript activé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Description des services</h2>
            <p>GM2.0 propose les services suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyse automatisée des appels d'offres publics</li>
              <li>Veille personnalisée sur les marchés publics</li>
              <li>Scoring et recommandations d'opportunités</li>
              <li>Génération de réponses assistée par IA</li>
              <li>Tableaux de bord et reporting</li>
              <li>API d'intégration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Obligations de l'utilisateur</h2>
            <p>L'utilisateur s'engage à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utiliser les services conformément à leur destination</li>
              <li>Respecter la législation en vigueur</li>
              <li>Ne pas porter atteinte à la sécurité de la plateforme</li>
              <li>Ne pas tenter d'accéder aux données d'autres utilisateurs</li>
              <li>Signaler tout dysfonctionnement ou incident de sécurité</li>
              <li>Maintenir la confidentialité de ses identifiants</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Utilisation interdite</h2>
            <p>Il est strictement interdit de :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utiliser la plateforme à des fins illégales ou frauduleuses</li>
              <li>Tenter de pirater ou compromettre la sécurité du système</li>
              <li>Reproduire, copier ou revendre les services sans autorisation</li>
              <li>Effectuer du reverse engineering sur la plateforme</li>
              <li>Perturber le fonctionnement normal des services</li>
              <li>Utiliser des robots ou scripts automatisés non autorisés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Propriété intellectuelle</h2>
            <p>
              GM2.0 est propriétaire exclusif de tous les droits de propriété intellectuelle sur la plateforme, 
              ses algorithmes, son design et son contenu.
            </p>
            <p>
              L'utilisateur conserve la propriété de ses données mais accorde à GM2.0 une licence d'utilisation 
              limitée à la fourniture des services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Protection des données</h2>
            <p>
              Le traitement des données personnelles est régi par notre Politique de Confidentialité, 
              conforme au RGPD. GM2.0 s'engage à :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protéger la confidentialité des données utilisateur</li>
              <li>Ne pas vendre ou céder les données à des tiers</li>
              <li>Respecter les droits des utilisateurs sur leurs données</li>
              <li>Mettre en place des mesures de sécurité appropriées</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disponibilité et maintenance</h2>
            <h3 className="text-xl font-medium text-foreground mb-3">9.1 Disponibilité</h3>
            <p>
              GM2.0 s'efforce d'assurer une disponibilité maximale de la plateforme, sans pouvoir garantir 
              un fonctionnement ininterrompu.
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">9.2 Maintenance</h3>
            <p>
              Des opérations de maintenance peuvent occasionner des interruptions temporaires. 
              Les utilisateurs seront prévenus dans la mesure du possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Tarification et facturation</h2>
            <p>
              Les tarifs des services sont indiqués sur la plateforme et peuvent être modifiés avec un préavis de 30 jours. 
              La facturation s'effectue selon les modalités choisies lors de l'abonnement.
            </p>
            <p>
              En cas de retard de paiement, GM2.0 se réserve le droit de suspendre l'accès aux services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Résiliation</h2>
            <h3 className="text-xl font-medium text-foreground mb-3">11.1 Résiliation par l'utilisateur</h3>
            <p>
              L'utilisateur peut résilier son abonnement à tout moment depuis son espace client, 
              avec un préavis selon les conditions de son contrat.
            </p>
            
            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">11.2 Résiliation par GM2.0</h3>
            <p>
              GM2.0 peut résilier l'accès en cas de manquement aux présentes CGU, 
              avec un préavis de 15 jours sauf cas de force majeure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Limitation de responsabilité</h2>
            <p>
              La responsabilité de GM2.0 est limitée aux dommages directs et ne peut excéder 
              le montant des sommes versées par l'utilisateur au cours des 12 derniers mois.
            </p>
            <p>
              GM2.0 ne peut être tenu responsable des décisions prises par l'utilisateur 
              sur la base des informations fournies par la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Force majeure</h2>
            <p>
              Aucune partie ne sera responsable des retards ou manquements dus à des circonstances 
              indépendantes de sa volonté (force majeure, catastrophes naturelles, cyberattaques, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Modification des CGU</h2>
            <p>
              GM2.0 se réserve le droit de modifier les présentes CGU. Les modifications importantes 
              seront notifiées aux utilisateurs avec un préavis de 30 jours.
            </p>
            <p>
              La poursuite de l'utilisation après notification vaut acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, 
              les tribunaux de Paris seront seuls compétents.
            </p>
            <p>
              Tout litige fera l'objet d'une tentative de résolution amiable préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU :
            </p>
            <p>
              <strong>GM2.0</strong><br />
              9 Avenue de Bouvines, 75011 Paris<br />
              Email : <a href="mailto:contact@eligibly.ai" className="text-primary hover:underline">contact@eligibly.ai</a>
            </p>
            <p className="mt-4">
              <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGU;