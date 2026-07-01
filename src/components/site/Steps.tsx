const steps = [
  { n: "01", title: "Create your strategy", desc: "Pick from templates or build your own with the no-code builder." },
  { n: "02", title: "Backtest and validate", desc: "Stress test against years of historical data and risk metrics." },
  { n: "03", title: "Deploy to live market", desc: "One-click deployment with capital allocation and safeguards." },
  { n: "04", title: "Monitor and manage", desc: "Real-time P&L, alerts, and full control from your dashboard." },
];

export function Steps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Launch your algo in <span className="text-lilac">just four steps.</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">Build &amp; optimise your own strategy until it's perfect.</p>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-7">
              <div className="text-sm font-mono text-teal">Step {s.n}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="absolute -right-3 -top-3 text-5xl font-bold text-primary/15">{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
