import { Reveal } from "./Reveal";

const columns = [
  {
    kind: "traditional" as const,
    label: "Traditional model",
    groups: [{ owner: "Operator", items: ["Fuel", "Maintenance", "Infrastructure capex", "Energy risk"] }],
  },
  {
    kind: "voltrium" as const,
    label: "Electric + Voltrium",
    groups: [
      { owner: "Operator", items: ["Passenger service", "Routes", "Schedules", "Fleet operations"] },
      { owner: "Voltrium", items: ["Charging", "Energy interface", "Uptime", "Network"] },
      { owner: "Partners", items: ["OEM", "Finance", "Insurance", "Technology"] },
    ],
  },
];

export function Operators() {
  return (
    <section id="operators" className="relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <Reveal className="label-tech">08 — For operators</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8 max-w-4xl">
          Buy mobility.
          <br />
          <span className="text-muted-foreground">Don&apos;t build the energy system.</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Voltrium absorbs the infrastructure complexity, so the operator doesn&apos;t have to
            become a charging, energy or battery company.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {columns.map((c) => (
            <Reveal
              key={c.label}
              delay={c.kind === "voltrium" ? 120 : 60}
              className={
                c.kind === "voltrium"
                  ? "border border-primary/40 bg-surface p-6 md:p-8"
                  : "border border-border p-6 md:p-8"
              }
            >
              <p className={c.kind === "voltrium" ? "label-tech-primary" : "label-tech"}>{c.label}</p>
              <div className="mt-8 space-y-8">
                {c.groups.map((g) => (
                  <div key={g.owner}>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]">{g.owner}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((i) => (
                        <li
                          key={i}
                          className="border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="label-tech mt-8">
          The operator moves passengers. Voltrium keeps the energy infrastructure working.
        </p>
      </div>
    </section>
  );
}
