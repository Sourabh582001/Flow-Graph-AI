const services = [
  "Database",
  "OpenAI",
  "Slack",
  "Salesforce",
];

const SystemHealth = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        System Health
      </h2>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <span className="text-slate-300">{service}</span>

            <span className="flex items-center gap-2 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Healthy
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealth;