import BoardHeader from "@/components/board/layout/board-header";
import TodoColumn from "@/components/board/columns/todo-column";
import DoingColumn from "@/components/board/columns/doing-column";
import DoneColumn from "@/components/board/columns/done-column";
import NewColumn from "@/components/board/columns/new-column";
import { Suspense } from "react";
import BoardColumnLoading from "@/components/board/column/board-column-loading";
import { formatBoardName } from "@/helpers";

export default function Board({ board }: { board: string }) {
  const boardName = formatBoardName(board);

  return (
    <div className="h-full bg-slate-950">
      <BoardHeader />

      <section className="flex h-full gap-4 overflow-auto p-4">
        <Suspense fallback={<BoardColumnLoading />}>
          <TodoColumn boardName={boardName} />
        </Suspense>

        <Suspense fallback={<BoardColumnLoading />}>
          <DoingColumn boardName={boardName} />
        </Suspense>

        <Suspense fallback={<BoardColumnLoading />}>
          <DoneColumn boardName={boardName} />
        </Suspense>

        <NewColumn />
      </section>
    </div>
  );
}
