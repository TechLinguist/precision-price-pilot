import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  DollarSign, 
  TrendingDown, 
  BarChart3, 
  Upload,
  Download,
  Settings,
  Bell,
  User,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Package
} from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const metrics = {
    totalRevenue: 2450000,
    totalProfit: 520000,
    totalLoss: 35000,
    optimizedProducts: 1247,
    revenueGrowth: 12.3,
    profitGrowth: 8.7,
    lossReduction: -15.2
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Precision</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard" className="text-foreground font-medium border-b-2 border-primary pb-1">
                  Dashboard
                </Link>
                <Link to="/optimization" className="text-muted-foreground hover:text-foreground transition-colors">
                  Optimization
                </Link>
                <Link to="/analytics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Analytics
                </Link>
                <Link to="/reports" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reports
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => alert('Notifications feature coming soon!')}
              >
                <Bell className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => alert('Settings feature coming soon!')}
              >
                <Settings className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => alert('Profile feature coming soon!')}
              >
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's your price optimization overview for today.</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${metrics.totalRevenue.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm text-success mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +{metrics.revenueGrowth}% from last month
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Profit</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${metrics.totalProfit.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm text-success mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +{metrics.profitGrowth}% from last month
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Loss</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${metrics.totalLoss.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm text-red-500 mt-1">
                    <ArrowDownRight className="w-4 h-4 mr-1" />
                    {metrics.lossReduction}% reduction
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Optimized Products</p>
                  <p className="text-2xl font-bold text-foreground">
                    {metrics.optimizedProducts.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Activity className="w-4 h-4 mr-1" />
                    Active optimization
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards and Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Manage your pricing optimization workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Upload className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground">Upload Product Data</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Import your product catalog via CSV to start optimization
                    </p>
                    <Button size="sm" className="w-full">
                      Upload CSV
                    </Button>
                  </div>

                  <Link to="/optimization">
                    <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer h-full">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-success-foreground" />
                        </div>
                        <h3 className="font-semibold text-foreground">Start Optimization</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Apply filters and optimize pricing for maximum profit
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        Optimize Prices
                      </Button>
                    </div>
                  </Link>

                  <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Download className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground">Export Results</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Download optimized pricing data and reports
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Export CSV
                    </Button>
                  </div>

                  <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-success-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground">View Analytics</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Detailed performance metrics and profit analysis
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      View Reports
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest optimization activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Price optimization completed</p>
                      <p className="text-xs text-muted-foreground">247 products updated</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Upload className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">CSV data uploaded</p>
                      <p className="text-xs text-muted-foreground">1,247 products imported</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1h ago</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-warning" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Analytics report generated</p>
                      <p className="text-xs text-muted-foreground">Monthly performance summary</p>
                    </div>
                    <span className="text-xs text-muted-foreground">3h ago</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Profit increase detected</p>
                      <p className="text-xs text-muted-foreground">+$12,450 this week</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1d ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Revenue & Profit Trends</CardTitle>
            <CardDescription>
              Performance overview for the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive charts will be implemented with your ML backend integration
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;