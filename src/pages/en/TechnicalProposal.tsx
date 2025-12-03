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
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Award,
  Layers,
  Target,
  ArrowRight,
  Lightbulb,
  PenTool,
  BarChart3
} from "lucide-react";

const TechnicalProposal = () => {
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
              <Badge className="mb-6 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 border-emerald-200">
                <FileText className="w-4 h-4 mr-2" />
                Respond effectively to tenders
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                The Technical Proposal: Writing to Convince
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Build a solid response that showcases your expertise and differentiates your offer from the competition
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>September 20, 2025</span>
                <span>•</span>
                <span>11 min read</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>The technical proposal is the heart of your bid response.</strong> It is where you demonstrate your understanding of the requirement, your ability to deliver, and the unique value you bring. A poorly structured proposal, even with the best solution, often leads to rejection.
              </p>
              
              <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 bg-emerald-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  &quot;60% of eliminated bids are rejected not for their solution, but for poor presentation of that solution.&quot;
                </p>
                <cite className="text-sm text-gray-600">— CIPS Procurement Research 2025</cite>
              </blockquote>
            </section>

            {/* Structure */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Essential structure of a technical proposal</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-600">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Executive summary</h3>
                        <p className="text-gray-600 text-sm">A compelling one-page overview of your solution and key differentiators. Write this last but put it first.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-600">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Understanding of requirements</h3>
                        <p className="text-gray-600 text-sm">Demonstrate that you truly understand the buyer&apos;s needs, challenges, and objectives. Restate key requirements in your own words.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-600">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Proposed methodology</h3>
                        <p className="text-gray-600 text-sm">Detail your approach, phases, deliverables, and timelines. Be specific and realistic.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-600">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Team and resources</h3>
                        <p className="text-gray-600 text-sm">Present your team&apos;s qualifications, CVs, and the resources you will dedicate to the project.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-600">5</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Relevant experience</h3>
                        <p className="text-gray-600 text-sm">Showcase case studies and references that prove your capability to deliver similar projects.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-emerald-600">6</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Added value</h3>
                        <p className="text-gray-600 text-sm">Highlight what makes your offer unique: innovation, social value, sustainability, risk mitigation.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Success Factors */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Key success factors</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200 bg-green-50/50">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="font-bold mb-3 text-green-800">Do</h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Mirror the specification structure</li>
                      <li>• Use clear, jargon-free language</li>
                      <li>• Include visuals and diagrams</li>
                      <li>• Quantify benefits wherever possible</li>
                      <li>• Proofread multiple times</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <AlertTriangle className="w-8 h-8 text-red-600 mb-4" />
                    <h3 className="font-bold mb-3 text-red-800">Avoid</h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Generic, copy-paste content</li>
                      <li>• Vague claims without evidence</li>
                      <li>• Exceeding page limits</li>
                      <li>• Missing mandatory requirements</li>
                      <li>• Last-minute submissions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Writing Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Professional writing tips</h2>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-50 to-teal-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <PenTool className="w-8 h-8 text-emerald-600" />
                    <h3 className="font-bold text-xl">Writing principles</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-2">Clarity first</h4>
                      <p className="text-sm text-gray-600">Short sentences. Active voice. One idea per paragraph. Evaluators read dozens of bids—make yours easy to score.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Evidence-based</h4>
                      <p className="text-sm text-gray-600">Every claim should be supported. Use numbers, dates, client names, and measurable outcomes.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Buyer-focused</h4>
                      <p className="text-sm text-gray-600">Write from the buyer&apos;s perspective. Focus on their benefits, not your features.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Compliant structure</h4>
                      <p className="text-sm text-gray-600">Follow the exact structure requested. Number your sections to match the evaluation criteria.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* References Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Presenting your references effectively</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                References are often the most scrutinised part of your proposal. Structure each case study to maximise impact:
              </p>

              <div className="space-y-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Layers className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Context</h3>
                        <p className="text-sm text-gray-600">Describe the client, their challenge, and why they needed your services.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Approach</h3>
                        <p className="text-sm text-gray-600">Explain your methodology and what made your approach effective.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <BarChart3 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Results</h3>
                        <p className="text-sm text-gray-600">Quantify the outcomes: savings, efficiency gains, satisfaction scores.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Relevance</h3>
                        <p className="text-sm text-gray-600">Explicitly link to the current tender requirements. Explain why this experience matters.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How Charly Helps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">How Charly accelerates your proposal writing</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Charly AI analyses tender documents and helps you structure winning responses faster and more effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Requirement extraction</h4>
                    <p className="text-sm text-gray-600">Charly identifies and organises all requirements from complex tender documents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Compliance checking</h4>
                    <p className="text-sm text-gray-600">Ensure you have addressed every mandatory and scored requirement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <PenTool className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Writing assistance</h4>
                    <p className="text-sm text-gray-600">Get suggestions to strengthen your responses and improve clarity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Reference matching</h4>
                    <p className="text-sm text-gray-600">Find the most relevant case studies from your reference library.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Write winning proposals with Charly
                  </h2>
                  <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                    Stop spending days on proposal writing. Let Charly AI help you create compelling, compliant responses faster.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/en/demo">
                      <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
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
            <ArticleRecommendations currentArticleUrl="/en/technical-proposal" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TechnicalProposal;
