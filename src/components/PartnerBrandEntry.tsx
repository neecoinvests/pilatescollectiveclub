import Image from "next/image";

// A paid "partner" entry rendered inside an existing buying guide. Styled to
// match the guide's own cards; used for paid partner placements.
// Brand facts come from the partner's own published pages and are attributed
// as such; assets not supplied yet are shown as marked placeholders.

export type PartnerBrandEntryProps = {
  variant: "brand" | "machine";
  brandName: string;
  imageSrc: string;
  imageAlt: string;
  // CSS object-position for the photo, e.g. "center 80%" to keep a low subject in frame.
  imagePosition?: string;
  description: string;
  points: string[];
  pointsHeading: string;
  details: { label: string; value: string; toConfirm?: boolean }[];
  ctaLabel: string;
  ctaHref: string;
  sourceNote: string;
  sponsorName?: string;
  logoSrc?: string;
};


function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "#9a857d", fontStyle: "italic", backgroundColor: "#fbf6f1", borderBottom: "1px dashed #c5a882", padding: "0 3px" }}>
      {children}
    </span>
  );
}

function PartnerChip() {
  return (
    <span className="text-[12.5px] font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#eef1ec", color: "#3a3530" }}>
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
          <span className="text-2xl r-hx" style={{ color: "#3a3530" }}>✦</span>
          <PartnerChip />
        </div>
      )}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: "#ede9e3", boxShadow: "0 2px 14px #ddd6cc" }}
      >
        {/* Image */}
        <div className="relative w-full" style={{ height: isBrand ? "260px" : "230px" }}>
          <Image src={props.imageSrc} alt={props.imageAlt} fill className="object-cover" style={{ objectPosition: props.imagePosition ?? "center" }} />
        </div>

        <div className="p-8">
          {/* Header row */}
          <div className="flex items-center gap-4 mb-5">
            {props.logoSrc ? (
              <div className="shrink-0 relative rounded-2xl overflow-hidden" style={{ width: 64, height: 64, backgroundColor: "#ede9e3" }}>
                <Image src={props.logoSrc} alt={`${props.sponsorName ?? props.brandName} logo`} fill sizes="64px" className="object-contain p-1.5" />
              </div>
            ) : (
              <div
                className="shrink-0 rounded-xl flex items-center justify-center text-center"
                style={{ width: 64, height: 64, border: "1.5px dashed #c5a882", backgroundColor: "#f7f4f0", color: "#9a857d", fontSize: "9px", fontWeight: 600, lineHeight: 1.3 }}
              >
                LOGO<br />PLACE-<br />HOLDER
              </div>
            )}
            <div>
              {isBrand && <div className="mb-2"><PartnerChip /></div>}
              <h3 className="text-2xl r-hx" style={{ color: "#0a0a0a" }}>{props.brandName}</h3>
            </div>
          </div>

          {/* Detail lines */}
          <div className="mb-4 space-y-1">
            {props.details.map((d) => (
              <p key={d.label} className="text-xs" style={{ color: "#6f6964" }}>
                <span className="font-semibold" style={{ color: "#0a0a0a" }}>{d.label}:</span>{" "}
                {d.toConfirm ? <Placeholder>{d.value}</Placeholder> : d.value}
              </p>
            ))}
          </div>

          <p className="text-base leading-relaxed mb-6" style={{ color: "#3a3530" }}>{props.description}</p>

          {/* Selling points */}
          <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "#ede9e3" }}>
            <p className="text-[12.5px] font-bold mb-2.5" style={{ color: "#3a3530" }}>{props.pointsHeading}</p>
            <ul className="space-y-1.5">
              {props.points.map((p) => (
                <li key={p} className="text-xs leading-relaxed flex gap-2" style={{ color: "#3a3530" }}>
                  <span style={{ color: "#3a3530", flexShrink: 0 }}>+</span>{p}
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
              className="r-btn r-btn-sm"
            >
              {props.ctaLabel}
            </a>
          </div>

          <p className="text-[11px] mt-6 pt-4 leading-relaxed" style={{ color: "#6f6964", borderTop: "1px solid #ddd6cc" }}>
            {props.sourceNote}
          </p>
        </div>
      </div>
    </div>
  );
}
