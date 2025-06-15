
import React, { useState } from "react";
import { CardSection } from "@/components/ui/CardSection";
import { ChatBubble } from "@/components/ui/ChatBubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";

type Message = {
  id: number;
  type: "agent" | "user";
  content: string;
  timestamp: string;
};

export default function InteractionHub() {
  const [selectedAction, setSelectedAction] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "agent",
      content: "File Agent Control Center initialized. Ready for commands.",
      timestamp: "10:30 AM"
    }
  ]);

  const actions = [
    { value: "organize", label: "Organize Directory" },
    { value: "index", label: "Index Files" },
    { value: "query", label: "Query Memory" },
    { value: "maintenance", label: "System Maintenance" }
  ];

  const handleSubmit = () => {
    if (!selectedAction || !inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: `${selectedAction}: ${inputValue}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    // Simulate agent processing
    setTimeout(() => {
      const agentResponse: Message = {
        id: messages.length + 2,
        type: "agent",
        content: `Processing ${selectedAction} request for: ${inputValue}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentResponse]);
      setIsProcessing(false);
    }, 2000);

    setInputValue("");
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Interaction Hub</h1>
        <p className="text-slate-400">Command center for AI file management operations</p>
      </div>

      {/* Chat Area */}
      <CardSection className="min-h-[400px] flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-2">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              side={message.type === "user" ? "right" : "left"}
              name={message.type === "user" ? "You" : "File Agent"}
              type={message.type === "agent" ? "info" : "normal"}
            >
              <div>
                <p>{message.content}</p>
                <div className="text-xs opacity-70 mt-1">{message.timestamp}</div>
              </div>
            </ChatBubble>
          ))}
          {isProcessing && (
            <ChatBubble side="left" name="File Agent" type="info">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                Processing your request...
              </div>
            </ChatBubble>
          )}
        </div>

        {/* Action Composer */}
        <div className="border-t border-slate-600 pt-4">
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Select value={selectedAction} onValueChange={setSelectedAction}>
                <SelectTrigger className="bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Select action..." />
                </SelectTrigger>
                <SelectContent>
                  {actions.map(action => (
                    <SelectItem key={action.value} value={action.value}>
                      {action.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex-[2]">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter path, query, or parameters..."
                className="bg-slate-700 border-slate-600"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
            </div>
            <Button 
              onClick={handleSubmit}
              disabled={!selectedAction || !inputValue.trim() || isProcessing}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardSection>

      {/* Action Plan Table */}
      <CardSection>
        <h3 className="text-lg font-semibold text-white mb-4">Current Action Plan</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-2 text-slate-300">Step</th>
                <th className="text-left py-2 text-slate-300">Action</th>
                <th className="text-left py-2 text-slate-300">Status</th>
                <th className="text-left py-2 text-slate-300">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-2 text-slate-200">1</td>
                <td className="py-2 text-slate-200">Scan Directory</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-green-600/20 text-green-300 rounded text-xs">Completed</span>
                </td>
                <td className="py-2 text-slate-400">Found 42 files</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2 text-slate-200">2</td>
                <td className="py-2 text-slate-200">Analyze Files</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">In Progress</span>
                </td>
                <td className="py-2 text-slate-400">Processing metadata...</td>
              </tr>
              <tr>
                <td className="py-2 text-slate-200">3</td>
                <td className="py-2 text-slate-200">Organize</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-slate-600/20 text-slate-400 rounded text-xs">Pending</span>
                </td>
                <td className="py-2 text-slate-400">Waiting for analysis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardSection>
    </div>
  );
}
