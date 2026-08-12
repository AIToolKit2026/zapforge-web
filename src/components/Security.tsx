import { Container, SectionHeading } from "./Section";
import { security } from "@/content/site";

export default function Security() {
  return (
    <section id="security" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={security.eyebrow}
          heading={security.heading}
          lede={security.lede}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {security.cards.map((card) => (
            <article
              key={card.tag}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm"
            >
              <header className="bg-mist px-6 py-4">
                <h3 className="eyebrow text-brand">{card.tag}</h3>
              </header>
              <p className="flex-1 p-6 text-sm leading-relaxed text-slate-body">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-navy-900 p-8 sm:p-10">
          <p className="eyebrow text-brand-bright">{security.faq.tag}</p>
          <p className="mt-5 text-lg font-semibold text-white text-balance sm:text-xl">
            &ldquo;{security.faq.question}&rdquo;
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-white/70">
            {security.faq.answer}
          </p>
        </div>
      </Container>
    </section>
  );
}
