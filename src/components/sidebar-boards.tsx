import { formatBoardTitle } from "@/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBoards } from "@/lib";

export default async function SidebarBoards() {
  const boards = await getBoards();

  const pathname = usePathname();
  const boardName = formatBoardTitle(pathname);

  return (
    <ul className="grid gap-1 pr-6">
      {boards.map((board, index) => (
        <li key={index}>
          <Link
            href={`/board/${board.name.trim().toLowerCase().replaceAll(" ", "-")}`}
            className={`group flex items-center gap-2 rounded-r-full py-2 pl-6 text-sm transition hover:bg-violet-600 ${pathname === "/board/platform-launch" ? "bg-violet-600" : "bg-transparent"}`}
          >
            <span
              className={`inline-block h-4 w-4 rounded group-hover:bg-white ${board.name === boardName ? "bg-white" : "bg-muted"}`}
            ></span>
            {board.name}
          </Link>
        </li>
      ))}

      <li>
        <div className="flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm text-violet-400">
          <span className="inline-block h-4 w-4 rounded bg-violet-400"></span>+
          Create New Board
        </div>
      </li>
    </ul>
  );
}
