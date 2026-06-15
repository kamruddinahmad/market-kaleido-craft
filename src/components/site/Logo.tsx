import logoAsset from "@/assets/smc-logo.svg.asset.json";

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logoAsset.url} alt="SMC" className={`${className} w-auto`} />;
}
