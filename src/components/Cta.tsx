import { Container } from "./Section";
import { contact, cta } from "@/content/site";

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-navy-950 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-1.5 bg-brand lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-[32rem] w-[32rem] rounded-full bg-brand/15 blur-[130px]"
      />

      <Container className="relative">
        <h2 className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
          {cta.heading}
        </h2>
        <p className="mt-5 text-lg text-white/70">{cta.lede}</p>

        <ol className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {cta.phases.map((phase) => (
            <li
              key={phase.label}
              className="rounded-lg border border-line-dark bg-navy-800/50 p-6"
            >
              <p className="text-lg font-bold text-brand-bright">
                {phase.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {phase.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-lg bg-brand p-7 sm:p-8">
          <p className="text-lg font-semibold text-white text-balance">
            {cta.banner}
          </p>
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(
              "ZapForge — 20 minutes on our modernisation workstream",
            )}`}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-white/90"
          >
            Email {contact.name.split(" ")[0]}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
