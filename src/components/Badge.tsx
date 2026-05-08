type BadgeVariant = "affiliate" | "new" | "featured" | "popular";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; label: string }> = {
  affiliate: {
    bg: "#d6e7d9",
    text: "#3b4a40",
    label: "Affiliate link",
  },
  new: {
    bg: "#ffdbce",
    text: "#71361e",
    label: "New",
  },
  featured: {
    bg: "#e8e2d6",
    text: "#4a473e",
    label: "Featured",
  },
  popular: {
    bg: "#dcd9d9",
    text: "#303030",
    label: "Popular",
  },
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "0.025em",
      }}
    >
      {styles.label}
    </span>
  );
}
