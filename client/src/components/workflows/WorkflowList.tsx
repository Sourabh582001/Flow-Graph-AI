import WorkflowCard from "./WorkflowCard";
import { workflows } from "@/data/workflows";

const WorkflowList = () => {
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