import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";

const useCases = [
  {
    title: "Agencies",
    text: "Baue wiederholbare Client-Setups mit starker Design-Basis und schneller Time-to-Value.",
  },
  {
    title: "Solo Developers",
    text: "Gehe schneller live, sammle früher Feedback und monetarisiere MVPs mit minimalem Setup-Overhead.",
  },
  {
    title: "Startups",
    text: "Schaffe ein konsistentes Frontend-Fundament, damit Product, Marketing und Engineering aligned arbeiten.",
  },
];

export function UseCases() {
  return (
    <Section
      id="use-cases"
      title="Gemacht für reale SaaS-Teams"
      subtitle="Ob Solo oder Team: Kodex passt sich an deinen Arbeitsmodus an und bleibt dabei modular."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {useCases.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
