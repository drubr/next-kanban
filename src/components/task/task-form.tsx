import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { fetchTask } from "@/lib/api";
import { updateTask } from "@/components/task/actions";

export async function TaskForm({ taskHandle }: { taskHandle: string }) {
  const task = await fetchTask(taskHandle);

  if (task === undefined) return <div>No task found. :)</div>;

  const done = task.subtasks.reduce((accumulator, subtask) => {
    if (subtask.isCompleted) return accumulator + 1;
    return accumulator;
  }, 0);

  return (
    <>
      <div className="sticky top-2.5">
        <span className="mx-auto block h-2 w-16 cursor-pointer rounded-full bg-app-lines-dark"></span>
      </div>

      <form
        id="task-form"
        name="Task form"
        className="flex flex-1 flex-col gap-4 pb-16"
        action={async (formData) => updateTask(formData)}
      >
        <div className="grid flex-1 gap-4 px-8 py-6">
          <input
            type="text"
            className="border-none bg-transparent text-xl font-bold focus:outline-none"
            defaultValue={task.title}
          />

          <textarea
            id="task-description-textarea"
            name="task-description-textarea"
            placeholder="Description"
            className="resize-none rounded border-none bg-transparent focus:outline-none"
            defaultValue={task.description}
          />

          <div className="font-bold">
            Subtasks ({done} of {task.subtasks.length})
          </div>

          <ul className="grid gap-2">
            {task.subtasks.map((subtask, index) => (
              <li key={index}>
                <div className="flex items-center gap-2 rounded bg-app-very-dark-grey px-4 py-3">
                  <input
                    type="checkbox"
                    name={`subtask-${index}-completed-checkbox`}
                    defaultChecked={subtask.isCompleted}
                  />
                  <input
                    type="text"
                    id={`subtask-${index}-input`}
                    name={`subtask-${index}-input`}
                    placeholder="e.g. Make coffee"
                    className="flex-1 bg-transparent focus:outline-none"
                    defaultValue={subtask.title}
                  />
                </div>
              </li>
            ))}
            {/* Add new subtask button/form here */}
          </ul>

          <div className="relative grid gap-2">
            <label htmlFor="new-task-status-select">Status:</label>
            <select
              id="new-task-status-select"
              name="new-task-status-select"
              defaultValue={task.status}
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

        <div className="absolute bottom-0 left-0 right-0 w-full border-t border-t-app-lines-dark bg-app-dark-grey p-4">
          <button
            type="submit"
            className="w-full rounded-full bg-app-main-purple px-4 py-2"
          >
            Done
          </button>
        </div>
      </form>
    </>
  );
}
