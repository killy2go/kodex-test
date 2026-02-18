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
    } catch (e) {
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
        className="
          inline-flex items-center justify-center gap-2
          rounded-lg border px-4 py-2 text-sm
          cursor-pointer select-none
          transition
          hover:bg-white/5
          active:scale-[0.98]
          focus:outline-none focus:ring-2 focus:ring-white/20
          disabled:cursor-not-allowed disabled:opacity-60
        "
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border border-white/30 border-t-white/80" />
            Öffne Checkout…
          </>
        ) : (
          "Stripe Checkout (Testmode) starten"
        )}
      </button>

      <p className="mt-2 text-xs text-muted-foreground">
        Testzahlung – kein echtes Geld. Stripe läuft im Testmode.
      </p>
    </div>
  );
}
