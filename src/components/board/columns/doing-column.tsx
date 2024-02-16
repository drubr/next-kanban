"use client";
export default function DoingColumn() {
  return (
    <div className="inline-block w-[16rem] space-y-6">
      <div className="text-muted flex items-center gap-2 text-xs uppercase tracking-widest">
        <span className="h-3 w-3 shrink-0 rounded-full bg-violet-400"></span>
        Doing (6)
      </div>
      <ul className="space-y-4">
        <li className="h-16 rounded-lg bg-slate-800"></li>
        <li className="h-16 rounded-lg bg-slate-800"></li>
        <li className="h-16 rounded-lg bg-slate-800"></li>
        <li className="h-16 rounded-lg bg-slate-800"></li>
        <li className="h-16 rounded-lg bg-slate-800"></li>
        <li className="h-16 rounded-lg bg-slate-800"></li>
      </ul>
    </div>
  );
}
