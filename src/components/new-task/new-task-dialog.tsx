"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { addNewTaskFormAction } from "@/components/new-task/new-task-action";

export default function NewTaskDialog() {
  const { searchParams, deleteSearchParam } = useUpdateSearchParams();
  const showNewTaskDialog = searchParams.get("newTask") === "true";

  if (!showNewTaskDialog) return null;

  return (
    <dialog
      className="fixed inset-0 h-[75vh] w-[30vw] rounded-xl bg-slate-900 p-8 text-white"
      open={true}
      onClick={() => {
        deleteSearchParam("newTask");
        deleteSearchParam("backdrop");
      }}
    >
      <header className="mb-5">
        <h2 className="text-xl">Add new task</h2>
      </header>

      <form
        action={(formData) => addNewTaskFormAction(formData)}
        className="flex flex-col gap-4"
        name="New task form"
      >
        <div className="grid flex-1 gap-4">
          <div className="grid gap-2">
            <label>Title</label>
            <input
              type="text"
              placeholder="e.g. Take coffee break"
              className="rounded border border-slate-800 bg-transparent px-4 py-3"
            />
          </div>

          <div className="grid gap-2">
            <label>Description</label>
            <textarea
              placeholder="e.g. Take coffee break"
              className="rounded border border-slate-800 bg-transparent px-4 py-3"
            />
          </div>
        </div>

        <button
          type="submit"
          className="sticky bottom-0 rounded-full bg-violet-400 px-4 py-3"
        >
          Create task
        </button>
      </form>
    </dialog>
  );
}
