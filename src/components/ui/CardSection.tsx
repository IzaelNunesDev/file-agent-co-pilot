
import React from "react";

export function CardSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-sidebar rounded-xl shadow p-6 ${className}`}>
      {children}
    </div>
  );
}
