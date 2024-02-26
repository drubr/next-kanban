import Link from "next/link";
import { getBoardNames } from "@/lib";
import { formatBoardName, formatBoardNameAsURL } from "@/helpers";
import { clsx } from "clsx";
import BoardIcon from "@/components/svg/board-icon";

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
      <div className="text-muted mb-2 pl-6 text-xs uppercase tracking-wider">
        All boards ({boardNames.length})
      </div>

      <ul className="grid max-w-xs gap-1 pr-6">
        {boardNames.map((boardName) => {
          const formattedBoardName = formatBoardNameAsURL(boardName);

          return (
            <li key={boardName}>
              <Link
                href={`/board/${formattedBoardName}`}
                className={`hover:bg-app-main-purple group flex items-center gap-2 rounded-r-full py-2 pl-6 text-sm transition hover:text-white ${formattedBoardName === board ? "bg-app-main-purple text-white" : "text-app-medium-grey bg-transparent"}`}
              >
                <BoardIcon
                  fill={formattedBoardName === board ? "fill-white" : undefined}
                />

                <h2
                  className={clsx(
                    "group-hover:text-white",
                    formattedBoardName === board
                      ? "text-white"
                      : "text-app-medium-grey",
                  )}
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
