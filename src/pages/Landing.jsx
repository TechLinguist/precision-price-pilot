import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Shield, 
  Upload,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Precision</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Optimize Prices in
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Real-Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your pricing strategy with AI-powered optimization. Maximize profits, 
              reduce losses, and stay competitive with dynamic pricing that adapts to market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/signup">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/login">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Price Optimization
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement intelligent pricing strategies and boost profitability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Optimization</h3>
                <p className="text-muted-foreground">
                  Dynamic pricing algorithms that adjust prices instantly based on market conditions, 
                  inventory levels, and demand patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive dashboards showing profit, loss, revenue trends with 
                  detailed charts and performance metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CSV Integration</h3>
                <p className="text-muted-foreground">
                  Easy data import/export with CSV support. Upload your product catalog 
                  and download optimized pricing recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                <p className="text-muted-foreground">
                  Filter by warehouse, inventory type, category, promotions, stock levels, 
                  and demand to create targeted pricing strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Individual Control</h3>
                <p className="text-muted-foreground">
                  Edit individual products or apply bulk optimizations. 
                  Full control over pricing decisions with intelligent recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profit Maximization</h3>
                <p className="text-muted-foreground">
                  AI-powered algorithms designed to maximize your profit margins 
                  while maintaining competitive positioning in the market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Precision for Your Business?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Increase Revenue by 15-30%</h4>
                    <p className="text-muted-foreground">Optimize pricing strategies to maximize profit margins</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Reduce Manual Work</h4>
                    <p className="text-muted-foreground">Automate pricing decisions with intelligent algorithms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Stay Competitive</h4>
                    <p className="text-muted-foreground">React to market changes in real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Data-Driven Insights</h4>
                    <p className="text-muted-foreground">Make informed decisions with comprehensive analytics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-large">
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">$2.3M+</div>
                <p className="text-muted-foreground mb-6">Additional revenue generated for our clients</p>
                <div className="text-2xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground mb-6">Average profit increase within 90 days</p>
                <div className="text-2xl font-bold text-warning mb-2">99.9%</div>
                <p className="text-muted-foreground">System uptime with real-time processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Pricing Strategy?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of businesses already maximizing profits with Precision
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link to="/signup">
              Start Your Free Trial Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Precision</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Precision. All rights reserved. Dynamic Price Optimization Platform.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;