"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

type Entry = { url: string; title: string; description: string; keywords: string[]; type: string; image: string };
type Doc = Entry & { fields: { tokens: string[]; weight: number }[]; titleStem: string; pilates: boolean };

const STOP = new Set("a an the and or of for to in on at with my your is are best top what which how do does i me find show page article guide 2025 2026".split(" "));

// Words people type, mapped to words our pages use.
const SYNONYMS: Record<string, string[]> = {
  glove: ["grip"], grip: ["sock", "glove"], sock: ["grip", "toe"], legging: ["tight", "pant"], tight: ["legging"], pant: ["legging"],
  bra: ["sport", "top"], top: ["bra", "shirt"], mat: ["yoga"], reformer: ["machine"], machine: ["reformer"], ring: ["circle", "magic"],
  circle: ["ring"], roller: ["foam"], band: ["loop", "resistance"], loop: ["band"], weight: ["dumbbell", "ankle"], dumbbell: ["weight"],
  bag: ["tote", "backpack"], tote: ["bag"], lagree: ["megaformer"], megaformer: ["lagree"], spin: ["cycling", "bike"],
  cycling: ["spin", "bike"], bike: ["spin", "cycling"], peloton: ["spin", "bike"], cheap: ["budget", "under"], budget: ["cheap", "under"],
  affordable: ["budget", "under"], gift: ["christmas", "present"], present: ["gift"], christmas: ["gift"], xmas: ["christmas", "gift"],
  deal: ["sale", "friday", "monday"], sale: ["deal"], discount: ["deal", "sale"], beginner: ["first", "start"], studio: ["class"],
  class: ["studio"], shoe: ["sneaker"], sneaker: ["shoe"], bottle: ["water"], watch: ["smartwatch", "tracker"], tracker: ["watch"],
  pregnancy: ["prenatal", "pregnant"], prenatal: ["pregnancy"], back: ["spine", "pain"], nyc: ["york"], la: ["angeles"],
};

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/&/g, " and ");
}
function stem(w: string) {
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && /(sses|xes|ches|shes)$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  if (w.length > 5 && w.endsWith("ing")) return w.slice(0, -3);
  return w;
}
function tokens(s: string) {
  return norm(s).split(/[^a-z0-9$]+/).filter(Boolean).map(stem);
}
function within(a: string, b: string, max: number) {
  if (Math.abs(a.length - b.length) > max) return false;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    let rowMin = prev[0];
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) prev[j] = Math.min(prev[j], tmp);
      diag = tmp;
      rowMin = Math.min(rowMin, prev[j]);
    }
    if (rowMin > max) return false;
  }
  return prev[b.length] <= max;
}
function matchQuality(term: string, tok: string, isLast: boolean) {
  if (tok === term) return 1;
  if (isLast && term.length >= 2 && tok.startsWith(term)) return 0.85; // still typing
  if (term.length >= 4 && tok.length >= 4 && term[0] === tok[0] && within(term, tok, term.length >= 7 ? 2 : 1)) return 0.5; // typo
  return 0;
}

function prepare(list: Entry[]): Doc[] {
  return list.map((e) => ({
    ...e,
    titleStem: " " + tokens(e.title).join(" ") + " ",
    pilates: /pilates/i.test(e.title),
    fields: [
      { tokens: tokens(e.title), weight: 10 },
      { tokens: tokens(e.url.replace(/[/-]/g, " ")), weight: 7 },
      { tokens: tokens(e.keywords.join(" ")), weight: 5 },
      { tokens: tokens(e.type), weight: 3 },
      { tokens: tokens(e.description), weight: 2 },
    ],
  }));
}

function search(docs: Doc[], query: string) {
  const raw = tokens(query);
  const terms = raw.filter((t) => !STOP.has(t));
  const use = terms.length ? terms : raw;
  if (!use.length) return [];
  const qStem = " " + raw.join(" ") + " ";
  const otherSport = use.some((t) => /^(lagree|megaformer|spin|cycling|bike|peloton|barre|yoga)$/.test(t));
  const scored = docs.map((d) => {
    let score = 0;
    let missed = 0;
    use.forEach((term, idx) => {
      const isLast = idx === use.length - 1;
      let best = 0;
      const variants: [string, number][] = [[term, 1], ...(SYNONYMS[term] || []).map((s): [string, number] => [s, 0.7])];
      for (const [v, vw] of variants) {
        for (const f of d.fields) {
          for (const tok of f.tokens) {
            const q = matchQuality(v, tok, isLast && vw === 1);
            if (q) best = Math.max(best, q * f.weight * vw);
          }
        }
      }
      if (best === 0) missed++;
      score += best;
    });
    if (missed) score *= missed === use.length ? 0 : 0.3;
    if (score && raw.length > 1 && d.titleStem.includes(qStem)) score += 12;
    if (score && d.pilates && !otherSport) score += 4;
    if (score && d.type !== "City guide" && d.url.startsWith("/blog/")) score += 0.5;
    return { d, score };
  });
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, 8).map((s) => s.d);
}

