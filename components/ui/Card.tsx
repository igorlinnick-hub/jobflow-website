interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({ children, className = "", padding = "md" }: CardProps) {
  return (
    <div
      className={[
        "bg-surface border border-border rounded-xl",
        paddingStyles[padding],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
