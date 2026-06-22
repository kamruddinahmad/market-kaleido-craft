import videoAsset from "@/assets/smc-algoai-walkthrough.mp4.asset.json";

export function Walkthrough() {
  const steps = [
    "Login & account setup",
    "Choosing ready-made strategies",
    "AI strategy creation",
    "Backtesting process",
    "Practice mode deployment",
    "Live market execution",
    "Pause & modify strategies anytime",
  ];

  return (
    <section className="relative pt-0 pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            See <span className="text-gradient-brand">AlgoAI in Action</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Watch how AlgoAI simplifies automated trading — from login to live deployment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="group relative aspect-video overflow-hidden rounded-3xl glass-strong glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violet/20" />
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group/btn flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal text-primary-foreground transition-transform hover:scale-110">
                  <Play className="size-8 fill-current" />
                  <span className="absolute size-20 animate-pulse-glow rounded-full bg-teal/30" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-sm font-medium">AlgoAI Platform Walkthrough</span>
                <span className="text-xs text-muted-foreground">04:32</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal">Walkthrough covers</div>
            <ol className="mt-4 space-y-3">
              {steps.map((s, i) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-teal/15 text-xs font-semibold text-teal">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA below video */}
        <div className="relative mt-[120px] overflow-hidden rounded-3xl glass-strong p-10 md:p-14">
          <div className="absolute -right-20 -top-20 size-80 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute -left-20 -bottom-20 size-80 rounded-full bg-teal/20 blur-[100px]" />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
                Ready to <span className="text-gradient-brand">Automate Your Trading?</span>
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li>• Start with Ready-Made Strategies</li>
                <li>• Build Your Own AI Formula</li>
                <li>• Trade Faster with Smart Automation</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button className="rounded-full bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
