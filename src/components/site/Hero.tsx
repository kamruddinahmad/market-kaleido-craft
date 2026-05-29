import { useState } from "react";
import { ShieldCheck, Sparkles, Zap, BrainCircuit } from "lucide-react";
import { CountryCodeSelect, COUNTRIES, type Country } from "./CountryCodeSelect";
import heroAi from "@/assets/hero-ai.jpg";

export function Hero() {
  const [country, setCountry] = useState<Country>(COUNTRIES[0]);

  const tags = [
    { icon: ShieldCheck, label: "Trusted by Traders Across India" },
    { icon: Sparkles, label: "Built Inside SMC ACE 2.0" },
    { icon: Zap, label: "AI-Powered Strategy Engine" },
  ];

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24">
      {/* Orbital background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[900px] w-[900px] max-w-[140vw] max-h-[140vw] opacity-90">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-cyan/30" style={{ transform: "rotate(25deg) scaleY(0.45)" }} />
          </div>
          <div className="absolute inset-0 animate-spin-reverse">
            <div className="absolute inset-0 rounded-full border border-teal/25" style={{ transform: "rotate(-25deg) scaleY(0.45)" }} />
          </div>
          <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "70s" }}>
            <div className="absolute inset-0 rounded-full border border-violet/20" style={{ transform: "rotate(70deg) scaleY(0.55)" }} />
          </div>
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { l: "12%", t: "30%" },
          { l: "85%", t: "20%" },
          { l: "78%", t: "70%" },
          { l: "18%", t: "75%" },
          { l: "50%", t: "12%" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute size-1.5 rounded-full bg-teal/70 animate-float"
            style={{ left: p.l, top: p.t, animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left: Heading + Form */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 glass px-3 py-1.5 text-xs font-medium text-muted-foreground animate-fade-in">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            <BrainCircuit className="size-3.5 text-teal animate-pulse-glow" />
            <span className="text-shimmer">Neural Trading Engine</span>
          </div>

          {/* Heading: "Introducing" + logo */}
          <h1 className="mt-5 flex flex-col items-center gap-3 lg:items-start">
            <span className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="text-gradient-hero">Introducing</span>
            </span>
            <img
              src="/algoai-logo-light.png"
              alt="AlgoAI by SMC"
              className="h-16 w-auto md:h-20 lg:h-24"
            />
          </h1>

          <p className="mt-5 text-lg font-medium text-muted-foreground md:text-xl">
            The New Intelligence Behind Every Trade
          </p>

          {/* Form */}
          <div className="mt-8 max-w-md mx-auto lg:mx-0">
            <div className="glass-strong relative rounded-3xl p-6 glow">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-3 py-1 transition-colors focus-within:border-teal">
                <CountryCodeSelect value={country} onChange={setCountry} />
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/60"
                />
              </div>
              <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Get Started
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                No coding required • Ready-Made Strategies • AI-powered Building • Unlimited Backtesting
              </p>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              {tags.map(({ icon: Icon, label }) => (
                <span key={label} className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                  <Icon className="size-3.5 text-teal" /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal/20 via-violet/15 to-cyan/20 blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 glass-strong glow-violet">
              <img
                src={heroAi}
                alt="AI-powered trading intelligence visualization"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Floating stat cards */}
            <div className="glass absolute -left-4 top-8 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block">
              <div className="text-muted-foreground">Live Signals</div>
              <div className="text-lg font-bold text-teal">2,847</div>
            </div>
            <div
              className="glass absolute -right-4 bottom-10 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-muted-foreground">AI Confidence</div>
              <div className="text-lg font-bold text-violet">96%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
