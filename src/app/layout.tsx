import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kodex CLI – Premium SaaS Launch Kit",
  description:
    "Starte SaaS-Landingpages mit Stripe, Newsletter und Conversion-Modulen in Stunden statt Wochen.",
  openGraph: {
    title: "Kodex CLI – Premium SaaS Launch Kit",
    description:
      "Produktionsreife SaaS-Bausteine für schnelle Launches: Stripe, Newsletter, Chatbot und moderne Landing-Sections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
