
import React from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./Dashboard";
import InteractionHub from "./InteractionHub";
import HiveMind from "./HiveMind";
import History from "./History";
import Settings from "./Settings";

function useCurrentPath() {
  // Naive approach, for Vite/SPA fallback, works with browser routing
  const path = window.location.pathname;
  return path;
}

export default function Index() {
  const current = useCurrentPath();

  let Page = Dashboard;
  if (current === "/interaction") Page = InteractionHub;
  else if (current === "/hive") Page = HiveMind;
  else if (current === "/history") Page = History;
  else if (current === "/settings") Page = Settings;

  return (
    <div className="min-h-screen min-w-full flex bg-[#e3eaf2] items-center justify-center p-8">
      <div className="bg-sidebar rounded-3xl shadow-2xl p-0 flex w-[1200px] min-h-[680px] overflow-hidden border border-background">
        <Sidebar activePath={current} />
        <main className="w-full bg-[rgba(18,22,28,0.96)] p-10 overflow-y-auto">
          <Page />
        </main>
      </div>
    </div>
  );
}
