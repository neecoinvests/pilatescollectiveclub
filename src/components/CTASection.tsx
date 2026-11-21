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
    <section className="r-cta">
      <div className="r-wrap">
        <div className="r-cta-in">
          <h2 className="r-d">{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          <a href="/cities" className="r-btn">
            Explore City Guides →
          </a>
        </div>
      </div>
    </section>
  );
}
