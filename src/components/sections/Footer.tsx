import { Container } from "@/components/shared/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.15em] text-white uppercase">Kodex CLI</p>
            <p className="mt-2 text-sm text-zinc-400">SaaS Launch Infrastructure for ambitious teams.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-zinc-300">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#pricing">Pricing</a>
            <a className="transition hover:text-white" href="/impressum">Impressum</a>
            <a className="transition hover:text-white" href="/datenschutz">Datenschutz</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Kodex. All rights reserved.</p>
      </Container>
    </footer>
  );
}
