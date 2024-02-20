"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { addNewTaskFormAction } from "@/components/new-task/new-task-action";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SubtaskSection from "@/components/new-task/subtask/subtask-section";

export default function NewTaskDialog() {
  const { searchParams, deleteSearchParam } = useUpdateSearchParams();
  const showNewTaskDialog = searchParams.get("newTask") === "true";

  if (!showNewTaskDialog) return null;

  return (
    <dialog
      className="animate-fadeUp fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] w-full rounded-xl bg-slate-900 p-8 text-white lg:inset-0 lg:h-[75vh] lg:w-[50vw]"
      open={true}
    >
      <header className="mb-5">
        <h2 className="text-xl font-semibold">Add new task</h2>
      </header>

      <form
        id="new-task-form"
        name="New task form"
        action={(formData) => addNewTaskFormAction(formData)}
        className="flex flex-col gap-4"
      >
        <div className="grid flex-1 gap-4">
          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="new-task-title-input">
              Title
            </label>
            <input
              type="text"
              id="new-task-title-input"
              name="new-task-title-input"
              placeholder="e.g. Take coffee break"
              className="rounded border border-slate-800 bg-transparent px-4 py-3"
            />
          </div>

          <div className="grid gap-2">
            <label
              className="font-semibold"
              htmlFor="new-task-description-textarea"
            >
              Description
            </label>
            <textarea
              id="new-task-description-textarea"
              name="new-task-description-textarea"
              placeholder="e.g. Take coffee break"
              className="rounded border border-slate-800 bg-transparent px-4 py-3"
            />
          </div>

          <SubtaskSection />

          <div className="relative grid gap-2">
            <label htmlFor="new-task-status-select">Status:</label>
            <select
              id="new-task-status-select"
              name="new-task-status-select"
              className="select-none appearance-none rounded border border-slate-800 bg-transparent px-4 py-3"
            >
              <option value="todo" selected>
                Todo
              </option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <div className="absolute bottom-4 right-4 select-none">
              <ChevronDownIcon className="text-muted h-4 w-4" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="sticky bottom-0 rounded-full bg-violet-400 px-4 py-2"
        >
          Create task
        </button>
      </form>
    </dialog>
  );
}
