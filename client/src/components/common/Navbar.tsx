import { Bell, Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Manage and monitor AI workflow dependencies.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative hidden lg:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="h-11 w-72 rounded-xl border border-slate-800 bg-slate-900 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-cyan-500"
          />
        </div>

        {/* Notification */}

        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-cyan-500 hover:text-cyan-400"
        >
          <Bell size={20} />
        </button>

        {/* Avatar */}

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-semibold text-slate-950"
        >
          SK
        </button>

      </div>
    </header>
  );
};

export default Navbar;