const SidebarFooter = () => {
  return (
    <div className="border-t border-slate-800 p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

        <span className="text-sm text-slate-300">
          Database Connected
        </span>
      </div>

      <p className="text-xs text-slate-500">
        FlowGraph AI v1.0.0
      </p>
    </div>
  );
};

export default SidebarFooter;