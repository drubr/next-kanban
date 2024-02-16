export default function Home() {
  return (
    <main className="flex h-screen">
      <aside className="h-full w-[14rem] shrink-0 select-none gap-4 border-r border-slate-800 bg-slate-900 pt-6">
        <div className="mx-4 h-8 rounded-full bg-slate-700"></div>

        <div className="h-8"></div>

        <div className="text-muted mb-2 pl-6 text-xs uppercase tracking-wider">
          All boards
        </div>

        <ul className="grid gap-1 pr-6">
          <li>
            <div className="flex items-center gap-2 rounded-r-full bg-violet-600 py-2 pl-6 text-sm">
              <span className="inline-block h-4 w-4 rounded bg-white"></span>
              Platform Launch
            </div>
          </li>
          <li>
            <div className="text-muted flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm">
              <span className="bg-muted inline-block h-4 w-4 rounded"></span>
              Marketing Plan
            </div>
          </li>
          <li>
            <div className="text-muted flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm">
              <span className="bg-muted inline-block h-4 w-4 rounded"></span>
              Roadmap
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2 rounded-r-full bg-transparent py-2 pl-6 text-sm text-violet-400">
              <span className="inline-block h-4 w-4 rounded bg-violet-400"></span>
              + Create New Board
            </div>
          </li>
        </ul>
      </aside>

      <div className="flex-1 bg-slate-950">
        <header className="flex items-center justify-between gap-4 border-b border-b-slate-800 bg-slate-900 px-8 py-4">
          <h1 className="text-xl font-semibold">Platform Launch</h1>
          <button
            className="rounded-full bg-violet-600 px-4 py-3"
            title="Add new task"
            aria-label="Add new task button"
          >
            + Add new task
          </button>
        </header>

        <section className="overflow-auto whitespace-nowrap p-4">
          <div className="inline-block w-[16rem] space-y-6">
            <div>Headline</div>
            <ul className="space-y-4">
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
            </ul>
          </div>

          <div className="inline-block w-[16rem] space-y-6">
            <div>Headline</div>
            <ul className="space-y-4">
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
            </ul>
          </div>

          <div className="inline-block w-[16rem] space-y-6">
            <div>Headline</div>
            <ul className="space-y-4">
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
              <li className="h-16 rounded-lg bg-slate-800"></li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
