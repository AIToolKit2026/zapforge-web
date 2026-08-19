import { Container, SectionHeading } from "./Section";
import { problem } from "@/content/site";

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={problem.eyebrow}
          heading={problem.heading}
          lede={problem.lede}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problem.cards.map((card) => (
            <article
              key={card.tag}
              className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="font-mono text-sm font-bold text-forge">
                {card.tag}
              </p>
              <h3 className="mt-4 text-base font-bold text-balance text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-body">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 border-l-4 border-brand bg-mist px-6 py-5 text-base text-balance text-ink sm:text-lg">
          {problem.pullquote}
        </p>
      </Container>
    </section>
  );
}
