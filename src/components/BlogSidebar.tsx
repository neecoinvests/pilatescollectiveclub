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
    <aside className="w-full lg:w-80 shrink-0 space-y-12">
      <div className="space-y-6">
        <h4 className="text-2xl font-semibold pb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif", borderBottom: "2px solid #8b4a31" }}>Related Reading</h4>
        {related.map((article) => (
          <Link key={article.href} href={article.href} className="group block">
            <div className="relative overflow-hidden rounded-lg mb-3" style={{ height: "128px" }}>
              <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
            </div>
            <h5 className="font-semibold text-base leading-snug mb-1 transition-colors group-hover:text-[#8b4a31]" style={{ fontFamily: "'Playfair Display', serif", color: "#1b1c1c" }}>{article.title}</h5>
            <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{article.readTime}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
