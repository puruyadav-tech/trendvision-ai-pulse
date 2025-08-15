import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight,
  Brain,
  Zap,
  DollarSign,
  Bitcoin,
  BarChart3
} from "lucide-react";

export default function DashboardPage() {
  const marketData = [
    { symbol: "BTC/USD", price: "$43,827.50", change: "+2.34%", prediction: "Bullish", confidence: 87, trend: "up" },
    { symbol: "ETH/USD", price: "$2,634.80", change: "-0.86%", prediction: "Neutral", confidence: 72, trend: "down" },
    { symbol: "AAPL", price: "$178.25", change: "+1.45%", prediction: "Bullish", confidence: 91, trend: "up" },
    { symbol: "TSLA", price: "$248.92", change: "+3.21%", prediction: "Bullish", confidence: 78, trend: "up" },
    { symbol: "GOLD", price: "$2,034.60", change: "-0.52%", prediction: "Bearish", confidence: 65, trend: "down" },
    { symbol: "SPY", price: "$456.78", change: "+0.97%", prediction: "Bullish", confidence: 83, trend: "up" },
  ];

  const aiInsights = [
    { title: "Market Volatility Alert", description: "Increased volatility detected in crypto markets due to regulatory news.", severity: "warning" },
    { title: "Tech Stocks Momentum", description: "AI predicts continued upward momentum in major tech stocks for next 48 hours.", severity: "positive" },
    { title: "Gold Support Level", description: "Gold approaching key support level at $2,030. Watch for potential reversal.", severity: "info" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Market Dashboard</h1>
          <p className="text-muted-foreground">AI-powered market analysis and predictions</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow mr-2"></div>
            Live Data
          </Badge>
        </div>
      </div>

      {/* TrendPulse Meter */}
      <Card className="glass-effect p-6 border-border/50">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">TrendPulse™ Meter</h2>
            <p className="text-muted-foreground">Real-time market sentiment analysis</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">74%</div>
            <div className="text-sm text-muted-foreground">Overall Bullish</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">86</div>
            <div className="text-sm text-muted-foreground">Fear & Greed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">+12%</div>
            <div className="text-sm text-muted-foreground">Volume Surge</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">92%</div>
            <div className="text-sm text-muted-foreground">AI Confidence</div>
          </div>
        </div>
      </Card>

      {/* Market Predictions */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-effect p-6 border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">AI Market Predictions</h2>
              <Button variant="outline" size="sm">
                <Brain className="w-4 h-4 mr-2" />
                Update Predictions
              </Button>
            </div>
            
            <div className="space-y-4">
              {marketData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card/50 border border-border/30">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      {item.symbol.includes('BTC') ? <Bitcoin className="w-5 h-5 text-white" /> : 
                       item.symbol.includes('USD') ? <DollarSign className="w-5 h-5 text-white" /> :
                       <BarChart3 className="w-5 h-5 text-white" />}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.symbol}</div>
                      <div className="text-sm text-muted-foreground">{item.price}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-1 ${item.trend === 'up' ? 'text-primary' : 'text-destructive'}`}>
                      {item.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      <span className="font-medium">{item.change}</span>
                    </div>
                    
                    <div className="text-right min-w-[100px]">
                      <div className="text-sm font-medium text-foreground">{item.prediction}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Progress value={item.confidence} className="w-16 h-2" />
                        <span className="text-xs text-muted-foreground">{item.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <div>
          <Card className="glass-effect p-6 border-border/50">
            <h2 className="text-xl font-semibold text-foreground mb-6">AI Insights</h2>
            
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="p-4 rounded-lg bg-card/30 border border-border/20">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      insight.severity === 'warning' ? 'bg-destructive/20 text-destructive' :
                      insight.severity === 'positive' ? 'bg-primary/20 text-primary' :
                      'bg-accent/20 text-accent'
                    }`}>
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 text-white">
              View All Insights
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}