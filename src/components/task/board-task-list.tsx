import TaskItem from "@/components/task/task-item";

export default function BoardTaskList({ tasks }: { tasks: TaskItem[] }) {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.title}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}
