import { Container, SectionHeading } from "./Section";
import { templates } from "@/content/site";

export default function Templates() {
  return (
    <section id="templates" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={templates.eyebrow}
          heading={templates.heading}
          lede={templates.lede}
        />

        <div className="flex flex-col gap-10">
          {templates.groups.map((group) => (
            <div key={group.kind}>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <h3 className="eyebrow text-brand">{group.kind}</h3>
                <p className="text-sm text-slate-body italic">{group.hint}</p>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-md border border-line bg-white px-4 py-3 font-mono text-[13px] text-ink shadow-sm transition-colors hover:border-brand/50"
                  >
                    <span aria-hidden="true" className="text-brand">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2 7h10M8.5 3.5L12 7l-3.5 3.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-md bg-navy-900 px-6 py-5 text-sm leading-relaxed text-white/85 sm:text-base">
          {templates.footnote}
        </p>
      </Container>
    </section>
  );
}
