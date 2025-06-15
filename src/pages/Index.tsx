
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./Dashboard";
import InteractionHub from "./InteractionHub";
import HiveMind from "./HiveMind";
import History from "./History";
import Settings from "./Settings";

function useCurrentPath() {
  const [path, setPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  
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
    <div className="min-h-screen min-w-full flex bg-gradient-to-br from-slate-900 to-slate-800 items-center justify-center p-4">
      <div className="bg-sidebar rounded-3xl shadow-2xl p-0 flex w-[1200px] min-h-[700px] max-h-[90vh] overflow-hidden border border-slate-700">
        <Sidebar activePath={current} />
        <main className="w-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-8 overflow-y-auto">
          <Page />
        </main>
      </div>
    </div>
  );
}
