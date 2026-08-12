import { useEffect, useState } from "react";
import {
  Bot,
  Boxes,
  PlugZap,
  Workflow,
} from "lucide-react";

import StatCard from "./StatCard";
import { getDashboardStats } from "@/services/dashboard.service";

interface DashboardStats {
  workflows: number;
  agents: number;
  services: number;
  relationships: number;
}

const OverviewCards = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadStats();
  }, []);

  if (!stats) {
    return (
      <div className="text-slate-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Workflows"
        value={stats.workflows}
        description="Active workflows"
        icon={Workflow}
      />

      <StatCard
        title="AI Agents"
        value={stats.agents}
        description="Connected agents"
        icon={Bot}
        iconColor="text-emerald-400"
      />

      <StatCard
        title="Services"
        value={stats.services}
        description="Integrated APIs"
        icon={PlugZap}
        iconColor="text-purple-400"
      />

      <StatCard
        title="Dependencies"
        value={stats.relationships}
        description="Workflow relationships"
        icon={Boxes}
        iconColor="text-amber-400"
      />
    </section>
  );
};

export default OverviewCards;