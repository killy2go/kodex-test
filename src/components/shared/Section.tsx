import { Container } from "@/components/shared/Container";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <Container>
        {(title || subtitle) && (
          <header className="mb-8">
            {title && <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
