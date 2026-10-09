import { Reveal } from "./Reveal";

const stops = [
  "Nairobi",
  "Departure hub",
  "High-power DC",
  "Corridor",
  "Charging hub",
  "Destination",
  "Depot / turnaround",
  "Return journey",
];

const variables = [
  "Route distance",
  "Vehicle energy consumption",
  "Passenger load",
  "Terrain & traffic",
  "Charging windows",
  "Turnaround time",
  "Grid availability",
  "Solar potential",
  "BESS requirements",
  "Charger capacity",
  "Fleet utilisation",
];

export function ElectricHighway() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="grid-lines-fine pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute right-0 top-1/4 size-[520px] rounded-full opacity-20 blur-[150px]"
        style={{ background: "var(--color-primary-dim)" }}
      />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:px-10 md:py-40">
        <Reveal className="label-tech">04 — The electric highway</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8 max-w-4xl">
          The road becomes
          <br />
          the <span className="text-primary">energy system.</span>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal delay={100}>
            <p className="text-xl leading-snug md:text-2xl">
              The corridor itself becomes part of the vehicle&apos;s energy system.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Voltrium designs the charging network around the actual operating route — not around a
              parking bay.
            </p>

            <ol className="mt-12 border-l border-border pl-8">
              {stops.map((s, i) => (
                <li key={s} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[38px] top-1.5 size-2.5 rounded-full bg-primary" />
                  <span
                    aria-hidden
                    className="absolute -left-[34px] top-5 h-full w-px bg-gradient-to-b from-primary/50 to-transparent last:hidden"
                  />
                  <p className="font-mono text-[11px] tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em]">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={160}>
            <p className="label-tech">Variables Voltrium designs around</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {variables.map((v) => (
                <span
                  key={v}
                  className="border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {v}
                </span>
              ))}
            </div>

            <div className="mt-12 border border-border p-6">
              <svg
                viewBox="0 0 420 200"
                className="w-full"
                role="img"
                aria-label="Energy flowing along a corridor between charging hubs"
              >
                <path
                  d="M20 160 C 110 160 120 60 210 60 S 320 150 400 40"
                  fill="none"
                  stroke="var(--color-border-strong)"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 160 C 110 160 120 60 210 60 S 320 150 400 40"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  className="flow-line"
                />
                {[
                  [20, 160],
                  [210, 60],
                  [400, 40],
                ].map(([x, y]) => (
                  <g key={`${x}`}>
                    <circle cx={x} cy={y} r="14" fill="var(--color-primary)" opacity="0.18" className="node-pulse" />
                    <circle cx={x} cy={y} r="5" fill="var(--color-primary)" />
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
