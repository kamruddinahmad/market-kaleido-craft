import { useState } from "react";
import {
  Rocket,
  Activity,
  Repeat,
  Gauge,
  CheckCircle2,
  Play,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Layers,
} from "lucide-react";

const steps = [
  { n: "01", title: "Choose or Create a Strategy", desc: "Browse the library or describe your own setup." },
  { n: "02", title: "Backtest & Validate", desc: "Run it through practice mode with real market data." },
  { n: "03", title: "Monitor Performance", desc: "Track P&L, drawdowns and signals in real time." },
  { n: "04", title: "Go Live in Real Market", desc: "Deploy with one tap — pause or modify anytime." },
];

const highlights = [
  { icon: Rocket, label: "Deploy proven strategies with one-click automation" },
  { icon: Activity, title: "Real-time monitoring & adaptive optimization", label: "Real-time monitoring & adaptive optimization" },
  { icon: Repeat, label: "Designed for disciplined & scalable trading" },
  { icon: Gauge, label: "Ultra-fast, low-latency trade execution" },
  { icon: Shield, label: "Built-in risk controls & safeguards" },
];

const STRATEGIES = [
  {
    name: "Momentum Burst",
    tag: "Intraday",
    instrument: "NIFTY 50",
    cagr: "+42.6%",
    winRate: "74%",
    risk: "Medium",
    drawdown: "8.2%",
    trades: 186,
    icon: TrendingUp,
    color: "text-teal",
  },
  {
    name: "VWAP Reversal",
    tag: "Scalping",
    instrument: "BANKNIFTY",
    cagr: "+36.1%",
    winRate: "68%",
    risk: "High",
    drawdown: "11.4%",
    trades: 248,
    icon: BarChart3,
    color: "text-violet",
  },
  {
    name: "Iron Condor Pro",
    tag: "Options",
    instrument: "NIFTY Weekly",
    cagr: "+28.9%",
    winRate: "82%",
    risk: "Low",
    drawdown: "5.6%",
    trades: 96,
    icon: Layers,
    color: "text-cyan",
  },
];

export function ReadyMade() {
  const [active, setActive] = useState(0);
  const s = STRATEGIES[active];
  const Icon = s.icon;

  return (
    <section id="strategies" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Steps section (kept) */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-brand">Get, Set, Algo</span>
          </h3>
          <p className="mt-4 text-muted-foreground">Start your automated trading journey</p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative">
              <div className="glass relative rounded-3xl p-7 transition-all hover:-translate-y-1 hover:glow">
                <div className="font-mono text-xs tracking-widest text-teal">STEP {s.n}</div>
                <h4 className="mt-3 text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="absolute -right-2 -top-3 rounded-full bg-gradient-to-br from-primary to-teal p-2 text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="h-px w-7 bg-gradient-to-r from-teal/60 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ready-Made Strategies — redesigned 2-col like AI Builder */}
        <div className="relative mt-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/3 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-teal/15 blur-[140px]" />
          </div>

          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Right: copy + highlights (now on the right on desktop) */}
            <div className="order-2 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Ready-Made Strategies
              </span>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Build less. Trade smarter.{" "}
                <span className="text-gradient-brand">Automate instantly.</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Proven strategies. Real backtests. One-click deployment.
              </p>
              <p className="mt-6 text-muted-foreground">
                Skip the building phase. Pick from a curated library of battle-tested strategies,
                validate them on historical data and deploy live — all without writing a single line of code.
              </p>

              <ul className="mt-8 space-y-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="group flex items-center gap-3 text-sm transition-transform hover:translate-x-1"
                  >
                    <span className="inline-flex size-8 items-center justify-center rounded-xl bg-teal/15 text-teal transition-all group-hover:bg-teal/25 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="size-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: interactive strategy panel */}
            <div className="relative">
              <div className="glass-strong relative rounded-3xl p-5 glow">
                <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-400/70" />
                    <span className="size-2.5 rounded-full bg-amber-400/70" />
                    <span className="size-2.5 rounded-full bg-teal/70" />
                  </div>
                  <span className="ml-2 text-xs text-muted-foreground">Strategy Library — Live</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-medium text-teal">
                    <span className="size-1.5 rounded-full bg-teal animate-pulse-glow" /> 50+ Ready
                  </span>
                </div>

                {/* Strategy tabs */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {STRATEGIES.map((st, i) => (
                    <button
                      key={st.name}
                      onClick={() => setActive(i)}
                      className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all ${
                        active === i
                          ? "border-teal/60 bg-teal/15 text-teal"
                          : "border-border/70 bg-background/60 text-muted-foreground hover:border-teal/40 hover:text-teal"
                      }`}
                    >
                      {st.name}
                    </button>
                  ))}
                </div>

                {/* Selected strategy card */}
                <div key={active} className="mt-4 rounded-2xl border border-teal/30 bg-teal/5 p-4 animate-fade-in">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex size-10 items-center justify-center rounded-xl bg-background/60 ${s.color}`}>
                      <Icon className="size-5" />
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{s.name}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {s.instrument} • {s.tag}
                      </div>
                    </div>
                    <span className="rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-semibold text-teal">
                      Verified
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[
                      { k: "Risk Level", v: s.risk },
                      { k: "Max Drawdown", v: s.drawdown },
                      { k: "Total Trades", v: s.trades },
                      { k: "Mode", v: "Auto" },
                    ].map((r, i) => (
                      <div
                        key={r.k}
                        className="flex items-center justify-between rounded-xl bg-background/60 px-3 py-2 text-xs animate-fade-in"
                        style={{ animationDelay: `${i * 60}ms` }}
                      >
                        <span className="text-muted-foreground">{r.k}</span>
                        <span className="font-medium">{r.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="rounded-xl bg-background/60 p-2.5 text-center">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">CAGR</div>
                      <div className="mt-0.5 text-sm font-bold text-teal">{s.cagr}</div>
                    </div>
                    <div className="rounded-xl bg-background/60 p-2.5 text-center">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Win Rate</div>
                      <div className="mt-0.5 text-sm font-bold text-violet">{s.winRate}</div>
                    </div>
                    <div className="rounded-xl bg-background/60 p-2.5 text-center">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Trades</div>
                      <div className="mt-0.5 text-sm font-bold text-cyan">{s.trades}</div>
                    </div>
                  </div>

                  <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                    <Play className="size-3.5" /> Deploy Strategy
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-dashed border-border/60 bg-background/40 p-3 text-[11px] text-muted-foreground">
                  <Zap className="size-3.5 text-teal" />
                  Switch between strategies above to preview their live performance metrics.
                </div>
              </div>

              {/* Floating badges */}
              <div className="glass absolute -left-6 -top-6 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block">
                <div className="text-muted-foreground">Avg CAGR</div>
                <div className="text-lg font-bold text-teal">+35.8%</div>
              </div>
              <div
                className="glass absolute -right-4 bottom-8 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-muted-foreground">Live Users</div>
                <div className="text-lg font-bold text-violet">12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
