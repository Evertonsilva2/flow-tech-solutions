import { Reveal } from "./Reveal";

const indicators = [
  { label: "Projetos entregues", value: "—" },
  { label: "Tecnologias utilizadas", value: "—" },
  { label: "Clientes atendidos", value: "—" },
  { label: "Soluções desenvolvidas", value: "—" },
];

export function About() {
  return (
    <section id="sobre" className="bg-mist py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Sobre a GhostFlow</p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.85rem]">
            Tecnologia boa é aquela que simplesmente flui.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Na GhostFlow, acreditamos que tecnologia não precisa ser complicada. Transformamos
              desafios em soluções digitais simples, eficientes e pensadas para pessoas.
            </p>
            <p>
              Desenvolvemos cada projeto combinando estratégia, design e tecnologia para criar
              produtos que façam sentido para o negócio e para quem vai utilizá-los.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4">
            {indicators.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border bg-card p-5">
                <dt className="text-xs text-muted-foreground">{item.label}</dt>
                <dd className="mt-2 font-display text-3xl font-bold text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
