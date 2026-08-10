const activity = [
  "OpenAI API Connected",
  "Slack Integration Updated",
  "Workflow Published",
  "CRM Sync Completed",
];

const RecentActivity = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activity.map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-none"
          >
            <span className="text-slate-300">{item}</span>

            <span className="text-sm text-slate-500">
              {index * 5 + 2} min ago
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;