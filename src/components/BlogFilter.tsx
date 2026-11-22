"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/categories";

export { CATEGORIES };

export interface Post {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}


const btn = (active: boolean) => ({ fontSize: "12.5px", fontWeight: active ? 600 : 400, padding: "7px 14px", border: active ? "1px solid #0a0a0a" : "1px solid #ddd6cc", backgroundColor: active ? "#0a0a0a" : "transparent", color: active ? "#ffffff" : "#6f6964", cursor: "pointer", borderRadius: "2px", transition: "all 0.15s", whiteSpace: "nowrap" as const });

export default function BlogFilter({ posts, initialCategory = "All" }: { posts: Post[]; initialCategory?: string }) {
  const [active, setActive] = useState(initialCategory);

  const featured = posts.find((p) => p.featured) ?? null;
  const rest = posts.filter((p) => p !== featured);
  const filtered = active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter */}
      <div className="px-6 mb-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={btn(active === cat)}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured post, only shown on "All" */}
      {active === "All" && featured && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <Link href={featured.href} className="group block">
              <div
                className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#ede9e3", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span
                    className="text-[12.5px] font-bold mb-4 inline-block"
                    style={{ color: "#0a0a0a" }}
                  >
                    {featured.category} · Featured
                  </span>
                  <h2
                    className="mb-4 group-hover:text-[#a98a5f] transition-colors r-d r-h2"
                  >
                    {featured.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#3a3530" }}>
                    {featured.excerpt}
                  </p>
                  <span className="text-sm font-semibold" style={{ color: "#0a0a0a" }}>
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <p style={{ color: "#6f6964", fontSize: "16px" }}>No articles in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link key={post.href} href={post.href} className="group block">
                  <div
                    className="rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{ backgroundColor: "#ede9e3", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span
                        className="text-[12.5px] font-bold mb-2 block"
                        style={{ color: "#0a0a0a" }}
                      >
                        {post.category} · {post.readTime}
                      </span>
                      <h3
                        className="text-base leading-snug mb-2 group-hover:text-[#a98a5f] transition-colors r-hx"
                        style={{ color: "#0a0a0a" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-xs leading-relaxed mt-auto pt-2" style={{ color: "#6f6964" }}>
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
