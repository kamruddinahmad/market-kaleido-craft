import { Bot, Layers, LineChart, Link2 } from "lucide-react";
import phoneAsset from "@/assets/iphone-frame2.png.asset.json";

const cards = [
  { title: "Build Algo Strategies with AI", icon: Bot },
  { title: "Automate TradingView Strategies", icon: Link2 },
  { title: "Real-time Backtest Engine", icon: LineChart },
  { title: "Ready-made Algo Strategies", icon: Layers },
];

function FloatCard({ title, Icon }: { title: string; Icon: typeof Bot }) {
  return (
    <div className="glass-strong group relative flex items-center gap-4 rounded-2xl px-5 py-4 transition-all hover:-translate-y-1 hover:border-teal/50">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-teal/20 text-teal">
        <Icon className="size-6" />
      </div>
      <div className="text-lg font-semibold leading-tight md:text-xl">{title}</div>
      {/* Arrow flowing out from phone toward this card (visible on lg+) */}
      <div className="pointer-events-none absolute left-full top-1/2 hidden h-[3px] w-32 -translate-y-1/2 rounded-full bg-gradient-to-l from-teal via-teal/80 to-transparent shadow-[0_0_12px_oklch(0.78_0.14_185/0.8),0_0_24px_oklch(0.78_0.14_185/0.5)] lg:block xl:w-40">
        <span className="absolute left-0 top-1/2 size-3 -translate-y-1/2 rotate-45 border-b-[3px] border-l-[3px] border-teal shadow-[0_0_10px_oklch(0.78_0.14_185/0.8)]" />
      </div>
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

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left content - cards flowing out of phone */}
            <div className="flex flex-col gap-5 lg:items-end">
              {cards.map((c) => (
                <FloatCard key={c.title} title={c.title} Icon={c.icon} />
              ))}
            </div>

            {/* Right - phone image */}
            <div className="relative flex justify-center lg:justify-start">
              <img
                src={phoneAsset.url}
                alt="SMC algo trading mobile app"
                className="w-[220px] sm:w-[260px] lg:w-[300px] drop-shadow-[0_40px_60px_oklch(0.55_0.18_250/0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
