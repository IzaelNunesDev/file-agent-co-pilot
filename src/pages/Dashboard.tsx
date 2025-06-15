
import React from "react";
import { CardSection } from "@/components/ui/CardSection";
import { Folder, Check, MessageSquare, Search, BookOpen, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const recent = [
  { icon: <Folder className="w-4 h-4 mr-2" />, text: "Organized 'Downloads'", time: "2 min ago" },
  { icon: <BookOpen className="w-4 h-4 mr-2" />, text: "152 files indexed from 'Projects'", time: "15 min ago" },
  { icon: <Check className="w-4 h-4 mr-2" />, text: "Suggestion Approved", time: "1 hour ago" },
];

const suggestions = [
  {
    type: "File Organization",
    reason: "New file 'report-Q3.pdf' detected in Downloads",
    icon: <Folder className="w-5 h-5" />,
    actions: [
      <Button key="approve" size="sm" className="bg-green-600 hover:bg-green-700 mr-2">Approve</Button>,
      <Button key="reject" variant="outline" size="sm">Reject</Button>,
    ],
  },
  {
    type: "Duplicate Detection",
    reason: "Found 3 similar images in Photos folder",
    icon: <Search className="w-5 h-5" />,
    actions: [
      <Button key="review" size="sm" className="bg-blue-600 hover:bg-blue-700 mr-2">Review</Button>,
      <Button key="ignore" variant="outline" size="sm">Ignore</Button>,
    ],
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Overview of your AI file management system</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* System Status */}
        <CardSection className="border border-slate-600">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-green-400" />
            <h2 className="text-xl font-bold text-white">System Status</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-semibold">Active & Monitoring</span>
            </div>
            <div className="text-sm text-slate-300">
              <span className="font-medium">Watching:</span> Downloads, Projects, Documents
            </div>
            <div className="text-xs text-slate-400">
              Last scan: 30 seconds ago
            </div>
          </div>
        </CardSection>

        {/* Quick Actions */}
        <CardSection className="border border-slate-600">
          <h2 className="text-xl font-bold mb-4 text-white">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-slate-700/50 border-slate-600 hover:bg-slate-600">
              <Folder className="w-6 h-6" />
              <span className="text-sm">Organize</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-slate-700/50 border-slate-600 hover:bg-slate-600">
              <BookOpen className="w-6 h-6" />
              <span className="text-sm">Index</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-slate-700/50 border-slate-600 hover:bg-slate-600">
              <Search className="w-6 h-6" />
              <span className="text-sm">Query</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-2 h-auto py-4 bg-slate-700/50 border-slate-600 hover:bg-slate-600">
              <MessageSquare className="w-6 h-6" />
              <span className="text-sm">Chat</span>
            </Button>
          </div>
        </CardSection>
      </div>

      {/* Proactive Suggestions */}
      <CardSection className="border border-slate-600">
        <h2 className="text-xl font-bold mb-4 text-white">Proactive Suggestions</h2>
        <div className="space-y-3">
          {suggestions.map((s, idx) => (
            <div key={idx} className="rounded-lg bg-slate-700/50 border border-slate-600 flex items-center px-4 py-3">
              <div className="mr-4 p-2 bg-blue-600/20 rounded-lg">
                {s.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-blue-200 text-sm">{s.type}</div>
                <div className="text-xs text-slate-400 mt-1">{s.reason}</div>
              </div>
              <div className="flex gap-2">{s.actions}</div>
            </div>
          ))}
        </div>
      </CardSection>

      {/* Recent Activity */}
      <CardSection className="border border-slate-600">
        <h2 className="text-xl font-bold mb-4 text-white">Recent Activity</h2>
        <div className="space-y-3">
          {recent.map((r, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-slate-600 hover:bg-slate-600/30 transition-colors">
              <div className="flex items-center">
                {r.icon}
                <span className="text-sm text-slate-200">{r.text}</span>
              </div>
              <span className="text-xs text-slate-400">{r.time}</span>
            </div>
          ))}
        </div>
      </CardSection>
    </div>
  );
}
