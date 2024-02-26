"use client";

import { formatBoardName } from "@/helpers";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function BoardHeader() {
  const { updateSearchParams, pathname } = useUpdateSearchParams();
  const title = formatBoardName(pathname);

  const openNewTaskDialog = () => {
    updateSearchParams({
      withName: "newTask",
      withValue: "1",
      backdrop: true,
    });
  };

  return (
    <header className="bg-app-dark-grey border-b-app-lines-dark sticky top-0 flex items-center justify-between gap-4 border-b px-8 py-4">
      <h1 className="text-xl font-semibold">{title}</h1>

      <button
        className="bg-app-main-purple rounded-full px-4 py-3"
        title="Add new task"
        aria-label="Add new task button"
        onClick={() => openNewTaskDialog()}
      >
        + Add new task
      </button>
    </header>
  );
}
