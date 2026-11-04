import ProductCardView from "@/components/ProductCardView";
import amazonImages from "@/data/amazon-images.json";

// Product photos come from the Amazon Creators API (ASIN -> image URL on Amazon's CDN, hotlinked, never rehosted).
const IMAGES = amazonImages as Record<string, string>;

function amazonImageFor(url?: string) {
  const asin = url?.match(/amazon\.[a-z.]+\/(?:[^/?#]+\/)?(?:dp|gp\/product)\/([A-Z0-9]{10})/)?.[1];
  return asin ? IMAGES[asin] : undefined;
}

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageUrl?: string;
  productImageUrl?: string;
  ctaLabel?: string;
  /** Set to false when the link goes to a stand-in product, so its photo is not shown under another product's name. */
  showProductImage?: boolean;
}

export default function ProductCard({ showProductImage = true, ...props }: ProductCardProps) {
  // Cards that already carry their own lifestyle photo keep it; otherwise show the Amazon product photo when we have one.
  const productImageUrl = !showProductImage ? undefined : props.productImageUrl ?? (props.imageUrl ? undefined : amazonImageFor(props.affiliateUrl));
  return <ProductCardView {...props} productImageUrl={productImageUrl} />;
}
