"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface Post {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

const CATEGORIES = [
  "All",
  "Equipment",
  "Brand Guide",
  "Method",
  "Health",
  "Guide",
  "Beginners",
  "Performance",
  "Comparison",
  "Reading",
  "Travel",
];

const btn = (active: boolean) => ({
  fontFamily: "'Montserrat', sans-serif" as const,
  fontSize: "10px",
  fontWeight: active ? 600 : 400,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  padding: "7px 14px",
  border: active ? "1px solid #8b4a31" : "1px solid rgba(217,194,186,0.7)",
  backgroundColor: active ? "#8b4a31" : "transparent",
  color: active ? "#ffffff" : "#86736d",
  cursor: "pointer",
  borderRadius: "2px",
  transition: "all 0.15s",
  whiteSpace: "nowrap" as const,
});

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);
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

      {/* Featured post — only shown on "All" */}
      {active === "All" && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <Link href={featured.href} className="group block">
              <div
                className="grid md:grid-cols-2 gap-8 rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
              >
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 inline-block"
                    style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {featured.category} · Featured
                  </span>
                  <h2
                    className="text-3xl font-semibold leading-snug mb-4 group-hover:text-[#8b4a31] transition-colors"
                    style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}>
                    {featured.excerpt}
                  </p>
                  <span className="text-sm font-semibold" style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}>
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
            <p style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif", fontSize: "14px" }}>No articles in this category yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link key={post.href} href={post.href} className="group block">
                  <div
                    className="rounded-xl overflow-hidden h-full flex flex-col"
                    style={{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.4)", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.15em] mb-2 block"
                        style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {post.category} · {post.readTime}
                      </span>
                      <h3
                        className="text-base font-semibold leading-snug mb-2 group-hover:text-[#8b4a31] transition-colors"
                        style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-xs leading-relaxed mt-auto pt-2" style={{ color: "#86736d", fontFamily: "'Montserrat', sans-serif" }}>
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
