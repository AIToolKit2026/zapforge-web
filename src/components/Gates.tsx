import { Container, SectionHeading } from "./Section";
import { gates } from "@/content/site";

export default function Gates() {
  return (
    <section id="gates" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={gates.eyebrow}
          heading={gates.heading}
          lede={gates.lede}
        />

        <ol className="grid grid-cols-1 gap-x-5 gap-y-12 pt-6 sm:grid-cols-2 lg:grid-cols-5">
          {gates.steps.map((step) => (
            <li key={step.n} className="relative flex">
              <div
                className={`flex flex-1 flex-col rounded-lg border-2 bg-white px-5 pt-10 pb-6 text-center ${
                  step.highlight ? "border-forge" : "border-brand/40"
                }`}
              >
                <span
                  className={`absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-lg font-bold text-white ${
                    step.highlight ? "bg-forge" : "bg-brand"
                  }`}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  <span className="sr-only">Step {step.n}: </span>
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-body">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-sm font-medium text-forge italic">
          {gates.footnote}
        </p>
      </Container>
    </section>
  );
}
