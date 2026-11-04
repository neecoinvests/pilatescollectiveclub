import amazonImages from "@/data/amazon-images.json";

// Product photos from the Amazon Creators API: ASIN -> image URL on Amazon's CDN (hotlinked, never rehosted).
const IMAGES = amazonImages as Record<string, string>;

/** The Amazon product photo for an Amazon product link, if we have one. */
export function amazonImageFor(url?: string): string | undefined {
  const asin = url?.match(/amazon\.[a-z.]+\/(?:[^/?#]+\/)?(?:dp|gp\/product)\/([A-Z0-9]{10})/)?.[1];
  return asin ? IMAGES[asin] : undefined;
}
