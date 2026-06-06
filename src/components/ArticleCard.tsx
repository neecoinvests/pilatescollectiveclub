import Link from "next/link";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  date?: string;
  imageUrl?: string;
}

export default function ArticleCard({ title, excerpt, href, category, readTime, date }: ArticleCardProps) {
  return (
    <Link href={href} className="group block" style={{ textDecoration: "none" }}>
      <article style={{ borderTop: "1px solid #ede9e3", paddingTop: "28px", paddingBottom: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c5a882",
          }}>
            {category}
          </span>
          {date && (
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 300,
              color: "#9a9490",
              letterSpacing: "0.05em",
            }}>
              {date}
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "22px",
          fontWeight: 400,
          color: "#0a0a0a",
          lineHeight: 1.2,
          marginBottom: "10px",
          transition: "color 0.2s",
        }}
          className="group-hover:text-[#c5a882]"
        >
          {title}
        </h3>

        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          fontWeight: 300,
          color: "#6b6560",
          lineHeight: 1.75,
          marginBottom: "16px",
        }}>
          {excerpt}
        </p>

        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#0a0a0a",
          transition: "color 0.2s",
        }}
          className="group-hover:text-[#c5a882]"
        >
          Read → {readTime}
        </span>
      </article>
    </Link>
  );
}
