import { Container } from "./Section";
import { stacks } from "@/content/site";

export default function StackStrip() {
  return (
    <section className="border-b border-line-dark bg-navy-900 py-10">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <p className="eyebrow shrink-0 text-white/45 lg:max-w-[13rem]">
            {stacks.label}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {stacks.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line-dark bg-navy-800/60 px-3 py-1.5 font-mono text-xs text-white/65"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
