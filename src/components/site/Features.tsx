import { Bell, Bot, Layers, LineChart, Link2, Play, Power, TrendingUp } from "lucide-react";

const leftCards = [
  { title: "Build Algo Strategies with AI", icon: Bot },
  { title: "Automate TradingView Strategies", icon: Link2 },
];

const rightCards = [
  { title: "Real-time Backtest Engine", icon: LineChart },
  { title: "Ready-made Algo Strategies", icon: Layers },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-[0_30px_80px_-20px_oklch(0.55_0.18_250/0.5)]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground/90" />
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-background to-background/60">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-muted-foreground">
            <span>4:22</span>
            <span className="flex gap-1">
              <span>●●●●</span>
            </span>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal">
              <span className="text-[10px] font-bold text-primary-foreground">A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell className="size-4 text-foreground" />
                <span className="absolute -right-1 -top-1 flex size-3 items-center justify-center rounded-full bg-red-500 text-[7px] font-bold text-white">34</span>
              </div>
              <span className="rounded-full border border-border/70 bg-background/60 px-2 py-0.5 text-[9px] font-semibold">HT11</span>
            </div>
          </div>

          {/* Card content */}
          <div className="m-3 mt-4 rounded-2xl border border-border/60 bg-background/70 p-3">
            <div className="text-[11px] font-semibold">HT11</div>
            <div className="mt-1 flex items-center gap-1 text-base font-bold text-teal">
              <TrendingUp className="size-3.5" />
              ₹3,746.15
              <span className="ml-1 text-[8px] font-medium text-muted-foreground">P&L</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[9px]">
              <div className="rounded-lg bg-background/60 p-2">
                <div className="text-muted-foreground">Open</div>
                <div className="font-bold">1</div>
              </div>
              <div className="rounded-lg bg-background/60 p-2">
                <div className="text-muted-foreground">Orders</div>
                <div className="font-bold">4</div>
              </div>
            </div>
            <div className="mt-2 text-[9px] text-muted-foreground">
              Realized P&L <span className="font-semibold text-foreground">₹3,731.00</span>
            </div>
            <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-500/15 py-2 text-[10px] font-semibold text-red-400">
              <Power className="size-3" /> Stop Algo
            </button>
          </div>

          {/* Live / Practice */}
          <div className="mx-3 grid grid-cols-2 gap-2">
            <div className="flex items-center justify-between rounded-xl border border-teal/30 bg-teal/10 px-3 py-2">
              <span className="flex items-center gap-1 text-[10px] font-semibold text-teal"><TrendingUp className="size-3" /> Live</span>
              <span className="text-[10px] font-bold text-teal">7</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/10 px-3 py-2">
              <span className="flex items-center gap-1 text-[10px] font-semibold text-primary"><Play className="size-3" /> Practice</span>
              <span className="text-[10px] font-bold text-primary">8</span>
            </div>
          </div>

          {/* Action rows */}
          <div className="m-3 space-y-2">
            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 p-2.5">
              <div className="flex size-7 items-center justify-center rounded-lg bg-teal/15 text-teal">
                <Bot className="size-3.5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold">Create / Automate Strategy</div>
                <div className="text-[8px] text-muted-foreground">Builder • Backtest • Paper</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 p-2.5">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Layers className="size-3.5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold">Use Ready-Made Strategies</div>
                <div className="text-[8px] text-muted-foreground">Curated • Backtested • Ready to run</div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-border/60 px-3 py-2.5 text-[8px] text-muted-foreground">
            <span className="font-semibold text-teal">Home</span>
            <span>Trade</span>
            <span>Strategy</span>
            <span>Ready</span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal">
              <span className="text-[10px] font-bold text-primary-foreground">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatCard({ title, Icon, align }: { title: string; Icon: typeof Bot; align: "left" | "right" }) {
  return (
    <div className={`glass-strong group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all hover:-translate-y-1 hover:border-teal/50 ${align === "left" ? "lg:-mr-6" : "lg:-ml-6"}`}>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-teal/20 text-teal">
        <Icon className="size-4" />
      </div>
      <div className="text-sm font-semibold leading-tight">{title}</div>
      {/* Connector arrow to phone */}
      <div
        className={`pointer-events-none absolute top-1/2 hidden h-px w-16 -translate-y-1/2 lg:block ${
          align === "left"
            ? "left-full bg-gradient-to-r from-teal/60 to-transparent"
            : "right-full bg-gradient-to-l from-teal/60 to-transparent"
        }`}
      >
        <span
          className={`absolute top-1/2 size-2 -translate-y-1/2 rotate-45 border-teal/70 ${
            align === "left" ? "right-0 border-r border-t" : "left-0 border-b border-l"
          }`}
        />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative pt-0 pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)]">SMC — The Edge in every market condition</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            One Powerful Ecosystem for <span className="text-gradient-brand">Smarter Trading</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Access Ready-Made Trading Strategies, Build AI-Powered Custom Algos, Explore the Advanced Options Platform,
            Backtest Ideas, and Practice Risk-Free — All in One Intelligent Trading Ecosystem.
          </p>
        </div>

        {/* Phone + floating cards */}
        <div className="relative mt-20">
          {/* Background gradient blob like reference */}
          <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[420px] max-w-4xl -translate-y-1/2 rounded-[3rem] bg-gradient-to-r from-primary/25 via-violet/20 to-teal/25 opacity-50 blur-2xl" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            {/* Left cards */}
            <div className="flex flex-col items-center gap-6 lg:items-end">
              {leftCards.map((c) => (
                <FloatCard key={c.title} title={c.title} Icon={c.icon} align="left" />
              ))}
            </div>

            {/* Phone */}
            <PhoneMockup />

            {/* Right cards */}
            <div className="flex flex-col items-center gap-6 lg:items-start">
              {rightCards.map((c) => (
                <FloatCard key={c.title} title={c.title} Icon={c.icon} align="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
