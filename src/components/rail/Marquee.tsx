"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { onFrameWhileVisible, reducedMotion } from "@/lib/railScroll";

export type MarqueeItem = { label: string; href: string };

// Rows of outlined names that drift sideways with scroll. Each name links to
// its page for mouse and touch. The rows repeat every name, so they stay out
// of the keyboard order and hidden from assistive technology: the cards
// below carry the same links once.
export default function Marquee({ rows }: { rows: MarqueeItem[][] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || reducedMotion()) return;
    const lines = Array.from(el.querySelectorAll<HTMLElement>(".r-mq"));
    return onFrameWhileVisible(el, () => {
      lines.forEach((line, i) => {
        const dir = i % 2 === 0 ? -1 : 1;
        const top = line.getBoundingClientRect().top;
        line.style.transform = `translateX(${(window.innerHeight - top) * 0.22 * dir - (dir < 0 ? 0 : 200)}px)`;
      });
    });
  }, []);

  return (
    <div ref={root} className="r-mq-wrap" aria-hidden="true">
      {rows.map((row, i) => (
        <div key={i} className="r-mq" style={i % 2 ? { marginLeft: "-60vw" } : undefined}>
          {[...row, ...row].map((item, k) => (
            <span key={k}>
              <Link href={item.href} tabIndex={-1}>
                {item.label}
              </Link>
              <i>●</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
