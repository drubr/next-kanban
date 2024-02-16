"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full w-[16rem] shrink-0 select-none gap-4 border-r border-slate-800 bg-slate-900 pt-6">
      <div className="mx-4 h-8 rounded-full bg-slate-700"></div>

      <div className="h-8"></div>

      <div className="text-muted mb-2 pl-6 text-xs uppercase tracking-wider">
        All boards (3)
      </div>

      <ul className="grid gap-1 pr-6">
        <li>
          <Link
            href="/board/platform-launch"
            className={`group flex items-center gap-2 rounded-r-full py-2 pl-6 text-sm transition hover:bg-violet-600 ${pathname === "/board/platform-launch" ? "bg-violet-600" : "bg-transparent"}`}
          >
            <span
              className={`inline-block h-4 w-4 rounded group-hover:bg-white ${pathname === "/board/platform-launch" ? "bg-white" : "bg-muted"}`}
            ></span>
            Platform Launch
          </Link>
        </li>
        <li>
          <Link
            href="/board/marketing-plan"
            className={`group flex items-center gap-2 rounded-r-full py-2 pl-6 text-sm transition hover:bg-violet-600 ${pathname === "/board/marketing-plan" ? "bg-violet-600" : "bg-transparent"}`}
          >
            <span
              className={`inline-block h-4 w-4 rounded group-hover:bg-white ${pathname === "/board/marketing-plan" ? "bg-white" : "bg-muted"}`}
            ></span>
            Marketing Plan
          </Link>
        </li>
        <li>
          <Link
            href="/board/roadmap"
            className={`group flex items-center gap-2 rounded-r-full py-2 pl-6 text-sm transition hover:bg-violet-600 ${pathname === "/board/roadmap" ? "bg-violet-600" : "bg-transparent"}`}
          >
            <span
              className={`inline-block h-4 w-4 rounded group-hover:bg-white ${pathname === "/board/roadmap" ? "bg-white" : "bg-muted"}`}
            ></span>
            Roadmap
          </Link>
        </li>
        <li>
          <div className="flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm text-violet-400">
            <span className="inline-block h-4 w-4 rounded bg-violet-400"></span>
            + Create New Board
          </div>
        </li>
      </ul>
    </aside>
  );
}
