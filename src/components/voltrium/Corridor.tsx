import { CITY, KENYA_PATH, KENYA_VIEWBOX } from "./kenyaMap";
import { Reveal } from "./Reveal";

const primaryCities = ["Nairobi", "Emali", "Mtito Andei", "Voi", "Mombasa"];
const primary = primaryCities.map((c) => CITY[c].join(",")).join(" ");
const secondaryCities = ["Nakuru", "Eldoret", "Kisumu", "Malaba", "Namanga"];
const futureLines = [
  ["Nairobi", "Nakuru", "Eldoret"],
  ["Nakuru", "Kisumu"],
  ["Eldoret", "Malaba"],
  ["Nairobi", "Namanga"],
];

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
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:px-10 md:py-36">
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

          <Reveal delay={150} className="min-w-0 border border-border p-4 sm:p-6 md:p-10">
            <svg
              viewBox={KENYA_VIEWBOX}
              className="mx-auto w-full max-w-[520px]"
              role="img"
              aria-label="Map of Kenya showing the initial Nairobi to Mombasa corridor and illustrative future corridors"
            >
              <path d={KENYA_PATH} fill="var(--color-background)" fillOpacity="0.5" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeLinejoin="round" />
              <g stroke="var(--color-muted-foreground)" strokeOpacity="0.55" strokeWidth="1.25" strokeDasharray="3 6" fill="none">
                {futureLines.map((l) => (
                  <polyline key={l.join()} points={l.map((c) => CITY[c].join(",")).join(" ")} />
                ))}
              </g>
              <polyline points={primary} fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinejoin="round" />
              <polyline points={primary} fill="none" stroke="var(--color-primary)" strokeWidth="3" className="flow-line" opacity="0.6" />
              {secondaryCities.map((c) => (
                <circle key={c} cx={CITY[c][0]} cy={CITY[c][1]} r="3.5" fill="var(--color-muted-foreground)" />
              ))}
              {primaryCities.map((c) => (
                <g key={c}>
                  <circle cx={CITY[c][0]} cy={CITY[c][1]} r="12" fill="var(--color-primary)" opacity="0.18" className="node-pulse" />
                  <circle cx={CITY[c][0]} cy={CITY[c][1]} r="5" fill="var(--color-primary)" />
                </g>
              ))}
              <g className="font-mono" fontSize="12" letterSpacing="2" fill="var(--color-foreground)">
                <text x={CITY.Nairobi[0] + 12} y={CITY.Nairobi[1] - 8}>NAIROBI</text>
                <text x={CITY.Mombasa[0] - 82} y={CITY.Mombasa[1] + 22}>MOMBASA</text>
              </g>
              <g className="font-mono" fontSize="10" letterSpacing="1.5" fill="var(--color-muted-foreground)">
                <text x={CITY.Nakuru[0] + 8} y={CITY.Nakuru[1] - 6}>NAKURU</text>
                <text x={CITY.Eldoret[0] + 8} y={CITY.Eldoret[1] - 6}>ELDORET</text>
                <text x={CITY.Kisumu[0] + 6} y={CITY.Kisumu[1] + 16}>KISUMU</text>
                <text x={CITY.Malaba[0] - 4} y={CITY.Malaba[1] - 10}>MALABA</text>
                <text x={CITY.Namanga[0] - 70} y={CITY.Namanga[1] + 4}>NAMANGA</text>
              </g>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
