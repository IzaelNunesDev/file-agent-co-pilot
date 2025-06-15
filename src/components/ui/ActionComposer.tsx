
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { List, BookOpen, Search, Cog } from "lucide-react";

const actions = [
  { value: "organize", label: "Organize", icon: List },
  { value: "index", label: "Index", icon: BookOpen },
  { value: "query", label: "Query", icon: Search },
  { value: "maintenance", label: "Maintenance", icon: Cog }
];

export function ActionComposer({ onSubmit }: { onSubmit: (selection: any) => void }) {
  const [selected, setSelected] = useState(actions[0].value);
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ action: selected, input });
    setInput("");
  }

  return (
    <form className="flex flex-col gap-3 bg-sidebar-accent rounded-xl p-4 shadow-lg" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2">
        <select
          className="rounded-md bg-background px-3 py-2 text-base text-sidebar-foreground"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          {actions.map(a => (
            <option key={a.value} value={a.value}>{a.label}</option>
          ))}
        </select>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="For example: /downloads group by type"
          className="flex-1"
        />
        <Button variant="default" type="submit" className="ml-3 px-5">Start</Button>
      </div>
    </form>
  );
}
