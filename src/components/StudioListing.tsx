interface StudioListingProps {
  number: string;
  name: string;
  neighborhood: string;
  priceLevel: string;
  review: string;
  address: string;
  bestFor: string;
  signatureClass: string;
  bookingTip: string;
}

export default function StudioListing({
  number,
  name,
  neighborhood,
  priceLevel,
  review,
  address,
  bestFor,
  signatureClass,
  bookingTip,
}: StudioListingProps) {
  return (
    <article
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(217, 194, 186, 0.35)",
        boxShadow: "0 2px 12px -4px rgba(27,28,28,0.06)",
      }}
    >
      <div className="p-8 md:p-10">
        {/* Number + Name row */}
        <div className="flex items-start gap-6 mb-6">
          <span
            className="text-5xl font-light leading-none shrink-0"
            style={{ color: "#d9c2ba", fontFamily: "'Playfair Display', serif" }}
          >
            {number}
          </span>
          <div className="flex-1 min-w-0">
            <h2
              className="text-2xl font-semibold mb-1 leading-snug"
              style={{ color: "#1b1c1c", fontFamily: "'Playfair Display', serif" }}
            >
              {name}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="flex items-center gap-1.5 text-sm"
                style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8b4a31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {neighborhood}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
              >
                {priceLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Review */}
        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
        >
          {review}
        </p>

        {/* Details grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 rounded-xl p-6 mb-6"
          style={{ backgroundColor: "#f6f3f2" }}
        >
          <Detail label="Address" value={address} />
          <Detail label="Best For" value={bestFor} />
          <Detail label="Signature Class" value={signatureClass} />
          <Detail label="Booking Tip" value={bookingTip} />
        </div>

        {/* CTA */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "#8b4a31",
            color: "#ffffff",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Visit Website
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt
        className="text-xs font-semibold uppercase tracking-widest mb-0.5"
        style={{ color: "#8b4a31", fontFamily: "'Montserrat', sans-serif" }}
      >
        {label}
      </dt>
      <dd
        className="text-sm"
        style={{ color: "#53433e", fontFamily: "'Montserrat', sans-serif" }}
      >
        {value}
      </dd>
    </div>
  );
}
