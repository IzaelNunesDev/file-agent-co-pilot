
import React, { useRef, useState } from "react";
import { ChatBubble } from "@/components/ui/ChatBubble";
import { CardSection } from "@/components/ui/CardSection";
import { ActionComposer } from "@/components/ui/ActionComposer";

const initialLog = [
  {
    side: "left",
    name: "Agent",
    message: "Hello! I'm your AI file management assistant. How can I help you today?",
    type: "normal"
  },
  {
    side: "right",
    name: "User",
    message: "I need to organize my Downloads folder",
    type: "normal"
  },
  {
    side: "left",
    name: "Agent",
    message: "I'll help you organize your Downloads folder. Let me scan it first and create a plan.",
    type: "info"
  }
];

const plan = [
  { step: 1, action: "Scan Directory", details: "Analyze file types and patterns in Downloads" },
  { step: 2, action: "Create Categories", details: "Documents, Images, Software, Archives" },
  { step: 3, action: "Move Files", details: "Sort files into appropriate subdirectories" },
  { step: 4, action: "Generate Report", details: "Summary of organized files and structure" }
];

export default function InteractionHub() {
  const [log, setLog] = useState(initialLog);
  const containerRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    containerRef.current?.scrollTo({ top: 99999, behavior: 'smooth' });
  }, [log.length]);

  function handleComposer({ action, input }: { action: string, input: string }) {
    setLog(log => [
      ...log,
      { side: "right", name: "User", message: `${action.toUpperCase()}: ${input}`, type: "normal" },
      { side: "left", name: "Agent", message: `Processing "${action}" request for "${input}"...`, type: "info" }
    ]);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Interaction Hub</h1>
        <p className="text-slate-400">Communicate with your AI assistant and monitor activities</p>
      </div>
      
      <div ref={containerRef} className="flex-1 overflow-y-auto rounded-xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-600 p-6 mb-4 shadow-inner">
        {log.map((e, i) => (
          <ChatBubble key={i} side={e.side as any} name={e.name} type={e.type as any}>
            {e.message}
          </ChatBubble>
        ))}
        
        {/* Action Plan Table */}
        <div className="mt-6">
          <CardSection className="border border-slate-600">
            <h3 className="text-lg font-semibold text-white mb-3">Current Action Plan</h3>
            <div className="overflow-hidden rounded-lg border border-slate-600">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Step</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Action</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-300">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.map((p, i) => (
                    <tr key={i} className="border-t border-slate-600 hover:bg-slate-700/30">
                      <td className="py-3 px-4 text-slate-200 font-medium">{p.step}</td>
                      <td className="py-3 px-4 text-blue-300 font-medium">{p.action}</td>
                      <td className="py-3 px-4 text-slate-300 text-sm">{p.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardSection>
        </div>
      </div>
      
      <div className="py-2">
        <ActionComposer onSubmit={handleComposer} />
      </div>
    </div>
  );
}
