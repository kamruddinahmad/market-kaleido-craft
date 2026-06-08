import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { ReadyMade } from "@/components/site/ReadyMade";
import { AIBuilder } from "@/components/site/AIBuilder";
import { Options } from "@/components/site/Options";
import { Walkthrough } from "@/components/site/Walkthrough";
import { TradingView } from "@/components/site/TradingView";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQs } from "@/components/site/FAQs";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AlgoAI by SMC — The New Intelligence Behind Every Trade" },
      {
        name: "description",
        content:
          "AI-powered automated trading inside SMC ACE 2.0 — ready-made strategies, AI strategy builder, advanced options platform, TradingView integration & unlimited backtesting.",
      },
      { property: "og:title", content: "AlgoAI by SMC — The New Intelligence Behind Every Trade" },
      { property: "og:description", content: "Automate trading with AI inside SMC ACE 2.0." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <ReadyMade />
      <AIBuilder />
      <Options />
      <TradingView />
      <Walkthrough />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
