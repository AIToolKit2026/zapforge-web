import { Container } from "./Section";
import RunMock from "./RunMock";
import { hero } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-line-dark bg-navy-950"
    >
      {/* The deck's signature left rule */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-1.5 bg-brand lg:block"
      />
      {/* Soft glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[38rem] w-[38rem] rounded-full bg-brand/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-forge/10 blur-[120px]"
      />

      <Container className="relative py-14 sm:py-16 lg:py-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand-bright uppercase">
          <span aria-hidden="true" className="text-forge">
            ⚡
          </span>
          {hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl lg:leading-[1.06]">
          {hero.headline}
          <span className="mt-2 block text-brand-bright">
            {hero.headlineAccent}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg">
          {hero.lede}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
          >
            {hero.primaryCta}
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="#product"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {hero.secondaryCta}
          </a>
        </div>

        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
          {hero.badges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-xs font-medium text-white/55"
            >
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-brand-bright"
              />
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-12 lg:mt-14">
          <RunMock />
        </div>
      </Container>
    </section>
  );
}
