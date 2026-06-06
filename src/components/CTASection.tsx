interface CTASectionProps {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  showSearch?: boolean;
}

export default function CTASection({
  title,
  subtitle,
}: CTASectionProps) {
  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: "#8b4a31" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#ffffff",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-lg mb-8 opacity-85"
            style={{ color: "#ffffff", fontFamily: "'Montserrat', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
        <a
          href="/cities/zurich"
          className="inline-block px-8 py-3.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "#ffffff",
            color: "#8b4a31",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Explore City Guides →
        </a>
      </div>
    </section>
  );
}
