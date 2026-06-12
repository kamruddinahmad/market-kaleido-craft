import { Bot, Layers, LineChart, Link2 } from "lucide-react";
import iphoneFrame from "@/assets/iphone-frame.jpg.asset.json";

const benefits = [
  { title: "Build Algo Strategies with AI", icon: Bot },
  { title: "Automate TradingView Strategies", icon: Link2 },
  { title: "Real-time Backtest Engine", icon: LineChart },
  { title: "Ready-made Algo Strategies", icon: Layers },
];

function BenefitCard({ title, Icon }: { title: string; Icon: typeof Bot }) {
  return (
    <div className="glass-strong group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all hover:-translate-y-1 hover:border-teal/50">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-teal/20 text-teal">
        <Icon className="size-4" />
      </div>
      <div className="text-sm font-semibold leading-tight">{title}</div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative pt-0 pb-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)]">SMC — The Edge in every market condition</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            One Powerful Ecosystem for <span className="text-gradient-brand">Smarter Trading</span>
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Access Ready-Made Trading Strategies, Build AI-Powered Custom Algos, Explore the Advanced Options Platform,
            Backtest Ideas, and Practice Risk-Free — All in One Intelligent Trading Ecosystem.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-[420px] max-w-4xl -translate-y-1/2 rounded-[3rem] bg-gradient-to-r from-primary/25 via-violet/20 to-teal/25 opacity-50 blur-2xl" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left: benefit cards stacked */}
            <div className="relative flex flex-col gap-4 lg:max-w-md">
              {benefits.map((c) => (
                <BenefitCard key={c.title} title={c.title} Icon={c.icon} />
              ))}
            </div>

            {/* Right: phone image */}
            <div className="relative flex justify-center lg:justify-end">
              <img
                src={iphoneFrame.url}
                alt="AlgoAI mobile trading app on iPhone"
                className="w-full max-w-sm drop-shadow-[0_40px_60px_oklch(0.55_0.18_250/0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
