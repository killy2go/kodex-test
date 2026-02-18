import { Section } from "@/components/shared/Section";
import { StripeCheckoutButton } from "@/components/stripe/StripeCheckoutButton";

export function Pricing() {
  return (
    <Section
      id="pricing"
      title="Pricing"
      subtitle="Pläne als Cards. Buttons kannst du später mit Stripe verbinden."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { name: "Starter", price: "€29", desc: "Für kleine Projekte", plan: "starter" },
          { name: "Pro", price: "€79", desc: "Für Growth", plan: "pro" },
          { name: "Business", price: "€149", desc: "Für Teams", plan: "business" },
        ].map((p) => (
          <div key={p.name} className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-3xl font-semibold">{p.price}</p>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

            <div className="mt-6">
              <StripeCheckoutButton plan={p.plan as "starter" | "pro" | "business"} />
            </div>
          </div>
        ))}
      </div>

    {/* WL_PRICING_CTA */}
    </Section>
  );
}
