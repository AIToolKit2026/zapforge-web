import { Container, SectionHeading } from "./Section";
import { workstreams } from "@/content/site";

export default function Workstreams() {
  return (
    <section id="workstreams" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={workstreams.eyebrow}
          heading={workstreams.heading}
          lede={workstreams.lede}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {workstreams.columns.map((col) => (
            <article
              key={col.title}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm"
            >
              <header className="bg-mist px-6 py-4">
                <p className="eyebrow text-brand">{col.title}</p>
                <p className="mt-1 text-sm text-slate-body italic">
                  {col.subtitle}
                </p>
              </header>

              <div className="flex flex-1 flex-col gap-3 p-5">
                {col.starred.map((item) => (
                  <p
                    key={item}
                    className="flex items-start gap-2.5 rounded-md border border-forge/25 bg-forge/[0.06] px-4 py-3 text-sm font-semibold text-ink"
                  >
                    <span aria-hidden="true" className="text-forge">
                      ★
                    </span>
                    {item}
                  </p>
                ))}

                <ul className="mt-2 space-y-3 px-1">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-slate-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-md bg-navy-900 px-6 py-5 text-sm leading-relaxed text-white/90 sm:text-base">
          {workstreams.footnote}
        </p>
      </Container>
    </section>
  );
}
