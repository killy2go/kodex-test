"use client";

import { useSearchParams } from "next/navigation";

export function CheckoutStatusNotice() {
  const sp = useSearchParams();
  const canceled = sp.get("canceled") === "1";

  if (!canceled) return null;

  return (
    <div className="mt-4 rounded-lg border px-4 py-3 text-sm">
      Checkout abgebrochen. (Testmode – kein echtes Geld)
    </div>
  );
}
