import { Clock3, Rocket } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-xl">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
          <Rocket
            size={42}
            className="text-cyan-400"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white">
          Coming Soon
        </h1>

        <p className="mb-8 text-slate-400">
          This module is currently under development and will be
          available in an upcoming update.
        </p>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400">
          <Clock3 size={18} />
          More Features on the Way
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;