import { ArrowUpRight, TrendingUp } from "lucide-react";

const strategies = [
  { name: "Bull Credit Spread", desc: "2-leg Spot based strategy with defined risk and reward.", min: "₹85,000", tag: "SENSEX • BULL CREDIT SPREAD", returns: "+42.8%" },
  { name: "Nifty Intraday Delta Strangle", desc: "4-leg Spot based delta-neutral selling strategy.", min: "₹2,50,000", tag: "OPTION SELLING", returns: "+38.2%" },
  { name: "Option Pulse Buying", desc: "Single-leg premium based momentum buying strategy.", min: "₹45,000", tag: "BUYING • PULSE", returns: "+61.5%" },
  { name: "Bear Credit Spread", desc: "2-leg Spot strategy designed for bearish setups.", min: "₹85,000", tag: "SENSEX • BEAR SPREAD", returns: "+29.4%" },
  { name: "EMA Intraday Directional", desc: "1-leg Spot strategy using EMA crossovers.", min: "₹30,000", tag: "OPTION BUYING • BEARISH", returns: "+34.7%" },
  { name: "Sensex 0DTE Selling", desc: "Theta decay capture strategy on expiry day.", min: "₹2,50,000", tag: "SENSEX • EXPIRY DAY", returns: "+52.1%" },
];

export function Strategies() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Built by experts. <span className="text-lilac">Validated for results.</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Get access to top strategies curated by SEBI-registered RAs. Each strategy is backtested with clear past returns, drawdowns, and risk metrics.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strategies.map((s) => (
            <article
              key={s.name}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-lilac" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-border/70 bg-background/40 p-4">
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Returns (1Y)</div>
                  <div className="mt-1 flex items-center gap-1 text-base font-semibold text-teal">
                    <TrendingUp className="size-4" /> {s.returns}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Min. Amount</div>
                  <div className="mt-1 text-base font-semibold">{s.min}</div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-medium tracking-wider text-muted-foreground">{s.tag}</span>
                <button className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-primary hover:text-primary-foreground">
                  View
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
