import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  date?: string;
  imageUrl?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  href,
  category,
  readTime,
  date,
  imageUrl,
}: ArticleCardProps) {
  return (
    <Link href={href} className="group block">
      <article
        className="rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-md"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid rgba(217, 194, 186, 0.35)",
          boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #e8e2d6 0%, #f0eded 50%, #d9c2ba 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {category}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              {category}
            </span>
            {date && (
              <>
                <span style={{ color: "#d9c2ba" }}>·</span>
                <span
                  className="text-xs"
                  style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {date}
                </span>
              </>
            )}
          </div>

          <h3
            className="text-lg font-semibold leading-snug mb-3 group-hover:text-[#8b4a31] transition-colors flex-1"
            style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
          >
            {excerpt}
          </p>

          <div className="flex items-center gap-1 mt-auto">
            <span
              className="text-xs font-semibold"
              style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
            >
              Read article
            </span>
            <svg
              className="transition-transform group-hover:translate-x-1"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b4a31"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span
              className="text-xs ml-2"
              style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}
            >
              {readTime}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
