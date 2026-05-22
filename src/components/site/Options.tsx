import { LineChart, Activity, Calculator, History, Table2, Library } from "lucide-react";

const features = [
  { icon: LineChart, title: "Live Option Chain" },
  { icon: Activity, title: "Interactive Payoff Graphs" },
  { icon: Calculator, title: "Greeks Analysis" },
  { icon: History, title: "Strategy Backtesting" },
  { icon: Table2, title: "Payoff Tables" },
  { icon: Library, title: "30+ Ready-Made Strategies" },
];

export function Options() {
  return (
    <section id="options" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* Mock payoff chart */}
          <div className="order-2 lg:order-1">
            <div className="glass-strong rounded-3xl p-6 glow">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>NIFTY • Iron Condor • 28 Nov Exp</span>
                <span className="text-teal">Max Profit ₹4,250</span>
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
                <path
                  d="M0 160 L80 160 L140 60 L260 60 L320 160 L400 160 L400 200 L0 200 Z"
                  fill="url(#payoffGrad)"
                />
                <path
                  d="M0 160 L80 160 L140 60 L260 60 L320 160 L400 160"
                  fill="none"
                  stroke="oklch(0.78 0.14 195)"
                  strokeWidth="2.5"
                />
                <circle cx="200" cy="60" r="4" fill="oklch(0.78 0.14 195)" />
              </svg>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                {[
                  { k: "Delta", v: "+0.02" },
                  { k: "Theta", v: "+18.4" },
                  { k: "Vega", v: "−6.1" },
                ].map((g) => (
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
              Designed for modern options traders, AlgoAI's Options Platform combines powerful analytics with an intuitive trading experience.
              Access live option chains, interactive payoff graphs, payoff tables, real-time Greeks analysis, and advanced backtesting tools —
              all within a single platform.
            </p>
            <p className="mt-3 text-muted-foreground">
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
