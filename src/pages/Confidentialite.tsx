import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Confidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Responsable du traitement</h2>
            <p>
              GM2.0, SAS au capital de 5 000,00 €, dont le siège social est situé 9 Avenue de Bouvines, 75011 Paris, 
              immatriculée au RCS de Paris sous le numéro 930 166 913, est responsable du traitement de vos données personnelles.
            </p>
            <p>
              <strong>Contact DPO :</strong> <a href="mailto:contact@eligibly.ai" className="text-primary hover:underline">contact@eligibly.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Données collectées</h2>
            <h3 className="text-xl font-medium text-foreground mb-3">2.1 Données d'identification</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Nom de l'entreprise</li>
              <li>Secteur d'activité</li>
              <li>Numéro de téléphone (optionnel)</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mb-3 mt-6">2.2 Données de navigation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse IP</li>
              <li>Type de navigateur</li>
              <li>Pages visitées</li>
              <li>Durée de session</li>
              <li>Données de cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalités du traitement</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestion des demandes de contact et de démonstration</li>
              <li>Fourniture de nos services d'IA pour les marchés publics</li>
              <li>Amélioration de nos services et de l'expérience utilisateur</li>
              <li>Envoi d'informations commerciales (avec consentement)</li>
              <li>Respect de nos obligations légales</li>
              <li>Analyse statistique et amélioration du site web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base légale</h2>
            <p>Les traitements de données personnelles sont fondés sur :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentement :</strong> pour l'envoi de communications commerciales</li>
              <li><strong>Exécution contractuelle :</strong> pour la fourniture de nos services</li>
              <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité</li>
              <li><strong>Obligation légale :</strong> pour le respect de nos obligations comptables et fiscales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Destinataires des données</h2>
            <p>Vos données peuvent être communiquées à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personnel autorisé de GM2.0</li>
              <li>Prestataires techniques (hébergement, maintenance)</li>
              <li>Autorités légales sur demande judiciaire</li>
            </ul>
            <p className="mt-4">
              Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Durée de conservation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données clients :</strong> 3 ans après la fin de la relation contractuelle</li>
              <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation :</strong> 25 mois maximum</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
              <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits : <a href="mailto:contact@eligibly.ai" className="text-primary hover:underline">contact@eligibly.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Sécurité des données</h2>
            <p>
              GM2.0 met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement des données en transit et au repos</li>
              <li>Contrôle d'accès et authentification forte</li>
              <li>Sauvegarde régulière des données</li>
              <li>Formation du personnel à la protection des données</li>
              <li>Audits de sécurité réguliers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibent text-foreground mb-4">9. Transferts internationaux</h2>
            <p>
              Certaines données peuvent être transférées vers des pays tiers pour les besoins de nos services techniques. 
              Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types, certifications).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Cookies</h2>
            <p>Notre site utilise différents types de cookies :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies d'analyse :</strong> mesure d'audience (avec consentement)</li>
              <li><strong>Cookies de personnalisation :</strong> amélioration de l'expérience</li>
            </ul>
            <p className="mt-4">
              Vous pouvez configurer vos préférences de cookies via notre bandeau de consentement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Réclamations</h2>
            <p>
              En cas de réclamation concernant le traitement de vos données, vous pouvez saisir la CNIL :
            </p>
            <p>
              <strong>CNIL :</strong> 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
              <strong>Site web :</strong> <a href="https://www.cnil.fr" className="text-primary hover:underline">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Modifications</h2>
            <p>
              Cette politique de confidentialité peut être modifiée. La version en vigueur est celle publiée sur notre site web. 
              Les modifications importantes seront notifiées par email.
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

export default Confidentialite;