import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const CGU = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">{t('cgu.title')}</h1>
        
        {language === 'en' ? (
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Purpose</h2>
              <p>
                These Terms of Service (ToS) govern the use of the Eligibly platform, 
                an artificial intelligence solution dedicated to the analysis and processing of public procurement, 
                published by GM2.0 SAS.
              </p>
              <p>
                Use of the platform implies full acceptance of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Platform:</strong> the Eligibly solution accessible via eligibly.ai</li>
                <li><strong>User:</strong> any natural or legal person using the platform</li>
                <li><strong>Client:</strong> user who has subscribed to a paid subscription</li>
                <li><strong>Services:</strong> all functionalities offered by GM2.0</li>
                <li><strong>Data:</strong> information processed by the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Access to services</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">3.1 Registration</h3>
              <p>
                Access to services requires prior registration. The user undertakes to provide 
                accurate information and to keep it up to date.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">3.2 User account</h3>
              <p>
                The user is responsible for the confidentiality of their connection credentials and 
                undertakes not to communicate them to third parties.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">3.3 Technical requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stable internet connection</li>
                <li>Compatible web browser (Chrome, Firefox, Safari, Edge)</li>
                <li>JavaScript enabled</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service description</h2>
              <p>GM2.0 offers the following services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated analysis of public tenders</li>
                <li>Personalized monitoring of public procurement</li>
                <li>Scoring and opportunity recommendations</li>
                <li>AI-assisted response generation</li>
                <li>Dashboards and reporting</li>
                <li>Integration API</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. User obligations</h2>
              <p>The user undertakes to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use services in accordance with their intended purpose</li>
                <li>Comply with applicable legislation</li>
                <li>Not compromise the security of the platform</li>
                <li>Not attempt to access other users' data</li>
                <li>Report any malfunction or security incident</li>
                <li>Maintain the confidentiality of their credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Prohibited use</h2>
              <p>It is strictly forbidden to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the platform for illegal or fraudulent purposes</li>
                <li>Attempt to hack or compromise system security</li>
                <li>Reproduce, copy or resell services without authorization</li>
                <li>Perform reverse engineering on the platform</li>
                <li>Disrupt normal service operation</li>
                <li>Use unauthorized robots or automated scripts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual property</h2>
              <p>
                GM2.0 is the exclusive owner of all intellectual property rights on the platform, 
                its algorithms, design and content.
              </p>
              <p>
                The user retains ownership of their data but grants GM2.0 a license for use 
                limited to the provision of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data protection</h2>
              <p>
                The processing of personal data is governed by our Privacy Policy, 
                compliant with GDPR. GM2.0 undertakes to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protect the confidentiality of user data</li>
                <li>Not sell or transfer data to third parties</li>
                <li>Respect users' rights over their data</li>
                <li>Implement appropriate security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Availability and maintenance</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">9.1 Availability</h3>
              <p>
                GM2.0 strives to ensure maximum availability of the platform, without being able to guarantee 
                uninterrupted operation.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">9.2 Maintenance</h3>
              <p>
                Maintenance operations may cause temporary interruptions. 
                Users will be notified whenever possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Pricing and billing</h2>
              <p>
                Service rates are indicated on the platform and may be modified with 30 days notice. 
                Billing is carried out according to the terms chosen during subscription.
              </p>
              <p>
                In case of late payment, GM2.0 reserves the right to suspend access to services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">11.1 Termination by user</h3>
              <p>
                The user can terminate their subscription at any time from their client area, 
                with notice according to the conditions of their contract.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">11.2 Termination by GM2.0</h3>
              <p>
                GM2.0 may terminate access in case of breach of these Terms of Service, 
                with 15 days notice except in cases of force majeure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Limitation of liability</h2>
              <p>
                GM2.0's liability is limited to direct damages and cannot exceed 
                the amount of sums paid by the user during the last 12 months.
              </p>
              <p>
                GM2.0 cannot be held responsible for decisions made by the user 
                based on information provided by the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Force majeure</h2>
              <p>
                Neither party will be responsible for delays or failures due to circumstances 
                beyond their control (force majeure, natural disasters, cyberattacks, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Modification of Terms</h2>
              <p>
                GM2.0 reserves the right to modify these Terms of Service. Important modifications 
                will be notified to users with 30 days notice.
              </p>
              <p>
                Continued use after notification constitutes acceptance of the new conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Applicable law and jurisdiction</h2>
              <p>
                These Terms of Service are subject to French law. In case of dispute, 
                the courts of Paris will have sole jurisdiction.
              </p>
              <p>
                Any dispute will be subject to an attempt at prior amicable resolution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact</h2>
              <p>
                For any questions regarding these Terms of Service:
              </p>
              <p>
                <strong>GM2.0</strong><br />
                9 Avenue de Bouvines, 75011 Paris<br />
                Email: <a href="mailto:contact@eligibly.ai" className="text-primary hover:underline">contact@eligibly.ai</a>
              </p>
              <p className="mt-4">
                <strong>{t('cgu.lastUpdate')}:</strong> {new Date().toLocaleDateString('en-US')}
              </p>
            </section>
          </div>
        ) : (
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
                <strong>{t('cgu.lastUpdate')} :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CGU;