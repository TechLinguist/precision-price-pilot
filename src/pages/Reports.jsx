import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  TrendingUp, 
  FileText, 
  Download,
  Settings,
  Bell,
  User,
  Calendar,
  Filter,
  Eye,
  Share,
  Clock
} from "lucide-react";

const Reports = () => {
  const { toast } = useToast();

  const handleFilterReports = () => {
    toast({
      title: "Filter Reports",
      description: "Advanced report filtering will be available with backend integration.",
    });
  };

  const handleGenerateReport = () => {
    toast({
      title: "Report Generation Started",
      description: "Your custom report is being generated and will be ready shortly.",
    });
  };

  const handleViewReport = (reportName) => {
    toast({
      title: "Opening Report",
      description: `Opening ${reportName} in viewer.`,
    });
  };

  const handleShareReport = (reportName) => {
    toast({
      title: "Share Report",
      description: `Sharing options for ${reportName} will be available with backend integration.`,
    });
  };

  const handleDownloadReport = (reportName) => {
    toast({
      title: "Download Started",
      description: `${reportName} is being prepared for download.`,
    });
  };

  const handleGenerateTemplate = (templateType) => {
    toast({
      title: "Generating Report",
      description: `${templateType} is being generated with current data.`,
    });
  };

  // Mock reports data
  const reports = [
    {
      id: 1,
      name: "Monthly Performance Report",
      type: "Performance",
      date: "2024-01-15",
      status: "Ready",
      description: "Comprehensive analysis of pricing optimization performance for January 2024"
    },
    {
      id: 2,
      name: "Product Category Analysis",
      type: "Analysis",
      date: "2024-01-10",
      status: "Ready",
      description: "Detailed breakdown of performance metrics by product categories"
    },
    {
      id: 3,
      name: "Profit Optimization Summary",
      type: "Summary",
      date: "2024-01-08",
      status: "Ready",
      description: "Summary of profit improvements and optimization strategies implemented"
    },
    {
      id: 4,
      name: "Weekly Trend Analysis",
      type: "Trend",
      date: "2024-01-05",
      status: "Processing",
      description: "Weekly trends in pricing optimization and market response"
    },
    {
      id: 5,
      name: "Inventory Impact Report",
      type: "Inventory",
      date: "2024-01-03",
      status: "Ready",
      description: "Analysis of how inventory levels affect pricing optimization effectiveness"
    },
    {
      id: 6,
      name: "Custom Analytics Report",
      type: "Custom",
      date: "2024-01-01",
      status: "Draft",
      description: "Customized report based on specific business requirements and KPIs"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Ready": return "text-success bg-success/10";
      case "Processing": return "text-warning bg-warning/10";
      case "Draft": return "text-muted-foreground bg-muted/50";
      default: return "text-muted-foreground bg-muted/50";
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
                <Link to="/optimization" className="text-muted-foreground hover:text-foreground transition-colors">
                  Optimization
                </Link>
                <Link to="/analytics" className="text-muted-foreground hover:text-foreground transition-colors">
                  Analytics
                </Link>
                <Link to="/reports" className="text-foreground font-medium border-b-2 border-primary pb-1">
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports Center</h1>
            <p className="text-muted-foreground">Generate, view, and manage your pricing optimization reports</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={handleFilterReports}>
              <Filter className="w-4 h-4 mr-2" />
              Filter Reports
            </Button>
            <Button onClick={handleGenerateReport}>
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Ready to Download</p>
                  <p className="text-2xl font-bold text-foreground">18</p>
                </div>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-success-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Processing</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-success-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <Card className="shadow-medium mb-8">
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>
              View, download, and manage your pricing optimization reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-medium transition-all">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{report.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Type: {report.type}</span>
                      <span>•</span>
                      <span>Generated: {report.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleViewReport(report.name)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleShareReport(report.name)}>
                      <Share className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" disabled={report.status !== "Ready"} onClick={() => handleDownloadReport(report.name)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Report Templates */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Report Templates</CardTitle>
            <CardDescription>
              Quick access to commonly used report templates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Performance Report</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Monthly performance metrics and optimization results
                </p>
                <Button size="sm" className="w-full" onClick={() => handleGenerateTemplate("Performance Report")}>
                  Generate Report
                </Button>
              </div>

              <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-success-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Profit Analysis</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Detailed profit analysis with optimization recommendations
                </p>
                <Button size="sm" variant="outline" className="w-full" onClick={() => handleGenerateTemplate("Profit Analysis")}>
                  Generate Report
                </Button>
              </div>

              <div className="p-4 border border-border rounded-lg hover:shadow-medium transition-all cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">Custom Report</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Create a custom report with specific metrics and filters
                </p>
                <Button size="sm" variant="outline" className="w-full" onClick={() => handleGenerateTemplate("Custom Report")}>
                  Create Custom
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;