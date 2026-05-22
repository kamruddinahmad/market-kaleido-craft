import { Logo } from "./Logo";

export function Navbar() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Strategies", href: "#strategies" },
    { label: "AI Builder", href: "#ai-builder" },
    { label: "Options", href: "#options" },
    { label: "FAQs", href: "#faqs" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center">
          <Logo className="h-7" />
        </a>
        <ul className="hidden gap-7 text-sm text-muted-foreground lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-accent sm:inline-flex">
            Login to SMC ACE 2.0
          </button>
          <button className="rounded-full bg-gradient-to-r from-[oklch(0.55_0.18_250)] via-[oklch(0.65_0.16_210)] to-[oklch(0.78_0.14_185)] px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
