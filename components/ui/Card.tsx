import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#131620] rounded-xl p-6 border border-white/10 ${className}`}
    >
      {children}
    </div>
  );
};
