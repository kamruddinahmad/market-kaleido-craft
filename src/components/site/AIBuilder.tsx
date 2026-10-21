import { useState } from "react";
import {
  MessageSquare,
  Cpu,
  Workflow,
  Sliders,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Wand2,
  TrendingUp,
  LineChart,
  BarChart3,
} from "lucide-react";

const highlights = [
  { icon: MessageSquare, label: "Describe your Idea" },
  { icon: Cpu, label: "Automate with AI" },
  { icon: Wand2, label: "Build without coding" },
  { icon: Sliders, label: "Customize with precision" },
  { icon: Workflow, label: "Execute in real time" },
];

type StrategyKind = "time" | "indicator" | "price";

const STRATEGY_TYPES: {
  id: StrategyKind;
  label: string;
  icon: typeof TrendingUp;
  prompt: string;
}[] = [
  {
    id: "time",
    label: "Time-based Strategy",
    icon: TrendingUp,
    prompt:
      "Enter NIFTY at 09:30 after the first 15-min candle closes above the opening range. Square-off at 15:15 with target 1.5% and SL 0.8%.",
  },
  {
    id: "indicator",
    label: "Indicator Based Strategy",
    icon: LineChart,
    prompt:
      "Buy NIFTY when RSI_14 > 30 AND SUPERTREND_10_3 = 1. Exit when RSI_14 > 78 with target 1.5% and SL 0.8%.",
  },
  {
    id: "price",
    label: "Price Based Strategy",
    icon: BarChart3,
    prompt:
      "Buy NIFTY on breakout above day high with volume 2x average. Exit below day low, target 1.5% and SL 0.8%.",
  },
];

type Parsed = {
  script: string;
  timeDays: string;
  indicators: string;
  conditions: { long: string; short: string };
  risk: string;
  name: string;
};

function detectKind(p: string): StrategyKind {
  if (/rsi|supertrend|ema|vwap|macd|indicator/.test(p)) return "indicator";
  if (/price|day high|day low|breakout|level/.test(p)) return "price";
  if (/09:|0930|09:30|15:15|time|morning|opening range/.test(p)) return "time";
  return "indicator";
}

function parseStrategy(kind: StrategyKind, prompt: string): Parsed {
  const p = prompt.toLowerCase();
  const script = /banknifty/.test(p)
    ? "Banknifty · FNO"
    : /nifty/.test(p)
      ? "Nifty · FNO"
      : /sensex/.test(p)
        ? "Sensex · FNO"
        : /finnifty/.test(p)
          ? "Finnifty · FNO"
          : "Nifty · FNO";

  const timeDays = "Intraday (MIS) · BOTH · 09:15 - 15:15 · All days";

  if (kind === "time") {
    return {
      script,
      timeDays,
      indicators: "No indicators · Time-based rules",
      conditions: {
        long: "Entry at 09:30 after first 15-min candle closes above opening range",
        short: "Entry at 09:30 after opening range breakdown",
      },
      risk: "100 Trades",
      name: "Opening Range Time Strategy",
    };
  }

  if (kind === "indicator") {
    return {
      script,
      timeDays,
      indicators: "2 Indicators · rsi_14, supertrend_10_3",
      conditions: {
        long: "(RSI_14 > 30 AND SUPERTREND_10_3 = 1)",
        short: "RSI_14 > 78",
      },
      risk: "100 Trades",
      name: "RSI Supertrend Strategy",
    };
  }

  return {
    script,
    timeDays,
    indicators: "No indicators · Price-level rules",
    conditions: {
      long: "Buy above day high with volume > 2x average",
      short: "Sell below day low with volume > 2x average",
    },
    risk: "100 Trades",
    name: "Price Breakout Strategy",
  };
}

export function AIBuilder() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Parsed | null>(null);

  const onSubmit = (text?: string, kind?: StrategyKind) => {
    const value = (text ?? prompt).trim();
    if (!value) return;
    setPrompt(value);
    setLoading(true);
    setResult(null);
    const resolvedKind = kind ?? detectKind(value.toLowerCase());
    setTimeout(() => {
      setResult(parseStrategy(resolvedKind, value));
      setLoading(false);
    }, 1100);
  };

  return (
    <section id="ai-builder" className="relative overflow-hidden py-28">
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
            {/* Prompt input */}
            <div className="rounded-2xl border border-border/60 p-4">
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
                {STRATEGY_TYPES.map(({ id, label, icon: Icon, prompt: sample }) => (
                  <button
                    key={id}
                    onClick={() => onSubmit(sample, id)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-teal/60 hover:text-teal"
                  >
                    <Icon className="size-3" /> {label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSubmit()}
              disabled={loading || !prompt.trim()}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Creating strategy…
                </>
              ) : (
                <>
                  Create Strategy <ArrowRight className="size-4" />
                </>
              )}
            </button>

            {/* Output */}
            {result && (
              <div className="mt-5 space-y-2.5 rounded-3xl bg-background/40 p-3 animate-fade-in">
                {[
                  { k: "Select Scripts", v: result.script },
                  { k: "Strategy Time & Days", v: result.timeDays },
                  { k: "Add Indicators", v: result.indicators },
                ].map((r, i) => (
                  <div
                    key={r.k}
                    className="flex items-start gap-3 rounded-2xl bg-background/80 p-3.5 animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{r.k}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{r.v}</div>
                    </div>
                  </div>
                ))}

                <div
                  className="flex items-start gap-3 rounded-2xl bg-background/80 p-3.5 animate-fade-in"
                  style={{ animationDelay: "180ms" }}
                >
                  <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Long & Short Condition Builder</div>
                    <div className="mt-1 space-y-1">
                      <div className="text-xs leading-snug">
                        <span className="font-semibold text-teal">Long:</span>{" "}
                        <span className="text-muted-foreground">{result.conditions.long}</span>
                      </div>
                      <div className="text-xs leading-snug">
                        <span className="font-semibold text-red-400">Short:</span>{" "}
                        <span className="text-muted-foreground">{result.conditions.short}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {[
                  { k: "Risk Management (Optional)", v: result.risk },
                  { k: "Strategy Names", v: result.name },
                ].map((r, i) => (
                  <div
                    key={r.k}
                    className="flex items-start gap-3 rounded-2xl bg-background/80 p-3.5 animate-fade-in"
                    style={{ animationDelay: `${240 + i * 60}ms` }}
                  >
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{r.k}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {r.v}
                        {r.k === "Strategy Names" && (
                          <>
                            {" · "}
                            <span className="font-medium text-amber-400">Paused</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {loading && (
              <div className="mt-5 flex items-center gap-2 rounded-2xl bg-background/40 p-3.5 text-xs text-muted-foreground">
                <Cpu className="size-3.5 text-teal" /> AlgoAI is parsing your strategy…
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
