// Compact "our top pick" box placed straight under the H1 so the first
// affiliate link is on the first mobile screen.
export default function TopPick({ label = "Our top pick", name, price, note, url, cta }: { label?: string; name: string; price: string; note: string; url: string; cta?: string }) {
  return (
    <div className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(139,74,49,0.25)" }}>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
        <p className="text-base font-semibold leading-snug" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{name}</p>
        <p className="text-xs mt-1" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}><span className="font-semibold" style={{ color: "#1b1c1c" }}>{price}</span> · {note}</p>
      </div>
      <a href={url} target="_blank" rel={/amazon\.[a-z.]+\//.test(url) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"} className="text-center shrink-0"
        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", textDecoration: "none", backgroundColor: "#0a0a0a", padding: "12px 18px", whiteSpace: "nowrap" }}
      >{cta ?? (/amazon\.[a-z.]+\//.test(url) ? "Shop Now →" : "Shop Direct →")}</a>
    </div>
  );
}
