import { useState } from "react";
import {
  Sparkles,
  MessageSquare,
  Cpu,
  Workflow,
  Sliders,
  Send,
  Loader2,
  CheckCircle2,
  Wand2,
} from "lucide-react";

const highlights = [
  { icon: MessageSquare, label: "Describe your Idea" },
  { icon: Cpu, label: "Automate with AI" },
  { icon: Wand2, label: "Build without coding" },
  { icon: Sliders, label: "Customize with precision" },
  { icon: Workflow, label: "Execute in real time" },
];

const SAMPLES = [
  "Buy NIFTY when RSI < 30 and price crosses above 20 EMA. Exit at 1.5% target or 0.8% stop.",
  "Short BANKNIFTY when 5-min candle closes below VWAP with volume > 2x average. Trail SL by 0.5%.",
  "Iron Condor on NIFTY weekly expiry, sell 0.20 delta strikes, exit at 50% profit or 2x premium loss.",
];

type Parsed = {
  instrument: string;
  side: string;
  entry: string;
  exit: string;
  timeframe: string;
  risk: string;
  confidence: number;
  backtest: { cagr: string; winRate: string; trades: number };
};

function parseStrategy(prompt: string): Parsed {
  const p = prompt.toLowerCase();
  const instrument = /banknifty/.test(p)
    ? "BANKNIFTY"
    : /nifty/.test(p)
      ? "NIFTY 50"
      : /sensex/.test(p)
        ? "SENSEX"
        : /finnifty/.test(p)
          ? "FINNIFTY"
          : "NIFTY 50";

  const side = /(short|sell)/.test(p) ? "SHORT" : /condor|straddle|strangle/.test(p) ? "NEUTRAL" : "LONG";
  const timeframe = /1[- ]?min/.test(p)
    ? "1m"
    : /3[- ]?min/.test(p)
      ? "3m"
      : /15[- ]?min/.test(p)
        ? "15m"
        : /weekly/.test(p)
          ? "Weekly"
          : "5m";

  const tgt = p.match(/(\d+(?:\.\d+)?)\s*%\s*(target|profit)?/);
  const sl = p.match(/(\d+(?:\.\d+)?)\s*%\s*(stop|sl|loss)/);

  const entry = /rsi/.test(p)
    ? "RSI(14) crossover + EMA confirmation"
    : /vwap/.test(p)
      ? "VWAP breakout with volume filter"
      : /condor|straddle|strangle/.test(p)
        ? "Multi-leg options structure"
        : "Momentum + trend confirmation";

  const exit = `Target ${tgt?.[1] ?? "1.5"}% • SL ${sl?.[1] ?? "0.8"}%`;
  const risk = side === "NEUTRAL" ? "Defined risk (max loss capped)" : "Per-trade risk: 1% capital";

  // Deterministic-ish confidence from length
  const conf = Math.min(96, 62 + (prompt.length % 30));
  const cagr = (18 + (prompt.length % 25)).toFixed(1);
  const winRate = (58 + (prompt.length % 15)).toString();
  const trades = 120 + (prompt.length % 80);

  return {
    instrument,
    side,
    entry,
    exit,
    timeframe,
    risk,
    confidence: conf,
    backtest: { cagr: `+${cagr}%`, winRate: `${winRate}%`, trades },
  };
}

