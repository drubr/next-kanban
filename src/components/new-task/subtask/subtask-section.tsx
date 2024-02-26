"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SubtaskSection() {
  const [subtasks, setSubtasks] = useState<number[]>([]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <div className="font-semibold">Subtasks</div>

        <ul className="grid gap-2">
          {subtasks.map((subtask, index) => (
            <li key={index} className="flex">
              <input
                type="text"
                id={`new-task-subtask-${index}-input`}
                name={`new-task-subtask-${index}-input`}
                placeholder="e.g. Make coffee"
                className="flex-1 rounded border border-app-lines-dark bg-transparent px-4 py-3"
              />

              <button
                className="p-2"
                onClick={() =>
                  setSubtasks((prevState) => [
                    ...prevState,
                    subtasks.length - 1,
                  ])
                }
              >
                <XMarkIcon className="h-4 w-4 text-muted" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="sticky bottom-0 w-max rounded-full bg-white px-4 py-2 font-semibold text-app-main-purple"
        onClick={() =>
          setSubtasks((prevState) => [...prevState, subtasks.length + 1])
        }
      >
        Add New Subtask
      </button>
    </div>
  );
}
