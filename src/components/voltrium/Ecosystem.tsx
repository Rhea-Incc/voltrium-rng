import { Reveal } from "./Reveal";

const stack = ["Bus", "Battery", "Charging", "Energy"];
const around = ["Operator", "OEM", "Finance", "Insurance", "Technology"];

export function Ecosystem() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:px-10 md:py-32">
        <Reveal className="label-tech">10 — Ecosystem</Reveal>
        <Reveal delay={60} as="h2" className="display-md mt-8 max-w-3xl">
          Powering the transition is more than charging.
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal delay={100}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              Electric commercial transport requires vehicles, batteries, charging infrastructure,
              energy and capital to work together.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Voltrium&apos;s model can support financing structures that align infrastructure,
              vehicle and energy costs with productive fleet use.
            </p>
          </Reveal>

          <Reveal delay={150} className="min-w-0">
            <div className="flex flex-col items-start gap-0 border border-border p-6 md:p-8">
              {stack.map((s, i) => (
                <div key={s} className="w-full">
                  <p className="py-3 text-sm font-semibold uppercase tracking-[0.16em]">{s}</p>
                  {i < stack.length - 1 && <div className="h-6 w-px bg-primary/50" />}
                </div>
              ))}
              <div className="mt-6 flex w-full flex-wrap gap-2 border-t border-border pt-6">
                {around.map((a) => (
                  <span
                    key={a}
                    className="border border-border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
