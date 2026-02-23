export function LogoCloud({ logos }: { logos: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {logos.map((logo) => (
        <div
          key={logo}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-medium tracking-[0.16em] text-zinc-400 uppercase"
        >
          {logo}
        </div>
      ))}
    </div>
  );
}
