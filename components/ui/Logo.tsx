export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-6xl",
  };

  return (
    <span className={`${sizeClasses[size]} font-mono font-bold tracking-tight`}>
      <span className="text-neon-cyan">&lt;</span>
      <span className="text-neon-light">DB</span>
      <span className="text-neon-cyan"> /&gt;</span>
    </span>
  );
}
