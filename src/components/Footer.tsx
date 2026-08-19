import Logo from "./Logo";
import { Container } from "./Section";
import { contact, footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-navy-950 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-2">
            <Logo tone="dark" className="text-xl" />
            <p className="mt-2 text-sm text-white/40 italic">
              {contact.parentLine}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Governed migration and modernization for large legacy estates.
              Plan-gated, reviewed as a diff, run on your own machines.
            </p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow text-white/45">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-white/70 transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </p>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {contact.company}
          </p>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-white/35">
          {footer.note}
        </p>
      </Container>
    </footer>
  );
}
