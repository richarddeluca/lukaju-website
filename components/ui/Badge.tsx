import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "magenta" | "blue" | "outline" | "engine";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 text-xs font-mono tracking-wider rounded-full border transition-all duration-200";

  const variantStyles = {
    default:
      "bg-[#12161F] text-[#9CA3AF] border-white/10",
    magenta:
      "bg-[#C1006D]/15 text-[#FF66BA] border-[#C1006D]/40",
    blue:
      "bg-[#3498DB]/15 text-[#5DADE2] border-[#3498DB]/40",
    outline:
      "bg-transparent text-[#F3F4F6] border-white/20",
    engine:
      "bg-[#3498DB]/10 text-[#3498DB] border-[#3498DB]/30 font-semibold",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
