import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export type Country = { code: string; dial: string; name: string; flag: string };

export const COUNTRIES: Country[] = [
  { code: "IN", dial: "+91", name: "India", flag: "🇮🇳" },
  { code: "US", dial: "+1", name: "United States", flag: "🇺🇸" },
  { code: "GB", dial: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AE", dial: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SG", dial: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "AU", dial: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "CA", dial: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "DE", dial: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "FR", dial: "+33", name: "France", flag: "🇫🇷" },
  { code: "JP", dial: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "CN", dial: "+86", name: "China", flag: "🇨🇳" },
  { code: "HK", dial: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "MY", dial: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "NP", dial: "+977", name: "Nepal", flag: "🇳🇵" },
  { code: "BD", dial: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "LK", dial: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "PK", dial: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "SA", dial: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "ZA", dial: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "BR", dial: "+55", name: "Brazil", flag: "🇧🇷" },
];

interface Props {
  value: Country;
  onChange: (c: Country) => void;
}

export function CountryCodeSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(q.toLowerCase()) ||
      c.dial.includes(q) ||
      c.code.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-full items-center gap-1.5 rounded-l-2xl border-r border-border/70 pr-2 text-sm transition-colors hover:text-teal"
      >
        <span className="text-base leading-none">{value.flag}</span>
        <span className="text-muted-foreground">{value.dial}</span>
        <ChevronDown className={`size-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="glass-strong absolute left-0 top-[calc(100%+8px)] z-50 w-72 rounded-2xl p-2 shadow-2xl animate-fade-in">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2">
            <Search className="size-3.5 text-muted-foreground" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search country"
              className="w-full bg-transparent text-xs outline-none placeholder:text-muted-foreground/60"
            />
          </div>
          <ul className="mt-2 max-h-64 overflow-y-auto">
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                    setQ("");
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-accent/40 ${
                    c.code === value.code ? "bg-accent/30 text-teal" : ""
                  }`}
                >
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-xs text-muted-foreground">{c.dial}</span>
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-3 py-4 text-center text-xs text-muted-foreground">No matches</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
