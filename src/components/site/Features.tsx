import { Bot, Layers, LineChart, Link2, Bell, Home, BarChart3, Settings, TrendingUp, Wallet } from "lucide-react";
import iphoneFrame from "@/assets/iphone-frame.png.asset.json";

const benefits = [
  { title: "Build Algo Strategies with AI", icon: Bot },
  { title: "Automate TradingView Strategies", icon: Link2 },
  { title: "Real-time Backtest Engine", icon: LineChart },
  { title: "Ready-made Algo Strategies", icon: Layers },
];

function BenefitCard({ title, Icon }: { title: string; Icon: typeof Bot }) {
  return (
    <div className="glass-strong group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all hover:-translate-y-1 hover:border-teal/50">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-teal/20 text-teal">
        <Icon className="size-4" />
      </div>
      <div className="text-sm font-semibold leading-tight">{title}</div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-[#0b1020] via-[#0a0f1f] to-[#070a16] text-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-2 text-[9px] font-semibold">
        <span>9:41</span>
        <span className="flex items-center gap-1 opacity-80">●●●● 5G</span>
      </div>
      {/* App header */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div>
          <div className="text-[10px] text-white/60">Good morning</div>
          <div className="text-sm font-bold">AlgoAI</div>
        </div>
        <div className="flex size-7 items-center justify-center rounded-full bg-white/10">
          <Bell className="size-3.5" />
        </div>
      </div>

      {/* Portfolio card */}
      <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-primary/40 via-violet/30 to-teal/30 p-3 shadow-lg">
        <div className="text-[9px] uppercase tracking-wider text-white/70">Portfolio</div>
        <div className="mt-1 text-xl font-bold">₹4,82,650</div>
        <div className="mt-0.5 flex items-center gap-1 text-[10px] text-teal">
          <TrendingUp className="size-3" /> +₹12,420 (2.64%)
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-3 mt-3 flex gap-1 rounded-full bg-white/5 p-0.5 text-[10px]">
        <div className="flex-1 rounded-full bg-white/15 py-1 text-center font-semibold">Live</div>
        <div className="flex-1 py-1 text-center text-white/60">Practice</div>
      </div>

      {/* Strategy cards */}
      <div className="mx-3 mt-3 space-y-2">
        {[
          { name: "Nifty SMC Scalper", pnl: "+8.2%", color: "text-teal" },
          { name: "BankNifty Trend", pnl: "+3.1%", color: "text-teal" },
          { name: "Options Hedger", pnl: "-0.7%", color: "text-rose-400" },
        ].map((s) => (
          <div key={s.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <div>
              <div className="text-[11px] font-semibold">{s.name}</div>
              <div className="text-[9px] text-white/50">Active · 1m ago</div>
            </div>
            <div className={`text-[11px] font-bold ${s.color}`}>{s.pnl}</div>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      {/* Bottom nav */}
      <div className="mx-3 mb-4 flex items-center justify-around rounded-2xl border border-white/10 bg-white/5 py-2 backdrop-blur">
        {[Home, BarChart3, Wallet, Settings].map((I, i) => (
          <div key={i} className={`flex size-7 items-center justify-center rounded-lg ${i === 0 ? "bg-gradient-to-br from-primary to-teal text-white" : "text-white/60"}`}>
            <I className="size-3.5" />
          </div>
        ))}
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

        <div className="relative mt-20">
          <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[420px] max-w-4xl -translate-y-1/2 rounded-[3rem] bg-gradient-to-r from-primary/25 via-violet/20 to-teal/25 opacity-50 blur-2xl" />

          <div className="flex flex-col items-center justify-center gap-0 lg:flex-row lg:items-center lg:gap-0">
            {/* Left: benefit cards — pushed toward the phone */}
            <div className="relative z-10 flex w-full max-w-md flex-col gap-4 lg:mr-[-40px]">
              {benefits.map((c) => (
                <BenefitCard key={c.title} title={c.title} Icon={c.icon} />
              ))}
            </div>

            {/* Right: phone frame with inner screen */}
            <div className="relative flex justify-center">
              <div className="relative w-[280px] sm:w-[320px]">
                {/* Inner screen masked to phone shape */}
                <div className="absolute left-[6.5%] top-[2.2%] h-[95.6%] w-[87%] overflow-hidden rounded-[12%/6%]">
                  <PhoneScreen />
                </div>
                <img
                  src={iphoneFrame.url}
                  alt="AlgoAI mobile trading app on iPhone"
                  className="relative w-full drop-shadow-[0_40px_60px_oklch(0.55_0.18_250/0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
