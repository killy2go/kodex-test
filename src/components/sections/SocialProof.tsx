import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";

const testimonials = [
  {
    quote:
      "Wir haben unseren Sales-Funnel in 2 Tagen live gebracht. Früher haben wir für so einen Launch mindestens 2 Sprints gebraucht.",
    author: "Lea Hoffmann",
    role: "Founder, Brightly",
  },
  {
    quote:
      "Die CLI nimmt uns 80% Setup-Aufwand ab. Besonders Stripe + Newsletter + Analytics sind sofort nutzbar.",
    author: "Marco Stein",
    role: "CTO, Stacklab",
  },
  {
    quote:
      "Für Agentur-Projekte ist das ein Gamechanger: sauberes Fundament, starke Conversion Sections und schnelle Iterationen.",
    author: "Sara Yildiz",
    role: "Lead Product Designer, Flowstate Studio",
  },
];

export function SocialProof() {
  return (
    <Section
      id="testimonials"
      title="Built for teams that move fast"
      subtitle="Echte Ergebnisse von Teams, die aus Prototypen in Rekordzeit marktreife SaaS-Produkte bauen."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.author}>
            <p className="text-sm leading-relaxed text-zinc-200">“{item.quote}”</p>
            <p className="mt-6 text-sm font-medium text-white">{item.author}</p>
            <p className="text-xs text-zinc-400">{item.role}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
