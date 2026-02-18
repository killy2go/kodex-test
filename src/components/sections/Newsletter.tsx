"use client";

import { useState } from "react";
import { Section } from "@/components/shared/Section";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "success">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Dummy success
    setState("success");
  };

  return (
    <Section
      id="newsletter"
      title="Newsletter"
      subtitle="Dummy-Flow: Validation + Success State."
    >
      <div className="rounded-xl border p-6">
        {state === "success" ? (
          <p className="text-sm">
            ✅ Danke! (Dummy) Du bist eingetragen.
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              className="h-10 flex-1 rounded-lg border bg-transparent px-3 text-sm"
            />
            <button className="h-10 rounded-lg border px-4 text-sm">
              Eintragen
            </button>
          </form>
        )}
        <p className="mt-2 text-xs text-muted-foreground">
          Kein echtes Mailing – Demo UX.
        </p>
      </div>
    </Section>
  );
}
