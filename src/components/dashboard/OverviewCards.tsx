import {
  Bot,
  Boxes,
  PlugZap,
  Workflow,
} from "lucide-react";

import StatCard from "./StatCard";

const OverviewCards = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Workflows"
        value={12}
        description="Active workflows"
        icon={Workflow}
      />

      <StatCard
        title="AI Agents"
        value={35}
        description="Connected agents"
        icon={Bot}
        iconColor="text-emerald-400"
      />

      <StatCard
        title="Services"
        value={18}
        description="Integrated APIs"
        icon={PlugZap}
        iconColor="text-purple-400"
      />

      <StatCard
        title="Dependencies"
        value={84}
        description="Workflow relationships"
        icon={Boxes}
        iconColor="text-amber-400"
      />

    </section>
  );
};

export default OverviewCards;