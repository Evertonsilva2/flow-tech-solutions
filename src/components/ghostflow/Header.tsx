import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GhostButton } from "./GhostButton";
import logo from "@/assets/ghostflow-mascot-white.png";

const quoteUrl =
  "https://wa.me/5585987767232?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-foreground/10 bg-navy/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:h-20">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logo}
            alt="Logo GhostFlow"
            width={36}
            height={36}
            className="h-8 w-8 shrink-0 md:h-9 md:w-9"
          />
          <span className="truncate font-display text-lg font-bold text-navy-foreground md:text-xl">
            Ghost<span className="text-turquoise">Flow</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-navy-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-turquoise after:transition-all after:duration-300 hover:text-navy-foreground hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <GhostButton href={quoteUrl} target="_blank" rel="noopener noreferrer">
            Solicitar orçamento
          </GhostButton>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy-foreground/20 text-navy-foreground transition-colors hover:border-turquoise hover:text-turquoise lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-navy-foreground/10 bg-navy/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="section-shell flex flex-col gap-1 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-2 py-3 text-base text-navy-foreground/80 transition-colors hover:bg-navy-foreground/5 hover:text-turquoise"
            >
              {link.label}
            </a>
          ))}
          <GhostButton
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento
          </GhostButton>
        </nav>
      </div>
    </header>
  );
}
