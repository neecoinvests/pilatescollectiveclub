import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageUrl?: string;
  /** Square product photo (e.g. an Amazon image URL), shown beside the text on desktop and above it on mobile. */
  productImageUrl?: string;
  ctaLabel?: string;
  /** Description containing inline HTML (bold, links) from the page's own copy. */
  descriptionHtml?: string;
}

export default function ProductCardView({ name, description, price, affiliateUrl = "#", imageUrl, productImageUrl, ctaLabel, descriptionHtml }: ProductCardProps) {
  const buttonLabel = ctaLabel ?? (/amazon\.[a-z.]+\//.test(affiliateUrl) ? "Shop on Amazon" : "Shop Direct");
  const linkRel = /amazon\./i.test(affiliateUrl) ? "noopener noreferrer nofollow sponsored" : "noopener noreferrer nofollow";
  return (
    // Container query: photo beside the text when the card is wide (single-column lists), above it in narrow grid cells.
    <div className="r-pc">
      <div className="r-pc-in">
        {productImageUrl ? (
          <a href={affiliateUrl} target="_blank" rel={linkRel} aria-label={`${name} on Amazon`} className="r-pc-im r-pc-im-product">
            <Image src={productImageUrl} alt={name} fill unoptimized sizes="280px" />
          </a>
        ) : imageUrl ? (
          <div className="r-pc-im">
            <Image src={imageUrl} alt={`${name}: Pilates equipment`} fill sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 320px" />
          </div>
        ) : null}
        <div className="r-pc-tx">
          <div className="r-pc-hd">
            <h3>{name}</h3>
            {price && <span className="r-pc-price">{price}</span>}
          </div>
          <p dangerouslySetInnerHTML={descriptionHtml ? { __html: descriptionHtml } : undefined}>
            {descriptionHtml ? null : description}
          </p>
          <a href={affiliateUrl} target="_blank" rel={linkRel} className="r-btn r-btn-sm r-btn-block">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
