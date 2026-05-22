export function Navbar() {
  const links = ["Invest", "Trade", "News", "Uplearn", "About us", "Pricing"];
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-10">
          <a href="/" className="text-xl font-bold tracking-tight">
            <span className="text-teal">▲</span>lgoverse
          </a>
          <ul className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <li key={l} className="cursor-pointer transition-colors hover:text-foreground">{l}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex">
            Open Demat Account
          </button>
          <button className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
