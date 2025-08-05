import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
            <p>
              <strong>Raison sociale :</strong> TengoAI<br />
              <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)<br />
              <strong>Capital social :</strong> 10 000 €<br />
              <strong>Siège social :</strong> 15 Rue de la Paix, 75001 Paris, France<br />
              <strong>RCS :</strong> Paris B 123 456 789<br />
              <strong>SIRET :</strong> 123 456 789 00012<br />
              <strong>TVA intracommunautaire :</strong> FR12345678901<br />
              <strong>Téléphone :</strong> +33 1 23 45 67 89<br />
              <strong>Email :</strong> contact@tengoai.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de TengoAI.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.<br />
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
              <strong>Site web :</strong> <a href="https://vercel.com" className="text-primary hover:underline">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
              sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Données personnelles</h2>
            <p>
              Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à la gestion des demandes 
              et à l'amélioration de nos services. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
              de suppression et de portabilité de vos données.
            </p>
            <p>
              Pour exercer ces droits, contactez-nous à : <a href="mailto:dpo@tengoai.fr" className="text-primary hover:underline">dpo@tengoai.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site ainsi que des cookies d'analyse 
              pour améliorer votre expérience utilisateur. Vous pouvez configurer vos préférences de cookies à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Responsabilité</h2>
            <p>
              L'utilisateur reconnaît avoir pris connaissance des présentes mentions légales et s'engage à les respecter. 
              TengoAI ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, 
              les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;