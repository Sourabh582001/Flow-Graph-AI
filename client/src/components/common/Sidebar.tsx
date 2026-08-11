import SidebarHeader from "./SidebarHeader";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">
      <SidebarHeader />

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <SidebarNavigation />
      </div>

      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;