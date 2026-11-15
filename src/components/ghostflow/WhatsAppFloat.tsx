import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5585987767232"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-turquoise text-navy shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105 md:hidden"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
