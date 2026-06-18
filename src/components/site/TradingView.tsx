import tradingViewFlow from "@/assets/tradingview-flow.png.asset.json";
import { Zap, LineChart, BellRing, Gauge } from "lucide-react";

const features = [
  { icon: Zap, label: "Automated Signal Execution" },
  { icon: LineChart, label: "Trade Any Strategy" },
  { icon: BellRing, label: "Real-Time Alert Processing" },
  { icon: Gauge, label: "Faster Execution" },
];

export function TradingView() {
  return (
    <section id="tradingview" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-violet/15 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        {/* LEFT: heading */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)]">
            Connect. Sync. Trade.
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Build automated trades from <span className="text-gradient-brand">TradingView alerts</span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            Connect TradingView alerts via webhook and let AlgoAI automate your trades with smart risk management.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-[0_10px_30px_-10px_oklch(0.78_0.14_185/0.6)]"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-teal/20 text-teal transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="size-4" />
                </div>
                <span className="text-sm font-semibold leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>


        {/* RIGHT: image */}
        <div className="relative flex justify-center">
          <img
            src={tradingViewFlow.url}
            alt="TradingView alert to AlgoAI webhook to executed trade flow"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
