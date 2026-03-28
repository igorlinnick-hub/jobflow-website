type BadgeColor = "blue" | "green" | "yellow" | "red" | "purple" | "gray";

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorStyles: Record<BadgeColor, string> = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-emerald-100 text-emerald-700",
  yellow: "bg-amber-100 text-amber-700",
  red: "bg-red-100 text-red-700",
  purple: "bg-purple-100 text-purple-700",
  gray: "bg-gray-100 text-gray-600",
};

export default function Badge({ children, color = "gray", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        colorStyles[color],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
