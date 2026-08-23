import { Github, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/ghostflow-logo.png";

const nav = ["Início", "Serviços", "Projetos", "Sobre", "Contato"];
const navHrefs = ["#inicio", "#servicos", "#projetos", "#sobre", "#contato"];
const services = [
  "Desenvolvimento Web",
  "Desenvolvimento Mobile",
  "Sistemas sob medida",
  "UI/UX Design",
  "Automação",
  "Consultoria",
];

export function Footer() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy pt-16 pb-8">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="Logo GhostFlow"
                loading="lazy"
                width={36}
                height={36}
                className="h-8 w-8"
              />
              <span className="font-display text-lg font-bold text-navy-foreground">
                Ghost<span className="text-turquoise">Flow</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              Criamos tecnologia para transformar ideias em experiências digitais que fluem.
            </p>
            <ul className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#contato"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-navy-foreground/15 text-navy-foreground/70 transition-colors hover:border-turquoise hover:text-turquoise"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">Navegação</h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item, i) => (
                <li key={item}>
                  <a
                    href={navHrefs[i]}
                    className="text-sm text-navy-foreground/60 transition-colors hover:text-turquoise"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">Serviços</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-sm text-navy-foreground/60 transition-colors hover:text-turquoise"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/60">
              <li>
                <a
                  href="mailto:contato@ghostflow.com"
                  className="inline-flex items-center gap-2 transition-colors hover:text-turquoise"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  contato@ghostflow.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-turquoise"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Brasil — atendimento remoto
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-navy-foreground/10 pt-6">
          <p className="text-xs text-navy-foreground/50">
            © 2026 GhostFlow. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
