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
  Target,
  SlidersHorizontal,
} from "lucide-react";


const highlights = [
  { icon: Rocket, label: "Deploy in one click" },
  { icon: Activity, label: "Monitor in real time" },
  { icon: Repeat, label: "Scale with consistency" },
  { icon: Gauge, label: "Execute with speed" },
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
  { n: "01", title: "Get", desc: "Pick a ready-made strategy or build your own with AI in minutes.", icon: Target },
  { n: "02", title: "Set", desc: "Backtest, paper trade and fine-tune until the numbers look right.", icon: SlidersHorizontal },
  { n: "03", title: "Algo", desc: "Deploy live and let AlgoAI execute trades with smart risk controls.", icon: Rocket },

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

    </div>
  );
}

export function ReadyMade() {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, STRATEGIES.length - 1);
  const offset = page * 296; // card width + gap

  return (
    <section id="strategies" className="relative pt-0 pb-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Steps section (kept) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)]">Get Started</span>
          <h3 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
            <span className="text-gradient-brand">Get. Set. Algo</span>
          </h3>
          <p className="mt-4 text-base text-muted-foreground">Start your automated trading journey</p>
        </div>


        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative">
                <div className="relative rounded-2xl border border-teal/20 bg-background/40 p-8 text-center shadow-[0_4px_30px_-10px_oklch(0.78_0.14_185/0.25)] transition-all hover:-translate-y-1 hover:border-teal/50 hover:shadow-[0_8px_40px_-10px_oklch(0.78_0.14_185/0.4)]">
                  <div className="font-mono text-xs font-semibold tracking-[0.2em] text-teal">STEP {s.n}</div>
                  <div className="mx-auto mt-4 inline-flex size-14 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <Icon className="size-6" />
                  </div>
                  <p className="mt-5 text-base font-bold text-white">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-[-22px] top-1/2 hidden -translate-y-1/2 items-center md:flex">
                    <div className="h-[2px] w-8 bg-teal/50" />
                    <div className="size-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-teal/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ready-Made Strategies — Marketplace style */}
        <div className="relative mt-28 overflow-hidden">


          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* LEFT: heading + features */}
            <div className="order-2">

              <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)]">
                Ready-Made Strategies
              </span>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Ready. <span className="text-gradient-brand">Set.</span> Trade
              </h2>
              <p className="mt-5 max-w-md text-sm text-muted-foreground">
                A curated marketplace of expert-built, battle-tested strategies — ready to deploy in one click.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="glass-strong group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-[0_10px_30px_-10px_oklch(0.78_0.14_185/0.6)]"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-teal/20 text-teal transition-transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="size-4" />
                    </div>
                    <div className="text-sm font-semibold leading-tight">{label}</div>
                  </li>
                ))}
              </ul>

              <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Explore Marketplace <ChevronRight className="size-4" />
              </button>
            </div>

            {/* RIGHT: Marketplace panel */}
            <div className="relative order-1">
              <div className="glass-strong relative rounded-3xl p-5 glow-violet">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">Ready Strategies</h3>
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
