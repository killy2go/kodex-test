import { Button } from "@/components/shared/Button";
import { Section } from "@/components/shared/Section";

export function FinalCTA() {
  return (
    <Section className="pt-10 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-6 py-14 text-center sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build once. Launch faster. Convert better.
          </h2>
          <p className="mt-4 text-base text-zinc-200 sm:text-lg">
            Gib deinem nächsten SaaS-Launch die Struktur und Qualität, die sonst erst nach Monaten entsteht.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#pricing">Jetzt Plan wählen</Button>
            <Button href="#faq" variant="secondary">
              Fragen klären
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
