import WorkflowList from "@/components/workflows/WorkflowList";

const Workflows = () => {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Workflows
          </h1>

          <p className="text-slate-400">
            Manage AI workflow dependencies.
          </p>
        </div>

      </div>

      <WorkflowList />

    </div>
  );
};

export default Workflows;