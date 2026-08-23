import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import saas from "@/assets/project-saas.jpg";
import mobile from "@/assets/project-mobile.jpg";
import automation from "@/assets/project-automation.jpg";

const projects = [
  {
    image: saas,
    name: "Nexus Painel Operacional",
    category: "Web App",
    text: "Dados espalhados em planilhas viravam decisões lentas. Criamos um painel único com indicadores em tempo real.",
    tags: ["Web App", "SaaS", "React", "Node.js"],
    surface: "bg-mist",
  },
  {
    image: mobile,
    name: "Pulse App",
    category: "Mobile",
    text: "Um aplicativo de acompanhamento diário com fluxo simples, offline-first e foco total na experiência.",
    tags: ["Mobile", "React Native", "API REST"],
    surface: "bg-turquoise/10",
  },
  {
    image: automation,
    name: "FlowOps Automação",
    category: "Automação",
    text: "Processos manuais e repetitivos foram mapeados e transformados em fluxos automáticos e monitorados.",
    tags: ["Automação", "Integrações", "TypeScript"],
    surface: "bg-navy/5",
  },
];

export function Portfolio() {
  return (
    <section id="projetos" className="bg-background py-20 md:py-28">
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Projetos</p>
          <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.85rem]">
            Ideias que saíram do papel e ganharam vida
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Conheça algumas soluções desenvolvidas pela GhostFlow.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-400 hover:-translate-y-1.5 hover:border-turquoise/50">
                <div className={`${project.surface} overflow-hidden p-4 md:p-5`}>
                  <img
                    src={project.image}
                    alt={`Mockup do projeto ${project.name}`}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <span className="eyebrow">{project.category}</span>
                  <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.text}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-turquoise"
                  >
                    Ver detalhes
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
