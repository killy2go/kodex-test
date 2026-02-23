import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";

function DotIcon() {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/30 bg-blue-400/10">
      <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
    </span>
  );
}

const features = [
  {
    title: "Launch-ready Foundations",
    description: "Opinionated Starter mit sauberer Informationsarchitektur, SEO-Basics und performanten UI-Patterns.",
  },
  {
    title: "Stripe in minutes",
    description: "Checkout-Flows inklusive Planlogik und API-Routen sind direkt integrierbar – ideal für Early Revenue.",
  },
  {
    title: "Embedded AI & Chat",
    description: "Chatbot-Module und Assistenz-Flows lassen sich ohne Umbau in bestehende Seiten integrieren.",
  },
  {
    title: "Growth instrumentation",
    description: "Tracking Hooks für Funnel, UTM und Event-Monitoring – damit Entscheidungen datenbasiert bleiben.",
  },
  {
    title: "Composable sections",
    description: "Modulare Sections für Hero, Pricing, FAQ und Testimonials für schnelle Iterationen mit Design-Konsistenz.",
  },
  {
    title: "Production-minded",
    description: "Type-safe Components, Accessibility-Standards und sinnvolle Defaults für stabile Releases.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      title="Alles drin, was moderne SaaS-Landingpages brauchen"
      subtitle="Vom ersten Install bis zum optimierten Checkout: ein Toolkit für hohe Qualität, Geschwindigkeit und Conversion."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <DotIcon />
            <h3 className="mt-4 text-lg font-medium text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
