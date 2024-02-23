import { Suspense } from "react";
import SidebarNavigation from "@/components/sidebar/sidebar-navigation";
import SidebarNavigationLoading from "@/components/sidebar/sidebar-navigation-loading";

export default function Sidebar({ board }: { board: string }) {
  return (
    <aside className="h-full select-none gap-4 border-r border-slate-800 bg-slate-900 pt-6">
      <div className="mx-4 h-8 rounded-full bg-slate-700"></div>

      <div className="h-8"></div>

      <Suspense fallback={<SidebarNavigationLoading />}>
        <SidebarNavigation board={board} />
      </Suspense>

      <div>
        <div className="flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm text-violet-400">
          <span className="inline-block h-4 w-4 rounded bg-violet-400"></span>+
          Create New Board
        </div>
      </div>
    </aside>
  );
}
