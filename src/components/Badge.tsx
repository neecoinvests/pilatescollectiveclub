type BadgeVariant = "affiliate" | "new" | "featured" | "popular";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; label: string }> = {
  affiliate: {
    bg: "#ede9e3",
    text: "#3a3530",
    label: "Affiliate link",
  },
  new: {
    bg: "#c5a882",
    text: "#0a0a0a",
    label: "New",
  },
  featured: {
    bg: "#0a0a0a",
    text: "#f7f4f0",
    label: "Featured",
  },
  popular: {
    bg: "#ede9e3",
    text: "#0a0a0a",
    label: "Popular",
  },
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={`r-pill ${className}`}
      style={{ backgroundColor: styles.bg, color: styles.text }}
    >
      {styles.label}
    </span>
  );
}
