import { workflowDetails } from "@/data/workflowDetails";

const WorkflowInfo = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Workflow Information
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Info title="Workflow">
          {workflowDetails.name}
        </Info>

        <Info title="Status">
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
            {workflowDetails.status}
          </span>
        </Info>

        <Info title="Owner">
          {workflowDetails.owner}
        </Info>

        <Info title="Created">
          {workflowDetails.createdAt}
        </Info>
      </div>
    </div>
  );
};

function Info({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-sm text-slate-500">
        {title}
      </p>

      <div className="text-white">
        {children}
      </div>
    </div>
  );
}

export default WorkflowInfo;