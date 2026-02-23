import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#070b16]/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-[0.16em] text-white uppercase">
          Kodex CLI
        </a>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#pricing" className="h-10 px-4 text-xs sm:text-sm">
          Get started
        </Button>
      </Container>
    </header>
  );
}
