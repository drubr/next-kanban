"use server";

import { redirect } from "next/navigation";

export async function updateTask(formData: FormData) {
  console.log("updateTask", formData);
  redirect("/");
}

export async function addNewTask(formData: FormData) {
  console.log("addNewTask", formData);
  redirect("/");
}
