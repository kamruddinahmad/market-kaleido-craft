import { useState } from "react";
import {
  Rocket,
  Activity,
  Repeat,
  Gauge,
  Search,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  { icon: Rocket, label: "Deploy proven strategies instantly with one-click live automation" },
  { icon: Activity, label: "Real-time monitoring, adaptive optimization & seamless performance tracking" },
  { icon: Repeat, label: "Designed for disciplined, scalable & consistency-driven trading" },
  { icon: Gauge, label: "Ultra-fast, low-latency trade execution for maximum efficiency" },
];

// Pre-generated sparkline points (uptrend & volatile uptrend)
const SPARK_A =
  "0,55 10,52 20,50 30,48 40,49 50,45 60,42 70,40 80,36 90,33 100,30 110,26 120,24 130,20 140,18 150,14 160,12 170,9 180,7 190,5";
const SPARK_B =
  "0,50 10,48 20,52 30,46 40,44 50,48 60,42 70,38 80,42 90,36 100,32 110,36 120,30 130,28 140,32 150,24 160,22 170,18 180,16 190,12";
const SPARK_C =
  "0,48 10,45 20,46 30,42 40,38 50,40 60,35 70,32 80,28 90,30 100,25 110,22 120,18 130,20 140,15 150,12 160,14 170,10 180,8 190,6";

const STRATEGIES = [
  {
    name: "Option Strider PRO -SMC",
    author: "AlgoExpert",
    bestSeller: true,
    return: "+124.35%",
    drawdown: "-6.24%",
    tags: ["Options", "15M", "Swing"],
    spark: SPARK_A,
  },
  {
    name: "Gamma - SMC",
    author: "SmartTrader",
    bestSeller: false,
    return: "+98.67%",
    drawdown: "-5.81%",
    tags: ["Options", "1H", "Intraday"],
    spark: SPARK_B,
  },
  {
    name: "Momentum Burst",
    author: "AlgoLabs",
    bestSeller: false,
    return: "+76.42%",
    drawdown: "-4.92%",
    tags: ["Equity", "5M", "Scalp"],
    spark: SPARK_C,
  },
  {
    name: "Iron Condor Pro",
    author: "QuantHub",
    bestSeller: true,
    return: "+62.18%",
    drawdown: "-3.47%",
    tags: ["Options", "Weekly", "Neutral"],
    spark: SPARK_A,
  },
];

const steps = [
  { n: "01", title: "Choose or Create a Strategy", desc: "Browse the library or describe your own setup." },
  { n: "02", title: "Backtest & Validate", desc: "Run it through practice mode with real market data." },
  { n: "03", title: "Monitor Performance", desc: "Track P&L, drawdowns and signals in real time." },
  { n: "04", title: "Go Live in Real Market", desc: "Deploy with one tap — pause or modify anytime." },
];

function StrategyCard({ s }: { s: (typeof STRATEGIES)[number] }) {
  return (
    <div className="relative shrink-0 w-[280px] rounded-2xl border border-border/60 bg-background/60 p-4 transition-all hover:-translate-y-1 hover:border-teal/50">
      {s.bestSeller && (
        <span className="absolute right-3 top-3 rounded-md bg-teal/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal">
          Best Seller
        </span>
      )}
      <div className="text-sm font-semibold pr-16">{s.name}</div>
      <div className="mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground">
        By: {s.author} <BadgeCheck className="size-3 text-teal" />
      </div>

      {/* Sparkline */}
      <div className="mt-3 h-20 rounded-lg bg-gradient-to-b from-teal/10 to-transparent p-1">
        <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`fill-${s.name}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.14 185)" stopOpacity="0.45" />
              <stop offset="100%" stopColor="oklch(0.78 0.14 185)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`${s.spark} 190,60 0,60`} fill={`url(#fill-${s.name})`} />
          <polyline
            points={s.spark}
            fill="none"
            stroke="oklch(0.78 0.14 185)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <div>
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Return (All Time)</div>
          <div className="text-base font-bold text-teal">{s.return}</div>
        </div>
        <div className="text-right">
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Max Drawdown</div>
          <div className="text-base font-bold text-red-400">{s.drawdown}</div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border/70 bg-background/80 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
          >
            {t.toUpperCase()}
          </span>
        ))}
      </div>

      <button className="mt-3 w-full rounded-lg border border-teal/40 bg-teal/10 py-2 text-[11px] font-semibold text-teal transition-colors hover:bg-teal/20">
        VIEW DETAILS
      </button>
    </div>
  );
}

export function ReadyMade() {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, STRATEGIES.length - 1);
  const offset = page * 296; // card width + gap

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

        {/* Ready-Made Strategies — Marketplace style */}
        <div className="relative mt-28 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-1/4 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-teal/15 blur-[140px]" />
          </div>

          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* LEFT: heading + features */}
            <div className="order-2">

              <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                <ShieldCheck className="size-3.5" /> Ready-Made Strategies
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Build less.<br />
                <span className="text-gradient-brand">Trade smarter.</span><br />
                Automate instantly.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                A curated marketplace of expert-built, battle-tested strategies — ready to deploy in one click.
              </p>

              <ul className="mt-8 space-y-3">
                {highlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="group flex items-start gap-3 text-sm transition-transform hover:translate-x-1"
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal transition-all group-hover:bg-teal/25 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="size-4" />
                    </span>
                    <span className="pt-1">{label}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Explore Marketplace <ChevronRight className="size-4" />
              </button>
            </div>

            {/* RIGHT: Marketplace panel */}
            <div className="relative order-1">
              <div className="glass-strong relative rounded-3xl p-5 glow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">Marketplace</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Expert-built strategies for every market condition.
                    </p>
                  </div>
                  <div className="hidden shrink-0 items-center gap-2 rounded-xl border border-teal/30 bg-teal/5 px-3 py-2 sm:flex">
                    <BadgeCheck className="size-4 text-teal" />
                    <div className="text-[10px] leading-tight">
                      <div className="font-semibold text-teal">Expert Verified</div>
                      <div className="text-muted-foreground">Built by professionals</div>
                    </div>
                  </div>
                </div>

                {/* Search */}
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-border/70 bg-background/60 px-3 py-2">
                  <Search className="size-3.5 text-muted-foreground" />
                  <input
                    placeholder="Search strategies..."
                    className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground/70"
                  />
                </div>

                {/* Filter chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {["All Markets", "All Timeframes", "Sort by: Popular", "Filters"].map((f) => (
                    <span
                      key={f}
                      className="rounded-lg border border-border/70 bg-background/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Carousel */}
                <div className="relative mt-4">
                  <div className="overflow-hidden">
                    <div
                      className="flex gap-4 transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${offset}px)` }}
                    >
                      {STRATEGIES.map((s) => (
                        <StrategyCard key={s.name} s={s} />
                      ))}
                    </div>
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background/90 p-1.5 text-muted-foreground transition-colors hover:border-teal/60 hover:text-teal disabled:opacity-40"
                    disabled={page === 0}
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
                    className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background/90 p-1.5 text-muted-foreground transition-colors hover:border-teal/60 hover:text-teal disabled:opacity-40"
                    disabled={page >= pages - 1}
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* Dots */}
                <div className="mt-4 flex justify-center gap-1.5">
                  {Array.from({ length: pages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        page === i ? "w-6 bg-teal" : "w-1.5 bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
