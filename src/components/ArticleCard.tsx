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
    <Link href={href} className="r-ac">
      <article>
        <div className="r-ac-top">
          <span className="r-pill r-pill-gold">{category}</span>
          {date && <span>{date}</span>}
        </div>

        <h3>{title}</h3>

        <p>{excerpt}</p>

        <span className="r-ac-read">Read → {readTime}</span>
      </article>
    </Link>
  );
}
