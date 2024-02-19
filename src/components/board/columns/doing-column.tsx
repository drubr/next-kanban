import { getColumnItems } from "@/lib";
import BoardColumn from "@/components/board/column/board-column";

export default async function DoingColumn({
  boardName,
}: {
  boardName: string;
}) {
  const doings = await getColumnItems({
    boardName: boardName,
    columnStatus: "Doing",
  });

  return <BoardColumn title="Doing" color="#8b5cf6" tasks={doings} />;
}
