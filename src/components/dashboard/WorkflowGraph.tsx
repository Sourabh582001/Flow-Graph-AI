import { Network } from "lucide-react";

const WorkflowGraph = () => {
  return (
    <div className="flex h-[420px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Workflow Dependency Graph
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Visual overview of workflow relationships.
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-700">
        <div className="text-center">
          <Network
            size={56}
            className="mx-auto mb-4 text-cyan-400"
          />

          <h3 className="text-lg font-semibold text-white">
            Graph Visualization
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            React Flow + CognoDB graph will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowGraph;