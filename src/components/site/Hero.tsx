import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24">
      {/* Orbital background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[900px] w-[900px] max-w-[120vw] max-h-[120vw]">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-teal/30" style={{ transform: "rotate(25deg) scaleY(0.45)" }} />
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute inset-0 rounded-full border border-teal/25" style={{ transform: "rotate(-25deg) scaleY(0.45)" }} />
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-primary/20" style={{ transform: "rotate(70deg) scaleY(0.55)" }} />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          <span className="text-gradient-hero">Algo trades are now ready-made</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Introducing <span className="text-lilac font-semibold">alg⊕verse</span> by Upstox
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] orbit-glow">
            Try ready-made algos
          </button>
          <button className="rounded-full bg-foreground/90 px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90">
            Build algos without coding
          </button>
        </div>

        <div className="mt-20 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border/70 bg-card/40 px-6 py-3 text-sm text-muted-foreground backdrop-blur">
          {["Create your strategy", "Backtest and Validate", "Deploy to Live Market", "Monitor and Manage"].map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className={i === 0 ? "text-foreground font-medium" : ""}>{step}</span>
              {i < 3 && <ChevronRight className="size-4 text-teal/70" />}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
