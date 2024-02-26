import { redirect } from "next/navigation";

export default function TaskFormLoading() {
  return (
    <div className="animate-pulse">
      <div className="sticky top-2.5">
        <span className="mx-auto block h-2 w-16 cursor-pointer rounded-full bg-app-lines-dark"></span>
      </div>

      <form
        id="task-form"
        name="Task form"
        className="flex flex-1 flex-col gap-4 pb-16"
        action={async (formData) => redirect("/")}
      >
        <div className="grid flex-1 gap-4 px-8 py-6">
          <div className="h-8 w-1/4 rounded bg-app-very-dark-grey"></div>

          <div className="h-12 w-3/4 rounded bg-app-very-dark-grey"></div>

          <div className="flex items-center gap-1 font-bold">
            Subtasks (
            <div className="h-4 w-4 rounded bg-app-very-dark-grey"></div>
            of <div className="h-4 w-4 rounded bg-app-very-dark-grey"></div>)
          </div>

          <ul className="space-y-4">
            <li>
              <div className="flex items-center gap-2 rounded bg-app-very-dark-grey">
                <div className="h-4 w-4 shrink-0 bg-app-very-dark-grey"></div>
                <div className="h-10 w-full bg-app-very-dark-grey"></div>
              </div>
            </li>
          </ul>

          <div className="relative grid gap-2">
            <div>Status:</div>
            <div className="h-10 w-full rounded bg-app-very-dark-grey"></div>
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
    </div>
  );
}
