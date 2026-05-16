interface ProductSchemaItem {
  name: string;
  description: string;
  price?: string;
  image?: string;
}

export default function ProductListSchema({ products, pageUrl }: { products: ProductSchemaItem[]; pageUrl: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": pageUrl,
    "numberOfItems": products.length,
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "description": p.description,
        ...(p.image ? { "image": p.image } : {}),
        ...(p.price
          ? {
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": p.price.replace(/[^0-9.]/g, "") || undefined,
                "availability": "https://schema.org/InStock",
              },
            }
          : {}),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
