type LogoProps = {
  /** "dark" = for use on a navy ground, "light" = for use on white */
  tone?: "dark" | "light";
  className?: string;
};

export default function Logo({ tone = "light", className = "" }: LogoProps) {
  return (
    <span
      className={`font-bold tracking-tight select-none ${className}`}
      aria-label="ZapForge"
    >
      <span className={tone === "dark" ? "text-brand-bright" : "text-brand"}>
        zap
      </span>
      <span className={tone === "dark" ? "text-white" : "text-ink"}>forge</span>
      <span className="text-forge">.</span>
    </span>
  );
}
