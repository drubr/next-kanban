import { Task } from "@/interfaces";

export default function BoardTask({ task }: { task: Task }) {
  return (
    <div className="space-y-1 rounded-lg bg-slate-800 p-4">
      <h3>{task.title}</h3>
      {task.description.trim() !== "" && (
        <p className="text-muted text-xs leading-[1.6]">{task.description}</p>
      )}
    </div>
  );
}
