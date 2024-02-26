import { Suspense } from "react";
import SidebarNavigation from "@/components/sidebar/sidebar-navigation";
import SidebarNavigationLoading from "@/components/sidebar/sidebar-navigation-loading";
import Logo from "@/components/svg/logo";
import BoardIcon from "@/components/svg/board-icon";

export default function Sidebar({ board }: { board: string }) {
  return (
    <aside className="border-app-lines-dark bg-app-dark-grey h-full select-none gap-4 border-r pt-6">
      <div className="pl-6">
        <Logo />
      </div>

      <div className="h-8"></div>

      <Suspense fallback={<SidebarNavigationLoading />}>
        <SidebarNavigation board={board} />
      </Suspense>

      <div>
        <button className="text-app-main-purple group flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm">
          <BoardIcon fill="group-hover:fill-white fill-app-main-purple" /> +
          Create New Board
        </button>
      </div>
    </aside>
  );
}
