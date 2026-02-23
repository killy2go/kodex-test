"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function Accordion({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.02]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-white"
              aria-expanded={isOpen}
            >
              {item.question}
              <span className={cn("text-xl text-zinc-400 transition", isOpen && "rotate-45")}>+</span>
            </button>
            <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <p className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-zinc-300">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
