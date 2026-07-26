import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  highlightBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  highlightBorder = false,
}) => {
  return (
    <div
      className={`bg-[#12161F] rounded-xl p-6 border ${
        highlightBorder
          ? "border-[#C1006D]/50 shadow-[0_0_20px_rgba(193,0,109,0.15)]"
          : "border-white/10"
      } ${
        hoverEffect
          ? "transition-all duration-300 hover:border-white/20 hover:shadow-xl"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
