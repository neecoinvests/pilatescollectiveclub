import Link from "next/link";

interface UpsellPick {
  name: string;
  price: string;
  url: string;
  note: string;
}

interface UpsellCTAProps {
  eyebrow: string;
  title: string;
  body: string;
  picks: UpsellPick[];
  guideHref: string;
  guideLabel: string;
}

export default function UpsellCTA({ eyebrow, title, body, picks, guideHref, guideLabel }: UpsellCTAProps) {
  return (
    <aside className="my-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f6f3f2", border: "1px solid rgba(217,194,186,0.5)" }}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{eyebrow}</p>
      <h2 className="text-2xl font-semibold mb-3" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{title}</h2>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{body}</p>
      <div className="space-y-3 mb-6">
        {picks.map((p) => (
          <div key={p.url} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl p-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold" style={{ color: "#1b1c1c", fontFamily: "'Montserrat', sans-serif" }}>
                {p.name} <span className="font-normal" style={{ color: "#86736d" }}>· {p.price}</span>
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{p.note}</p>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="shrink-0 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", backgroundColor: "#0a0a0a", padding: "10px 16px", textDecoration: "none" }}
            >
              View on Amazon →
            </a>
          </div>
        ))}
      </div>
      <Link href={guideHref} className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
        {guideLabel} →
      </Link>
    </aside>
  );
}
