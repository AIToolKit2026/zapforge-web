import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  lede?: string;
  tone?: "dark" | "light";
};

/** The deck's section masthead: letter-spaced eyebrow, rule, headline, lede. */
export function SectionHeading({
  eyebrow,
  heading,
  lede,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className="mb-12 lg:mb-16">
      <div
        className={`flex items-baseline justify-between gap-4 border-b pb-4 ${
          dark ? "border-line-dark" : "border-line"
        }`}
      >
        <p
          className={`eyebrow ${dark ? "text-brand-bright" : "text-brand"}`}
        >
          Middle East banking &amp; financial services
        </p>
        <p
          className={`eyebrow hidden text-right sm:block ${
            dark ? "text-white/60" : "text-slate-body"
          }`}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={`mt-8 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={`mt-5 max-w-4xl text-base leading-relaxed text-pretty sm:text-lg ${
            dark ? "text-white/70" : "text-slate-body"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
