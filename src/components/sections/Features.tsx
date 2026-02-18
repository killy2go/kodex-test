import { Section } from "@/components/shared/Section";

export function Features() {
  return (
    <Section
      id="features"
      title="Features"
      subtitle="Hier kommen 3–6 Feature Cards rein."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Performance & SEO",
          "Saubere UX",
          "Stripe Integration",
          "Newsletter Flow",
          "Tracking & Events",
          "Saubere Codebase",
        ].map((t) => (
          <div key={t} className="rounded-xl border p-5">
            <h3 className="font-medium">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Kurzbeschreibung als Platzhalter.
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
