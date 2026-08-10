const workflows = [
  { name: "Lead Qualification", status: "Running" },
  { name: "Customer Support", status: "Running" },
  { name: "Invoice Processing", status: "Paused" },
  { name: "HR Onboarding", status: "Running" },
];

const RecentWorkflows = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Recent Workflows
      </h2>

      <div className="space-y-4">
        {workflows.map((workflow) => (
          <div
            key={workflow.name}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <span className="text-slate-200">{workflow.name}</span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                workflow.status === "Running"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-amber-500/20 text-amber-400"
              }`}
            >
              {workflow.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkflows;