import { Container, SectionHeading } from "./Section";
import { pricing } from "@/content/site";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          lede={pricing.lede}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricing.tiers.map((tier) => {
            const featured = tier.featured;
            return (
              <article
                key={tier.name}
                className={`flex flex-col rounded-lg border p-7 ${
                  featured
                    ? "border-navy-900 bg-navy-900 shadow-lg lg:-my-3 lg:py-10"
                    : "border-line bg-white shadow-sm"
                }`}
              >
                <p
                  className={`eyebrow ${
                    featured ? "text-forge" : "text-brand"
                  }`}
                >
                  {tier.tag}
                </p>
                <h3
                  className={`mt-3 text-3xl font-bold tracking-tight ${
                    featured ? "text-white" : "text-ink"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-1 text-sm italic ${
                    featured ? "text-white/60" : "text-slate-body"
                  }`}
                >
                  {tier.subtitle}
                </p>

                <ul
                  className={`mt-7 flex-1 space-y-4 border-t pt-6 ${
                    featured ? "border-line-dark" : "border-line"
                  }`}
                >
                  {tier.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-3 text-sm leading-relaxed ${
                        featured ? "text-white/85" : "text-slate-body"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          featured ? "bg-brand-bright" : "bg-brand"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                    featured
                      ? "bg-brand text-white hover:bg-brand-bright"
                      : "border border-line text-ink hover:border-brand hover:text-brand"
                  }`}
                >
                  Talk about {tier.name.toLowerCase()}
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-md bg-mist px-6 py-6">
          <p className="eyebrow text-brand">{pricing.guarantees.tag}</p>
          <p className="mt-3 leading-relaxed text-ink">
            {pricing.guarantees.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
