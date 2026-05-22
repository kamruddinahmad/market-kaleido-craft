import { Star } from "lucide-react";

const testimonials = [
  { name: "Baljinder Singh", quote: "AlgoAI completely transformed the way I trade. The ready-made strategies are incredibly easy to use, and the execution speed is genuinely impressive. Trading feels much more disciplined and systematic now." },
  { name: "Naresh Choudhary", quote: "I had absolutely no coding experience before using AlgoAI. The AI strategy builder makes automation simple and accessible for every trader." },
  { name: "Wasim", quote: "I've used multiple algo platforms before, but AlgoAI stands out because of its clean interface, reliable automation, and excellent support experience." },
  { name: "Amol", quote: "TradingView integration and automated execution work seamlessly together. AlgoAI saves a huge amount of time during active market hours." },
  { name: "Anshika", quote: "The Options Platform is one of the best features. Payoff graphs and backtesting tools make strategy analysis extremely simple and practical." },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Trusted by <span className="text-gradient-brand">Modern Traders</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            See how traders are transforming their trading experience with AlgoAI.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`glass relative flex flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-teal/40 ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex gap-0.5 text-teal">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <div className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-teal text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div className="text-sm font-semibold">{t.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
