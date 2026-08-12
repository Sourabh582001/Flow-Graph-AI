import { useEffect, useState } from "react";
import WorkflowCard from "./WorkflowCard";
import { getWorkflows } from "@/services/workflow.service";

interface Workflow {
  id: string;
  name: string;
  status: string;
  agents: number;
  services: number;
}

const WorkflowList = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkflows() {
      try {
        const data = await getWorkflows();
        setWorkflows(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkflows();
  }, []);

  if (loading) {
    return (
      <div className="text-slate-400">
        Loading workflows...
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {workflows.map((workflow) => (
        <WorkflowCard
          key={workflow.id}
          {...workflow}
        />
      ))}
    </div>
  );
};

export default WorkflowList;