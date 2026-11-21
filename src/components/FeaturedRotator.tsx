import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import HorizontalTrack from "@/components/rail/HorizontalTrack";

export interface FeaturedItem {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  readTime: string;
  imageUrl: string;
  affiliateUrl?: string;
  affiliateLabel?: string;
}

// The featured stories as a horizontal carriage track. Every item is a card
// in the server HTML; the track only moves them sideways.
export default function FeaturedRotator({ items, lead }: { items: FeaturedItem[]; lead?: ReactNode }) {
  return (
    <HorizontalTrack>
      {lead && <div className="r-hs-lead">{lead}</div>}
      {items.map((item, i) => {
        const isCity = item.category === "City Guide";
        return (
          <article key={item.href} className="r-card" data-track-item>
            {/* Image: clicks through to article */}
            <Link href={item.href} className="r-card-ph" tabIndex={-1}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 520px) 78vw, 400px"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </Link>

            <div className="r-card-tx">
              <span className="r-card-c">{item.category}</span>

              <Link href={item.href} className="r-card-t">
                <h2>{item.title}</h2>
              </Link>

              <p>{item.excerpt}</p>

              <div className="r-card-ac">
                <Link href={item.href}>
                  <span>Read {isCity ? "Guide" : "Article"} →</span>
                </Link>

                {item.affiliateUrl && (
                  <a href={item.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="r-card-shop">
                    {item.affiliateLabel ?? "Shop on Amazon →"}
                  </a>
                )}

                <span className="r-card-m">{item.readTime}</span>
              </div>
            </div>
          </article>
        );
      })}
    </HorizontalTrack>
  );
}
