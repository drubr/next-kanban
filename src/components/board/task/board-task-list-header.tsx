export default function BoardTaskListHeader({
  title,
  tasksCount,
  color,
}: {
  title: string;
  tasksCount: number;
  color: string;
}) {
  return (
    <div className="text-muted flex items-center gap-2 text-xs uppercase tracking-widest">
      <span
        className="h-3 w-3 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      ></span>
      {title} ({tasksCount})
    </div>
  );
}
