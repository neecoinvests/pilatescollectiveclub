"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface FeaturedItem {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

const INTERVAL_MS = 6000;

export default function FeaturedRotator({ items }: { items: FeaturedItem[] }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 280);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => goTo((index + 1) % items.length), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [index, items.length, goTo]);

  const item = items[index];

  return (
    <div>
      <Link
        href={item.href}
        style={{
          textDecoration: "none",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          alignItems: "stretch",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.28s ease",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px", backgroundColor: "#f0ece6" }}>
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div style={{
          backgroundColor: "#f7f4f0",
          padding: "64px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: "#c5a882",
            display: "block",
            marginBottom: "20px",
          }}>
            {item.category}
          </span>
          <h2 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 400,
            color: "#0a0a0a",
            lineHeight: 1.15,
            marginBottom: "24px",
            letterSpacing: "-0.01em",
          }}>
            {item.title}
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 300,
            color: "#6b6560",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}>
            {item.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#0a0a0a",
              borderBottom: "1px solid #0a0a0a",
              paddingBottom: "2px",
            }}>
              Read {item.category === "City Guide" ? "Guide" : "Article"} →
            </span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 300, color: "#9a9490" }}>
              {item.readTime}
            </span>
          </div>
        </div>
      </Link>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "28px" }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to featured item ${i + 1}`}
            style={{
              width: i === index ? "28px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: i === index ? "#0a0a0a" : "#d9c2ba",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
