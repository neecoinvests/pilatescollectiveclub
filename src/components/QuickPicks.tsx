// The "Quick Picks: At a Glance" box used on the top-performing guides
// (grip socks, reformer brands): numbered rows, short note, price, black
// Shop Now button. Shared so every guide renders the same box.
export type QuickPick = { name: string; note: string; price: string; url: string; tag?: string; cta?: string };

export default function QuickPicks({ picks, title = "Quick Picks: At a Glance", subtitle, className = "mb-10 mt-4" }: { picks: QuickPick[]; title?: string; subtitle?: string; className?: string }) {
  return (
    <div className={`${className} overflow-hidden`} style={{ border: "1px solid rgba(217,194,186,0.4)", borderRadius: "16px" }}>
      <div className="px-6 py-4" style={{ backgroundColor: "#f6f3f2" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{title}</p>
        {subtitle && <p className="text-xs mt-1" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{subtitle}</p>}
      </div>
      {picks.map((p, i) => {
        const amazon = /amazon\.[a-z.]+\//.test(p.url);
        return (
        <div key={p.url + i} className="flex items-center gap-3 sm:gap-4 px-6 py-4" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(217,194,186,0.25)", backgroundColor: "#ffffff" }}>
          <span className="text-base font-semibold w-7 shrink-0 text-center" style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}>{String(i + 1).padStart(2, "0")}</span>
          <div className="flex-1 min-w-0">
            {p.tag && <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{p.tag}</p>}
            <p className="text-sm font-semibold leading-tight" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>{p.name}</p>
            <p className="text-xs mt-0.5" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.note}<span className="md:hidden"> · <span className="font-semibold" style={{ color: "#1b1c1c" }}>{p.price}</span></span></p>
          </div>
          <span className="text-xs font-semibold hidden md:block shrink-0 mr-3" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{p.price}</span>
          <a href={p.url} target="_blank" rel={amazon ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"}
            style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "10px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
          >{p.cta ?? (amazon ? "Shop Now →" : "Shop Direct →")}</a>
        </div>
        );
      })}
    </div>
  );
}
