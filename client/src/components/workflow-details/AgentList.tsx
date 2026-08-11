import { Bot } from "lucide-react";
import { workflowDetails } from "@/data/workflowDetails";

const AgentList = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-lg font-semibold">
        AI Agents
      </h2>

      <div className="space-y-3">
        {workflowDetails.agents.map((agent) => (
          <div
            key={agent}
            className="flex items-center gap-3 rounded-xl bg-slate-800 p-4"
          >
            <Bot size={18} className="text-cyan-400" />

            {agent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;