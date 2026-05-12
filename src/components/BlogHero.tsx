import Image from "next/image";

interface BlogHeroProps {
  imageUrl: string;
  imageAlt: string;
  category: string;
  subcategory?: string;
  title: React.ReactNode;
  date: string;
  readTime: string;
}

export default function BlogHero({ imageUrl, imageAlt, category, subcategory, title, date, readTime }: BlogHeroProps) {
  return (
    <section style={{ position: "relative", width: "100%", height: "620px", overflow: "hidden" }}>
      <Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority style={{ filter: "brightness(0.55)" }} />
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.15) 100%)",
      }} />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 40px 56px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#c5a882",
            }}>
              {category}
            </span>
            {subcategory && (
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}>
                {subcategory}
              </span>
            )}
          </div>

          <h1 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 5vw, 54px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}>
            {title}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>
              {date}
            </span>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px" }}>·</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
