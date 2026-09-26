import { Reveal } from "./Reveal";

const future = [
  "Nairobi ↔ Nakuru ↔ Eldoret",
  "Nairobi ↔ Kisumu",
  "Nairobi ↔ Malaba ↔ Kampala",
  "Nairobi ↔ Namanga ↔ Arusha",
];

export function Corridor() {
  return (
    <section id="network" className="relative overflow-hidden border-b border-border bg-surface">
      <div className="grid-lines-fine pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="label-tech">07 — First corridor</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8 max-w-4xl">
          Start with the routes
          <br />
          that <span className="text-primary">matter.</span>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal delay={100}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Voltrium will initially focus on Kenya&apos;s major long-distance passenger corridors,
              beginning with Nairobi–Mombasa.
            </p>
            <div className="mt-10 border border-primary/40 p-6">
              <p className="label-tech-primary">Initial corridor</p>
              <p className="display-md mt-2">Nairobi ↔ Mombasa</p>
              <p className="label-tech mt-4">Commercial validation pending</p>
            </div>

            <div className="mt-10">
              <p className="label-tech">Network expansion</p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {future.map((f) => (
                  <li
                    key={f}
                    className="py-4 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="label-tech mt-4">Illustrative · subject to validation</p>
            </div>
          </Reveal>

          <Reveal delay={150} className="min-w-0 border border-border p-6 md:p-10">
            <svg
              viewBox="0 0 480 520"
              className="w-full"
              role="img"
              aria-label="Stylised map of Kenya showing the initial Nairobi to Mombasa corridor and illustrative future corridors"
            >
              {/* stylised country outline */}
              <path
                d="M70 120 L150 60 L250 70 L330 40 L420 130 L400 240 L330 330 L300 430 L220 470 L150 400 L90 330 L60 230 Z"
                fill="none"
                stroke="var(--color-border-strong)"
                strokeWidth="1.5"
              />
              {/* future corridors, subtle */}
              <g stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="3 6" fill="none">
                <path d="M210 250 L130 175" />
                <path d="M210 250 L95 205" />
                <path d="M210 250 L118 130" />
                <path d="M210 250 L170 360" />
              </g>
              {/* primary corridor */}
              <path
                d="M210 250 C 250 300 250 360 300 430"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
              />
              <path
                d="M210 250 C 250 300 250 360 300 430"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                className="flow-line"
                opacity="0.6"
              />
              {[
                [210, 250],
                [243, 320],
                [266, 378],
                [300, 430],
              ].map(([x, y]) => (
                <g key={`${x}-${y}`}>
                  <circle cx={x} cy={y} r="12" fill="var(--color-primary)" opacity="0.18" className="node-pulse" />
                  <circle cx={x} cy={y} r="5" fill="var(--color-primary)" />
                </g>
              ))}
              <g className="font-mono" fontSize="12" letterSpacing="2.5" fill="var(--color-foreground)">
                <text x="150" y="238">
                  NAIROBI
                </text>
                <text x="316" y="436">
                  MOMBASA
                </text>
              </g>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
