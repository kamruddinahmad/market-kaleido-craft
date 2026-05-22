import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is AlgoAI?", a: "AlgoAI is an in-house algo trading feature integrated within the SMC ACE 2.0 app. It is not a separate application and can be accessed directly after login." },
  { q: "Do I need to manually start strategies?", a: "No. Once you access AlgoAI, selected live and practice strategies automatically begin execution." },
  { q: "Is a static IP required?", a: "No. AlgoAI works on any standard internet connection without requiring a static IP." },
  { q: "Do I need to log in daily?", a: "Yes. Daily login is required to activate automated trading for that trading session." },
  { q: "Can I create my own strategies?", a: "Yes. AlgoAI allows you to create custom trading strategies using AI-powered prompts." },
  { q: "Are ready-made strategies available?", a: "Yes. AlgoAI provides professionally built ready-made strategies for instant deployment." },
  { q: "Can I run multiple strategies simultaneously?", a: "Yes. Multiple strategies can run together depending on your trading preferences." },
  { q: "Can I modify or stop strategies anytime?", a: "Absolutely. You can start, stop, pause, or modify strategies anytime directly from the dashboard." },
  { q: "Which segments are supported?", a: "AlgoAI currently supports NSE & BSE Equity along with Futures & Options (F&O) trading." },
];

export function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked <span className="text-gradient-brand">Questions</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass overflow-hidden rounded-2xl transition-all">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold md:text-base">{f.q}</span>
                  <span className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
