"use client";

import { formatBoardTitle } from "@/helpers";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function BoardHeader() {
  const { toggleSearchParam, pathname } = useUpdateSearchParams();
  const title = formatBoardTitle(pathname);

  return (
    <header className="sticky top-0 flex items-center justify-between gap-4 border-b border-b-slate-800 bg-slate-900 px-8 py-4">
      <h1 className="text-xl font-semibold">{title}</h1>

      <button
        className="rounded-full bg-violet-600 px-4 py-3"
        title="Add new task"
        aria-label="Add new task button"
        onClick={() => {
          toggleSearchParam("newTask", "true");
        }}
      >
        + Add new task
      </button>
    </header>
  );
}
