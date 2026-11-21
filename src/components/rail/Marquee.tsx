"use client";

import { useEffect, useRef } from "react";
import { onFrameWhileVisible, reducedMotion } from "@/lib/railScroll";

// Decorative rows of outlined names that drift sideways with scroll.
// Not links and hidden from assistive technology: the real links are the cards below.
export default function Marquee({ rows }: { rows: string[][] }) {
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
          {[...row, ...row].map((name, k) => (
            <span key={k}>
              {name}
              <i>●</i>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
