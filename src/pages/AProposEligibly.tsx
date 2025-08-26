import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/SafeLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Target, Zap, Users, Award, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";

const AProposEligibly = () => {
  const { t, language } = useLanguage();

  const isEnglish = language === 'en';

  const keywordsMarchesPublics = [
    "appels d'offres publics", "marchés publics", "appels d'offres", "AO", "marché public",
    "procédure d'appel d'offres", "réponse appel d'offres", "consultation publique",
    "mémoire technique", "offre commerciale", "dossier candidature", "AAPC",
    "code des marchés publics", "achat public", "commande publique",
    "appels d'offres restreints", "appels d'offres ouverts", "négociation concurrentielle",
    "dialogue compétitif", "concours", "marché négocié", "accord-cadre",
    "secteurs prioritaires", "critères d'attribution", "analyse des besoins",
    "veille marchés publics", "opportunités commerciales", "stratégie AO"
  ];

  const keywordsPublicTenders = [
    "public tenders", "government contracts", "public procurement", "tender analysis",
    "bid opportunities", "contract bidding", "public sector contracts", "tender process",
    "procurement opportunities", "government bidding", "public contract awards",
    "tender documentation", "bid evaluation", "procurement strategy", "tender success",
    "competitive bidding", "public sector procurement", "contract opportunities",
    "tender qualification", "bid preparation", "procurement analysis", "tender intelligence"
  ];

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
                {isEnglish ? (
                  <>About <span className="text-primary">Eligibly</span> - AI Platform for Public Tenders</>
                ) : (
                  <>À propos d'<span className="text-primary">Eligibly</span> - Plateforme IA pour Appels d'Offres Publics</>
                )}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {isEnglish ? (
                  "Eligibly revolutionizes public tender approach by combining artificial intelligence and business expertise to maximize your success on government contracts and public procurement opportunities."
                ) : (
                  "Eligibly révolutionne l'approche des marchés publics et appels d'offres publics en combinant intelligence artificielle et expertise métier pour maximiser vos chances de succès sur les AO et consultations publiques."
                )}
              </p>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="py-20 px-4 bg-white/40">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isEnglish ? "Public Tender & Government Contract Expertise" : "Expertise Appels d'Offres Publics & Marchés Publics"}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? "Tender Analysis" : "Analyse des AO"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 
                      "Advanced AI analysis of public tender documents, bid requirements, and success probability assessment for government contracts." :
                      "Analyse IA avancée des dossiers d'appels d'offres publics, cahiers des charges et évaluation des probabilités de succès sur les marchés publics."
                    }
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? "Success Optimization" : "Optimisation Succès"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 
                      "Strategic optimization of bid responses, technical proposals, and commercial offers for maximum public tender success rates." :
                      "Optimisation stratégique des réponses aux appels d'offres, mémoires techniques et offres commerciales pour maximiser les taux de succès AO."
                    }
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-3">
                    {isEnglish ? "Compliance Assurance" : "Conformité Garantie"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? 
                      "Automated compliance checking with public procurement regulations and tender documentation requirements." :
                      "Vérification automatisée de la conformité aux réglementations des marchés publics et exigences des dossiers d'appels d'offres."
                    }
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions pour tous types d'AO */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isEnglish ? "Complete Public Tender Solutions" : "Solutions Complètes pour tous les Appels d'Offres Publics"}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {isEnglish ? "All Public Tender Types" : "Tous Types d'Appels d'Offres Publics"}
                  </h3>
                  <ul className="space-y-3">
                    {isEnglish ? [
                      "Open public tenders and restricted procedures",
                      "Competitive dialogue and negotiated procedures", 
                      "Framework agreements and dynamic purchasing",
                      "Innovation partnerships and contests",
                      "Below-threshold and simplified procedures",
                      "European and international tenders"
                    ] : [
                      "Appels d'offres ouverts et procédures restreintes",
                      "Dialogue compétitif et procédures négociées",
                      "Accords-cadres et systèmes d'acquisition dynamique",
                      "Partenariats d'innovation et concours",
                      "Procédures adaptées et marchés négociés",
                      "Appels d'offres européens et internationaux"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {isEnglish ? "Key Success Sectors" : "Secteurs Clés de Succès"}
                  </h3>
                  <ul className="space-y-3">
                    {isEnglish ? [
                      "IT services and digital transformation",
                      "Construction and public works",
                      "Consulting and professional services",
                      "Healthcare and medical equipment",
                      "Education and training services",
                      "Environmental and sustainable solutions"
                    ] : [
                      "Services informatiques et transformation numérique",
                      "BTP et travaux publics",
                      "Conseil et services professionnels",
                      "Santé et équipements médicaux",
                      "Éducation et formation",
                      "Solutions environnementales et durables"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Statistiques et Résultats */}
          <section className="py-20 px-4 bg-white/40">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isEnglish ? "Proven Results on Public Tenders" : "Résultats Prouvés sur les Appels d'Offres Publics"}
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">+47%</div>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? "Public tender success rate increase" : "Augmentation taux de succès AO"}
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">93%</div>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? "AI prediction accuracy" : "Précision prédictions IA"}
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">-75%</div>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? "Time saved on tender analysis" : "Temps économisé analyse AO"}
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">€15M+</div>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish ? "Public contracts won by clients" : "Marchés publics gagnés par nos clients"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Avantages concurrentiels */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isEnglish ? "Why Choose Eligibly for Public Tenders?" : "Pourquoi Choisir Eligibly pour vos Appels d'Offres Publics ?"}
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        {isEnglish ? "Rapid Tender Qualification" : "Qualification Rapide des AO"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isEnglish ? 
                          "Analyze public tender viability in under 30 seconds with our AI-powered qualification system." :
                          "Analysez la viabilité des appels d'offres publics en moins de 30 secondes grâce à notre système de qualification IA."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        {isEnglish ? "Strategic Tender Intelligence" : "Intelligence Stratégique AO"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isEnglish ? 
                          "Deep insights into procurement patterns, competitor analysis, and winning strategies for government contracts." :
                          "Analyses approfondies des patterns d'achat public, analyse concurrentielle et stratégies gagnantes pour les marchés publics."
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        {isEnglish ? "Compliance Automation" : "Automatisation Conformité"}
                      </h3>
                      <p className="text-muted-foreground">
                        {isEnglish ? 
                          "Automated checking of tender requirements and public procurement regulations compliance." :
                          "Vérification automatisée des exigences d'appels d'offres et conformité réglementaire des marchés publics."
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-6">
                    {isEnglish ? "Complete Public Tender Ecosystem" : "Écosystème Complet Appels d'Offres Publics"}
                  </h3>
                  <div className="space-y-4">
                    {(isEnglish ? [
                      "Real-time public tender monitoring",
                      "AI-powered bid success prediction",
                      "Automated competitor intelligence",
                      "Proposal optimization recommendations",
                      "Compliance verification tools",
                      "Performance analytics and ROI tracking"
                    ] : [
                      "Veille temps réel appels d'offres publics",
                      "Prédiction IA succès des offres",
                      "Intelligence concurrentielle automatisée",
                      "Recommandations optimisation propositions",
                      "Outils vérification conformité",
                      "Analytics performance et suivi ROI"
                    ]).map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notre Expertise Technique */}
          <section className="py-20 px-4 bg-white/40">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isEnglish ? "Technical Expertise in Public Procurement" : "Expertise Technique en Marchés Publics"}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-xl">
                  <h3 className="font-semibold mb-4">
                    {isEnglish ? "AI-Powered Analysis" : "Analyse IA Avancée"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isEnglish ? 
                      "Machine learning algorithms trained on thousands of public tenders to predict success probability and optimize bid strategies." :
                      "Algorithmes d'apprentissage automatique entraînés sur des milliers d'appels d'offres publics pour prédire les probabilités de succès et optimiser les stratégies d'offre."
                    }
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {isEnglish ? "93% prediction accuracy" : "93% de précision prédictive"}
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <h3 className="font-semibold mb-4">
                    {isEnglish ? "Regulatory Compliance" : "Conformité Réglementaire"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isEnglish ? 
                      "Automated compliance verification with public procurement codes, EU directives, and local regulations for all tender types." :
                      "Vérification automatisée de la conformité aux codes des marchés publics, directives européennes et réglementations locales pour tous types d'AO."
                    }
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {isEnglish ? "100% regulatory coverage" : "100% couverture réglementaire"}
                  </div>
                </div>
                <div className="p-6 bg-white rounded-xl">
                  <h3 className="font-semibold mb-4">
                    {isEnglish ? "Strategic Intelligence" : "Intelligence Stratégique"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {isEnglish ? 
                      "Comprehensive market intelligence, competitor analysis, and procurement trend insights for strategic public tender positioning." :
                      "Intelligence de marché complète, analyse concurrentielle et insights sur les tendances d'achat public pour un positionnement stratégique sur les AO."
                    }
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {isEnglish ? "Real-time market data" : "Données marché temps réel"}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">
                {isEnglish ? 
                  "Ready to Transform Your Public Tender Success?" :
                  "Prêt à Transformer votre Succès sur les Appels d'Offres Publics ?"
                }
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {isEnglish ? 
                  "Join companies who chose Eligibly to optimize their public tender and government contract strategy." :
                  "Rejoignez les entreprises qui ont choisi Eligibly pour optimiser leur stratégie d'appels d'offres publics et marchés publics."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SafeLink to={isEnglish ? "/en/demo" : "/demo"}>
                  <Button size="lg" className="px-8 py-4 h-auto group">
                    {isEnglish ? "Test Eligibly Free" : "Tester Eligibly Gratuitement"}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SafeLink>
                <SafeLink to={isEnglish ? "/en/about" : "/contact"}>
                  <Button variant="outline" size="lg" className="px-8 py-4 h-auto">
                    {isEnglish ? "Contact Us" : "Nous Contacter"}
                  </Button>
                </SafeLink>
              </div>
            </div>
          </section>

          {/* Section mots-clés cachés pour SEO */}
          <section className="sr-only" aria-hidden="true">
            <h2>{isEnglish ? "Public Tender Keywords" : "Mots-clés Appels d'Offres Publics"}</h2>
            <p>
              {isEnglish ? keywordsPublicTenders.join(", ") : keywordsMarchesPublics.join(", ")}
            </p>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AProposEligibly;