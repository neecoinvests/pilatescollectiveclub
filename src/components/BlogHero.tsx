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
    <section className="relative w-full overflow-hidden" style={{ height: "640px" }}>
      <Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority />
      {/* Gradient: strong at bottom, fades to transparent at top */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(252,249,248,1) 0%, rgba(252,249,248,0.6) 35%, rgba(252,249,248,0.05) 70%, transparent 100%)" }} />
      {/* Text overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.15em]" style={{ backgroundColor: "rgba(214, 231, 217, 0.9)", color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{category}</span>
            {subcategory && <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>· {subcategory}</span>}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>{title}</h1>
          <div className="flex items-center gap-3 text-sm" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
            <span>{date}</span>
            <span style={{ color: "#d9c2ba" }}>·</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
