import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/cn";
import { SectionReveal } from "@/components/shared/SectionReveal";

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <Container>
        <SectionReveal>
          {(title || subtitle) && (
            <header className="mx-auto mb-10 max-w-3xl text-center">
              {title && <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>}
              {subtitle && <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">{subtitle}</p>}
            </header>
          )}
          {children}
        </SectionReveal>
      </Container>
    </section>
  );
}
