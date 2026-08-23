import { Reveal } from "./Reveal";

const items = [
  { title: "Soluções sob medida", text: "Nada de produto genérico adaptado à força." },
  { title: "Experiência em primeiro lugar", text: "Interfaces simples e intuitivas." },
  {
    title: "Tecnologia moderna",
    text: "Stacks atuais e arquiteturas preparadas para evolução.",
  },
  {
    title: "Do planejamento à entrega",
    text: "Acompanhamento durante todo o desenvolvimento.",
  },
];

export function Differentials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Diferenciais</p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
            Por que trabalhar com a GhostFlow
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div className="border-t border-border pt-6 transition-colors duration-300 hover:border-turquoise">
                <span className="font-display text-sm text-turquoise">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
