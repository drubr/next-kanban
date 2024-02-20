"use server";

import { Board } from "@/interfaces";
import { unstable_noStore as noStore } from "next/cache";
import { promises as fs } from "fs";
import { redirect } from "next/navigation";

export async function getData(): Promise<{ boards: Board[] }> {
  noStore();

  if (process.env.NODE_ENV === "development") {
    const res = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
    return JSON.parse(res);
  } else {
    const res = await fetch("", {
      next: { revalidate: 300 },
    });
    return res.json();
  }
}

export async function getBoards() {
  const { boards } = await getData();
  return boards;
}

export async function getColumnItems({
  boardName,
  columnStatus,
}: {
  boardName: string;
  columnStatus: "Todo" | "Doing" | "Done";
}) {
  const { boards } = await getData();

  const board = boards.filter((board) => board.name === boardName)[0];

  if (board === null || board === undefined) return [];

  const columns = board.columns;

  if (columns === null || columns === undefined) return [];

  const column = columns.filter((column) => column.name === columnStatus)[0];

  if (column === null || column === undefined) return [];

  return column.tasks;
}

export async function addNewTask(formData: FormData) {
  console.log("addNewTask", formData);
  // Validate here

  redirect("/");
}
