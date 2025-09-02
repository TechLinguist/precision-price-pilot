import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  BarChart3, 
  PieChart,
  Settings,
  Bell,
  User,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download
} from "lucide-react";

const Analytics = () => {
  // Mock analytics data
  const analyticsData = {
    totalRevenue: 2450000,
    totalProfit: 520000,
    profitMargin: 21.2,
    avgOptimization: 15.8,
    topPerforming: [
      { product: "Wireless Headphones", revenue: 125000, profit: 28000, margin: 22.4 },
      { product: "Smart Watch", revenue: 98000, profit: 24500, margin: 25.0 },
      { product: "Bluetooth Speaker", revenue: 87000, profit: 19000, margin: 21.8 },
      { product: "Phone Case", revenue: 76000, profit: 18500, margin: 24.3 },
      { product: "Charging Cable", revenue: 65000, profit: 15000, margin: 23.1 }
    ]
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
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link to="/optimization" className="text-muted-foreground hover:text-foreground transition-colors">
                  Optimization
                </Link>
                <Link to="/analytics" className="text-foreground font-medium border-b-2 border-primary pb-1">
                  Analytics
                </Link>
                <Link to="/reports" className="text-muted-foreground hover:text-foreground transition-colors">
                  Reports
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive insights into your pricing optimization performance</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${analyticsData.totalRevenue.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm text-success mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +12.3% from last month
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-success-foreground" />
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
                    ${analyticsData.totalProfit.toLocaleString()}
                  </p>
                  <div className="flex items-center text-sm text-success mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +8.7% from last month
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Profit Margin</p>
                  <p className="text-2xl font-bold text-foreground">
                    {analyticsData.profitMargin}%
                  </p>
                  <div className="flex items-center text-sm text-success mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    +2.1% improvement
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-success-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Optimization</p>
                  <p className="text-2xl font-bold text-foreground">
                    {analyticsData.avgOptimization}%
                  </p>
                  <div className="flex items-center text-sm text-success mt-1">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    Price improvement
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue & Profit Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Revenue & Profit Trends</CardTitle>
              <CardDescription>
                Monthly performance over the last 12 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-hero rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Revenue & Profit Chart
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Interactive charts will be implemented with backend integration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Performing Products */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>
                Best performing products by profit margin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPerforming.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{product.product}</h4>
                      <p className="text-sm text-muted-foreground">
                        Revenue: ${product.revenue.toLocaleString()} | Profit: ${product.profit.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-success">{product.margin}%</p>
                      <p className="text-xs text-muted-foreground">Margin</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Performance */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Category Performance Analysis</CardTitle>
            <CardDescription>
              Breakdown of performance metrics by product category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Category Performance Breakdown
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Detailed analytics charts will be integrated with your ML backend
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;