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
  websiteUrl?: string;
  rating?: string;
  caveat?: string;
}

export default function StudioListing({
  number, name, neighborhood, priceLevel, review, address, bestFor, signatureClass, bookingTip, websiteUrl, rating, caveat,
}: StudioListingProps) {
  const hasAddress = address && address !== "";
  return (
    <article className="r-pd r-st">
      <span className="pcc-studio-number r-pd-no">
        {number}
      </span>
      <div>
        <h2 className="r-d r-st-name">
          {name}
        </h2>
        <div className="r-pd-tg">
          <span className="r-pill">
            {neighborhood}
          </span>
          <span className="r-pill r-pill-black">
            {priceLevel}
          </span>
          {rating && (
            <span className="r-pill r-pill-o">
              {rating}
            </span>
          )}
        </div>
        {hasAddress && (
          <p className="r-sm r-st-addr">
            {address}
          </p>
        )}

        <p className="r-body r-st-review">
          {review}
        </p>

        {caveat && (
          <p className="r-st-caveat">
            Worth knowing: {caveat}
          </p>
        )}

        <dl className="pcc-studio-details r-st-details">
          <Detail label="Best For" value={bestFor} />
          <Detail label="Signature Class" value={signatureClass} />
          <Detail label="Booking Tip" value={bookingTip} />
        </dl>

        <a
          href={websiteUrl || `https://www.google.com/search?q=${encodeURIComponent(name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="r-btn r-btn-sm r-btn-o"
        >
          Visit Website
        </a>
      </div>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
