import ProductCardView from "@/components/ProductCardView";
import { amazonImageFor } from "@/lib/amazonImages";

interface ProductCardProps {
  name: string;
  description: string;
  price?: string;
  affiliateUrl?: string;
  imageUrl?: string;
  productImageUrl?: string;
  ctaLabel?: string;
  descriptionHtml?: string;
  /** Set to false when the link goes to a stand-in product, so its photo is not shown under another product's name. */
  showProductImage?: boolean;
}

export default function ProductCard({ showProductImage = true, ...props }: ProductCardProps) {
  // The real Amazon product photo always wins over a stock lifestyle photo; the lifestyle photo is only used when there is no product photo.
  const productImageUrl = !showProductImage ? undefined : props.productImageUrl ?? amazonImageFor(props.affiliateUrl);
  return <ProductCardView {...props} imageUrl={productImageUrl ? undefined : props.imageUrl} productImageUrl={productImageUrl} />;
}
