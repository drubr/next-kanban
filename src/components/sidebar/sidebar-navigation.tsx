import Link from "next/link";
import { getBoardNames } from "@/lib";
import { formatBoardName, formatBoardNameAsURL } from "@/helpers";

export default async function SidebarNavigation({ board }: { board: string }) {
  const boardNames = await getBoardNames(true);

  if (
    boardNames === null ||
    boardNames === undefined ||
    boardNames.length === 0
  )
    return null;

  return (
    <>
      <div className="mb-2 pl-6 text-xs uppercase tracking-wider text-muted">
        All boards ({boardNames.length})
      </div>

      <ul className="grid max-w-xs gap-1 pr-6">
        {boardNames.map((boardName) => {
          const formattedBoardName = formatBoardNameAsURL(boardName);

          return (
            <li key={boardName}>
              <Link
                href={`/board/${formattedBoardName}`}
                className={`group flex items-center gap-2 rounded-r-full py-2 pl-6 text-sm transition hover:bg-violet-600 ${formattedBoardName === board ? "bg-violet-600 text-white" : "bg-transparent text-muted"}`}
              >
                <span
                  className={`inline-block h-4 w-4 shrink-0 rounded group-hover:bg-white ${formattedBoardName === board ? "bg-white" : "bg-muted"}`}
                ></span>

                <h2
                  className={
                    formattedBoardName === board
                      ? "text-white"
                      : "text-slate-600"
                  }
                >
                  {formatBoardName(boardName)}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
