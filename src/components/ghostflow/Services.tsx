import {
  Code2,
  Smartphone,
  Boxes,
  PenTool,
  Workflow,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    text: "Sites, sistemas web, dashboards, plataformas e aplicações personalizadas.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    text: "Aplicativos modernos, intuitivos e responsivos para diferentes dispositivos.",
  },
  {
    icon: Boxes,
    title: "Sistemas sob medida",
    text: "Soluções desenvolvidas especificamente para os processos e necessidades de cada negócio.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    text: "Interfaces intuitivas, modernas e focadas na experiência do usuário.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    text: "Tecnologia para reduzir tarefas repetitivas e tornar operações mais eficientes.",
  },
  {
    icon: Compass,
    title: "Consultoria em Tecnologia",
    text: "Planejamento técnico e apoio para transformar ideias em soluções viáveis.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-background py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">O que fazemos</p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.85rem]">
            Tecnologia pensada para fazer seu projeto fluir
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A GhostFlow traduz necessidades de negócio em soluções digitais modernas — do primeiro
            diagnóstico ao produto rodando em produção.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={i * 70}>
              <article className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-turquoise/50 md:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-navy transition-colors duration-300 group-hover:bg-turquoise/20">
                  <service.icon className="h-5.5 w-5.5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10 bg-turquoise transition-all duration-400 group-hover:w-20"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
