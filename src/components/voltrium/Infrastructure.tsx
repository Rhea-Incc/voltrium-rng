import { Reveal } from "./Reveal";

const physical = [
  { label: "Grid", sub: "Utility connection" },
  { label: "Transformer / switchgear", sub: "Protection & distribution" },
  { label: "BESS", sub: "Battery energy storage" },
  { label: "Solar", sub: "Optional local generation" },
  { label: "DC fast charger", sub: "High-power, fleet-grade" },
  { label: "Electric coach", sub: "Commercial use case" },
];

const digital = [
  { label: "Digital control", sub: "Monitoring & dispatch" },
  { label: "Payment / fleet account", sub: "Commercial transactions" },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:px-10 md:py-36">
        <Reveal className="label-tech">05 — What we build</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8">
          More than a <span className="text-primary">charger.</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Each Voltrium hub is a mini energy infrastructure system — layered, modular and designed
            to expand alongside fleet demand.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={140} className="min-w-0 border border-border bg-surface p-6 md:p-10">
            <p className="label-tech-primary">Hub schematic</p>
            <svg
              viewBox="0 0 760 380"
              className="mt-8 w-full"
              role="img"
              aria-label="Technical schematic: grid and solar feed battery storage, which feeds DC fast charging for an electric coach, with a digital control layer above"
            >
              <g
                className="font-mono"
                fontSize="11"
                letterSpacing="2"
                fill="var(--color-muted-foreground)"
              >
                {/* digital layer */}
                <rect
                  x="40"
                  y="20"
                  width="680"
                  height="52"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeOpacity="0.5"
                  strokeDasharray="3 5"
                />
                <text x="60" y="51" fill="var(--color-primary)">
                  DIGITAL CONTROL · UPTIME · PAYMENT / FLEET ACCOUNT
                </text>

                {/* boxes */}
                {[
                  { x: 40, y: 130, w: 150, t: "GRID", s: "UTILITY" },
                  { x: 40, y: 250, w: 150, t: "SOLAR", s: "OPTIONAL" },
                  { x: 250, y: 190, w: 160, t: "BESS", s: "STORAGE" },
                  { x: 470, y: 190, w: 150, t: "DC CHARGER", s: "HIGH-POWER" },
                ].map((b) => (
                  <g key={b.t}>
                    <rect
                      x={b.x}
                      y={b.y}
                      width={b.w}
                      height="72"
                      fill="var(--color-background)"
                      stroke="var(--color-border-strong)"
                    />
                    <text x={b.x + 16} y={b.y + 32} fill="var(--color-foreground)" fontSize="13">
                      {b.t}
                    </text>
                    <text x={b.x + 16} y={b.y + 52}>
                      {b.s}
                    </text>
                  </g>
                ))}

                <text x="660" y="230" fill="var(--color-foreground)" fontSize="13">
                  COACH
                </text>
                <text x="660" y="250">
                  FLEET
                </text>

                {/* connections */}
                <g stroke="var(--color-primary)" strokeWidth="1.8" fill="none">
                  <path d="M190 166 H 220 V 226 H 250" />
                  <path d="M190 286 H 220 V 226" />
                  <path d="M410 226 H 470" />
                  <path d="M620 226 H 650" />
                  <path d="M190 166 H 220 V 226 H 250" className="flow-line" opacity="0.7" />
                  <path d="M410 226 H 470" className="flow-line" opacity="0.7" />
                </g>
                <g stroke="var(--color-border-strong)" strokeWidth="1" strokeDasharray="2 4">
                  <path d="M320 190 V 72" />
                  <path d="M545 190 V 72" />
                </g>
              </g>
            </svg>
            <p className="label-tech mt-6">
              Grid → storage → charging → vehicle. Digital layer sits above the physical system.
            </p>
          </Reveal>

          <Reveal delay={180} className="min-w-0">
            <div className="divide-y divide-border border border-border">
              {physical.map((p) => (
                <div key={p.label} className="flex items-baseline gap-4 p-5">
                  <span className="mt-1 size-1.5 shrink-0 bg-primary" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em]">{p.label}</p>
                    <p className="label-tech mt-1">{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 divide-y divide-primary/25 border border-primary/40">
              {digital.map((p) => (
                <div key={p.label} className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {p.label}
                  </p>
                  <p className="label-tech mt-1">{p.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
