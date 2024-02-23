import { getData } from "@/lib";
import { Task } from "@/interfaces";
import { formatTaskTitle } from "@/helpers";

export async function fetchTask(taskHandle: string) {
  const { boards } = await getData();

  if (boards === null || boards === undefined) return undefined;

  let tasks: Task[] = [];

  for (const board of boards) {
    board.columns.map((column) => column.tasks.map((task) => tasks.push(task)));
  }

  return tasks.filter(
    (task) => formatTaskTitle(task.title) === formatTaskTitle(taskHandle),
  )[0];
}
