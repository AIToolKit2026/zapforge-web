import { Container, SectionHeading } from "./Section";
import { evidence } from "@/content/site";

export default function Evidence() {
  return (
    <section id="evidence" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={evidence.eyebrow}
          heading={evidence.heading}
          lede={evidence.lede}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {evidence.cards.map((card) => (
            <article
              key={card.name}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm"
            >
              <div className="bg-navy-900 px-5 py-3">
                <p className="eyebrow text-brand-bright">{card.region}</p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {card.name}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-body">
                  {card.body}
                </p>
                <p className="mt-5 border-t border-line pt-4 text-sm font-semibold text-brand">
                  {card.wedge}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-md bg-mist px-6 py-5 text-sm text-ink italic sm:text-base">
          {evidence.disclaimer}
        </p>
      </Container>
    </section>
  );
}
