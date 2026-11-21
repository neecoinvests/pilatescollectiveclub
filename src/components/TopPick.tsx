// Compact "our top pick" box placed straight under the H1 so the first
// affiliate link is on the first mobile screen.
export default function TopPick({ label = "Our top pick", name, price, note, url, cta }: { label?: string; name: string; price: string; note: string; url: string; cta?: string }) {
  const amazon = /amazon\.[a-z.]+\//.test(url);
  return (
    <div className="r-tp mb-8">
      <div className="r-tp-tx">
        <p className="r-tp-label">{label}</p>
        <p className="r-tp-name">{name}</p>
        <p className="r-tp-note"><b>{price}</b> · {note}</p>
      </div>
      <a href={url} target="_blank" rel={amazon ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow"} className="r-btn r-btn-sm shrink-0">
        {cta ?? (amazon ? "Shop Now →" : "Shop Direct →")}
      </a>
    </div>
  );
}
