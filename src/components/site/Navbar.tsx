import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all ${
        scrolled ? "border-b border-border/60 bg-background/80 backdrop-blur-xl" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Logo className="h-12" />
        </a>
        <button className="rounded-full bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
          Get Started
        </button>
      </nav>
    </header>
  );
}
