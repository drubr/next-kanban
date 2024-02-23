import Sidebar from "@/components/sidebar/sidebar";
import Board from "@/components/board/board";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Page({ params }: { params: { board: string } }) {
  return (
    <main className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={112} className="min-w-[16rem]">
          <Sidebar board={params.board} />
        </ResizablePanel>

        <ResizableHandle className="bg-slate-800" />

        <ResizablePanel defaultSize={1024} className="h-full">
          <Board board={params.board} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
