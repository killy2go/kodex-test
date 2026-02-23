import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { LogoCloud } from "@/components/shared/LogoCloud";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-blob absolute top-0 left-0 -z-10 h-[360px] w-[360px] rounded-full bg-blue-500/25 blur-[110px]" />
      <div className="hero-blob absolute right-[-120px] bottom-[-180px] -z-10 h-[460px] w-[460px] rounded-full bg-violet-500/20 blur-[130px]" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Badge>Neue Generation von CLI Launch Kits</Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Ship SaaS-ready Produkte in Stunden statt Wochen.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-xl">
            Kodex CLI integriert Stripe, Newsletter, Chatbot und Conversion-Sections in ein frisches Projekt – mit production-ready Defaults, starker UX und sauberer Architektur.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="#pricing">Jetzt starten</Button>
            <Button href="#how-it-works" variant="secondary">
              Produkt-Tour ansehen
            </Button>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-4 text-center text-xs tracking-[0.2em] text-zinc-500 uppercase">Vertrauen Teams von</p>
          <LogoCloud logos={["NOVA", "STACKLAB", "BRIGHTLY", "VENTOR", "PIXELHIVE", "FUSE AI"]} />
        </div>
      </Container>
    </section>
  );
}
