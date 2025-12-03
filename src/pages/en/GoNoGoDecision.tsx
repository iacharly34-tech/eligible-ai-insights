import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { ArticleRecommendations } from "@/components/ArticleRecommendations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafeLink } from "@/components/SafeLink";
import { 
  Target, 
  CheckCircle, 
  XCircle, 
  TrendingUp, 
  Clock, 
  Calculator,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Users,
  FileText,
  Lightbulb
} from "lucide-react";

const GoNoGoDecision = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            {/* Header */}
            <header className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200">
                <Target className="w-4 h-4 mr-2" />
                Respond effectively to tenders
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Optimising Go/No Go: The Decision That Makes the Difference
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The decision to bid or not is crucial. How can you structure your qualification process to maximise your success rate?
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>September 28, 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Every tender represents a significant investment</strong>: writing time, team mobilisation, production costs. Yet many companies dive into responses without proper prior analysis, wasting valuable resources on contracts they have no chance of winning.
              </p>
              
              <blockquote className="border-l-4 border-orange-500 pl-6 my-8 bg-orange-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  &quot;An SME that systematically responds to everything it sees spends on average 70% of its commercial time on tenders it will never win.&quot;
                </p>
                <cite className="text-sm text-gray-600">— Eligibly Study 2025</cite>
              </blockquote>
            </section>

            {/* What is Go/No Go */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">What is Go/No Go?</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Go/No Go is a structured qualification process that allows you to decide objectively and quickly whether an opportunity is worth pursuing. This method, borrowed from large corporations, is essential for SMEs with limited resources.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-green-200 bg-green-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <h3 className="font-bold text-green-800">When to say GO</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• The requirement matches your core business</li>
                      <li>• You have similar references</li>
                      <li>• The deadline is realistic</li>
                      <li>• The estimated price is consistent</li>
                      <li>• You know the buyer</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <XCircle className="w-8 h-8 text-red-600" />
                      <h3 className="font-bold text-red-800">When to say NO GO</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• The specification is vague or biased</li>
                      <li>• You have no similar references</li>
                      <li>• The deadline is too short</li>
                      <li>• The contract seems already awarded</li>
                      <li>• Requirements exceed your capabilities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* The 7 Criteria */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The 7 essential criteria for an effective Go/No Go</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Technical fit</h3>
                        <p className="text-gray-600 text-sm">Does the requirement match your expertise? Do you have the skills and resources to deliver?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">References and experience</h3>
                        <p className="text-gray-600 text-sm">Do you have similar references? Lack of references on a targeted market is often disqualifying.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Buyer knowledge</h3>
                        <p className="text-gray-600 text-sm">Have you worked with this buyer before? Do you know their expectations and history?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Competitive analysis</h3>
                        <p className="text-gray-600 text-sm">Who are your likely competitors? Do you have a distinctive advantage in this market?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">5</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Economic feasibility</h3>
                        <p className="text-gray-600 text-sm">Is the estimated budget consistent with your costs? Is the margin sufficient?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">6</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Deadlines and availability</h3>
                        <p className="text-gray-600 text-sm">Do you have time to prepare a quality response? Are your teams available for execution?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-blue-600">7</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Strategic value</h3>
                        <p className="text-gray-600 text-sm">Does this contract open new doors? Does it strengthen your sector positioning?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Scoring Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Setting up a scoring grid</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                To objectify your decision, assign a score from 1 to 5 for each criterion, then weight according to your strategy. An overall score below 60% should trigger an automatic No Go.
              </p>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Calculator className="w-8 h-8 text-blue-600" />
                    <h3 className="font-bold text-xl">Example weighting</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span>Technical fit</span>
                      <span className="font-bold text-blue-600">25%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span>References</span>
                      <span className="font-bold text-blue-600">20%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span>Buyer knowledge</span>
                      <span className="font-bold text-blue-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span>Competitive analysis</span>
                      <span className="font-bold text-blue-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span>Economic feasibility</span>
                      <span className="font-bold text-blue-600">10%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span>Deadlines</span>
                      <span className="font-bold text-blue-600">10%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Strategic value</span>
                      <span className="font-bold text-blue-600">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Impact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The impact of a structured Go/No Go</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">+35%</div>
                    <p className="text-sm text-gray-600">Improvement in success rate</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">-40%</div>
                    <p className="text-sm text-gray-600">Time saved on responses</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">x2</div>
                    <p className="text-sm text-gray-600">ROI of commercial teams</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How Charly Helps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">How Charly automates your Go/No Go</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Charly AI automatically analyses each tender according to your qualification criteria. In seconds, you get a personalised Go/No Go recommendation.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Instant analysis</h4>
                    <p className="text-sm text-gray-600">Charly reads and analyses the tender documents in seconds to identify key criteria.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Personalised scoring</h4>
                    <p className="text-sm text-gray-600">Configure your qualification criteria and Charly applies your grid automatically.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Reasoned recommendation</h4>
                    <p className="text-sm text-gray-600">Each Go/No Go recommendation comes with a detailed analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Smart alerts</h4>
                    <p className="text-sm text-gray-600">Only be alerted on opportunities that truly match your profile.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Automate your Go/No Go decisions
                  </h2>
                  <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                    Stop wasting time on tenders you cannot win. Let Charly AI qualify your opportunities for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/en/demo">
                      <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                        Book a demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </SafeLink>
                    <SafeLink to="/en/product">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                        Discover Charly
                      </Button>
                    </SafeLink>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Article Recommendations */}
            <ArticleRecommendations currentArticleUrl="/en/go-no-go-decision" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GoNoGoDecision;
