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
  Eye, 
  Search, 
  Bell, 
  Target,
  Clock,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Globe,
  Database,
  Filter,
  Zap
} from "lucide-react";

const StrategicWatch = () => {
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
              <Badge className="mb-6 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200">
                <Eye className="w-4 h-4 mr-2" />
                Respond effectively to tenders
              </Badge>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
                Strategic Watch: Your First Step Towards Success
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                How to structure effective market intelligence on public tenders so you never miss an opportunity again
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>October 1, 2025</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>In the world of public procurement, information is power.</strong> Companies that win the most contracts are not necessarily the largest or cheapest—they are those that detect opportunities first and prepare their responses in advance.
              </p>
              
              <blockquote className="border-l-4 border-cyan-500 pl-6 my-8 bg-cyan-50/50 py-4 rounded-r-lg">
                <p className="text-lg font-medium text-foreground mb-2">
                  &quot;80% of public contracts are won by companies that identified the opportunity more than 30 days before publication.&quot;
                </p>
                <cite className="text-sm text-muted-foreground">— Eligibly Study 2025</cite>
              </blockquote>
            </section>

            {/* Why Strategic Watch */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Why is strategic watch essential?</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Timing</h3>
                    <p className="text-sm text-muted-foreground">Average response time is 21 days. Without a watch, you discover tenders too late.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Target className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Targeting</h3>
                    <p className="text-sm text-muted-foreground">Focus your efforts on opportunities that really match your profile.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Anticipation</h3>
                    <p className="text-sm text-muted-foreground">Detect early signals and prepare your positioning before publication.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Essential Sources */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Essential sources to monitor</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Official platforms</h3>
                        <p className="text-muted-foreground text-sm mb-3">Primary sources where tenders are published.</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• TED (European Union)</li>
                          <li>• National government portals</li>
                          <li>• Local authority platforms</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Bell className="w-8 h-8 text-amber-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Anticipation sources</h3>
                        <p className="text-muted-foreground text-sm mb-3">Detect opportunities before official publication.</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Prior information notices</li>
                          <li>• Investment programmes</li>
                          <li>• Local press and announcements</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Database className="w-8 h-8 text-success flex-shrink-0" />
                      <div>
                        <h3 className="font-bold mb-2">Market data</h3>
                        <p className="text-muted-foreground text-sm mb-3">Enrich your analysis with historical data.</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Contract award notices</li>
                          <li>• Buyer purchasing history</li>
                          <li>• Prices and trends</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Structuring Watch */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Structuring your strategic watch</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                An effective watch is based on clearly defined criteria. Here are the essential filters to configure:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20 bg-blue-50/50">
                  <CardContent className="p-6">
                    <Filter className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold mb-3 text-blue-800">Geographic filters</h3>
                    <ul className="text-sm text-primary space-y-2">
                      <li>• Regions of activity</li>
                      <li>• Maximum intervention distance</li>
                      <li>• Remote work capability</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-success/20 bg-success/10/50">
                  <CardContent className="p-6">
                    <Target className="w-8 h-8 text-success mb-4" />
                    <h3 className="font-bold mb-3 text-success">Sector filters</h3>
                    <ul className="text-sm text-success space-y-2">
                      <li>• CPV codes</li>
                      <li>• Type of service/supply</li>
                      <li>• Technical specialities</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50/50">
                  <CardContent className="p-6">
                    <Database className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="font-bold mb-3 text-purple-800">Volume filters</h3>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li>• Minimum and maximum amounts</li>
                      <li>• Contract duration</li>
                      <li>• Multi-year framework agreements</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-amber-200 bg-amber-50/50">
                  <CardContent className="p-6">
                    <Search className="w-8 h-8 text-amber-600 mb-4" />
                    <h3 className="font-bold mb-3 text-amber-800">Buyer type filters</h3>
                    <ul className="text-sm text-amber-700 space-y-2">
                      <li>• Local authorities</li>
                      <li>• Public agencies</li>
                      <li>• Government ministries</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Common Errors */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Common watch errors to avoid</h2>

              <div className="space-y-4">
                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Too broad watch</h3>
                        <p className="text-sm text-red-700">Monitoring everything leads to drowning in irrelevant information. Focus on your key segments.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Single-source reliance</h3>
                        <p className="text-sm text-red-700">Relying on one source means missing opportunities published elsewhere.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-red-800">Irregular frequency</h3>
                        <p className="text-sm text-red-700">Checking watch once a week is not enough. Some tenders have very short deadlines.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* How Charly Helps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">How Charly automates your strategic watch</h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Charly AI monitors thousands of sources 24/7 and instantly alerts you to opportunities matching your criteria. No more lost time on manual monitoring.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Instant detection</h4>
                    <p className="text-sm text-muted-foreground">Receive alerts within minutes of a relevant tender being published.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Automatic analysis</h4>
                    <p className="text-sm text-muted-foreground">Each opportunity is pre-analysed: eligibility, key deadlines, Go/No Go recommendation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Customised filters</h4>
                    <p className="text-sm text-muted-foreground">Configure your criteria once and Charly applies them to all sources.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Anticipation alerts</h4>
                    <p className="text-sm text-muted-foreground">Be notified of early signals before official tender publication.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Let Charly handle your strategic watch
                  </h2>
                  <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
                    Stop wasting hours on manual monitoring. Try Charly AI and receive only the opportunities that match your profile.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <SafeLink to="/en/demo">
                      <Button size="lg" className="bg-card text-cyan-700 hover:bg-cyan-50">
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
            <ArticleRecommendations currentArticleUrl="/en/strategic-watch" />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StrategicWatch;
