import { Container, SectionHeading } from "./Section";
import { scope } from "@/content/site";

export default function Scope() {
  return (
    <section id="scope" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={scope.eyebrow}
          heading={scope.heading}
          lede={scope.lede}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {scope.inScope.map((item) => (
              <article
                key={item.title}
                className="flex overflow-hidden rounded-r-lg border border-line bg-white shadow-sm"
              >
                <div aria-hidden="true" className="w-1.5 shrink-0 bg-brand" />
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-body">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside className="flex flex-col rounded-lg border border-line bg-slate-50/70 p-7">
            <h3 className="text-lg font-bold tracking-tight text-forge">
              {scope.outOfScope.title}
            </h3>
            <ul className="mt-6 flex-1 space-y-4">
              {scope.outOfScope.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forge"
                  />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-5 text-sm leading-relaxed text-slate-body italic">
              {scope.outOfScope.note}
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
