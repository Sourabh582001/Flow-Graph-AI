import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  iconColor = "text-cyan-400",
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:border-cyan-500/40 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-3">
          <Icon className={iconColor} size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;