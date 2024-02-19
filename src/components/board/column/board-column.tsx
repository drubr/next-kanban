import BoardTaskListHeader from "@/components/board/task/board-task-list-header";
import BoardTaskList from "@/components/board/task/board-task-list";
import { Task } from "@/interfaces";

export default function BoardColumn({
  title,
  tasks,
  color,
}: {
  title: string;
  tasks: Task[];
  color: string;
}) {
  return (
    <div className="inline-block w-[16rem] space-y-6">
      <BoardTaskListHeader
        title={title}
        tasksCount={tasks.length}
        color={color}
      />

      {tasks.length === 0 ? (
        <button
          title={`Add new ${title} board item`}
          aria-label={`Add new ${title} board item`}
          className="text-muted w-full space-y-1 rounded-lg border border-slate-800 p-4 text-center transition hover:bg-slate-800"
        >
          +
        </button>
      ) : (
        <BoardTaskList tasks={tasks} />
      )}
    </div>
  );
}
