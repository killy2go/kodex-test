import { Accordion } from "@/components/shared/Accordion";
import { Section } from "@/components/shared/Section";

const faqItems = [
  {
    question: "Wie schnell kann ich ein neues SaaS-Projekt launchen?",
    answer:
      "In der Regel innerhalb weniger Stunden. Die CLI setzt die wichtigsten Module direkt auf, damit dein Team statt Setup direkt an Value und Conversion arbeiten kann.",
  },
  {
    question: "Kann ich bestehende Next.js-Projekte erweitern?",
    answer:
      "Ja. Du kannst Module selektiv integrieren und bestehende Komponenten beibehalten. Kodex ist auf progressive Adoption ausgelegt.",
  },
  {
    question: "Sind die Checkout-Flows produktionsfähig?",
    answer:
      "Ja. Stripe ist als robuster Basisflow integriert und kann über Webhooks, zusätzliche Pricing-Modelle oder Team Seats erweitert werden.",
  },
  {
    question: "Unterstützt ihr Teams und Agenturen?",
    answer:
      "Ab dem Pro-Plan bekommst du Multi-Projekt-Support, klare Struktur für Wiederverwendbarkeit und schnellere Rollouts für Client-Arbeit.",
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      title="Häufige Fragen"
      subtitle="Kurz, klar und auf die Entscheidungen fokussiert, die beim Aufbau eines neuen SaaS-Produkts zählen."
    >
      <div className="mx-auto max-w-3xl">
        <Accordion items={faqItems} />
      </div>
    </Section>
  );
}
