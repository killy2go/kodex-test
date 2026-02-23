import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";

export function ProblemSolution() {
  return (
    <Section
      id="problem-solution"
      title="Von fragmentiertem Setup zu fokussiertem Product Momentum"
      subtitle="SaaS-Teams verlieren Zeit in Boilerplate und Integrationsdetails. Kodex bündelt die kritischen Module in einem klaren Launch-System."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-xs tracking-[0.16em] text-zinc-400 uppercase">Problem</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Zu viele Baustellen vor dem ersten Umsatz</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Checkout, Formulare, Tracking und Content-Struktur werden oft ad hoc zusammengebaut – das kostet Geschwindigkeit und Qualität.
          </p>
        </Card>
        <Card className="border-blue-400/30 bg-blue-500/10">
          <p className="text-xs tracking-[0.16em] text-blue-200 uppercase">Lösung</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Ein CLI Workflow, der Conversion direkt mitdenkt</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-100">
            Starte mit einem premium Landing-Fundament, aktiviere Module in Minuten und iteriere strukturiert statt im Chaos.
          </p>
        </Card>
      </div>
    </Section>
  );
}
