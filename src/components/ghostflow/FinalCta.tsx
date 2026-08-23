import { ArrowRight, MessageCircle } from "lucide-react";
import { GhostButton } from "./GhostButton";
import { Reveal } from "./Reveal";
import logo from "@/assets/ghostflow-logo.png";

export function FinalCta() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-navy py-20 md:py-28">
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M-20 300 C 250 180, 480 380, 760 240 S 1080 140, 1220 220"
          fill="none"
          stroke="var(--turquoise)"
          strokeOpacity="0.45"
          strokeWidth="1.4"
          className="flow-dash"
        />
      </svg>

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <h2 className="text-3xl leading-tight font-bold text-navy-foreground sm:text-4xl lg:text-[2.85rem]">
            Tem uma ideia? Vamos colocar ela em movimento.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/70 md:text-lg">
            Conte para a GhostFlow o que você precisa e vamos descobrir juntos a melhor forma de
            transformar sua ideia em uma solução digital.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GhostButton href="mailto:contato@ghostflow.com" size="lg" className="w-full sm:w-auto">
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </GhostButton>
            <GhostButton
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              variant="onDark"
              size="lg"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </GhostButton>
          </div>
        </Reveal>

        <Reveal delay={140} className="justify-self-center lg:justify-self-end">
          <img
            src={logo}
            alt="Fantasma da marca GhostFlow"
            loading="lazy"
            width={200}
            height={200}
            className="ghost-float h-36 w-36 md:h-48 md:w-48"
          />
        </Reveal>
      </div>
    </section>
  );
}
