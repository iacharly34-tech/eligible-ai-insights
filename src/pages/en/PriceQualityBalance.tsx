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
  Scale, 
  TrendingUp, 
  Calculator, 
  AlertTriangle,
  CheckCircle,
  Target,
  ArrowRight,
  PieChart,
  Lightbulb,
  BarChart3
} from "lucide-react";

const PriceQualityBalance = () => {
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
              <Badge className="mb-6 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border-rose-200">
                <Scale className="w-4 h-4 mr-2" />
                Trends &amp; key data
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Price vs Quality: The Key to a Winning Bid
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Master evaluation criteria to optimise your pricing strategy and maximise your chances of success
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>September 15, 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Public procurement is not just about being the cheapest.</strong> Modern evaluation frameworks balance price against quality, and understanding this balance is crucial to winning contracts. The lowest price often loses to better-quality submissions.
              </p>
              
              <blockquote className="border-l-4 border-rose-500 pl-6 my-8 bg-rose-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  &quot;In 67% of public tenders, the winning bid was not the cheapest—it offered the best value for money.&quot;
                </p>
                <cite className="text-sm text-muted-foreground">— Crown Commercial Service Analysis 2025</cite>
              </blockquote>
            </section>

            {/* Understanding Evaluation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Understanding evaluation criteria</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Most public tenders use a Most Economically Advantageous Tender (MEAT) approach, which combines price and quality scores. Understanding the weighting is essential for your strategy.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <PieChart className="w-10 h-10 text-rose-600 mb-4" />
                    <h3 className="font-bold mb-3">Common weightings</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quality-focused (60/40)</span>
                        <span className="font-medium">60% quality, 40% price</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Balanced (50/50)</span>
                        <span className="font-medium">50% quality, 50% price</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price-focused (30/70)</span>
                        <span className="font-medium">30% quality, 70% price</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Calculator className="w-10 h-10 text-blue-600 mb-4" />
                    <h3 className="font-bold mb-3">Common scoring methods</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><strong>Linear scoring:</strong> Lowest price gets maximum points, others proportionally less</p>
                      <p><strong>Threshold scoring:</strong> Prices within a range get similar scores</p>
                      <p><strong>Relative scoring:</strong> Based on spread between highest and lowest bids</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Strategic Pricing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Strategic pricing approaches</h2>

              <div className="space-y-6">
                <Card className="border-success/20 bg-success/10/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-8 h-8 text-success flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2 text-success">When to compete on quality</h3>
                        <p className="text-sm text-success mb-3">Quality-focused strategy works when:</p>
                        <ul className="space-y-1 text-sm text-success">
                          <li>• Quality weighting is 50% or higher</li>
                          <li>• Complex requirements favour experience</li>
                          <li>• You have unique differentiators</li>
                          <li>• The buyer has had quality issues previously</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-blue-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2 text-blue-800">When to compete on price</h3>
                        <p className="text-sm text-blue-700 mb-3">Price-focused strategy works when:</p>
                        <ul className="space-y-1 text-sm text-blue-700">
                          <li>• Price weighting exceeds 60%</li>
                          <li>• Commodity or standardised services</li>
                          <li>• You have cost advantages</li>
                          <li>• Quality requirements are basic</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Pricing Pitfalls */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Common pricing pitfalls</h2>

              <div className="space-y-4">
                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Racing to the bottom</h3>
                        <p className="text-sm text-red-700">Cutting price at the expense of margin. If you win but cannot deliver profitably, you lose in the long run.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Ignoring the quality score</h3>
                        <p className="text-sm text-red-700">A low-quality score means even the lowest price cannot win. Ensure you meet quality thresholds first.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Pricing in isolation</h3>
                        <p className="text-sm text-red-700">Not researching market rates or competitor pricing. Your price needs to be competitive within the market context.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Unclear pricing structure</h3>
                        <p className="text-sm text-red-700">Hidden costs or unclear breakdowns raise red flags. Be transparent about what is included.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Optimisation Framework */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Price optimisation framework</h2>

              <Card className="border-0 shadow-xl bg-gradient-to-r from-rose-50 to-pink-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-8 h-8 text-rose-600" />
                    <h3 className="font-bold text-xl">5-step pricing process</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-bold">Understand the scoring model</h4>
                        <p className="text-sm text-muted-foreground">Calculate how price and quality combine. Model different scenarios.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-bold">Research the market</h4>
                        <p className="text-sm text-muted-foreground">Analyse previous similar contracts. Understand typical price ranges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-bold">Calculate your floor price</h4>
                        <p className="text-sm text-muted-foreground">Know your minimum acceptable margin. Never go below it.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                      <div>
                        <h4 className="font-bold">Estimate your quality score</h4>
                        <p className="text-sm text-muted-foreground">Be realistic about where your quality response will score. Adjust price accordingly.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                      <div>
                        <h4 className="font-bold">Optimise for overall score</h4>
                        <p className="text-sm text-muted-foreground">Find the price point that maximises your combined price-quality score.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Impact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">The impact of strategic pricing</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-success mx-auto mb-4" />
                    <div className="text-3xl font-bold text-success mb-2">+20%</div>
                    <p className="text-sm text-muted-foreground">Win rate improvement</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">+8%</div>
                    <p className="text-sm text-muted-foreground">Better margins on wins</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">2x</div>
                    <p className="text-sm text-muted-foreground">ROI on bid investments</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How Charly Helps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">How Charly optimises your pricing</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Charly AI analyses evaluation criteria and market data to help you find the optimal price point for each opportunity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Calculator className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Scoring simulation</h4>
                    <p className="text-sm text-muted-foreground">Model different price scenarios and see their impact on your overall score.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Market intelligence</h4>
                    <p className="text-sm text-muted-foreground">Access historical pricing data from similar contracts to benchmark your bid.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Optimal price recommendation</h4>
                    <p className="text-sm text-muted-foreground">Get AI-powered price suggestions based on criteria weighting and competition.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <PieChart className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Criteria analysis</h4>
                    <p className="text-sm text-muted-foreground">Understand evaluation weightings and thresholds to inform your strategy.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Price to win with Charly
                  </h2>
                  <p className="text-lg text-rose-100 mb-8 max-w-2xl mx-auto">
                    Stop guessing on price. Let Charly AI help you find the optimal balance between price and quality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/en/demo">
                      <Button size="lg" className="bg-card text-rose-600 hover:bg-rose-50">
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
            <ArticleRecommendations currentArticleUrl="/en/price-quality-balance" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PriceQualityBalance;
