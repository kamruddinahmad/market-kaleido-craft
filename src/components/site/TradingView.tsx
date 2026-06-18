import tradingViewFlow from "@/assets/tradingview-flow.png.asset.json";

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
