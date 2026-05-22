import { Sparkles, MessageSquare, Cpu, Workflow, GraduationCap, Sliders } from "lucide-react";

const highlights = [
  { icon: MessageSquare, label: "Prompt-based strategy creation" },
  { icon: Cpu, label: "AI-assisted automation" },
  { icon: Workflow, label: "Real-time signal execution" },
  { icon: GraduationCap, label: "Beginner-friendly workflow" },
  { icon: Sliders, label: "Strategy customization with smart controls" },
];

export function AIBuilder() {
  return (
    <section id="ai-builder" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">AI Strategy Builder</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Build Your Own <span className="text-gradient-brand">AI Trading Formula</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Your Strategy. Your Rules. Powered by AI.</p>
          <p className="mt-6 text-muted-foreground">
            Transform trading ideas into automated strategies using the power of AI. Simply describe your setup,
            define your conditions, and let AlgoAI build and automate your strategy instantly.
          </p>
          <p className="mt-3 text-muted-foreground">
            No coding. No technical complexity. Just smarter automation built around your trading style.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm">
                <span className="inline-flex size-8 items-center justify-center rounded-xl bg-teal/15 text-teal">
                  <Icon className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock builder UI */}
        <div className="relative">
          <div className="glass-strong relative rounded-3xl p-5 glow-violet">
            <div className="flex items-center gap-2 border-b border-border/60 pb-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-teal/70" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">AlgoAI Builder</span>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-border bg-background/40 p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="size-3.5 text-teal" /> You
                </div>
                <p className="mt-2 text-sm">
                  Buy NIFTY when RSI &lt; 30 and price crosses above 20 EMA. Exit at 1.5% target or 0.8% stop.
                </p>
              </div>

              <div className="rounded-2xl border border-teal/30 bg-teal/5 p-4">
                <div className="flex items-center gap-2 text-xs text-teal">
                  <Cpu className="size-3.5" /> AlgoAI
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { k: "Instrument", v: "NIFTY 50 — Spot" },
                    { k: "Entry", v: "RSI(14) < 30 AND Close > EMA(20)" },
                    { k: "Target", v: "+1.5% / Stop −0.8%" },
                    { k: "Mode", v: "Practice → Live" },
                  ].map((r) => (
                    <div key={r.k} className="flex items-center justify-between rounded-xl bg-background/60 px-3 py-2 text-xs">
                      <span className="text-muted-foreground">{r.k}</span>
                      <span className="font-medium">{r.v}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] to-[oklch(0.78_0.14_185)] py-2.5 text-xs font-semibold text-primary-foreground">
                  Deploy Strategy →
                </button>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="glass absolute -left-6 -top-6 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block">
            <div className="text-muted-foreground">Backtest CAGR</div>
            <div className="text-lg font-bold text-teal">+38.4%</div>
          </div>
          <div className="glass absolute -right-4 bottom-8 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block" style={{ animationDelay: "1.5s" }}>
            <div className="text-muted-foreground">Win Rate</div>
            <div className="text-lg font-bold text-violet">72%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
