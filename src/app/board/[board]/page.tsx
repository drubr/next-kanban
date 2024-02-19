import Sidebar from "@/components/sidebar";
import Board from "@/components/board/board";

export default function Page({ params }: { params: { board: string } }) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Board board={params.board} />
    </main>
  );
}
