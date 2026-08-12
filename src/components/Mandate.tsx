import { Container, SectionHeading } from "./Section";
import { mandate } from "@/content/site";

export default function Mandate() {
  return (
    <section id="mandate" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={mandate.eyebrow}
          heading={mandate.heading}
          lede={mandate.lede}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mandate.cards.map((card) => (
            <article
              key={card.tag}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div aria-hidden="true" className="h-1.5 bg-brand" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-3xl font-bold tracking-tight text-ink">
                  {card.tag}
                </p>
                <h3 className="mt-5 text-base font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-body">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 rounded-md bg-mist px-6 py-5 text-sm text-ink italic sm:text-base">
          {mandate.pullquote}
        </p>
      </Container>
    </section>
  );
}
