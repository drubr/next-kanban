"use client";

import { Task } from "@/interfaces";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { motion } from "framer-motion";

export default function TaskItem({ task }: { task: Task }) {
  const { updateSearchParams } = useUpdateSearchParams();

  const openTaskDialog = () => {
    updateSearchParams({
      withName: "task",
      withValue: task.title.toLowerCase().replaceAll(" ", "-"),
      backdrop: true,
    });
  };

  const progress = (
    (task.subtasks.reduce((accumulator, subtask) => {
      if (subtask.isCompleted) return accumulator + 1;
      return accumulator;
    }, 0) /
      task.subtasks.length) *
    100
  ).toFixed(0);

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

      <div className="bg-app-very-dark-grey relative h-4 w-full rounded-full">
        <motion.span
          animate={{ width: ["0%", `${progress}%`] }}
          className="bg-app-main-purple absolute bottom-0 left-0 top-0 rounded-full"
        ></motion.span>
      </div>
    </button>
  );
}
