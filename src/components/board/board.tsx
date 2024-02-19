import BoardHeader from "@/components/board/layout/board-header";
import TodoColumn from "@/components/board/columns/todo-column";
import DoingColumn from "@/components/board/columns/doing-column";
import DoneColumn from "@/components/board/columns/done-column";
import NewColumn from "@/components/board/columns/new-column";
import { Suspense } from "react";
import BoardColumnLoading from "@/components/board/column/board-column-loading";
import { formatBoardTitle } from "@/helpers";

export default function Board({ board }: { board: string }) {
  const boardName = formatBoardTitle(board);

  return (
    <div className="flex-1 overflow-auto bg-slate-950">
      <BoardHeader />

      <section className="flex gap-4 p-4">
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
