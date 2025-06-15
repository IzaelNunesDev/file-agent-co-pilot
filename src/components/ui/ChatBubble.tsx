
import React from "react";
import clsx from "clsx";

export function ChatBubble({
  side,
  avatarUrl,
  name,
  children,
  type = "normal"
}: {
  side: "left" | "right",
  avatarUrl?: string,
  name?: string,
  children: React.ReactNode,
  type?: "normal" | "info" | "warning" | "error"
}) {
  // Colors based on type
  let bubbleColor = "bg-sidebar-accent text-white";
  if (type === "info") bubbleColor = "bg-blue-900 text-blue-100";
  if (type === "warning") bubbleColor = "bg-yellow-800 text-yellow-200";
  if (type === "error") bubbleColor = "bg-red-900 text-red-100";

  return (
    <div className={clsx("flex my-2", side === "left" ? "justify-start" : "justify-end")}>
      {side === "left" && (
        avatarUrl
          ? <img src={avatarUrl} className="w-8 h-8 rounded-full mr-2" alt={name || "Agent"} />
          : <div className="w-8 h-8 bg-blue-950 rounded-full mr-2 flex items-center justify-center text-lg font-bold">A</div>
      )}
      <div>
        {name && <div className="text-xs mb-1 px-1 text-gray-400">{name}</div>}
        <div className={clsx(
          "px-4 py-2 rounded-2xl text-base max-w-md shadow",
          bubbleColor,
          side === "right" ? "rounded-br-lg" : "rounded-bl-lg"
        )}>
          {children}
        </div>
      </div>
      {side === "right" && (
        avatarUrl
          ? <img src={avatarUrl} className="w-8 h-8 rounded-full ml-2" alt={name || "User"} />
          : <div className="w-8 h-8 bg-blue-900 rounded-full ml-2 flex items-center justify-center text-lg font-bold">U</div>
      )}
    </div>
  );
}
