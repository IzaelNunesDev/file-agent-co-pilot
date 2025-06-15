
import { Home, MessageSquare, BookOpen, History, Cog } from "lucide-react";
import React from "react";
import clsx from "clsx";

const navLinks = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Interaction Hub", icon: MessageSquare, href: "/interaction" },
  { name: "Hive Mind Explorer", icon: BookOpen, href: "/hive" },
  { name: "History", icon: History, href: "/history" },
  { name: "Settings", icon: Cog, href: "/settings" }
];

function SidebarLink({ name, icon: Icon, href, active }: { name: string, icon: any, href: string, active: boolean }) {
  return (
    <a
      href={href}
      className={clsx(
        "flex items-center gap-3 px-5 py-3 rounded-lg transition-colors",
        active
          ? "bg-sidebar-accent text-white font-semibold"
          : "hover:bg-sidebar-accent text-sidebar-foreground"
      )}
      aria-current={active ? "page" : undefined}
    >
      <Icon className="w-5 h-5" />
      <span>{name}</span>
    </a>
  );
}

export function Sidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="flex flex-col bg-sidebar rounded-xl shadow-lg p-3 min-w-[235px] max-w-xs h-full font-medium select-none">
      <div className="mb-3 flex flex-col gap-2 items-center">
        {/* App logo: Use a folder icon for now */}
        <div className="w-11 h-11 bg-blue-900 text-blue-300 rounded-xl flex items-center justify-center mb-1 shadow">
          <BookOpen className="w-6 h-6" />
        </div>
        <span className="text-lg font-bold tracking-wide text-white mt-1">
          File Agent<br/>Control Center
        </span>
      </div>
      <nav className="flex flex-col gap-1 flex-1 mt-5">
        {navLinks.map(link => (
          <SidebarLink
            key={link.href}
            name={link.name}
            icon={link.icon}
            href={link.href}
            active={activePath === link.href || (activePath === "/" && link.href === "/")}
          />
        ))}
      </nav>
      <div className="h-8" />
    </aside>
  );
}

export default Sidebar;
