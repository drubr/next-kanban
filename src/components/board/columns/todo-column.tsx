import { getColumnItems } from "@/lib";
import BoardColumn from "@/components/board/column/board-column";

export default async function TodoColumn({ boardName }: { boardName: string }) {
  const todos = await getColumnItems({
    boardName: boardName,
    columnStatus: "Todo",
  });

  return <BoardColumn title="Todos" color="#22d3ee" tasks={todos} />;
}
