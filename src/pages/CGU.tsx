import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEOHead } from "@/components/SEOHead";

const CGU = () => {
  const { t, language } = useLanguage();
  
  const frenchContent = (
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
  );

  const englishContent = (
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
  );

  return (
    <>
      <SEOHead noindex />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">{t('cgu.title')}</h1>
          {language === 'en' ? englishContent : frenchContent}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CGU;