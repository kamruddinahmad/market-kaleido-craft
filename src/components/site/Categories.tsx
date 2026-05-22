import { BarChart3, ShoppingCart, ShieldCheck, LineChart, Zap, Clock } from "lucide-react";

const cats = [
  { icon: BarChart3, title: "Equity options algos", desc: "Market neutral structures for safer trades" },
  { icon: ShoppingCart, title: "Option buying algos", desc: "Directional option algos with high conviction" },
  { icon: ShieldCheck, title: "Hedged option algos", desc: "Market neutral structures for safer trades" },
  { icon: LineChart, title: "Stock option algos", desc: "Algos to catch multi-day stock option swings" },
  { icon: Zap, title: "Option selling algos", desc: "Premium-earning strategies for option sellers" },
  { icon: Clock, title: "Index futures algos", desc: "Strategies for NIFTY, BANKNIFTY, and Sensex futures" },
];

export function Categories() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight md:text-5xl">
          Dive deep into <span className="text-lilac">what suits you best.</span>
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl border border-border bg-card p-7 transition-all hover:border-teal/50">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-lilac transition-colors group-hover:bg-primary/25">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
