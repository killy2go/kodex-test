"use client";

import { useState } from "react";

export function StripeCheckoutButton({ plan }: { plan: "starter" | "pro" | "business" }) {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = (await res.json()) as { url?: string; error?: string };

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert(data.error ?? "Checkout konnte nicht gestartet werden.");
    } catch {
      alert("Netzwerkfehler beim Starten des Checkouts.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border border-zinc-400 border-t-zinc-900" />
            Öffne Checkout…
          </>
        ) : (
          "Stripe Checkout starten"
        )}
      </button>

      <p className="mt-2 text-xs text-zinc-400">Testzahlung im Stripe-Testmode. Es wird kein echtes Geld belastet.</p>
    </div>
  );
}
