import { Copy, CheckCircle2, ArrowDown } from "lucide-react";

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
            Build automated trades from TradingView alerts
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-brand">TradingView Integration</span>
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            Connect TradingView alerts via webhook and let AlgoAI automate your trades with smart risk management.
          </p>
        </div>

        {/* RIGHT: flow cards */}
        <div className="relative flex flex-col gap-3">
          {/* Card 1: TradingView Chart */}
          <div className="glass-strong rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="size-7" fill="none">
                  <path d="M2 6h7v3H6v9H3V9H2V6z" fill="#2962FF" />
                  <path d="M10 6h12v3h-4.5v9h-3V9H10V6z" fill="#2962FF" />
                  <circle cx="18" cy="16" r="3" fill="#FF5252" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground">SENSEX</div>
                <div className="mt-1 relative h-12 overflow-hidden rounded-lg bg-background/40">
                  <svg viewBox="0 0 200 48" className="h-full w-full" preserveAspectRatio="none">
                    <polyline
                      points="0,30 20,28 40,32 60,22 80,18 100,24 120,16 140,20 160,12 180,18 200,10"
                      fill="none"
                      stroke="oklch(0.78 0.14 185)"
                      strokeWidth="1.5"
                    />
                    <polyline
                      points="0,36 20,34 40,36 60,30 80,28 100,30 120,26 140,28 160,22 180,26 200,20"
                      fill="none"
                      stroke="oklch(0.65 0.18 145)"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                  </svg>
                  <span className="absolute right-1 top-1 rounded bg-teal/80 px-1.5 py-0.5 text-[8px] font-bold text-background">
                    Buy Alert
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="size-4 text-violet animate-pulse-glow" />
          </div>

          {/* Card 2: Webhook URL */}
          <div className="glass-strong rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-teal/20">
                <span className="text-xs font-bold text-gradient-brand">algoai</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-muted-foreground">Webhook URL</div>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-2">
                  <span className="flex-1 truncate text-xs text-foreground/90">
                    https://api.algoai.smctradeonline.com/v2/trades
                  </span>
                  <Copy className="size-3.5 shrink-0 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="size-4 text-violet animate-pulse-glow" />
          </div>

          {/* Card 3: Trade executed */}
          <div className="glass-strong rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal/20">
                <CheckCircle2 className="size-7 text-teal" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">SENSEX Buy</span>
                  <span className="rounded bg-teal/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal">
                    Filled
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-4 gap-3 text-[10px]">
                  <div>
                    <div className="text-muted-foreground">Entry Price</div>
                    <div className="mt-0.5 font-bold text-teal">72,680.45</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">SL</div>
                    <div className="mt-0.5 font-bold">72,350.00</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">TP</div>
                    <div className="mt-0.5 font-bold">73,500.00</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Risk</div>
                    <div className="mt-0.5 font-bold">1.00%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
