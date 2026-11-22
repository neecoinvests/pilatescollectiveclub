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
      <section className="r-ah">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="r-ah-cr r-sm">
            <span>{category}</span>
            {showSub && (
              <>
                <span>·</span>
                <span>{subcategory}</span>
              </>
            )}
          </div>
          <h1 className="r-d r-ah-long">
            {title}
          </h1>
          <p className="r-ah-meta mb-6"><span>{dateLabel ?? date}</span> · <span>{readTime}</span></p>
          {topPick}
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="pcc-city-hero-image r-ah-img">
            <Image src={imageUrl} alt={imageAlt} fill preload sizes="(max-width: 1320px) 100vw, 1320px" />
          </div>
        </div>
      </section>
    </>
  );
}
