import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Choose or Create a Strategy", desc: "Browse the library or describe your own setup." },
  { n: "02", title: "Backtest & Validate", desc: "Run it through practice mode with real market data." },
  { n: "03", title: "Monitor Performance", desc: "Track P&L, drawdowns and signals in real time." },
  { n: "04", title: "Go Live in Real Market", desc: "Deploy with one tap — pause or modify anytime." },
];

const flow = [
  { id: "1", label: "Choose or Create a Strategy" },
  { id: "2", label: "Backtest & Validate" },
  { id: "3", label: "Monitor Performance" },
];

export function ReadyMade() {
  return (
    <section id="strategies" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Steps */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
            Get Started in <span className="text-gradient-brand">4 Easy Steps</span>
          </h3>
          <p className="mt-4 text-muted-foreground">
            Start your automated trading journey in just a few clicks.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative">
              <div className="glass relative rounded-3xl p-7 transition-all hover:-translate-y-1 hover:glow">
                <div className="font-mono text-xs tracking-widest text-teal">STEP {s.n}</div>
                <h4 className="mt-3 text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="absolute -right-2 -top-3 rounded-full bg-gradient-to-br from-primary to-teal p-2 text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="h-px w-7 bg-gradient-to-r from-teal/60 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ready-Made Strategies — Get, Set, Algo flow */}
        <div className="mt-24 mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Ready-Made Strategies</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-brand">Get, Set, Algo</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Start your automated trading journey.
          </p>
        </div>

        <div className="glass mt-14 rounded-3xl p-8 md:p-12">
          {/* Timeline */}
          <div className="flex items-center justify-between gap-3 md:gap-6">
            {flow.map((f, i) => (
              <div key={f.id} className="flex flex-1 items-center">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-teal/70 bg-background/60 text-base font-bold text-teal md:size-16 md:text-lg">
                  {f.id}
                  <span className="absolute inset-0 -z-10 rounded-full bg-teal/20 blur-md" />
                </div>
                {i < flow.length - 1 && (
                  <div className="mx-2 h-px flex-1 bg-gradient-to-r from-teal/60 via-cyan/60 to-violet/60 md:mx-4" />
                )}
              </div>
            ))}

            {/* Dashed to Live */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="h-px w-8 border-t-2 border-dashed border-teal/70 md:w-14" />
              <ArrowRight className="size-4 text-teal" />
              <span className="rounded-full bg-gradient-to-r from-teal to-violet px-3 py-1 text-sm font-bold text-primary-foreground md:px-4 md:py-1.5 md:text-base">
                Live
              </span>
            </div>
          </div>

          {/* Labels */}
          <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground md:flex">
            {flow.map((f, i) => (
              <div key={f.id} className="flex items-center gap-3">
                <span className="font-medium text-foreground">{f.label}</span>
                {i < flow.length - 1 && <ArrowRight className="size-4 text-teal" />}
              </div>
            ))}
            <ArrowRight className="size-4 text-teal" />
            <span className="font-semibold text-gradient-brand">Go Live in Real Market</span>
          </div>

          {/* Mobile stacked labels */}
          <ul className="mt-6 space-y-2 text-sm md:hidden">
            {flow.map((f) => (
              <li key={f.id} className="flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-teal/20 text-xs font-bold text-teal">
                  {f.id}
                </span>
                <span className="text-foreground">{f.label}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-teal to-violet text-[10px] font-bold text-primary-foreground">
                ★
              </span>
              <span className="font-semibold text-gradient-brand">Go Live in Real Market</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
