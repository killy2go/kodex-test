import { Card } from "@/components/shared/Card";
import { Section } from "@/components/shared/Section";
import { StripeCheckoutButton } from "@/components/stripe/StripeCheckoutButton";

const tiers = [
  {
    name: "Starter",
    price: "€29",
    description: "Für Solo-Founder und MVPs",
    plan: "starter",
    popular: false,
    features: ["1 Projekt", "Stripe Basis-Setup", "Core Landing Sections", "Community Support"],
  },
  {
    name: "Pro",
    price: "€79",
    description: "Für wachsende SaaS-Produkte",
    plan: "pro",
    popular: true,
    features: ["Bis zu 5 Projekte", "Stripe + Newsletter + Chatbot", "A/B-ready Conversion Components", "Priority Support"],
  },
  {
    name: "Business",
    price: "€149",
    description: "Für Teams mit mehreren Produkten",
    plan: "business",
    popular: false,
    features: ["Unbegrenzte Projekte", "Custom Module Blueprints", "Design Review Templates", "Dedicated Support"],
  },
] as const;

export function Pricing() {
  return (
    <Section
      id="pricing"
      title="Pricing, das mit deinem Produkt mitwächst"
      subtitle="Transparent, modular und auf schnelle Iterationen ausgelegt. Jeder Plan enthält den vollen Core-Stack."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className={tier.popular ? "border-blue-400/50 bg-blue-500/10" : ""}>
            {tier.popular && (
              <span className="rounded-full border border-blue-300/40 bg-blue-400/20 px-2.5 py-1 text-xs font-medium text-blue-100">
                Most popular
              </span>
            )}
            <h3 className="mt-4 text-lg font-semibold text-white">{tier.name}</h3>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white">{tier.price}</p>
            <p className="mt-2 text-sm text-zinc-300">{tier.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-200">
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <StripeCheckoutButton plan={tier.plan} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
