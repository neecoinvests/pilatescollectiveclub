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
  ctaLabel?: string;
  guideHref: string;
  guideLabel: string;
}

export default function UpsellCTA({ eyebrow, title, body, picks, guideHref, guideLabel, ctaLabel = "View on Amazon →" }: UpsellCTAProps) {
  return (
    <aside className="my-16 rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#ede9e3" }}>
      <p className="text-[12.5px] font-bold mb-3" style={{ color: "#0a0a0a" }}>{eyebrow}</p>
      <h2 className="mb-3 r-d r-h2">{title}</h2>
      <p className="text-base leading-relaxed mb-6" style={{ color: "#3a3530" }}>{body}</p>
      <div className="space-y-3 mb-6">
        {picks.map((p) => (
          <div key={p.url} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl p-4" style={{ backgroundColor: "#f7f4f0" }}>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold" style={{ color: "#0a0a0a" }}>
                {p.name} <span className="font-normal" style={{ color: "#6f6964" }}>· {p.price}</span>
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "#3a3530" }}>{p.note}</p>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="shrink-0 text-center r-btn r-btn-sm"
            >
              {ctaLabel}
            </a>
          </div>
        ))}
      </div>
      <Link href={guideHref} className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
        {guideLabel} →
      </Link>
    </aside>
  );
}
