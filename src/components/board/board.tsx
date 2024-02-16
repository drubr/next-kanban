import BoardHeader from "@/components/board/board-header";
import TodoColumn from "@/components/board/columns/todo-column";
import DoingColumn from "@/components/board/columns/doing-column";
import DoneColumn from "@/components/board/columns/done-column";
import NewColumn from "@/components/board/columns/new-column";
import { Suspense } from "react";
import BoardColumnLoading from "@/components/board/columns/board-column-loading";

export default function Board() {
  return (
    <div className="flex-1 bg-slate-950">
      <BoardHeader />

      <section className="flex gap-4 p-4">
        <Suspense fallback={<BoardColumnLoading />}>
          <TodoColumn />
        </Suspense>

        <Suspense fallback={<BoardColumnLoading />}>
          <DoingColumn />
        </Suspense>

        <Suspense fallback={<BoardColumnLoading />}>
          <DoneColumn />
        </Suspense>

        <Suspense fallback={<BoardColumnLoading />}>
          <NewColumn />
        </Suspense>
      </section>
    </div>
  );
}
