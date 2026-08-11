import { workflowDetails } from "@/data/workflowDetails";

const ImpactSummary = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-lg font-semibold">
        Impact Summary
      </h2>

      <div className="space-y-4">

        <Item
          label="Severity"
          value={workflowDetails.impact.severity}
        />

        <Item
          label="Affected Agents"
          value={workflowDetails.impact.affectedAgents}
        />

        <Item
          label="Affected Services"
          value={workflowDetails.impact.affectedServices}
        />

      </div>
    </div>
  );
};

function Item({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">
      <span>{label}</span>

      <span className="font-semibold text-cyan-400">
        {value}
      </span>
    </div>
  );
}

export default ImpactSummary;