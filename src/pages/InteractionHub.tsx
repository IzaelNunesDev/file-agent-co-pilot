
import React, { useRef, useState } from "react";
import { ChatBubble } from "@/components/ui/ChatBubble";
import { CardSection } from "@/components/ui/CardSection";
import { ActionComposer } from "@/components/ui/ActionComposer";

const initialLog = [
  {
    side: "left",
    name: "Agent",
    message: "Hello! How can I assist you today?",
    type: "normal"
  },
  {
    side: "right",
    name: "User",
    message: "I need to create a new automation.",
    type: "normal"
  },
  {
    side: "left",
    name: "Agent",
    message: "Sure, I can help with that. What kind of automation do you need?",
    type: "normal"
  }
];

const plan = [
  { step: 1, action: "Identify Trigger", details: "User request for new automation" },
  { step: 2, action: "Define Action", details: "Create new automation rule" },
  { step: 3, action: "Execute", details: "Automation rule created successfully" }
];

export default function InteractionHub() {
  const [log, setLog] = useState(initialLog);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom on new message
  React.useEffect(() => {
    containerRef.current?.scrollTo({ top: 99999 });
  }, [log.length]);

  function handleComposer({ action, input }: { action: string, input: string }) {
    setLog(log => [
      ...log,
      { side: "right", name: "User", message: `${action.toUpperCase()}: ${input}`, type: "normal" },
      { side: "left", name: "Agent", message: `Processing "${action}" for "${input}"...`, type: "info" }
    ]);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-48px)]">
      <h1 className="text-2xl font-bold text-white mb-4">Interaction Hub</h1>
      <div ref={containerRef} className="flex-1 overflow-y-auto rounded-xl bg-sidebar p-6 mb-2 shadow">
        {log.map((e, i) => (
          <ChatBubble key={i} side={e.side as any} name={e.name} type={e.type as any}>
            {e.message}
          </ChatBubble>
        ))}
        {/* Action Plan Table */}
        <div className="mt-8">
          <CardSection>
            <table className="w-full text-left border-separate border-spacing-y-1">
              <thead>
                <tr className="text-xs text-gray-400">
                  <th className="font-semibold py-1 pl-2">Step</th>
                  <th className="font-semibold py-1">Action</th>
                  <th className="font-semibold py-1">Details</th>
                </tr>
              </thead>
              <tbody>
                {plan.map((p, i) => (
                  <tr key={i} className="text-gray-100 bg-background/60 hover:bg-background/40 rounded">
                    <td className="py-1 pl-2">{p.step}</td>
                    <td>{p.action}</td>
                    <td>{p.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardSection>
        </div>
      </div>
      <div className="py-2">
        <ActionComposer onSubmit={handleComposer} />
      </div>
    </div>
  );
}
