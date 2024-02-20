"use server";

import { addNewTask } from "@/lib";
import { redirect } from "next/navigation";

export const addNewTaskFormAction = async (formData: FormData) => {
  await addNewTask(formData);
  redirect("/");
};
