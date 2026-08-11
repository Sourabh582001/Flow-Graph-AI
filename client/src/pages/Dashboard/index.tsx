import OverviewCards from "@/components/dashboard/OverviewCards";
import WorkflowGraph from "@/components/dashboard/WorkflowGraph";
import RecentWorkflows from "@/components/dashboard/RecentWorkflows";
import RecentActivity from "@/components/dashboard/RecentActivity";
import SystemHealth from "@/components/dashboard/SystemHealth";

const Dashboard = () => {
  return (
    <div className="space-y-6">

      <OverviewCards />

      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <WorkflowGraph />
        </div>

        <RecentWorkflows />

      </section>

      <section className="grid gap-6 xl:grid-cols-2">

        <RecentActivity />

        <SystemHealth />

      </section>

    </div>
  );
};

export default Dashboard;