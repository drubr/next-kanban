"use client";
export default function NewColumn() {
  return (
    <div className="inline-block w-[16rem] space-y-6">
      <div className="h-4 bg-slate-950"></div>
      <ul className="text-muted flex h-full items-center justify-center rounded-lg bg-slate-800 transition hover:bg-slate-700">
        + New column
      </ul>
    </div>
  );
}
