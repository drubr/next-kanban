import Sidebar from "@/components/sidebar";
import Board from "@/components/board/board";

export default function Page() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <Board />
    </main>
  );
}
