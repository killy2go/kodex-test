import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_10px_30px_rgba(76,108,255,0.4)] hover:from-blue-400 hover:to-violet-400",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  href: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-medium transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