const POPULAR: { label: string; url: string }[] = [
  { label: "Pilates Essentials: the complete list", url: "/blog/pilates-essentials" },
  { label: "Best Pilates grip socks", url: "/blog/best-pilates-grip-socks" },
  { label: "Best home reformers", url: "/blog/best-home-pilates-reformer" },
  { label: "Black Friday Pilates deals", url: "/blog/black-friday-pilates-deals" },
  { label: "Pilates studios by city", url: "/cities" },
];

let cache: Doc[] | null = null;

export default function SiteSearch({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [docs, setDocs] = useState<Doc[] | null>(cache);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const openSearch = useCallback(() => {
    setOpen(true);
    if (!cache) {
      fetch("/search-index.json")
        .then((r) => r.json())
        .then((list: Entry[]) => {
          cache = prepare(list);
          setDocs(cache);
        })
        .catch(() => setDocs([]));
    }
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    setQ("");
    setActive(0);
  }, []);

  // Cmd/Ctrl+K or "/" opens search from anywhere (desktop instance only, so it is registered once).
  useEffect(() => {
    if (variant !== "desktop") return;
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [variant, openSearch]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const results = useMemo(() => (docs && q.trim() ? search(docs, q) : []), [docs, q]);
  const list = q.trim() ? results.map((r) => ({ url: r.url, title: r.title, sub: r.description, type: r.type })) : POPULAR.map((p) => ({ url: p.url, title: p.label, sub: "", type: "" }));

  const go = (url: string) => {
    close();
    router.push(url);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, list.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter" && list[active]) { e.preventDefault(); go(list[active].url); }
  };

  const trigger =
    variant === "desktop" ? (
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search articles"
        className="pcc-search-trigger"
        style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "none", border: "1px solid #ddd8d0", padding: "8px 12px", cursor: "pointer", color: "#6b6560", fontFamily: "var(--font-sans)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}
      >
        <SearchIcon />
        Search
      </button>
    ) : (
      <button type="button" onClick={openSearch} aria-label="Search articles" style={{ background: "none", border: "none", padding: "6px", cursor: "pointer", color: "#0a0a0a", display: "inline-flex" }}>
        <SearchIcon size={18} />
      </button>
    );

  const modal = open
    ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search the site"
          onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
          style={{ position: "fixed", inset: 0, zIndex: 1000, backgroundColor: "rgba(20,16,14,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "min(12vh, 96px) 16px 16px" }}
        >
          <div style={{ width: "100%", maxWidth: "640px", backgroundColor: "#ffffff", boxShadow: "0 24px 60px rgba(0,0,0,0.25)", display: "flex", flexDirection: "column", maxHeight: "calc(100dvh - min(12vh, 96px) - 16px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", borderBottom: "1px solid #ede9e3" }}>
              <span style={{ color: "#8b4a31", display: "inline-flex" }}><SearchIcon size={18} /></span>
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => { setQ(e.target.value); setActive(0); }}
                onKeyDown={onInputKey}
                placeholder="Search gloves, reformers, Lagree, Zurich…"
                aria-label="Search"
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="go"
                style={{ flex: 1, minWidth: 0, border: "none", outline: "none", fontFamily: "var(--font-sans)", fontSize: "16px", color: "#0a0a0a", background: "transparent" }}
              />
              <button type="button" onClick={close} aria-label="Close search" style={{ background: "none", border: "none", cursor: "pointer", color: "#9a9490", fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px" }}>
                Esc
              </button>
            </div>
            <div style={{ overflowY: "auto", overscrollBehavior: "contain" }}>
              {!q.trim() && (
                <p style={{ margin: 0, padding: "16px 20px 4px", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8b4a31" }}>Popular</p>
              )}
              {q.trim() && docs && list.length === 0 && (
                <p style={{ margin: 0, padding: "24px 20px", fontFamily: "var(--font-sans)", fontSize: "13px", color: "#6b6560" }}>
                  No matches for “{q.trim()}”. Try a product (socks, reformer, mat) or a city.
                </p>
              )}
              {q.trim() && !docs && (
                <p style={{ margin: 0, padding: "24px 20px", fontFamily: "var(--font-sans)", fontSize: "13px", color: "#6b6560" }}>Loading…</p>
              )}
              <ul style={{ listStyle: "none", margin: 0, padding: "4px 0 8px" }}>
                {list.map((item, i) => (
                  <li key={item.url}>
                    <a
                      href={item.url}
                      onClick={(e) => { e.preventDefault(); go(item.url); }}
                      onMouseEnter={() => setActive(i)}
                      style={{ display: "block", padding: "12px 20px", textDecoration: "none", backgroundColor: i === active ? "#f6f3f2" : "transparent", borderLeft: `2px solid ${i === active ? "#8b4a31" : "transparent"}` }}
                    >
                      {item.type && (
                        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#a8988f", marginBottom: "3px" }}>{item.type}</span>
                      )}
                      <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "16px", color: "#0a0a0a", lineHeight: 1.3 }}>{item.title}</span>
                      {item.sub && (
                        <span style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", marginTop: "4px", fontFamily: "var(--font-sans)", fontSize: "12px", fontWeight: 300, color: "#6b6560", lineHeight: 1.55 }}>{item.sub}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      {trigger}
      {modal}
    </>
  );
}

function SearchIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
