import { ArrowRight, CheckCircle2, Code2, Gauge, Rocket, ShieldCheck, Zap } from "lucide-react";
import { GhostButton } from "./GhostButton";
import { FlowLines } from "./FlowLines";
import { Reveal } from "./Reveal";

const quoteUrl =
  "https://wa.me/5585987767232?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.";

function DevQaVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl py-5 sm:py-9">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-turquoise/25 bg-[#101a29]/95 p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff625f]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="inline-flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.18em] text-turquoise uppercase">
            <Code2 className="h-3.5 w-3.5" />
            Dev + QA
          </span>
        </div>

        <div className="mt-5 space-y-2 font-mono text-[0.72rem] leading-relaxed sm:text-sm">
          <p className="text-white/35">// ideia validada, produto em movimento</p>
          <p>
            <span className="text-[#f472b6]">const</span>{" "}
            <span className="text-[#7dd3fc]">projeto</span> <span className="text-white/60">= {"{"}</span>
          </p>
          <p className="pl-4 text-white/70">
            experiência: <span className="text-[#86efac]">&quot;intuitiva&quot;</span>,
          </p>
          <p className="pl-4 text-white/70">
            performance: <span className="text-[#86efac]">&quot;otimizada&quot;</span>,
          </p>
          <p className="pl-4 text-white/70">
            qualidade: <span className="text-[#86efac]">&quot;testada&quot;</span>
          </p>
          <p className="text-white/60">{"}"};</p>
          <p className="pt-2">
            <span className="text-[#c4b5fd]">ghostflow</span>
            <span className="text-white/55">.</span>
            <span className="text-turquoise">entregar</span>
            <span className="text-white/60">(projeto);</span>
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center text-[0.6rem] font-semibold text-white/60 sm:text-xs">
          <span className="inline-flex items-center justify-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Testes OK
          </span>
          <span className="inline-flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-turquoise" /> QA aprovado
          </span>
          <span className="inline-flex items-center justify-center gap-1.5">
            <Rocket className="h-3.5 w-3.5 text-amber-400" /> Deploy pronto
          </span>
        </div>
      </div>

      <div className="absolute -right-2 top-0 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#172235] px-3 py-2.5 text-xs font-semibold text-white sm:-right-5 sm:top-3 sm:px-4">
        <Rocket className="h-4 w-4 text-turquoise" /> Deploy realizado
      </div>
      <div className="absolute -bottom-1 -left-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#172235] px-3 py-2.5 text-xs font-semibold text-white sm:-left-6 sm:bottom-3 sm:px-4">
        <ShieldCheck className="h-4 w-4 text-emerald-400" /> Cobertura QA
      </div>
      <div className="absolute -right-1 bottom-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#172235] px-3 py-2.5 text-xs font-semibold text-white sm:-right-6 sm:bottom-14 sm:px-4">
        <Gauge className="h-4 w-4 text-amber-400" /> Performance A+
      </div>
    </div>
  );
}

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
              <GhostButton
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
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
            <div className="relative p-6 sm:p-10">
              <DevQaVisual />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
