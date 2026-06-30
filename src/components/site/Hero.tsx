import { BrainCircuit, ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-phone-robot-v2.png.asset.json";
const heroBrain = heroAsset.url;

export function Hero() {


  return (
    <section id="hero" className="relative isolate overflow-hidden py-[122px]">
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

          <p className="mt-5 text-sm font-medium text-muted-foreground">
            Experience the future of automated trading with AI-powered strategy builder, expert-built strategies, real-time execution, and intelligent risk management — all inside the SMC ACE 2.0 ecosystem.
          </p>

          {/* Form */}
          <div className="mt-8 max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <div className="relative flex items-center gap-2 rounded-2xl border border-border bg-white pl-4 pr-2 py-1 shadow-[0_10px_30px_-5px_oklch(0.78_0.14_185/0.4)] transition-all focus-within:border-teal focus-within:shadow-[0_15px_40px_-5px_oklch(0.78_0.14_185/0.6)]">
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full bg-transparent py-3 text-sm text-black outline-none placeholder:text-black/50"
                />
                <button className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                  Get Started <ArrowRight className="size-4" />
                </button>
              </div>


            </div>
          </div>

        </div>

        {/* Right: Phone + robot with candle effects */}
        <div className="order-1 lg:order-2 relative hidden lg:block">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Theme-colored aura behind image */}
            <div className="absolute inset-0 -z-10 mx-auto h-[480px] w-[480px] translate-y-6 rounded-full bg-gradient-to-br from-teal/45 via-violet/30 to-cyan/30 blur-[120px] animate-pulse-glow" />
            <div className="absolute inset-0 -z-10 mx-auto h-[320px] w-[320px] translate-y-10 rounded-full bg-primary/30 blur-[90px]" />

            <img
              src={heroBrain}
              alt="SMC ACE 2.0 trading app with AI robot assistant and live candlestick chart"
              width={1024}
              height={820}
              className="relative mx-auto h-auto w-full max-w-[560px] object-contain animate-float drop-shadow-[0_20px_60px_oklch(0.55_0.18_250/0.45)] [filter:drop-shadow(0_0_50px_oklch(0.78_0.14_185/0.55))_drop-shadow(0_0_30px_oklch(0.65_0.16_210/0.45))]"
            />

            {/* Floating stat cards */}
            <div className="glass absolute left-0 top-10 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block">
              <div className="text-muted-foreground">Live Signals</div>
              <div className="text-lg font-bold text-teal">2,847</div>
            </div>
            <div
              className="glass absolute right-0 bottom-10 hidden rounded-2xl px-4 py-3 text-xs animate-float md:block"
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
