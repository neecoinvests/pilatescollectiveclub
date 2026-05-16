import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ backgroundColor: "#fcf9f8", padding: "20px 24px 0" }}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "6px", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
          {items.map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "#d9c2ba", fontSize: "12px", userSelect: "none" }}>›</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, color: "#86736d", textDecoration: "none", letterSpacing: "0.04em" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 500, color: "#53433e", letterSpacing: "0.04em" }}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
