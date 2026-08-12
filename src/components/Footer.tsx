import Logo from "./Logo";
import { Container } from "./Section";
import { contact } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line-dark bg-navy-950 py-12">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo tone="dark" className="text-xl" />
            <p className="mt-2 text-sm text-white/40 italic">
              {contact.parentLine}
            </p>
          </div>
          <div className="text-sm text-white/50 sm:text-right">
            <p className="font-medium text-white/70">{contact.name}</p>
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-white"
            >
              {contact.email}
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-line-dark pt-6 text-xs leading-relaxed text-white/35">
          Institutional references on this page are drawn from the
          institutions&rsquo; own published disclosures and are cited as public
          market evidence, not as a client list.
        </p>
      </Container>
    </footer>
  );
}
