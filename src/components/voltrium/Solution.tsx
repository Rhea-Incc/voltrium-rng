import { Reveal } from "./Reveal";

const layers = [
  { n: "01", title: "Corridor planning", body: "Identify where commercial vehicles need energy." },
  { n: "02", title: "Site development", body: "Secure and develop strategic charging locations." },
  { n: "03", title: "Grid & energy", body: "Design electrical infrastructure for high-power charging." },
  { n: "04", title: "Charging", body: "Deploy high-power DC charging infrastructure." },
  { n: "05", title: "Uptime", body: "Monitor availability, performance and reliability." },
  { n: "06", title: "Operations", body: "Maintain and operate the network." },
  { n: "07", title: "Payments", body: "Enable fleet accounts and commercial charging transactions." },
  { n: "08", title: "Network expansion", body: "Add charging capacity as electric fleets grow." },
];

export function Solution() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <Reveal className="label-tech">03 — The Voltrium solution</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8 max-w-4xl">
          Not a charger supplier.
          <br />
          <span className="text-primary">A charging network operator.</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Voltrium develops and operates the infrastructure required for electric commercial
            transport — taking responsibility for the system surrounding the charger.
          </p>
        </Reveal>

        <div className="relative mt-20">
          {/* central operating layer marker */}
          <Reveal className="mx-auto mb-10 w-fit border border-primary/50 px-8 py-6 text-center glow-primary">
            <p className="label-tech-primary">Voltrium</p>
            <p className="display-md mt-2">Operating layer</p>
          </Reveal>

          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {layers.map((l, i) => (
              <Reveal
                key={l.n}
                delay={i * 60}
                className="group relative border-b border-r border-border p-7 transition-colors hover:bg-surface"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
                />
                <p className="font-mono text-xs tracking-[0.2em] text-primary">{l.n}</p>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em]">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="label-tech mt-6">One integrated system · not eight separate services</p>
        </div>
      </div>
    </section>
  );
}
