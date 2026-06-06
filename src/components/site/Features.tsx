import { Bot, Layers, LineChart, Link2, History, FlaskConical, Users, Wrench } from "lucide-react";

const features = [
  { icon: Layers, title: "Ready-Made Strategies", desc: "Trade instantly using professionally built strategies designed with intelligent risk management and seamless automation." },
  { icon: Bot, title: "AI Strategy Builder", desc: "Create and automate your own trading strategies using simple AI prompts — no coding required, based on time, price & indicators." },
  { icon: LineChart, title: "Options Strategy Platform", desc: "Build, analyse, and backtest options strategies using payoff graphs, live analytics, and advanced strategy tools." },
  { icon: Link2, title: "TradingView Integration", desc: "Connect TradingView alerts directly with AlgoAI and execute trades automatically in real time." },
  { icon: History, title: "Unlimited Backtesting", desc: "Validate every idea across years of historical data — no quotas, no compromises." },
  { icon: FlaskConical, title: "Practice Trading", desc: "Trade live markets risk-free in paper mode before deploying real capital." },
  { icon: Users, title: "Partner Dashboard", desc: "A dedicated control panel for partners with real-time performance and client management." },
  { icon: Wrench, title: "Manual Strategy Builder", desc: "Fine-tune entries, exits and risk rules with granular manual control when you need it." },
];

export function Features() {
  return (
    <section id="features" className="relative pt-0 pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">SMC — The Edge in every market condition</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            One Powerful Ecosystem for <span className="text-gradient-brand">Smarter Trading</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Access Ready-Made Trading Strategies, Build AI-Powered Custom Algos, Explore the Advanced Options Platform,
            Backtest Ideas, and Practice Risk-Free — All in One Intelligent Trading Ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:border-teal/40">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-cyan/20 to-teal/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-teal/20 text-teal">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
