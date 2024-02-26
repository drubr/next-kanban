export default function SidebarNavigationLoading() {
  return (
    <div className="animate-pulse">
      <div className="text-muted mb-2 flex items-center gap-1 pl-6 text-xs uppercase tracking-wider">
        All boards
        <span className="inline-block h-3 w-3 rounded bg-slate-800"></span>
      </div>

      <ul className="grid max-w-xs gap-1 pr-6">
        <li>
          <div className="bg-app-main-purple flex h-9 w-56 items-center gap-2 rounded-r-full pl-6">
            <span className="bg-app-main-purple inline-block h-4 w-4 rounded-full"></span>
            <span className="bg-app-main-purple inline-block h-4 w-24 rounded-full"></span>
          </div>
        </li>

        <li>
          <div className="flex h-9 w-56 items-center gap-2 rounded-r-full bg-slate-800 pl-6">
            <span className="inline-block h-4 w-4 rounded-full bg-slate-700"></span>
            <span className="inline-block h-4 w-24 rounded-full bg-slate-700"></span>
          </div>
        </li>

        <li>
          <div className="flex h-9 w-56 items-center gap-2 rounded-r-full bg-slate-800 pl-6">
            <span className="inline-block h-4 w-4 rounded-full bg-slate-700"></span>
            <span className="inline-block h-4 w-24 rounded-full bg-slate-700"></span>
          </div>
        </li>
      </ul>
    </div>
  );
}
