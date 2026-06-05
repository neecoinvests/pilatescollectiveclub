import Link from "next/link";
import Image from "next/image";

interface CityCardProps {
  city: string;
  country: string;
  href: string;
  studioCount?: number;
}

const cityImages: Record<string, string> = {
  // International
  Zurich: "/pictures/henrique-ferreira-omiTbS-nb_M-unsplash.jpg",
  London: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  Paris: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80",
  Geneva: "/pictures/tomi-blasic-tj0sM4gHlns-unsplash.jpg",
  Lausanne: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80",
  "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  "Los Angeles": "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80",
  Barcelona: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
  Amsterdam: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
  Berlin: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80",
  Sydney: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80",
  Dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  Singapore: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
  Miami: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
  Chicago: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
  "San Francisco": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
  Milan: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=80",
  Rome: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
  Stockholm: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80",
  Copenhagen: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80",
  "Hong Kong": "https://images.unsplash.com/photo-1507941097613-9f2157b69235?w=800&q=80",
  Tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  Melbourne: "https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=800&q=80",
  Toronto: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
  Lisbon: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80",
  // United States
  Austin: "https://images.unsplash.com/photo-pYl9U6FafRE?w=800&q=80",
  Seattle: "https://images.unsplash.com/photo-skUTVJi8-jc?w=800&q=80",
  Boston: "https://images.unsplash.com/photo-e5ZRWZizFF4?w=800&q=80",
  Denver: "https://images.unsplash.com/photo-OVE2SA0TVJE?w=800&q=80",
  "Washington DC": "https://images.unsplash.com/photo-bzXCVIkZ_4M?w=800&q=80",
  Atlanta: "https://images.unsplash.com/photo-Jy0s-88SdmI?w=800&q=80",
  Nashville: "https://images.unsplash.com/photo-rwKwShOn25k?w=800&q=80",
  Dallas: "https://images.unsplash.com/photo-uW-ka4bryug?w=800&q=80",
  Houston: "https://images.unsplash.com/photo-E554WbTUUwQ?w=800&q=80",
  Philadelphia: "https://images.unsplash.com/photo-1KHE6ER4hcI?w=800&q=80",
  Portland: "https://images.unsplash.com/photo-Ff4BbI31Czg?w=800&q=80",
  Minneapolis: "https://images.unsplash.com/photo-q8g2ccskR2A?w=800&q=80",
  "San Diego": "https://images.unsplash.com/photo-iLi4U0eskGk?w=800&q=80",
  Phoenix: "https://images.unsplash.com/photo-RcDEbNQsjHU?w=800&q=80",
  Charlotte: "https://images.unsplash.com/photo-EvjudCF6F0I?w=800&q=80",
  "Las Vegas": "https://images.unsplash.com/photo-9qFcebFl7Vo?w=800&q=80",
  "New Orleans": "https://images.unsplash.com/photo-gCCTBz8nXSA?w=800&q=80",
  "Salt Lake City": "https://images.unsplash.com/photo-iGpIf75390Q?w=800&q=80",
  Tampa: "https://images.unsplash.com/photo-0Mi8jZ8ewzY?w=800&q=80",
  Raleigh: "https://images.unsplash.com/photo-ICOLTTjYgaA?w=800&q=80",
  "San Antonio": "https://images.unsplash.com/photo-lEe9ak4ADBs?w=800&q=80",
  Sacramento: "https://images.unsplash.com/photo-AZmK9nSaQIk?w=800&q=80",
  Baltimore: "https://images.unsplash.com/photo-3LW-MzohI2o?w=800&q=80",
  Indianapolis: "https://images.unsplash.com/photo-3tWrSC2pEuQ?w=800&q=80",
  Orlando: "https://images.unsplash.com/photo-XTiutgITEAI?w=800&q=80",
  Pittsburgh: "https://images.unsplash.com/photo-_PwUa6vMgEI?w=800&q=80",
  Columbus: "https://images.unsplash.com/photo--Uev8KKQQI8?w=800&q=80",
  "St. Louis": "https://images.unsplash.com/photo-E27qyMgymcA?w=800&q=80",
  Cincinnati: "https://images.unsplash.com/photo-Qll2HurFq8M?w=800&q=80",
  "Kansas City": "https://images.unsplash.com/photo-rMaKy1DdcbI?w=800&q=80",
};

export default function CityCard({ city, country, href, studioCount }: CityCardProps) {
  const imageUrl = cityImages[city];

  return (
    <Link href={href} className="group block" style={{ textDecoration: "none" }}>
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Best Pilates studios in ${city}, ${country}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div style={{ position: "absolute", inset: 0, backgroundColor: "#ede9e3" }} />
        )}

        {/* Gradient overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)",
        }} />

        {/* Text */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 20px" }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "4px",
          }}>
            {country}
          </p>
          <h3 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "22px",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.1,
            margin: 0,
          }}>
            {city}
          </h3>
          {studioCount !== undefined && (
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              marginTop: "4px",
              letterSpacing: "0.05em",
            }}>
              {studioCount} curated studios
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
