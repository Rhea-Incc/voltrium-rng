import { Reveal } from "./Reveal";

const gaps = [
  { label: "Charging gap", note: "No high-power charging between the major stops." },
  { label: "Range uncertainty", note: "Operators cannot plan energy along the route." },
  { label: "Operational risk", note: "Downtime removes vehicles from service." },
];

export function Problem() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-light-foreground/10 bg-light text-light-foreground"
    >
      <div className="grid-lines-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="label-tech text-light-foreground/55">02 — The problem</Reveal>

        <Reveal delay={60} as="h2" className="display-lg mt-8 max-w-4xl">
          The buses are becoming electric.
          <br />
          <span className="text-light-foreground/40">The roads are not.</span>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <Reveal delay={100}>
            <p className="text-xl font-medium leading-snug md:text-2xl">
              The problem is not the bus. It is the infrastructure around the bus.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-light-foreground/65">
              Electric coaches are increasingly viable for long-distance passenger transport. But a
              coach cannot electrify a route by itself. It requires reliable charging, known
              locations, grid capacity, uptime and a network designed around the route.
            </p>

            <dl className="mt-12 divide-y divide-light-foreground/12 border-y border-light-foreground/12">
              {gaps.map((g) => (
                <div key={g.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8">
                  <dt className="label-tech w-52 shrink-0 text-light-foreground/80">{g.label}</dt>
                  <dd className="text-sm text-light-foreground/60">{g.note}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={160} className="min-w-0">
            <div className="border border-light-foreground/12 bg-light-foreground/2 p-6 md:p-10">
              <p className="label-tech text-light-foreground/55">Today — infrastructure gap</p>
              <svg
                viewBox="0 0 560 90"
                className="mt-6 w-full"
                role="img"
                aria-label="Nairobi connected to two empty nodes representing missing charging infrastructure"
              >
                <line
                  x1="40"
                  y1="45"
                  x2="520"
                  y2="45"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  className="text-light-foreground/30"
                />
                <circle cx="40" cy="45" r="8" className="fill-light-foreground" />
                <circle
                  cx="280"
                  cy="45"
                  r="7"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-light-foreground/35"
                />
                <circle
                  cx="520"
                  cy="45"
                  r="7"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-light-foreground/35"
                />
                <text
                  x="40"
                  y="78"
                  className="fill-current font-mono text-light-foreground/70"
                  fontSize="11"
                  letterSpacing="2.5"
                >
                  NAIROBI
                </text>
                <text
                  x="440"
                  y="78"
                  className="fill-current font-mono text-light-foreground/35"
                  fontSize="11"
                  letterSpacing="2.5"
                >
                  NO CHARGING
                </text>
              </svg>

              <div className="mt-10 border-t border-light-foreground/12 pt-8">
                <p className="label-tech-primary">With Voltrium — corridor network</p>
                <svg
                  viewBox="0 0 560 90"
                  className="mt-6 w-full"
                  role="img"
                  aria-label="Nairobi connected through charging hubs to Mombasa on the Voltrium network"
                >
                  <line
                    x1="40"
                    y1="45"
                    x2="520"
                    y2="45"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                  />
                  <line
                    x1="40"
                    y1="45"
                    x2="520"
                    y2="45"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    className="flow-line"
                    opacity="0.5"
                  />
                  {[40, 200, 360, 520].map((x) => (
                    <circle key={x} cx={x} cy="45" r="8" fill="var(--color-primary)" />
                  ))}
                  <text
                    x="40"
                    y="78"
                    className="fill-current font-mono text-light-foreground/70"
                    fontSize="11"
                    letterSpacing="2.5"
                  >
                    NAIROBI
                  </text>
                  <text
                    x="452"
                    y="78"
                    className="fill-current font-mono text-light-foreground/70"
                    fontSize="11"
                    letterSpacing="2.5"
                  >
                    MOMBASA
                  </text>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
