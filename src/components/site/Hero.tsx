import { PlayCircle, ShieldCheck, Sparkles, Zap, ChevronRight } from "lucide-react";

export function Hero() {
  const tags = [
    { icon: ShieldCheck, label: "Trusted by Traders Across India" },
    { icon: Sparkles, label: "Built Inside SMC ACE 2.0" },
    { icon: Zap, label: "AI-Powered Strategy Engine" },
  ];

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24">
      {/* Orbital background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[900px] w-[900px] max-w-[140vw] max-h-[140vw] opacity-90">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-cyan/30" style={{ transform: "rotate(25deg) scaleY(0.45)" }} />
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute inset-0 rounded-full border border-teal/25" style={{ transform: "rotate(-25deg) scaleY(0.45)" }} />
          </div>
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "70s" }}>
            <div className="absolute inset-0 rounded-full border border-violet/20" style={{ transform: "rotate(70deg) scaleY(0.55)" }} />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { l: "12%", t: "30%" },
          { l: "85%", t: "20%" },
          { l: "78%", t: "70%" },
          { l: "18%", t: "75%" },
          { l: "50%", t: "12%" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute size-1.5 rounded-full bg-teal/70 animate-float"
            style={{ left: p.l, top: p.t, animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Lead capture */}
        <div className="order-2 lg:order-1">
          <div className="glass-strong relative rounded-3xl p-8 glow">
            <div className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-primary to-teal px-3 py-1 text-xs font-semibold tracking-wide text-primary-foreground">
              FREE ACCESS
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              Start Trading Smarter <span className="text-gradient-brand">with AlgoAI</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Zero in the middle. Pure intelligence at the edge.
            </p>

            <div className="mt-6 space-y-3">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Mobile Number
              </label>
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-4 focus-within:border-teal">
                <span className="text-sm text-muted-foreground">+91</span>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-muted-foreground/60"
                />
              </div>
              <button className="w-full rounded-2xl border border-teal/40 bg-teal/10 px-4 py-3 text-sm font-medium text-teal transition-colors hover:bg-teal/20">
                Fetch Client Details
              </button>
            </div>

            <div className="mt-5 flex gap-3">
              <button className="flex-1 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Get Started
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-border px-5 py-3.5 text-sm font-medium transition-colors hover:bg-accent">
                <PlayCircle className="size-4 text-red-400" />
                Product Tour
              </button>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              No coding required • Ready-Made Strategies • AI-powered Building • Unlimited Backtesting •
              Real-Time Practice Trading • Options Strategy Builder with Payoff Graph & Greeks • TradingView Integration
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map(({ icon: Icon, label }) => (
              <span key={label} className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                <Icon className="size-3.5 text-teal" /> {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Headline */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 glass px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-teal animate-pulse-glow" />
            Introducing AlgoAI
          </div>
          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-6xl">
            <span className="text-gradient-hero">The New Intelligence Behind Every Trade</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground md:text-lg">
            Experience the future of automated trading with AI-powered strategy builder, expert-built strategies,
            real-time execution, and intelligent risk management — all inside the SMC ACE 2.0 ecosystem.
          </p>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full border border-border/70 glass px-5 py-2.5 text-xs text-muted-foreground">
            {["Create", "Backtest", "Deploy", "Monitor"].map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                <span className={i === 0 ? "text-foreground font-medium" : ""}>{s}</span>
                {i < 3 && <ChevronRight className="size-3.5 text-teal/70" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative mt-20 overflow-hidden border-y border-border/60 bg-background/40 py-3 backdrop-blur">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap text-xs font-medium text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {[
                ["NIFTY 50", "24,852.30", "+0.84%"],
                ["BANKNIFTY", "55,210.85", "+1.12%"],
                ["SENSEX", "81,432.10", "+0.67%"],
                ["RELIANCE", "2,945.50", "-0.32%"],
                ["TCS", "4,128.75", "+1.45%"],
                ["HDFCBANK", "1,712.20", "+0.98%"],
                ["INFY", "1,895.40", "-0.22%"],
                ["ICICIBANK", "1,256.60", "+1.08%"],
              ].map(([s, p, c]) => (
                <span key={s + k} className="flex items-center gap-2">
                  <span className="text-foreground">{s}</span>
                  <span>{p}</span>
                  <span className={c.startsWith("+") ? "text-teal" : "text-red-400"}>{c}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
