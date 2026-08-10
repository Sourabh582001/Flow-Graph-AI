import {
  Bot,
  LayoutDashboard,
  PlugZap,
  Settings,
  TriangleAlert,
  Workflow,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Workflows",
    path: "/workflows",
    icon: Workflow,
  },
  {
    title: "Agents",
    path: "/agents",
    icon: Bot,
  },
  {
    title: "Services",
    path: "/services",
    icon: PlugZap,
  },
  {
    title: "Impact Analysis",
    path: "/impact-analysis",
    icon: TriangleAlert,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const SidebarNavigation = () => {
  return (
    <nav className="space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <Icon size={20} />

            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SidebarNavigation;