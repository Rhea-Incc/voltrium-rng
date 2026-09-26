import { mailto } from "./config";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border">
      <div className="grid-lines-fine pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[160px]"
        style={{ background: "var(--color-primary-dim)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-44">
        <Reveal as="h2" className="display-xl max-w-5xl">
          The electric highway
          <br />
          <span className="text-primary text-glow">starts here.</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Build the charging network.
            <br />
            Power the corridor.
            <br />
            Move East Africa.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailto("Partner with Voltrium")}
            className="label-tech bg-primary px-8 py-4 text-center text-primary-foreground transition-opacity hover:opacity-85"
          >
            Partner with Voltrium
          </a>
          <a
            href={mailto("Discuss a route")}
            className="label-tech border border-border-strong px-8 py-4 text-center transition-colors hover:border-primary hover:text-primary"
          >
            Discuss your route
          </a>
        </Reveal>
      </div>
    </section>
  );
}
