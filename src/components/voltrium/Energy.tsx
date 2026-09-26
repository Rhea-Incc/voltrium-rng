import { Reveal } from "./Reveal";

export function Energy() {
  return (
    <section className="relative overflow-hidden border-b border-light-foreground/10 bg-light text-light-foreground">
      <div className="grid-lines-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="label-tech text-light-foreground/55">06 — Built around the route</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8">
          Power the corridor.
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1.25fr] md:gap-20">
          <Reveal delay={100}>
            <p className="text-xl leading-snug md:text-2xl">
              Solar, battery storage and the grid combine into a resilient energy loop.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-light-foreground/65">
              The objective is reliable energy at commercially viable cost per kilometre.
            </p>
            <div className="mt-10 flex gap-3">
              {["Buffer", "Smooth", "Store"].map((t) => (
                <span
                  key={t}
                  className="border border-light-foreground/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em]"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="label-tech mt-4 text-light-foreground/45">The role of BESS</p>
          </Reveal>

          <Reveal delay={150} className="min-w-0 border border-light-foreground/12 p-6 md:p-10">
            <svg
              viewBox="0 0 700 300"
              className="w-full"
              role="img"
              aria-label="Energy loop: solar and grid into battery storage, storage and grid into the charger, charger into the electric coach"
            >
              <g
                className="font-mono"
                fontSize="12"
                letterSpacing="2"
                fill="oklch(0.17 0.004 240 / 60%)"
              >
                {[
                  { x: 30, y: 30, t: "SOLAR" },
                  { x: 30, y: 190, t: "GRID" },
                  { x: 270, y: 110, t: "BESS" },
                  { x: 490, y: 110, t: "CHARGER" },
                ].map((b) => (
                  <g key={b.t}>
                    <rect
                      x={b.x}
                      y={b.y}
                      width="150"
                      height="70"
                      fill="none"
                      stroke="oklch(0.17 0.004 240 / 25%)"
                    />
                    <text x={b.x + 16} y={b.y + 42} fill="oklch(0.17 0.004 240)" fontSize="14">
                      {b.t}
                    </text>
                  </g>
                ))}
                <text x="660" y="150" textAnchor="end" fill="oklch(0.17 0.004 240)" fontSize="14">
                  COACH
                </text>

                <g stroke="var(--color-primary-dim)" strokeWidth="2" fill="none">
                  <path d="M180 65 H 225 V 145 H 270" />
                  <path d="M180 225 H 225 V 145" />
                  <path d="M420 145 H 490" />
                  <path d="M640 145 H 668" />
                  <path d="M180 65 H 225 V 145 H 270" className="flow-line" opacity="0.8" />
                  <path d="M420 145 H 490" className="flow-line" opacity="0.8" />
                </g>
                <path
                  d="M105 190 V 130 H 470 V 110"
                  fill="none"
                  stroke="var(--color-primary-dim)"
                  strokeWidth="1.2"
                  strokeDasharray="3 6"
                  opacity="0.6"
                />
                <text x="196" y="122" fontSize="10">
                  GRID → CHARGER
                </text>
              </g>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
