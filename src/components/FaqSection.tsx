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
      <h2 className="r-d r-faq-h">Frequently asked questions</h2>
      <div className="r-faq">
        {faqs.map((item) => (
          <details key={item.q} open>
            <summary><h3>{item.q}</h3></summary>
            <p className="r-faq-an">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
