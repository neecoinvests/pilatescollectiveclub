"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <aside className="w-full lg:w-80 shrink-0 space-y-12">
      {/* Related Reading */}
      <div className="space-y-6">
        <h4 className="text-2xl font-semibold pb-4" style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif", borderBottom: "2px solid #8b4a31" }}>Related Reading</h4>
        {related.map((article) => (
          <Link key={article.href} href={article.href} className="group block">
            <div className="relative overflow-hidden rounded-lg mb-3" style={{ height: "128px" }}>
              <Image src={article.imageUrl} alt={article.title} fill className="object-cover transition-all duration-500" style={{ filter: "grayscale(1)" }} onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")} onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(1)")} />
            </div>
            <h5 className="font-semibold text-base leading-snug mb-1 transition-colors group-hover:text-[#8b4a31]" style={{ fontFamily: "'Playfair Display', serif", color: "#1b1c1c" }}>{article.title}</h5>
            <p className="text-xs" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>{article.readTime}</p>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="p-8 rounded-xl overflow-hidden relative" style={{ backgroundColor: "#8b4a31" }}>
        <div className="relative z-10">
          <h4 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff" }}>The Weekly Collective</h4>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Montserrat', sans-serif" }}>Curated insights on movement, studios, and mindful living — directly to your inbox.</p>
          {done ? (
            <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Montserrat', sans-serif" }}>Thanks for subscribing!</p>
          ) : (
            <>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="w-full rounded-lg mb-3 px-4 py-2.5 text-sm outline-none" style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "white", fontFamily: "'Montserrat', sans-serif" }} />
              <button onClick={() => email && setDone(true)} className="w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-[0.15em] transition-opacity hover:opacity-90" style={{ backgroundColor: "white", color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>Subscribe</button>
            </>
          )}
        </div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: "#a86247", opacity: 0.5 }} />
      </div>
    </aside>
  );
}
