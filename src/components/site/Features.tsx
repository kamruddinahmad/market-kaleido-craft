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
    <div className="relative mx-auto w-[280px] rotate-[-8deg] transition-transform duration-500 hover:rotate-0 sm:w-[300px]">
      {/* Outer titanium rim */}
      <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-700 p-[3px] shadow-[0_40px_90px_-20px_oklch(0.55_0.18_250/0.55),0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Inner titanium bezel */}
        <div className="relative rounded-[2.85rem] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-[6px]">
          {/* Side buttons */}
          <span className="absolute -left-[5px] top-24 h-8 w-[3px] rounded-l-sm bg-gradient-to-r from-zinc-600 to-zinc-400" />
          <span className="absolute -left-[5px] top-36 h-12 w-[3px] rounded-l-sm bg-gradient-to-r from-zinc-600 to-zinc-400" />
          <span className="absolute -left-[5px] top-52 h-12 w-[3px] rounded-l-sm bg-gradient-to-r from-zinc-600 to-zinc-400" />
          <span className="absolute -right-[5px] top-40 h-16 w-[3px] rounded-r-sm bg-gradient-to-l from-zinc-600 to-zinc-400" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2 z-20 flex h-7 w-28 -translate-x-1/2 items-center justify-end gap-1.5 rounded-full bg-black px-3">
              <span className="size-1.5 rounded-full bg-zinc-700" />
              <span className="size-2 rounded-full bg-zinc-800 ring-1 ring-zinc-700/60" />
            </div>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-zinc-500">
            <span>4:22</span>
            <span className="flex gap-1">
              <span>●●●●</span>
            </span>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal">
              <span className="text-[10px] font-bold text-white">A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bell className="size-4 text-zinc-700" />
                <span className="absolute -right-1 -top-1 flex size-3 items-center justify-center rounded-full bg-red-500 text-[7px] font-bold text-white">34</span>
              </div>
              <span className="rounded-full border border-zinc-200 bg-white px-2 py-0.5 text-[9px] font-semibold text-zinc-700">HT11</span>
            </div>
          </div>

          {/* Card content */}
          <div className="m-3 mt-4 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
            <div className="text-[11px] font-semibold">HT11</div>
            <div className="mt-1 flex items-center gap-1 text-base font-bold text-teal">
              <TrendingUp className="size-3.5" />
              ₹3,746.15
              <span className="ml-1 text-[8px] font-medium text-zinc-500">P&L</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[9px]">
              <div className="rounded-lg bg-zinc-100 p-2">
                <div className="text-zinc-500">Open</div>
                <div className="font-bold">1</div>
              </div>
              <div className="rounded-lg bg-zinc-100 p-2">
                <div className="text-zinc-500">Orders</div>
                <div className="font-bold">4</div>
              </div>
            </div>
            <div className="mt-2 text-[9px] text-zinc-500">
              Realized P&L <span className="font-semibold text-zinc-900">₹3,731.00</span>
            </div>
            <button className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg bg-red-500/10 py-2 text-[10px] font-semibold text-red-500">
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
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm">
              <div className="flex size-7 items-center justify-center rounded-lg bg-teal/15 text-teal">
                <Bot className="size-3.5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold">Create / Automate Strategy</div>
                <div className="text-[8px] text-zinc-500">Builder • Backtest • Paper</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Layers className="size-3.5" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold">Use Ready-Made Strategies</div>
                <div className="text-[8px] text-zinc-500">Curated • Backtested • Ready to run</div>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-zinc-200 px-3 py-2.5 text-[8px] text-zinc-500">
            <span className="font-semibold text-teal">Home</span>
            <span>Trade</span>
            <span>Strategy</span>
            <span>Ready</span>
            <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-teal">
              <span className="text-[10px] font-bold text-white">→</span>
            </div>
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
