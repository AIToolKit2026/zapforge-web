import { Container } from "./Section";
import { contact, hero } from "@/content/site";

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

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl lg:leading-[1.08]">
          {hero.headline}
          <span className="mt-3 block text-brand-bright">
            {hero.headlineAccent}
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
          {hero.lede}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
          >
            Book 20 minutes
          </a>
          <a
            href="#gates"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            See how the gates work
          </a>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hero.badges.map((badge) => (
            <li
              key={badge}
              className="rounded-md border border-line-dark bg-navy-800/60 px-4 py-3.5 text-center text-xs font-semibold tracking-[0.12em] text-brand-bright uppercase"
            >
              {badge}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-2 border-t border-line-dark pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {contact.name} ·{" "}
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </p>
          <p className="italic">{contact.parentLine}</p>
        </div>
      </Container>
    </section>
  );
}
