import { Section } from "@/components/shared/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Kontakt"
      subtitle="Platzhalter – später Formular oder Calendly."
    >
      <div className="rounded-xl border p-6">
        <p className="text-sm text-muted-foreground">
          Schreib mir:{" "}
          <a className="underline" href="mailto:hello@witterlabs.de">
            hello@witterlabs.de
          </a>
        </p>
      </div>
    </Section>
  );
}
