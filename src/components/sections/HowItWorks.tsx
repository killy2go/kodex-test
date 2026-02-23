import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";

const steps = [
  {
    step: "01",
    title: "CLI ausführen",
    text: "Projekt scaffolden und gewünschte Module wie Stripe, Newsletter oder Chat auswählen.",
  },
  {
    step: "02",
    title: "Branding anpassen",
    text: "Farben, Typografie und Copy auf deine Positionierung abstimmen – ohne Struktur neu zu bauen.",
  },
  {
    step: "03",
    title: "Launch & iterate",
    text: "Deployen, Signups messen und mithilfe modularer Sections schnell optimieren.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      subtitle="Ein klarer Workflow für schnellere Launches mit konsistentem Qualitätsniveau."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((item) => (
          <Card key={item.step}>
            <p className="text-xs font-semibold tracking-[0.18em] text-blue-200 uppercase">Step {item.step}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{item.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
