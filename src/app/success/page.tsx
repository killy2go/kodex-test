export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">✅ Erfolg!</h1>
      <p className="mt-3 text-muted-foreground">
        Das ist der Success-State der Demo. (Testmode – keine echte Zahlung)
      </p>

      <a
        className="mt-8 inline-flex rounded-lg border px-4 py-2"
        href="/"
      >
        Zurück zur Demo
      </a>
    </main>
  );
}
