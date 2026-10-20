type Faq = { q: string; a: string };

// Pulls the questions out of a page's FAQPage schema so the visible FAQ always matches the markup.
export function faqsFromJsonLd(ld: unknown): Faq[] {
  const out: Faq[] = [];
  const walk = (o: unknown) => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (!o || typeof o !== "object") return;
    const node = o as Record<string, unknown>;
    if (node["@type"] === "Question") {
      const ans = node.acceptedAnswer as Record<string, unknown> | undefined;
      if (typeof node.name === "string" && typeof ans?.text === "string") out.push({ q: node.name, a: ans.text });
      return;
    }
    Object.values(node).forEach(walk);
  };
  walk(ld);
  return out;
}

export default function FaqSection({ faqs, className = "mt-16 mb-16" }: { faqs: Faq[]; className?: string }) {
  if (!faqs.length) return null;
  return (
    <div className={className}>
      <h2 className="text-3xl font-semibold mb-8" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>Frequently asked questions</h2>
      <div className="space-y-6">
        {faqs.map((item) => (
          <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.3)" }}>
            <h3 className="text-base font-semibold mb-2" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{item.q}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
