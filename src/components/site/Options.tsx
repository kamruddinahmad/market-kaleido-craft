import { useEffect, useRef, useState } from "react";
import { LineChart, Activity, Calculator, History, Table2, Library } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const features = [
  { icon: LineChart, title: "Live Option Chain" },
  { icon: Activity, title: "Interactive Payoff Graphs" },
  { icon: Calculator, title: "Greeks Analysis" },
  { icon: History, title: "Strategy Backtesting" },
  { icon: Table2, title: "Payoff Tables" },
  { icon: Library, title: "30+ Ready-Made Strategies" },
];

type Strategy = {
  label: string;
  maxProfit: string;
  path: string;
  area: string;
  greeks: { k: string; v: string }[];
};

const strategies: Record<string, Strategy> = {
  "iron-condor": {
    label: "Iron Condor",
    maxProfit: "Max Profit ₹4,250",
    path: "M0 160 L80 160 L140 60 L260 60 L320 160 L400 160",
    area: "M0 160 L80 160 L140 60 L260 60 L320 160 L400 160 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "+0.02" },
      { k: "Theta", v: "+18.4" },
      { k: "Vega", v: "−6.1" },
    ],
  },
  straddle: {
    label: "Long Straddle",
    maxProfit: "Max Profit Unlimited",
    path: "M0 20 L200 160 L400 20",
    area: "M0 20 L200 160 L400 20 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "0.00" },
      { k: "Theta", v: "−22.5" },
      { k: "Vega", v: "+14.8" },
    ],
  },
  strangle: {
    label: "Long Strangle",
    maxProfit: "Max Profit Unlimited",
    path: "M0 40 L150 160 L250 160 L400 40",
    area: "M0 40 L150 160 L250 160 L400 40 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "+0.01" },
      { k: "Theta", v: "−18.2" },
      { k: "Vega", v: "+12.4" },
    ],
  },
  "bull-call": {
    label: "Bull Call Spread",
    maxProfit: "Max Profit ₹3,100",
    path: "M0 160 L140 160 L260 60 L400 60",
    area: "M0 160 L140 160 L260 60 L400 60 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "+0.35" },
      { k: "Theta", v: "−4.2" },
      { k: "Vega", v: "+3.6" },
    ],
  },
  "bear-put": {
    label: "Bear Put Spread",
    maxProfit: "Max Profit ₹2,850",
    path: "M0 60 L140 60 L260 160 L400 160",
    area: "M0 60 L140 60 L260 160 L400 160 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "−0.32" },
      { k: "Theta", v: "−3.8" },
      { k: "Vega", v: "+3.2" },
    ],
  },
  butterfly: {
    label: "Butterfly Spread",
    maxProfit: "Max Profit ₹3,750",
    path: "M0 160 L120 160 L200 40 L280 160 L400 160",
    area: "M0 160 L120 160 L200 40 L280 160 L400 160 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "0.00" },
      { k: "Theta", v: "+12.6" },
      { k: "Vega", v: "−8.4" },
    ],
  },
  "covered-call": {
    label: "Covered Call",
    maxProfit: "Max Profit ₹2,400",
    path: "M0 180 L200 80 L400 60",
    area: "M0 180 L200 80 L400 60 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "+0.55" },
      { k: "Theta", v: "+6.8" },
      { k: "Vega", v: "−2.4" },
    ],
  },
  "iron-butterfly": {
    label: "Iron Butterfly",
    maxProfit: "Max Profit ₹5,100",
    path: "M0 160 L160 160 L200 40 L240 160 L400 160",
    area: "M0 160 L160 160 L200 40 L240 160 L400 160 L400 200 L0 200 Z",
    greeks: [
      { k: "Delta", v: "0.00" },
      { k: "Theta", v: "+24.1" },
      { k: "Vega", v: "−9.8" },
    ],
  },
};

export function Options() {
  const [selected, setSelected] = useState<string>("iron-condor");
  const [paused, setPaused] = useState(false);
  const strat = strategies[selected];
  const keys = useRef(Object.keys(strategies));

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setSelected((prev) => {
        const arr = keys.current;
        const i = arr.indexOf(prev);
        return arr[(i + 1) % arr.length];
      });
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="options" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Mock payoff chart */}
          <div
            className="order-2 lg:order-1"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="glass-strong rounded-3xl p-6 glow">
              <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="relative">
                  <span className="pointer-events-none absolute -inset-0.5 rounded-md bg-gradient-to-r from-teal via-cyan to-violet opacity-70 blur-sm animate-pulse-glow" />
                  <Select value={selected} onValueChange={setSelected}>
                    <SelectTrigger className="relative h-9 w-[240px] border-teal/60 bg-background/90 text-xs font-semibold text-foreground shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)] transition-all hover:border-teal focus:ring-2 focus:ring-teal/50">
                      <SelectValue placeholder="Select strategy" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(strategies).map(([k, s]) => (
                        <SelectItem key={k} value={k} className="text-xs">
                          NIFTY • {s.label} • 28 Nov Exp
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <span className="text-teal whitespace-nowrap">{strat.maxProfit}</span>
              </div>

              <svg viewBox="0 0 400 200" className="mt-4 w-full">
                <defs>
                  <linearGradient id="payoffGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[40, 80, 120, 160].map((y) => (
                  <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.08" />
                ))}
                <line x1="0" x2="400" y1="120" y2="120" stroke="oklch(0.72 0.02 255)" strokeOpacity="0.4" strokeDasharray="4 4" />
                <path d={strat.area} fill="url(#payoffGrad)" />
                <path
                  d={strat.path}
                  fill="none"
                  stroke="oklch(0.78 0.14 195)"
                  strokeWidth="2.5"
                />
              </svg>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                {strat.greeks.map((g) => (
                  <div key={g.k} className="rounded-xl border border-border bg-background/40 p-3 text-center">
                    <div className="text-muted-foreground">{g.k}</div>
                    <div className="mt-1 font-semibold">{g.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Options Platform</span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Advanced <span className="text-gradient-brand">Options Trading Platform</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Analyse Risk. Visualize Profit. Trade Smarter.</p>
            <p className="mt-6 text-muted-foreground">
              Explore 30+ ready-made options strategies and make informed trading decisions with greater confidence and clarity.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {features.map(({ icon: Icon, title }) => (
                <div key={title} className="glass flex items-center gap-2 rounded-2xl px-3 py-2.5 text-xs font-medium">
                  <Icon className="size-4 text-teal" /> {title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
