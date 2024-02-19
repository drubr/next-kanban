import BoardTask from "@/components/board/task/board-task";
import { Task } from "@/interfaces";

export default function BoardTaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.title}>
          <BoardTask task={task} />
        </li>
      ))}
    </ul>
  );
}
