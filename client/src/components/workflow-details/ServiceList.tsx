import { PlugZap } from "lucide-react";
import { workflowDetails } from "@/data/workflowDetails";

const ServiceList = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-5 text-lg font-semibold">
        Connected Services
      </h2>

      <div className="space-y-3">
        {workflowDetails.services.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3 rounded-xl bg-slate-800 p-4"
          >
            <PlugZap size={18} className="text-purple-400" />

            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;