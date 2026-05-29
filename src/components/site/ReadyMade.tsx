import { CheckCircle2, Rocket, Shield, Activity, Gauge, Repeat } from "lucide-react";

const benefits = [
  { icon: Rocket, title: "Deploy proven strategies instantly with one-click live automation" },
  { icon: Activity, title: "Real-time monitoring, adaptive optimization & seamless performance tracking" },
  { icon: Repeat, title: "Designed for disciplined, scalable & consistency-driven trading" },
  { icon: Gauge, title: "Ultra-fast, low-latency trade execution for maximum efficiency" },
];

const steps = [
  { n: "01", title: "Choose or Create a Strategy", desc: "Browse the library or describe your own setup." },
  { n: "02", title: "Backtest & Validate", desc: "Run it through practice mode with real market data." },
  { n: "03", title: "Monitor Performance", desc: "Track P&L, drawdowns and signals in real time." },
  { n: "04", title: "Go Live in Real Market", desc: "Deploy with one tap — pause or modify anytime." },
];

export function ReadyMade() {
  return (
    <section id="strategies" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Steps - moved above Ready-Made Strategies */}
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-brand">Get, Set, Algo</span>
          </h3>
          <p className="mt-4 text-muted-foreground">
            Start your automated trading journey
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

        {/* Ready-Made Strategies */}
        <div className="mt-24 mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-brand">Ready-Made Strategies</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Build less. Trade smarter. Automate instantly.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title }) => (
            <div key={title} className="glass flex flex-col gap-3 rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-teal/40">
              <Icon className="size-6 text-teal" />
              <p className="text-sm font-medium leading-relaxed">{title}</p>
              <CheckCircle2 className="mt-auto size-4 text-teal/60" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
