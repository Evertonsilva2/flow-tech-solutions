import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Entendemos", text: "Negócio, problema e objetivo." },
  { n: "02", title: "Planejamos", text: "Estrutura, experiência e tecnologia." },
  { n: "03", title: "Desenvolvemos", text: "Construção da solução." },
  { n: "04", title: "Validamos", text: "Testes, ajustes e refinamentos." },
  { n: "05", title: "Entregamos", text: "Produto pronto para evoluir." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-64 bg-turquoise/5 blur-3xl"
      />
      <div className="section-shell relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Nosso processo</p>
          <h2 className="mt-4 text-3xl leading-tight font-bold text-navy-foreground sm:text-4xl lg:text-[2.85rem]">
            Da ideia ao produto, sem complicar o caminho.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* linha de fluxo horizontal (desktop) */}
          <span
            aria-hidden="true"
            className="absolute top-6 right-6 left-6 hidden h-px bg-gradient-to-r from-turquoise/0 via-turquoise/60 to-turquoise/0 lg:block"
          />
          {/* linha de fluxo vertical (mobile) */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[1.4rem] w-px bg-gradient-to-b from-turquoise/0 via-turquoise/50 to-turquoise/0 lg:hidden"
          />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 100} className="relative pl-14 lg:pl-0">
                <span className="absolute top-0 left-0 grid h-11 w-11 place-items-center rounded-full border border-turquoise/40 bg-navy font-display text-sm font-semibold text-turquoise lg:relative lg:mb-6">
                  {step.n}
                </span>
                <h3 className="text-lg font-semibold text-navy-foreground lg:mt-0">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/60">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
