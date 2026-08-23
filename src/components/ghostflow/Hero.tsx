import { ArrowRight, Zap } from "lucide-react";
import { GhostButton } from "./GhostButton";
import { FlowLines } from "./FlowLines";
import { Reveal } from "./Reveal";
import heroFlow from "@/assets/hero-flow.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-navy">
      <FlowLines className="opacity-70" />
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-turquoise/10 blur-3xl"
      />
      <div className="section-shell relative grid items-center gap-14 pt-28 pb-20 md:pt-36 md:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-44 lg:pb-32">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-turquoise/30 bg-turquoise/10 px-4 py-1.5 text-xs font-medium text-turquoise md:text-sm">
              <Zap className="h-3.5 w-3.5" />
              Tecnologia que coloca ideias em movimento
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-[2.15rem] leading-[1.08] font-bold text-navy-foreground sm:text-5xl lg:text-6xl">
              Transformamos <span className="text-turquoise">ideias</span> em experiências digitais
              que <span className="text-turquoise">fluem</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/70 md:text-lg">
              Criamos soluções digitais modernas, intuitivas e sob medida para transformar ideias em
              produtos que realmente funcionam.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GhostButton href="#contato" size="lg" className="w-full sm:w-auto">
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </GhostButton>
              <GhostButton
                href="#projetos"
                variant="onDark"
                size="lg"
                className="w-full sm:w-auto"
              >
                Conhecer projetos
              </GhostButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 -m-6 rounded-[2.5rem] bg-turquoise/10 blur-2xl"
            />
            <div className="ghost-float relative overflow-hidden rounded-[2rem] border border-turquoise/20 bg-navy-soft/40">
              <img
                src={heroFlow}
                alt="Composição abstrata do fantasma GhostFlow entre linhas de fluxo e nós conectados"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
