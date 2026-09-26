import { Logo } from "./Logo";
import { mailto } from "./config";

const links = [
  { label: "Network", href: "#network" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Operators", href: "#operators" },
  { label: "Partners", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Electric mobility infrastructure for commercial transport.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="label-tech hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href={mailto("Voltrium enquiry")} className="label-tech hover:text-foreground">
              Contact
            </a>
          </nav>

          <div>
            <p className="label-tech-primary">Nairobi · Kenya · East Africa</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-tech">© 2026 Voltrium</p>
          <p className="label-tech">Building the electric highway</p>
        </div>
      </div>
    </footer>
  );
}
