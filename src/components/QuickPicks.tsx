// The "Quick Picks: At a Glance" box used on the top-performing guides
// (grip socks, reformer brands): numbered rows, short note, price, black
// Shop Now button. Shared so every guide renders the same box.
export type QuickPick = { name: string; note: string; price: string; url: string; tag?: string; cta?: string };

export default function QuickPicks({ picks, title = "Quick Picks: At a Glance", subtitle, className = "mb-10 mt-4" }: { picks: QuickPick[]; title?: string; subtitle?: string; className?: string }) {
  return (
    <div className={`${className} r-qp`}>
      <div className="r-qp-hd">
        <p className="r-qp-title">{title}</p>
        {subtitle && <p className="r-sm">{subtitle}</p>}
      </div>
      {picks.map((p, i) => {
        const amazon = /amazon\.[a-z.]+\//.test(p.url);
        return (
        <div key={p.url + i} className="r-qp-row">
          <span className="r-qp-no">{String(i + 1).padStart(2, "0")}</span>
          <div className="r-qp-tx">
            {p.tag && <p className="r-qp-tag">{p.tag}</p>}
            <p className="r-qp-name">{p.name}</p>
            <p className="r-qp-sub">{p.note}<span className="md:hidden"> · <b>{p.price}</b></span></p>
          </div>
          <span className="r-qp-price hidden md:block">{p.price}</span>
          <a href={p.url} target="_blank" rel={amazon ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"} className="r-btn r-btn-sm shrink-0">
            {p.cta ?? (amazon ? "Shop Now →" : "Shop Direct →")}
          </a>
        </div>
        );
      })}
    </div>
  );
}
