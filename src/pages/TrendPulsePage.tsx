import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap } from "lucide-react";
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

export default function TrendPulsePage() {
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient mb-2">TrendPulse™ Meter</h1>
          <p className="text-muted-foreground">Real-time market sentiment analysis with advanced charts</p>
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
            <p className="text-muted-foreground">Real-time market sentiment analysis with advanced charts</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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

        {/* Advanced Charts */}
        <Tabs defaultValue="price" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="price">Price & Moving Averages</TabsTrigger>
            <TabsTrigger value="volume">Trading Volume</TabsTrigger>
            <TabsTrigger value="rsi">RSI Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="price" className="mt-6">
            <div className="h-80 w-full">
              <h3 className="font-semibold text-foreground mb-4">AAPL Stock Price with Moving Averages</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line type="monotone" dataKey="close" stroke="hsl(var(--primary))" strokeWidth={2} name="Close Price" />
                  <Line type="monotone" dataKey="ma20" stroke="hsl(var(--accent))" strokeWidth={2} strokeDasharray="5 5" name="20-Day MA" />
                  <Line type="monotone" dataKey="ma50" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeDasharray="10 5" name="50-Day MA" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="volume" className="mt-6">
            <div className="h-80 w-full">
              <h3 className="font-semibold text-foreground mb-4">AAPL Trading Volume</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Bar dataKey="volume" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="rsi" className="mt-6">
            <div className="h-80 w-full">
              <h3 className="font-semibold text-foreground mb-4">AAPL RSI (Relative Strength Index)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rsiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <ReferenceLine y={70} stroke="hsl(var(--destructive))" strokeDasharray="5 5" label="Overbought (70)" />
                  <ReferenceLine y={30} stroke="hsl(var(--primary))" strokeDasharray="5 5" label="Oversold (30)" />
                  <Line type="monotone" dataKey="rsi" stroke="hsl(var(--accent))" strokeWidth={3} name="RSI" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}