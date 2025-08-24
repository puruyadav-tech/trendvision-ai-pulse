import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownRight,
  Brain,
  Zap,
  DollarSign,
  Bitcoin,
  BarChart3,
  Globe,
  AlertTriangle,
  Activity,
  Target
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

export default function DashboardPage() {
  const marketData = [
    { symbol: "BTC/USD", price: "$43,827.50", change: "+2.34%", prediction: "Bullish", confidence: 87, trend: "up" },
    { symbol: "ETH/USD", price: "$2,634.80", change: "-0.86%", prediction: "Neutral", confidence: 72, trend: "down" },
    { symbol: "AAPL", price: "$178.25", change: "+1.45%", prediction: "Bullish", confidence: 91, trend: "up" },
    { symbol: "TSLA", price: "$248.92", change: "+3.21%", prediction: "Bullish", confidence: 78, trend: "up" },
    { symbol: "GOLD", price: "$2,034.60", change: "-0.52%", prediction: "Bearish", confidence: 65, trend: "down" },
    { symbol: "SPY", price: "$456.78", change: "+0.97%", prediction: "Bullish", confidence: 83, trend: "up" },
  ];

  // Sample chart data for AAPL
  const priceData = [
    { date: 'Dec 2024', close: 225, ma20: 228, ma50: 235 },
    { date: 'Jan 2025', close: 240, ma20: 232, ma50: 238 },
    { date: 'Feb 2025', close: 235, ma20: 236, ma50: 240 },
    { date: 'Mar 2025', close: 240, ma20: 238, ma50: 239 },
    { date: 'Apr 2025', close: 210, ma20: 228, ma50: 235 },
    { date: 'May 2025', close: 200, ma20: 218, ma50: 225 },
    { date: 'Jun 2025', close: 205, ma20: 205, ma50: 215 },
    { date: 'Jul 2025', close: 210, ma20: 208, ma50: 212 },
    { date: 'Aug 2025', close: 230, ma20: 215, ma50: 215 }
  ];

  const volumeData = [
    { date: 'Dec 2024', volume: 80 },
    { date: 'Jan 2025', volume: 150 },
    { date: 'Feb 2025', volume: 100 },
    { date: 'Mar 2025', volume: 90 },
    { date: 'Apr 2025', volume: 180 },
    { date: 'May 2025', volume: 160 },
    { date: 'Jun 2025', volume: 120 },
    { date: 'Jul 2025', volume: 110 },
    { date: 'Aug 2025', volume: 130 }
  ];

  const rsiData = [
    { date: 'Dec 2024', rsi: 35 },
    { date: 'Jan 2025', rsi: 70 },
    { date: 'Feb 2025', rsi: 45 },
    { date: 'Mar 2025', rsi: 80 },
    { date: 'Apr 2025', rsi: 25 },
    { date: 'May 2025', rsi: 20 },
    { date: 'Jun 2025', rsi: 40 },
    { date: 'Jul 2025', rsi: 65 },
    { date: 'Aug 2025', rsi: 75 }
  ];

  const sentimentData = [
    { 
      title: "EU Carbon Tax Impact", 
      description: "European Union's new carbon border tax affecting Tesla's European operations, causing -2.3% dip in TSLA stock.", 
      severity: "warning",
      region: "EU",
      impact: "TSLA -2.3%"
    },
    { 
      title: "China Trade Relations", 
      description: "Improved US-China trade discussions boosting Apple's supply chain confidence, contributing to +1.8% AAPL surge.", 
      severity: "positive",
      region: "China",
      impact: "AAPL +1.8%"
    },
    { 
      title: "Fed Interest Rate Decision", 
      description: "Federal Reserve's dovish stance on interest rates driving broad market optimism and crypto rally.", 
      severity: "positive",
      region: "US",
      impact: "BTC +5.2%"
    },
    { 
      title: "UK Energy Crisis", 
      description: "Britain's energy policy uncertainty impacting renewable energy stocks and gold as safe haven.", 
      severity: "warning",
      region: "UK",
      impact: "GOLD +0.8%"
    }
  ];

  const modelInsights = [
    { title: "Market Volatility Alert", description: "Increased volatility detected in crypto markets due to regulatory news.", severity: "warning" },
    { title: "Tech Stocks Momentum", description: "AI predicts continued upward momentum in major tech stocks for next 48 hours.", severity: "positive" },
    { title: "Gold Support Level", description: "Gold approaching key support level at $2,030. Watch for potential reversal.", severity: "info" },
  ];

  const modelMetrics = {
    training: {
      rmse: "1.0004",
      mae: "0.6035", 
      r2: "0.9972",
      sampleSize: "160"
    },
    testing: {
      rmse: "1.5323",
      mae: "1.2218",
      r2: "0.9733",
      sampleSize: "40"
    }
  };

  const featureImportance = [
    { feature: "20-Day Moving Average", importance: 95 },
    { feature: "Trading Volume", importance: 88 },
    { feature: "RSI (14-day)", importance: 82 },
    { feature: "50-Day Moving Average", importance: 78 },
    { feature: "Market Sentiment", importance: 72 },
    { feature: "Economic Indicators", importance: 68 },
    { feature: "Sector Performance", importance: 64 },
    { feature: "Options Flow", importance: 58 },
    { feature: "News Sentiment", importance: 52 },
    { feature: "Analyst Ratings", importance: 45 }
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

        {/* Quick Stats */}
        <div>
          <Card className="glass-effect p-6 border-border/50">
            <h2 className="text-xl font-semibold text-foreground mb-6">Quick Stats</h2>
            
            <div className="space-y-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">$2.4M</div>
                <div className="text-sm text-muted-foreground">Total Portfolio Value</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-primary mb-1">+15.7%</div>
                <div className="text-sm text-muted-foreground">Monthly Return</div>
              </div>
              
              <div>
                <div className="text-2xl font-bold text-accent mb-1">87%</div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 text-white">
              View Full Analysis
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}