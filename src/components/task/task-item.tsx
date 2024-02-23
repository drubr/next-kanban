"use client";

import { Task } from "@/interfaces";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";

export default function TaskItem({ task }: { task: Task }) {
  const { updateSearchParams } = useUpdateSearchParams();

  const openTaskDialog = () => {
    updateSearchParams({
      withName: "task",
      withValue: task.title.toLowerCase().replaceAll(" ", "-"),
      backdrop: true,
    });
  };

  return (
    <button
      className="bg-app-dark-grey w-full cursor-pointer space-y-1 rounded-lg p-4 text-left"
      onClick={() => openTaskDialog()}
    >
      <h3 className="text-[1rem] font-bold leading-[1.6] text-white">
        {task.title}
      </h3>

      <p className="text-app-medium-grey text-xs leading-[1.6]">
        {task.subtasks.reduce((accumulator, subtask) => {
          if (subtask.isCompleted) return accumulator + 1;
          return accumulator;
        }, 0)}
        <span className="px-1">of</span>
        {task.subtasks.length} subtasks done
      </p>
    </button>
  );
}
