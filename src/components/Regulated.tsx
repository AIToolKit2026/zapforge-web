import { Container, SectionHeading } from "./Section";
import { regulated } from "@/content/site";

/** Sub-heading used inside the section to separate its three movements. */
function SubHeading({
  heading,
  lede,
}: {
  heading: string;
  lede: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold tracking-tight text-balance text-ink sm:text-3xl">
        {heading}
      </h3>
      <p className="mt-4 max-w-4xl leading-relaxed text-pretty text-slate-body">
        {lede}
      </p>
    </div>
  );
}

export default function Regulated() {
  return (
    <section id="regulated" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={regulated.eyebrow}
          heading={regulated.heading}
          lede={regulated.lede}
          meta="Gulf open banking"
        />

        {/* 1 — the regulatory pattern */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {regulated.mandate.map((card) => (
            <article
              key={card.tag}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div aria-hidden="true" className="h-1.5 bg-brand" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-2xl font-bold tracking-tight text-ink">
                  {card.tag}
                </p>
                <h3 className="mt-4 text-base font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-body">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 2 — published disclosures */}
        <div className="mt-20 border-t border-line pt-16">
          <SubHeading
            heading={regulated.evidenceHeading}
            lede={regulated.evidenceLede}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {regulated.evidence.map((card) => (
              <figure
                key={card.name}
                className="flex flex-col rounded-lg border border-line bg-white p-6"
              >
                <blockquote className="flex-1 text-base leading-relaxed text-pretty text-ink">
                  <span aria-hidden="true" className="text-brand">
                    &ldquo;
                  </span>
                  {card.quote}
                  <span aria-hidden="true" className="text-brand">
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="text-sm font-bold text-ink">{card.name}</p>
                  <p className="eyebrow mt-1 text-slate-body">{card.region}</p>
                  <p className="mt-3 text-sm font-semibold text-brand">
                    Wedge: {card.wedge}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 rounded-md bg-mist px-6 py-5 text-sm text-ink italic">
            {regulated.disclaimer}
          </p>
        </div>

        {/* 3 — where a first engagement is scoped */}
        <div className="mt-20 border-t border-line pt-16">
          <SubHeading
            heading={regulated.scopeHeading}
            lede={regulated.scopeLede}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              {regulated.inScope.map((item) => (
                <article
                  key={item.title}
                  className="flex overflow-hidden rounded-r-lg border border-line bg-white shadow-sm"
                >
                  <div aria-hidden="true" className="w-1.5 shrink-0 bg-brand" />
                  <div className="p-6">
                    <h4 className="text-lg font-bold tracking-tight text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-body">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="flex flex-col rounded-lg border border-line bg-white p-7">
              <h4 className="text-lg font-bold tracking-tight text-forge">
                {regulated.outOfScope.title}
              </h4>
              <ul className="mt-6 flex-1 space-y-4">
                {regulated.outOfScope.items.map((item) => (
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
                {regulated.outOfScope.note}
              </p>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
