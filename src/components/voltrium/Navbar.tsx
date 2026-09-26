import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { mailto } from "./config";
import { cn } from "@/lib/utils";

const links = [
  { label: "Network", href: "#network" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Operators", href: "#operators" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" aria-label="Voltrium home" className="flex items-center">
          <Logo />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-tech transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={mailto("Partner with Voltrium")}
            className="label-tech-primary border border-primary/50 px-5 py-3 transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Partner with us
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="label-tech border-b border-border py-4 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={mailto("Partner with Voltrium")}
              onClick={() => setOpen(false)}
              className="label-tech-primary mt-5 border border-primary/50 py-4 text-center"
            >
              Partner with us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
