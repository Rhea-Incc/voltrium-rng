import { Reveal } from "./Reveal";

const stages = [
  { n: "01", title: "Prove", body: "One operator. One corridor. Real operating data." },
  { n: "02", title: "Connect", body: "Hubs added along the first proven route." },
  { n: "03", title: "Scale", body: "Multiple corridors. Multiple operators. Dedicated energy systems." },
  { n: "04", title: "Network", body: "Kenya-wide commercial network." },
  { n: "05", title: "East Africa", body: "Kenya. Uganda. Tanzania." },
];

const progression = [
  "1 corridor",
  "Multiple hubs",
  "Multiple operators",
  "Multiple corridors",
  "Regional network",
];

export function Network() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="grid-lines-fine pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="label-tech">09 — The network</Reveal>
        <Reveal delay={60} as="h2" className="display-lg mt-8 max-w-4xl">
          One corridor.
          <br />
          Then an <span className="text-primary">electric highway.</span>
        </Reveal>
        <Reveal delay={90}>
          <p className="label-tech mt-6">Target scale logic · not existing network</p>
        </Reveal>

        <div className="mt-16 grid border-t border-border md:grid-cols-5">
          {stages.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 70}
              className="border-b border-r border-border p-6 last:border-r-0"
            >
              <p className="font-mono text-xs tracking-[0.2em] text-primary">{s.n}</p>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
          {progression.map((p, i) => (
            <span key={p} className="flex items-center gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {p}
              </span>
              {i < progression.length - 1 && <span className="text-primary">→</span>}
            </span>
          ))}
        </Reveal>

        <Reveal delay={160} as="p" className="display-md mt-16 max-w-3xl text-primary">
          The network becomes the electric highway.
        </Reveal>
      </div>
    </section>
  );
}
