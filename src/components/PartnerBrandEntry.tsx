import Image from "next/image";

// A paid "partner" entry rendered inside an existing buying guide. Styled to
// match the guide's own cards; used only by the hidden partner-preview mockups.
// Brand facts come from the partner's own published pages and are attributed
// as such; assets not supplied yet are shown as marked placeholders.

export type PartnerBrandEntryProps = {
  variant: "brand" | "machine";
  brandName: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  points: string[];
  pointsHeading: string;
  details: { label: string; value: string; toConfirm?: boolean }[];
  ctaLabel: string;
  ctaHref: string;
  sourceNote: string;
  sponsorName?: string;
};

const sans = "'Montserrat', sans-serif";
const serif = "'Playfair Display', serif";

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "#9a857d", fontStyle: "italic", backgroundColor: "#fbf6f1", borderBottom: "1px dashed #c5a882", padding: "0 3px" }}>
      {children}
    </span>
  );
}

function PartnerChip() {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full" style={{ backgroundColor: "#eef1ec", color: "#536257", fontFamily: sans }}>
      Featured Partner
    </span>
  );
}

export default function PartnerBrandEntry(props: PartnerBrandEntryProps) {
  const isBrand = props.variant === "brand";
  return (
    <div>
      {!isBrand && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-semibold" style={{ color: "#536257", fontFamily: serif }}>✦</span>
          <PartnerChip />
        </div>
      )}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#ffffff", border: "1px solid rgba(83,98,87,0.35)", boxShadow: "0 2px 14px rgba(83,98,87,0.10)" }}
      >
        {/* Image */}
        <div className="relative w-full" style={{ height: isBrand ? "260px" : "230px" }}>
          <Image src={props.imageSrc} alt={props.imageAlt} fill className="object-cover" style={{ filter: "brightness(0.92)" }} />
        </div>

        <div className="p-8">
          {/* Header row */}
          <div className="flex items-center gap-4 mb-5">
            <div
              className="shrink-0 rounded-xl flex items-center justify-center text-center"
              style={{ width: 64, height: 64, border: "1.5px dashed #c5a882", backgroundColor: "#fcf9f8", color: "#9a857d", fontFamily: sans, fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.3 }}
            >
              LOGO<br />PLACE-<br />HOLDER
            </div>
            <div>
              {isBrand && <div className="mb-2"><PartnerChip /></div>}
              <h3 className="text-2xl font-semibold" style={{ color: "#1b1c1c", fontFamily: serif }}>{props.brandName}</h3>
            </div>
          </div>

          {/* Detail lines */}
          <div className="mb-4 space-y-1">
            {props.details.map((d) => (
              <p key={d.label} className="text-xs" style={{ color: "#86736d", fontFamily: sans }}>
                <span className="font-semibold" style={{ color: "#8b4a31" }}>{d.label}:</span>{" "}
                {d.toConfirm ? <Placeholder>{d.value}</Placeholder> : d.value}
              </p>
            ))}
          </div>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "#53433e", fontFamily: sans }}>{props.description}</p>

          {/* Selling points */}
          <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "#f6f8f5" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: "#536257", fontFamily: sans }}>{props.pointsHeading}</p>
            <ul className="space-y-1.5">
              {props.points.map((p) => (
                <li key={p} className="text-xs leading-relaxed flex gap-2" style={{ color: "#53433e", fontFamily: sans }}>
                  <span style={{ color: "#536257", flexShrink: 0 }}>+</span>{p}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={props.ctaHref}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block px-5 py-2.5 rounded-xl text-xs font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#536257", color: "#ffffff", fontFamily: sans, textDecoration: "none" }}
            >
              {props.ctaLabel}
            </a>
          </div>

          <p className="text-[11px] mt-6 pt-4 leading-relaxed" style={{ color: "#a08f88", fontFamily: sans, borderTop: "1px solid rgba(217,194,186,0.3)" }}>
            {props.sourceNote}
          </p>
        </div>
      </div>
    </div>
  );
}
