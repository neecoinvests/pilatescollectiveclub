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
  // Cards that already carry their own lifestyle photo keep it; otherwise show the Amazon product photo when we have one.
  const productImageUrl = !showProductImage ? undefined : props.productImageUrl ?? (props.imageUrl ? undefined : amazonImageFor(props.affiliateUrl));
  return <ProductCardView {...props} productImageUrl={productImageUrl} />;
}
