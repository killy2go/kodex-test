import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-white">✅ Erfolg!</h1>
      <p className="mt-3 text-zinc-300">Das ist der Success-State der Demo. (Testmode – keine echte Zahlung)</p>

      <Link className="mt-8 inline-flex rounded-lg border border-white/20 px-4 py-2 text-sm" href="/">
        Zurück zur Demo
      </Link>
    </main>
  );
}
