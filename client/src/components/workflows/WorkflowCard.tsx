import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WorkflowCardProps {
  id: string;
  name: string;
  status: string;
  agents: number;
  services: number;
}

const WorkflowCard = ({
  id,
  name,
  status,
  agents,
  services,
}: WorkflowCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>

          <p className="mt-3 text-slate-400">
            {agents} Agents • {services} Services
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm ${
            status === "Running"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-amber-500/20 text-amber-400"
          }`}
        >
          {status}
        </span>
      </div>

      <Link
        to={`/workflows/${id}`}
        className="mt-6 inline-flex items-center gap-2 text-cyan-400"
      >
        View Details
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default WorkflowCard;