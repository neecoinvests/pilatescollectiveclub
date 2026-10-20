import Image from "next/image";

interface BlogHeroProps {
  imageUrl: string;
  imageAlt: string;
  category: string;
  subcategory?: string;
  title: React.ReactNode;
  date: string;
  readTime: string;
  // Optional "Prices checked …" style label shown instead of `date`.
  dateLabel?: string;
  // Optional Top pick box shown under the date line, as on the top guides.
  topPick?: React.ReactNode;
}

// Same header as the top-performing guides: eyebrow, serif H1, date line,
// optional Top pick, then the hero photo underneath.
export default function BlogHero({ imageUrl, imageAlt, category, subcategory, title, date, readTime, dateLabel, topPick }: BlogHeroProps) {
  const showSub = subcategory && subcategory !== readTime;
  return (
    <>
      <section className="pt-32 pb-16 px-6" style={{ backgroundColor: "#fcf9f8" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>{category}</span>
            {showSub && (
              <>
                <span style={{ color: "#d9c2ba" }}>·</span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#536257", fontFamily: "'Montserrat', sans-serif" }}>{subcategory}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}>
            {title}
          </h1>
          <p className="text-sm mb-6" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{dateLabel ?? date} · {readTime}</p>
          {topPick}
          <div className="w-16 h-px" style={{ backgroundColor: "#d9c2ba" }} />
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pcc-city-hero-image w-full rounded-2xl overflow-hidden relative" style={{ height: "420px" }}>
            <Image src={imageUrl} alt={imageAlt} fill className="object-cover" priority style={{ filter: "brightness(0.85)" }} />
          </div>
        </div>
      </section>
    </>
  );
}
