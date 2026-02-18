import { Container } from "@/components/shared/Container";

export function Hero() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Demo / Landingpage</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            {"kodex-test"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            One-Page Struktur mit Sections. Jede Section ist einzeln anpassbar.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="inline-flex rounded-lg border px-4 py-2" href="#pricing">
              Preise ansehen
            </a>
            <a className="inline-flex rounded-lg border px-4 py-2" href="#contact">
              Kontakt
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
