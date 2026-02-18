import { Container } from "@/components/shared/Container";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Witter Labs</p>
          <div className="flex gap-4 text-sm">
            <a className="underline" href="/impressum">Impressum</a>
            <a className="underline" href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
