export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-6xl",
  };

  return (
    <span className={`${sizeClasses[size]} font-mono font-bold tracking-tight`}>
      <span className="text-ochre">&lt;</span>
      <span className="text-cream">DB</span>
      <span className="text-ochre"> /&gt;</span>
    </span>
  );
}
