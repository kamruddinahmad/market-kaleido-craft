import smcLogo from "@/assets/smc-logo.svg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <img src={smcLogo.url} alt="SMC" className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">

              AI-powered automated trading inside SMC ACE 2.0. Built for modern Indian traders.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#strategies" className="hover:text-foreground">Ready-Made Strategies</a></li>
              <li><a href="#ai-builder" className="hover:text-foreground">AI Builder</a></li>
              <li><a href="#options" className="hover:text-foreground">Options Platform</a></li>
              <li><a href="#features" className="hover:text-foreground">All Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About SMC</a></li>
              <li><a href="#faqs" className="hover:text-foreground">FAQs</a></li>
              <li><a href="#" className="hover:text-foreground">Support</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SMC Global Securities Ltd. All rights reserved.</div>
          <div>Investments are subject to market risks. Please read all related documents carefully.</div>
        </div>
      </div>
    </footer>
  );
}
