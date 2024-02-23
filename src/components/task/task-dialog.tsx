"use client";

import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { Suspense } from "react";
import { TaskForm } from "@/components/task/task-form";
import TaskFormLoading from "@/components/task/task-form-loading";

export default function TaskDialog() {
  const { searchParams, deleteSearchParam, overlayBackdrop } =
    useUpdateSearchParams();

  const showDialog = !!(
    overlayBackdrop &&
    searchParams.get("task") &&
    searchParams.get("task") !== ""
  );

  if (!showDialog) return null;

  return (
    <dialog
      className="fixed bottom-0 left-0 right-0 z-50 max-h-[90vh] min-h-[65vh] w-full animate-fadeUp overflow-y-auto rounded-xl bg-app-dark-grey text-white lg:inset-0 lg:h-[75vh] lg:w-[50vw]"
      open={true}
    >
      <Suspense fallback={<TaskFormLoading />}>
        <TaskForm taskHandle={searchParams.get("task") ?? ""} />
      </Suspense>
    </dialog>
  );
}
