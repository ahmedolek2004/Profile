export function GradientGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-30">
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute right-0 top-24 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}
