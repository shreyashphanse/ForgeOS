import {
  LayoutDashboard,
  Search,
  MessageSquare,
  Brush,
  FolderKanban,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Command Center",
    icon: LayoutDashboard,
    path: "/command-center",
  },
  {
    name: "Discovery",
    icon: Search,
    path: "/discovery",
  },
  {
    name: "Outreach",
    icon: MessageSquare,
    path: "/outreach",
  },
  {
    name: "Studio",
    icon: Brush,
    path: "/studio",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    name: "Pipeline",
    icon: BarChart3,
    path: "/pipeline",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-[#0B1120]">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold tracking-wide">
          Forge<span className="text-blue-500">OS</span>
        </h1>

        <p className="mt-1 text-sm text-slate-400">Run your agency.</p>
      </div>

      <nav className="mt-5 flex flex-col gap-2 px-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
