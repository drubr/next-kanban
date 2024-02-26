"use server";

import { Board } from "@/interfaces";
import { unstable_noStore as noStore } from "next/cache";
import { promises as fs } from "fs";
import { formatBoardNameAsURL } from "@/helpers";

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

export async function getBoardNames(urlFormatted?: boolean) {
  const { boards } = await getData();

  let boardNames: string[] = [];

  for (const board of boards) {
    urlFormatted
      ? boardNames.push(formatBoardNameAsURL(board.name))
      : boardNames.push(board.name);
  }

  return boardNames;
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