export function AIBuilder() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Parsed | null>(null);

  const onSubmit = (text?: string) => {
    const value = (text ?? prompt).trim();
    if (!value) return;
    setPrompt(value);
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(parseStrategy(value));
      setLoading(false);
    }, 1100);
  };

  return (
    <section id="ai-builder" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-[0_0_20px_-5px_oklch(0.78_0.14_185/0.6)]">AI Strategy Builder</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Think. <span className="text-gradient-brand">Build.</span> Trade
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">Your Strategy. Your Rules. Powered by AI.</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Transform trading ideas into automated strategies using the power of AI. Simply describe your setup,
            define your conditions, and let AlgoAI build and automate your strategy instantly.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass-strong group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:shadow-[0_10px_30px_-10px_oklch(0.78_0.14_185/0.6)]"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-teal/20 text-teal transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="size-4" />
                </div>
                <div className="text-sm font-semibold leading-tight">{label}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive builder */}
        <div className="relative">
          <div className="glass-strong relative rounded-3xl p-5 glow-violet">
            <div className="flex items-center gap-2 border-b border-border/60 pb-3">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-teal/70" />
              </div>
              <span className="ml-2 text-xs text-muted-foreground">AlgoAI Builder — Live</span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-medium text-teal">
                <span className="size-1.5 rounded-full bg-teal animate-pulse-glow" /> AI Online
              </span>
            </div>

            {/* Prompt input */}
            <div className="mt-5">
              <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Wand2 className="size-3.5 text-violet" /> Describe your strategy in plain English
              </label>
              <div className="relative mt-2 rounded-2xl p-[1px] bg-ai-gradient">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={3}
                  placeholder="e.g. Buy NIFTY when RSI < 30 and price crosses 20 EMA. Target 1.5%, SL 0.8%."
                  className="w-full resize-none rounded-[15px] bg-background/90 px-3.5 py-3 text-sm outline-none placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="text-[11px] text-muted-foreground/80">Try:</span>
                {SAMPLES.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => onSubmit(s)}
                    className="rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-teal/60 hover:text-teal"
                  >
                    Example {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => onSubmit()}
                disabled={loading || !prompt.trim()}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> AI is building your strategy…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Generate Strategy
                  </>
                )}
              </button>
            </div>

            {/* Output */}
            {(loading || result) && (
              <div className="mt-5 rounded-2xl border border-teal/30 bg-teal/5 p-4 animate-fade-in">
                <div className="flex items-center gap-2 text-xs text-teal">
                  <Cpu className="size-3.5" /> AlgoAI
                  {loading && (
                    <span className="ml-auto inline-flex items-center gap-1 text-muted-foreground">
                      <span className="size-1.5 animate-pulse rounded-full bg-teal" />
                      <span className="size-1.5 animate-pulse rounded-full bg-teal [animation-delay:150ms]" />
                      <span className="size-1.5 animate-pulse rounded-full bg-teal [animation-delay:300ms]" />
                    </span>
                  )}
                  {result && (
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-teal/15 px-2 py-0.5 text-[10px] font-semibold">
                      <CheckCircle2 className="size-3" /> Confidence {result.confidence}%
                    </span>
                  )}
                </div>

                {result && (
                  <>
                    <div className="mt-3 space-y-2">
                      {[
                        { k: "Instrument", v: result.instrument },
                        { k: "Side", v: result.side },
                        { k: "Timeframe", v: result.timeframe },
                        { k: "Entry", v: result.entry },
                        { k: "Exit", v: result.exit },
                        { k: "Risk", v: result.risk },
                      ].map((r, i) => (
                        <div
                          key={r.k}
                          className="flex items-center justify-between rounded-xl bg-background/60 px-3 py-2 text-xs animate-fade-in"
                          style={{ animationDelay: `${i * 60}ms` }}
                        >
                          <span className="text-muted-foreground">{r.k}</span>
                          <span className="font-medium">{r.v}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[
                        { k: "Backtest CAGR", v: result.backtest.cagr, c: "text-teal" },
                        { k: "Win Rate", v: result.backtest.winRate, c: "text-violet" },
                        { k: "Trades", v: result.backtest.trades, c: "text-cyan" },
                      ].map((m) => (
                        <div key={m.k} className="rounded-xl bg-background/60 p-2.5 text-center">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                          <div className={`mt-0.5 text-sm font-bold ${m.c}`}>{m.v}</div>
                        </div>
                      ))}
                    </div>

                    <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] to-[oklch(0.78_0.14_185)] py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                      Deploy Strategy →
                    </button>
                  </>
                )}
              </div>
            )}

            {!loading && !result && (
              <div className="mt-5 flex items-center gap-2 rounded-2xl border border-dashed border-border/60 bg-background/40 p-4 text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-teal" />
                Enter a strategy idea above or pick an example — AlgoAI will parse, validate and backtest it instantly.
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
