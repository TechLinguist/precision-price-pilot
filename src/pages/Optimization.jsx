import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Upload,
  Download,
  Settings,
  Bell,
  User,
  Filter,
  Play,
  RefreshCw,
  Edit,
  Check,
  X,
  BarChart3
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Optimization = () => {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    warehouse: "",
    category: "",
    weather: "",
    promotionActive: false,
    stockLevel: "",
    demandLevel: "",
    priceChangeLimit: "",
    expiryDays: "",
    competitorPriceCheck: false
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [productsData] = useState([
    {
      id: 1,
      name: "Premium Laptop Pro",
      category: "Electronics",
      basePrice: 1299.99,
      optimizedPrice: 1349.99,
      costPrice: 950.00,
      competitorPrice: 1325.00,
      stockUnits: 45,
      pastSales: 120,
      rawDemandScore: 0.8,
      demandLevel: "High",
      warehouse: "WH001",
      weather: "Sunny",
      daysToExpiry: 365,
      shelfLife: 730,
      promotionActive: false,
      profitImpact: 250.00,
      isEditing: false
    },
    {
      id: 2,
      name: "Wireless Headphones Elite",
      category: "Audio",
      basePrice: 199.99,
      optimizedPrice: 179.99,
      costPrice: 120.00,
      competitorPrice: 185.00,
      stockUnits: 150,
      pastSales: 80,
      rawDemandScore: 0.6,
      demandLevel: "Medium",
      warehouse: "WH002", 
      weather: "Cloudy",
      daysToExpiry: 180,
      shelfLife: 365,
      promotionActive: true,
      profitImpact: -20.00,
      isEditing: false
    },
    {
      id: 3,
      name: "Smart Home Hub",
      category: "Smart Home",
      basePrice: 89.99,
      optimizedPrice: 109.99,
      costPrice: 60.00,
      competitorPrice: 95.00,
      stockUnits: 15,
      pastSales: 45,
      rawDemandScore: 0.9,
      demandLevel: "High",
      warehouse: "WH001",
      weather: "Rainy",
      daysToExpiry: 25,
      shelfLife: 90,
      promotionActive: true,
      profitImpact: 35.00,
      isEditing: false
    }
  ]);

  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      toast({
        title: "Optimization Complete!",
        description: `${productsData.length} products optimized successfully.`,
      });
    }, 2000);
  };

  const handleApplyAll = () => {
    toast({
      title: "Prices Updated",
      description: "All optimized prices have been applied to your products.",
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
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
                <Link to="/optimization" className="text-foreground font-medium border-b-2 border-primary pb-1">
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Price Optimization</h1>
            <p className="text-muted-foreground">Configure filters and optimize your pricing strategy</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline" className="relative">
              <Upload className="w-4 h-4 mr-2" />
              Upload CSV
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </Button>
            <Button variant="outline" onClick={() => toast({ title: "Export Started", description: "Optimization results are being prepared for download." })}>
              <Download className="w-4 h-4 mr-2" />
              Export Results
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Filters Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Optimization Filters
                </CardTitle>
                <CardDescription>
                  Configure parameters for price optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="warehouse">Warehouse / Location</Label>
                  <Select value={filters.warehouse} onValueChange={(value) => setFilters({...filters, warehouse: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select warehouse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Warehouses</SelectItem>
                      <SelectItem value="WH001">Warehouse 001 - NYC</SelectItem>
                      <SelectItem value="WH002">Warehouse 002 - LA</SelectItem>
                      <SelectItem value="WH003">Warehouse 003 - Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Audio">Audio</SelectItem>
                      <SelectItem value="Smart Home">Smart Home</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="weather">Weather Conditions</Label>
                  <Select value={filters.weather} onValueChange={(value) => setFilters({...filters, weather: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Current weather" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Weather</SelectItem>
                      <SelectItem value="Sunny">Sunny</SelectItem>
                      <SelectItem value="Rainy">Rainy</SelectItem>
                      <SelectItem value="Cloudy">Cloudy</SelectItem>
                      <SelectItem value="Snowy">Snowy</SelectItem>
                      <SelectItem value="Humidity">High Humidity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="promotion">Promotion Active</Label>
                  <Switch
                    id="promotion"
                    checked={filters.promotionActive}
                    onCheckedChange={(checked) => setFilters({...filters, promotionActive: checked})}
                  />
                </div>

                <div>
                  <Label htmlFor="stockLevel">Stock Units Filter</Label>
                  <Select value={filters.stockLevel} onValueChange={(value) => setFilters({...filters, stockLevel: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Stock unit range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stock Levels</SelectItem>
                      <SelectItem value="high">High (&gt;100 units)</SelectItem>
                      <SelectItem value="medium">Medium (20-100 units)</SelectItem>
                      <SelectItem value="low">Low (&lt;20 units)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="demandLevel">Demand Score Filter</Label>
                  <Select value={filters.demandLevel} onValueChange={(value) => setFilters({...filters, demandLevel: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Demand score range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Demand Levels</SelectItem>
                      <SelectItem value="high">High (0.7-1.0)</SelectItem>
                      <SelectItem value="medium">Medium (0.4-0.7)</SelectItem>
                      <SelectItem value="low">Low (0.0-0.4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="priceChangeLimit">Max Price Change (%)</Label>
                  <Input
                    id="priceChangeLimit"
                    type="number"
                    placeholder="e.g., 15"
                    value={filters.priceChangeLimit}
                    onChange={(e) => setFilters({...filters, priceChangeLimit: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="expiryDays">Days to Expiry Filter</Label>
                  <Input
                    id="expiryDays"
                    type="number"
                    placeholder="Max days to expiry"
                    value={filters.expiryDays}
                    onChange={(e) => setFilters({...filters, expiryDays: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="competitorCheck">Include Competitor Price</Label>
                  <Switch
                    id="competitorCheck"
                    checked={filters.competitorPriceCheck}
                    onCheckedChange={(checked) => setFilters({...filters, competitorPriceCheck: checked})}
                  />
                </div>

                <Button 
                  onClick={handleOptimize} 
                  className="w-full" 
                  disabled={isOptimizing}
                >
                  {isOptimizing ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Optimize Prices
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Optimization Results</CardTitle>
                    <CardDescription>
                      {productsData.length} products found with recommended price changes
                    </CardDescription>
                  </div>
                  <Button onClick={handleApplyAll} className="bg-gradient-success">
                    Apply All Optimizations
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productsData.map((product) => (
                    <div key={product.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.category} • {product.warehouse}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => toast({ title: "Edit Product", description: `Editing ${product.name}` })}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-success" onClick={() => toast({ title: "Price Applied", description: `Optimized price applied to ${product.name}` })}>
                            <Check className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-danger" onClick={() => toast({ title: "Price Rejected", description: `Optimization rejected for ${product.name}` })}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-5 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Base Price</p>
                          <p className="font-semibold">${product.basePrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Optimized Price</p>
                          <p className="font-semibold text-primary">${product.optimizedPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Stock Units</p>
                          <p className="font-medium">{product.stockUnits} units</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Demand Score</p>
                          <p className="font-medium">{product.rawDemandScore}/1.0</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Days to Expiry</p>
                          <p className={`font-medium ${product.daysToExpiry < 30 ? 'text-warning' : 'text-muted-foreground'}`}>
                            {product.daysToExpiry} days
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-4 gap-4 text-sm mt-3 pt-3 border-t border-border">
                        <div>
                          <p className="text-muted-foreground">Cost Price</p>
                          <p className="font-medium">${product.costPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Competitor Price</p>
                          <p className="font-medium">${product.competitorPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Weather</p>
                          <p className="font-medium">{product.weather}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Profit Impact</p>
                          <p className={`font-semibold ${product.profitImpact > 0 ? 'text-success' : 'text-danger'}`}>
                            {product.profitImpact > 0 ? '+' : ''}${product.profitImpact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-6 p-4 bg-gradient-hero rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-success">+$265</div>
                      <div className="text-sm text-muted-foreground">Total Profit Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Products Optimized</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-warning">8.9%</div>
                      <div className="text-sm text-muted-foreground">Avg Price Increase</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Preview */}
            <Card className="shadow-medium mt-6">
              <CardHeader>
                <CardTitle>Impact Forecast</CardTitle>
                <CardDescription>
                  Projected performance with optimized pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Analytics charts will be integrated with your ML backend
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimization;