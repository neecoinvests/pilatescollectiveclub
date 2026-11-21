import Image from "next/image";
import Link from "next/link";

interface RelatedArticle {
  title: string;
  href: string;
  readTime: string;
  imageUrl: string;
}

interface BlogSidebarProps {
  related: RelatedArticle[];
}

export default function BlogSidebar({ related }: BlogSidebarProps) {
  return (
    <aside className="r-side w-full lg:w-80 shrink-0">
      <h4 className="r-d">Related Reading</h4>
      {related.map((article) => (
        <Link key={article.href} href={article.href} className="r-side-a">
          <div className="r-side-im">
            <Image src={article.imageUrl} alt={article.title} fill sizes="(max-width: 1024px) 100vw, 320px" />
          </div>
          <h5>{article.title}</h5>
          <p>{article.readTime}</p>
        </Link>
      ))}
    </aside>
  );
}
