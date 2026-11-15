import { createFileRoute } from "@tanstack/react-router";
import { Differentials } from "@/components/ghostflow/Differentials";
import { FinalCta } from "@/components/ghostflow/FinalCta";
import { Footer } from "@/components/ghostflow/Footer";
import { Header } from "@/components/ghostflow/Header";
import { Hero } from "@/components/ghostflow/Hero";
import { Portfolio } from "@/components/ghostflow/Portfolio";
import { Process } from "@/components/ghostflow/Process";
import { Services } from "@/components/ghostflow/Services";
import { WhatsAppFloat } from "@/components/ghostflow/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Differentials />
        <Portfolio />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
