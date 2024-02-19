import { getColumnItems } from "@/lib";
import BoardColumn from "@/components/board/column/board-column";

export default async function DoneColumn({ boardName }: { boardName: string }) {
  const dones = await getColumnItems({
    boardName: boardName,
    columnStatus: "Done",
  });

  return <BoardColumn title="Done" color="#8b5cf6" tasks={dones} />;
}
