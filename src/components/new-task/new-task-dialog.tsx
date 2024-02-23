"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SubtaskSection from "@/components/new-task/subtask/subtask-section";
import { addNewTask } from "@/components/task/actions";

export default function NewTaskDialog() {
  const { searchParams, deleteSearchParam, overlayBackdrop } =
    useUpdateSearchParams();
  const showDialog = overlayBackdrop && searchParams.get("newTask") === "1";

  if (!showDialog) return null;

  return (
    <dialog
      className="fixed bottom-0 left-0 right-0 z-50 grid max-h-[90vh] w-full animate-fadeUp grid-rows-[auto_1fr] overflow-y-auto rounded-xl bg-slate-900 text-white lg:inset-0 lg:h-[75vh] lg:w-[50vw]"
      open={true}
    >
      <div className="sticky top-2.5">
        <span
          className="mx-auto block h-2 w-16 cursor-pointer rounded-full bg-slate-800"
          onClick={() => deleteSearchParam("newTask")}
        ></span>
      </div>

      <header className="relative mb-5 px-8 pt-6">
        <h2 className="text-xl font-semibold">Add new task</h2>
      </header>

      <form
        id="new-task-form"
        name="New task form"
        action={(formData) => addNewTask(formData)}
        className="flex flex-1 flex-col gap-4"
      >
        <div className="grid flex-1 gap-4 px-8 py-6">
          <div className="grid gap-2">
            <label className="font-semibold" htmlFor="new-task-title-input">
              Title
            </label>
            <input
              type="text"
              id="new-task-title-input"
              name="new-task-title-input"
              placeholder="e.g. Take coffee break"
              className="rounded border border-app-lines-dark bg-transparent px-4 py-3"
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
              className="rounded border border-app-lines-dark bg-transparent px-4 py-3"
            />
          </div>

          <SubtaskSection />

          <div className="relative grid gap-2">
            <label htmlFor="new-task-status-select">Status:</label>
            <select
              id="new-task-status-select"
              name="new-task-status-select"
              defaultValue="todo"
              className="select-none appearance-none rounded border border-app-lines-dark bg-transparent px-4 py-3"
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <div className="absolute bottom-4 right-4 select-none">
              <ChevronDownIcon className="h-4 w-4 text-muted" />
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 w-full border-t border-t-slate-800 bg-slate-900 p-4">
          <button
            type="submit"
            className="w-full rounded-full bg-app-main-purple px-4 py-2"
          >
            Create task
          </button>
        </div>
      </form>
    </dialog>
  );
}
