import WorkflowInfo from "@/components/workflow-details/WorkflowInfo";
import AgentList from "@/components/workflow-details/AgentList";
import ServiceList from "@/components/workflow-details/ServiceList";
import WorkflowGraph from "@/components/graph/WorkflowGraph";

import ImpactSummary from "@/components/workflow-details/ImpactSummary";

const WorkflowDetails = () => {
  return (
    <div className="space-y-6">

      <WorkflowInfo />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <WorkflowGraph />
        </div>

        <ImpactSummary />

      </section>

      <section className="grid gap-6 xl:grid-cols-2">

        <AgentList />

        <ServiceList />

      </section>

    </div>
  );
};

export default WorkflowDetails;