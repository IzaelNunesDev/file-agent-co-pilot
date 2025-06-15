
import React from "react";
import { CardSection } from "@/components/ui/CardSection";
import { Folder, Check, MessageSquare, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const recent = [
  { icon: <Folder className="w-4 h-4 mr-1" />, text: "Organized 'Downloads'", link: "/history" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, text: "152 files indexed from 'Projects'", link: "/history" },
  { icon: <Check className="w-4 h-4 mr-1" />, text: "Suggestion Approved", link: "/history" },
];

const suggestions = [
  {
    type: "File Organization",
    reason: "New file 'report-Q3.pdf' detected",
    icon: <Folder />,
    actions: [
      <Button key="approve" variant="default" className="mr-2">Approve</Button>,
      <Button key="reject" variant="outline" className="mr-2">Reject</Button>,
    ],
  }
];

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* System Status */}
      <CardSection>
        <h2 className="text-lg font-bold mb-2 text-white">System Status</h2>
        <div className="flex items-center gap-4 mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-800 text-green-200 text-xs font-semibold">Active & Monitoring</span>
          <span className="text-sm text-gray-400">Monitoring: <span className="font-semibold">Downloads, Projects</span></span>
        </div>
      </CardSection>
      {/* Suggestions */}
      <CardSection>
        <h2 className="text-lg font-bold mb-2 text-white">Proactive Suggestions</h2>
        {suggestions.map((s, idx) => (
          <div key={idx} className="rounded-lg bg-background/70 shadow flex items-center px-3 py-2 mb-2">
            <div className="mr-3">{s.icon}</div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-blue-200">{s.type}</div>
              <div className="text-xs text-gray-400">{s.reason}</div>
            </div>
            <div>{s.actions}</div>
          </div>
        ))}
      </CardSection>
      {/* Quick Actions */}
      <CardSection className="md:col-span-2">
        <h2 className="text-lg font-bold mb-2 text-white">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="flex items-center gap-2 px-6 py-4 text-lg"> <Folder className="w-5 h-5" /> Organize Directory </Button>
          <Button variant="outline" className="flex items-center gap-2 px-6 py-4 text-lg"> <BookOpen className="w-5 h-5" /> Index Directory </Button>
          <Button variant="outline" className="flex items-center gap-2 px-6 py-4 text-lg"> <Search className="w-5 h-5" /> Query Memory </Button>
          <Button variant="outline" className="flex items-center gap-2 px-6 py-4 text-lg"> <MessageSquare className="w-5 h-5" /> Open Chat </Button>
        </div>
      </CardSection>
      {/* Recent Activity */}
      <CardSection className="md:col-span-2">
        <h2 className="text-lg font-bold mb-2 text-white">Recent Activity</h2>
        <div className="flex gap-4">
          {recent.map((r, i) => (
            <a href={r.link} key={i} className="flex items-center bg-background rounded-lg px-4 py-2 shadow hover:bg-background/50 transition">
              {r.icon}
              <span className="text-sm text-gray-200">{r.text}</span>
            </a>
          ))}
        </div>
      </CardSection>
    </div>
  );
}
