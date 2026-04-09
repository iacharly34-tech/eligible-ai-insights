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
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  FileSearch,
  Target,
  ArrowRight,
  Lightbulb,
  MessageSquare,
  RefreshCw
} from "lucide-react";

const TenderFeedback = () => {
  return (
    <>
      <SEOHead />
      <StructuredData />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          <article className="container mx-auto max-w-4xl px-4">
            {/* Header */}
            <header className="mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border-violet-200">
                <BarChart3 className="w-4 h-4 mr-2" />
                Trends &amp; key data
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Analysing Award Feedback: Turning Failure into Success
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                How to use bid evaluation reports to improve your future applications and increase your win rate
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>September 18, 2025</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Every unsuccessful bid contains valuable lessons.</strong> The feedback provided by buyers after contract award is a goldmine of information that most companies ignore. Those who systematically analyse this feedback dramatically improve their future performance.
              </p>
              
              <blockquote className="border-l-4 border-violet-500 pl-6 my-8 bg-violet-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  &quot;Companies that systematically debrief after every bid improve their win rate by 25% within 12 months.&quot;
                </p>
                <cite className="text-sm text-muted-foreground">— Shipley Associates Research</cite>
              </blockquote>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Your right to feedback</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                In public procurement, you have legal rights to receive feedback after contract award. Understanding these rights is the first step to improving.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-success/20 bg-success/10/50">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-success mb-4" />
                    <h3 className="font-bold mb-3 text-success">What you can request</h3>
                    <ul className="space-y-2 text-sm text-success">
                      <li>• Your scores for each criterion</li>
                      <li>• Reasons for rejection</li>
                      <li>• Characteristics of the winning bid</li>
                      <li>• Relative advantages of the winner</li>
                      <li>• Debrief meeting</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-blue-50/50">
                  <CardContent className="p-6">
                    <FileSearch className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="font-bold mb-3 text-blue-800">How to request</h3>
                    <ul className="space-y-2 text-sm text-primary">
                      <li>• Request within standstill period</li>
                      <li>• Put request in writing</li>
                      <li>• Be specific about what you need</li>
                      <li>• Request a formal debrief meeting</li>
                      <li>• Follow up if no response</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* What to Analyse */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Key areas to analyse</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-violet-600">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Score breakdown</h3>
                        <p className="text-muted-foreground text-sm">Compare your scores across criteria. Identify where you lost the most points and prioritise improvements there.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-violet-600">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Evaluator comments</h3>
                        <p className="text-muted-foreground text-sm">Read between the lines. Comments reveal what evaluators value and what was missing from your response.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-violet-600">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Winner characteristics</h3>
                        <p className="text-muted-foreground text-sm">Understand what made the winning bid stand out. This reveals the buyer&apos;s true priorities.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-violet-600">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Price analysis</h3>
                        <p className="text-muted-foreground text-sm">If disclosed, understand how your pricing compared. Were you too high, too low, or was it the quality scores?</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Common Patterns */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Common failure patterns</h2>

              <div className="space-y-4">
                <Card className="border-amber-200 bg-amber-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-amber-800">Weak evidence</h3>
                        <p className="text-sm text-amber-700">Claims without supporting proof. Solution: Always include specific examples, numbers, and verifiable references.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-amber-800">Generic responses</h3>
                        <p className="text-sm text-amber-700">One-size-fits-all content. Solution: Tailor every response to the specific buyer and their stated needs.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-amber-800">Poor structure</h3>
                        <p className="text-sm text-amber-700">Difficult to evaluate. Solution: Follow the specification structure exactly and make scoring easy.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-amber-800">Pricing strategy</h3>
                        <p className="text-sm text-amber-700">Price out of market or quality sacrifice. Solution: Research typical prices and find the right quality-price balance.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Building a Feedback System */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Building a feedback system</h2>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-violet-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <RefreshCw className="w-8 h-8 text-violet-600" />
                    <h3 className="font-bold text-xl">Continuous improvement cycle</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-bold">Collect</h4>
                        <p className="text-sm text-muted-foreground">Request feedback for every bid—wins and losses. Store in a central database.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-bold">Analyse</h4>
                        <p className="text-sm text-muted-foreground">Look for patterns across multiple bids. What issues recur? What strengths are consistently recognised?</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-bold">Act</h4>
                        <p className="text-sm text-muted-foreground">Create specific action plans. Update templates, processes, and training based on findings.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                      <div>
                        <h4 className="font-bold">Measure</h4>
                        <p className="text-sm text-muted-foreground">Track win rates and scores over time. Verify that changes are having the desired effect.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Impact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">The impact of systematic feedback analysis</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                    <div className="text-3xl font-bold text-success mb-2">+25%</div>
                    <p className="text-sm text-muted-foreground">Win rate improvement</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">+15%</div>
                    <p className="text-sm text-muted-foreground">Average quality scores</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">Better</div>
                    <p className="text-sm text-muted-foreground">Buyer relationships</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How Charly Helps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">How Charly helps you learn from feedback</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Charly AI tracks all your bid outcomes and helps you identify patterns and improvement opportunities across your portfolio.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Pattern recognition</h4>
                    <p className="text-sm text-muted-foreground">AI identifies recurring issues across your bids that you might miss.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Performance tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor win rates, scores, and trends over time with visual dashboards.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Improvement suggestions</h4>
                    <p className="text-sm text-muted-foreground">Get AI-powered recommendations based on your feedback history.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Continuous learning</h4>
                    <p className="text-sm text-muted-foreground">Charly learns from your wins and losses to give better future recommendations.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-violet-600 to-purple-700 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Turn every bid into a learning opportunity
                  </h2>
                  <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">
                    Stop repeating the same mistakes. Let Charly AI help you build a continuous improvement system.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/en/demo">
                      <Button size="lg" className="bg-card text-violet-700 hover:bg-violet-50">
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
            <ArticleRecommendations currentArticleUrl="/en/tender-feedback" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TenderFeedback;
