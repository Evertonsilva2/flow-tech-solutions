import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import mobile from "@/assets/project-mobile.jpg";
import automation from "@/assets/project-automation.jpg";
import gltHome from "@/assets/glt-imports-home.png";
import gltCategories from "@/assets/glt-imports-categorias.png";
import gltProduct from "@/assets/glt-imports-produto.png";
import gltCatalog from "@/assets/glt-imports-catalogo.png";
import gltCollection from "@/assets/glt-imports-colecao.png";
import perfumeHome from "@/assets/meu-perfume-favorito-home.png";
import perfumeHighlights from "@/assets/meu-perfume-favorito-destaques.png";
import perfumeCatalog from "@/assets/meu-perfume-favorito-catalogo.png";
import perfumeCart from "@/assets/meu-perfume-favorito-carrinho.png";
import perfumeProduct from "@/assets/meu-perfume-favorito-produto.png";

const gltGallery = [
  { image: gltHome, label: "Página inicial" },
  { image: gltCategories, label: "Categorias em destaque" },
  { image: gltProduct, label: "Detalhes do produto" },
  { image: gltCatalog, label: "Catálogo e filtros" },
  { image: gltCollection, label: "Coleção selecionada" },
];

const perfumeGallery = [
  { image: perfumeHome, label: "Página inicial" },
  { image: perfumeHighlights, label: "Categorias e produtos em destaque" },
  { image: perfumeCatalog, label: "Catálogo com pesquisa e filtros" },
  { image: perfumeProduct, label: "Detalhes do produto" },
  { image: perfumeCart, label: "Carrinho e orçamento pelo WhatsApp" },
];

const projects = [
  {
    image: gltHome,
    name: "GLT IMPORTS",
    category: "E-commerce",
    text: "E-commerce de roupas esportivas e acessórios, com catálogo organizado e uma experiência visual inspirada na cultura do futebol.",
    tags: ["E-commerce", "Moda esportiva", "Catálogo", "Responsivo"],
    surface: "bg-navy",
    imageFit: "object-contain bg-black",
    gallery: gltGallery,
  },
  {
    image: perfumeHome,
    name: "Meu Perfume Favorito",
    category: "E-commerce",
    text: "Loja virtual de perfumes com catálogo completo, busca, filtros, favoritos, carrinho e jornada de compra integrada ao WhatsApp.",
    tags: ["E-commerce", "Perfumaria", "Catálogo", "WhatsApp", "Responsivo"],
    surface: "bg-[#f5ebe1]",
    imageFit: "object-contain bg-[#f8f3ed]",
    gallery: perfumeGallery,
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
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
                    className={`aspect-[4/3] w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.03] ${project.imageFit ?? "object-cover"}`}
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
                  {project.gallery ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-turquoise"
                        >
                          Ver detalhes
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-h-[92vh] max-w-[min(94vw,75rem)] overflow-y-auto rounded-3xl border-border p-4 sm:p-6">
                        <DialogHeader className="pr-10">
                          <DialogTitle className="text-2xl text-navy sm:text-3xl">
                            {project.name}
                          </DialogTitle>
                          <DialogDescription className="text-sm sm:text-base">
                            {project.text}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-2 grid gap-5">
                          {project.gallery.map((item) => (
                            <figure key={item.label} className="overflow-hidden rounded-2xl border border-border bg-navy">
                              <img
                                src={item.image}
                                alt={`${item.label} do projeto ${project.name}`}
                                loading="lazy"
                                width={1580}
                                height={762}
                                className="h-auto w-full"
                              />
                              <figcaption className="px-4 py-3 text-sm font-medium text-navy-foreground">
                                {item.label}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <a
                      href="#contato"
                      className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors hover:text-turquoise"
                    >
                      Ver detalhes
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
