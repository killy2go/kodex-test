import { Section } from "@/components/shared/Section";

export function FAQ() {
  return (
    <Section id="faq" title="FAQ" subtitle="Kurze Fragen & Antworten.">
      <div className="grid gap-3">
        {[
          ["Wie schnell ist ein Projekt live?", "Je nach Umfang meist in wenigen Tagen."],
          ["Kann ich später Features hinzufügen?", "Ja, modular (Stripe, Newsletter, Tracking etc.)."],
          ["Ist das eine Demo oder echte Umsetzung?", "Beides: Demo zeigt echte Umsetzungsmuster."],
        ].map(([q, a]) => (
          <div key={q} className="rounded-xl border p-5">
            <p className="font-medium">{q}</p>
            <p className="mt-2 text-sm text-muted-foreground">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
