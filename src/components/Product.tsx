import Image from "next/image";
import { Container, SectionHeading } from "./Section";
import WorkbenchMock from "./WorkbenchMock";
import { product } from "@/content/site";

export default function Product() {
  return (
    <section id="product" className="bg-navy-950 py-20 sm:py-28">
      <Container wide>
        <SectionHeading
          tone="dark"
          eyebrow={product.eyebrow}
          heading={product.heading}
          lede={product.lede}
          meta="Screenshots show demonstration data"
        />

        <div className="flex flex-col gap-20 lg:gap-24">
          {product.features.map((f, i) => (
            <article key={f.n}>
              {/* Copy sits above the shot so the shot gets the full measure */}
              <div className="grid grid-cols-1 gap-x-14 gap-y-6 lg:grid-cols-2">
                <div>
                  <p className="font-mono text-sm font-bold text-forge">
                    {f.n}
                  </p>
                  <h3 className="mt-3 max-w-lg text-2xl font-bold tracking-tight text-balance text-white sm:text-3xl">
                    {f.title}
                  </h3>
                </div>

                <div>
                  <p className="leading-relaxed text-pretty text-white/65">
                    {f.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-white/75"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-brand-bright"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M3 7.5l2.75 2.75L11 4.5" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <figure className="mt-9 overflow-hidden rounded-xl border border-white/12 bg-[#0b0d12] shadow-2xl shadow-black/50">
                <div
                  aria-hidden="true"
                  className="flex gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-2.5"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                {f.shot.startsWith("mock:") ? (
                  <div role="img" aria-label={f.alt}>
                    <WorkbenchMock />
                  </div>
                ) : (
                  <Image
                    src={f.shot}
                    alt={f.alt}
                    width={2039}
                    height={1556}
                    priority={i <= 1}
                    sizes="(min-width: 1280px) 76rem, 100vw"
                    className="w-full"
                  />
                )}
              </figure>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
