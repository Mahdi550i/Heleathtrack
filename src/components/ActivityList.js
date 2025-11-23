export default function ActivityList({ items, unit }) {
  if (items.length === 0) {
    return <p className="text-sm text-slate-500 mt-2">No entries yet.</p>;
  }

  const total = items.reduce((sum, item) => sum + (item.value || 0), 0);

  return (
    <div className="mt-3 space-y-2">
      <div className="flex justify-between text-xs text-slate-500">
        <span>Total entries: {items.length}</span>
        <span>
          Total {unit}: {total}
        </span>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white shadow border border-slate-100 rounded px-3 py-2"
        >
          <span>{item.title}</span>
          {item.value !== null && (
            <span className="text-xs font-medium text-blue-600">
              {item.value} {unit}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
