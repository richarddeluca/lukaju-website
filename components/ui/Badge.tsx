import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-mono text-[#9CA3AF] bg-[#131620] border border-white/10 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};
