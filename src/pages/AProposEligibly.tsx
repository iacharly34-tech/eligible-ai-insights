import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Target, Zap, Users, Award } from "lucide-react";

const AProposEligibly = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead />
      <StructuredData page="about" />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/40">
        <Header />
        
        <main className="page-container">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                À propos d'<span className="text-primary">Eligibly</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Eligibly révolutionne l'approche des marchés publics en combinant intelligence artificielle 
                et expertise métier pour maximiser vos chances de succès sur les appels d'offres.
              </p>
            </div>
          </section>

          {/* Notre Mission */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Chez Eligibly, nous croyons que chaque entreprise mérite sa chance sur les marchés publics. 
                    Notre mission est de démocratiser l'accès aux appels d'offres en rendant l'analyse prédictive 
                    accessible à tous, des PME aux grands groupes.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Grâce à notre technologie d'IA avancée, nous transformons des données complexes en insights 
                    actionnables pour que vous puissiez vous concentrer sur ce qui compte vraiment : 
                    développer votre activité.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/60 rounded-xl">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Précision</h3>
                    <p className="text-sm text-muted-foreground">
                      93% de précision dans nos prédictions
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/60 rounded-xl">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Rapidité</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyse en 30 secondes
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/60 rounded-xl">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Équipe</h3>
                    <p className="text-sm text-muted-foreground">
                      Experts IA et marchés publics
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/60 rounded-xl">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Résultats</h3>
                    <p className="text-sm text-muted-foreground">
                      +47% de taux de succès
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notre Histoire */}
          <section className="py-20 px-4 bg-white/40">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-12">L'histoire d'Eligibly</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2023
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Naissance du projet</h3>
                    <p className="text-muted-foreground">
                      Constatant que 80% des entreprises perdent du temps sur des appels d'offres 
                      inadaptés, nos fondateurs décident de créer Eligibly pour révolutionner 
                      l'approche des marchés publics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lancement de l'IA prédictive</h3>
                    <p className="text-muted-foreground">
                      Première version de notre moteur d'IA capable d'analyser et de scorer 
                      automatiquement les appels d'offres. Les premiers clients voient leur 
                      taux de succès augmenter de 40%.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2025
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Leader du marché</h3>
                    <p className="text-muted-foreground">
                      Eligibly devient la référence en matière d'analyse prédictive des marchés 
                      publics, avec plus de 1000 entreprises qui nous font confiance pour 
                      optimiser leur stratégie commerciale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">
                Prêt à transformer votre approche des marchés publics ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Rejoignez les entreprises qui ont choisi Eligibly pour optimiser 
                leur stratégie d'appels d'offres.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to="/demo">
                  <Button size="lg" className="px-8 py-4 h-auto group">
                    Tester Eligibly gratuitement
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SafeLink>
                <SafeLink to="/contact">
                  <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
                    Nous contacter
                  </Button>
                </SafeLink>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AProposEligibly;