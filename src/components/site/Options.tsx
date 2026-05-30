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
  points: [number, number][];
  greeks: { k: string; v: string }[];
};

// viewBox 0 0 400 200, zero line at y=100. y<100 = profit, y>100 = loss.
const strategies: Record<string, Strategy> = {
  "bull-call": {
    label: "Bull Call Spread",
    maxProfit: "Max Profit ₹8,622",
    points: [[0, 160], [140, 160], [260, 40], [400, 40]],
    greeks: [
      { k: "Delta", v: "+0.35" },
      { k: "Theta", v: "−4.2" },
      { k: "Vega", v: "+3.6" },
    ],
  },
  "iron-butterfly": {
    label: "Long Iron Butterfly",
    maxProfit: "Max Profit ₹8,089.25",
    points: [[0, 160], [80, 160], [140, 100], [200, 40], [260, 100], [320, 160], [400, 160]],
    greeks: [
      { k: "Delta", v: "0.00" },
      { k: "Theta", v: "−6.8" },
      { k: "Vega", v: "+9.2" },
    ],
  },
  "bear-put": {
    label: "Bear Put Spread",
    maxProfit: "Max Profit ₹12,402",
    points: [[0, 40], [140, 40], [260, 160], [400, 160]],
    greeks: [
      { k: "Delta", v: "−0.32" },
      { k: "Theta", v: "−3.8" },
      { k: "Vega", v: "+3.2" },
    ],
  },
  "iron-condor": {
    label: "Long Iron Condor",
    maxProfit: "Max Profit ₹37,332",
    points: [[0, 160], [60, 160], [140, 40], [260, 40], [340, 160], [400, 160]],
    greeks: [
      { k: "Delta", v: "+0.02" },
      { k: "Theta", v: "−12.4" },
      { k: "Vega", v: "+8.6" },
    ],
  },
  "short-straddle": {
    label: "Short Straddle",
    maxProfit: "Max Profit ₹20,884",
    points: [[0, 185], [200, 40], [400, 185]],
    greeks: [
      { k: "Delta", v: "0.00" },
      { k: "Theta", v: "+22.5" },
      { k: "Vega", v: "−14.8" },
    ],
  },
};

const toLinePath = (pts: [number, number][]) =>
  pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]} ${p[1]}`).join(" ");

const toClosedPath = (pts: [number, number][]) =>
  `${toLinePath(pts)} L${pts[pts.length - 1][0]} 100 L${pts[0][0]} 100 Z`;

export function Options() {
  const [selected, setSelected] = useState<string>("bull-call");
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
