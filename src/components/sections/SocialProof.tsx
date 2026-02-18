import { Section } from "@/components/shared/Section";

export function SocialProof() {
  return (
    <Section
      id="proof"
      title="Social Proof"
      subtitle="Platzhalter für Logos, Zahlen oder kurze Testimonials."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {["Logo / KPI 1", "Logo / KPI 2", "Logo / KPI 3"].map((t) => (
          <div key={t} className="rounded-xl border p-5">
            <p className="text-sm text-muted-foreground">{t}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
