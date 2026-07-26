import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "patreon" | "itch" | "primary" | "secondary" | "ghost" | "gameWine";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  href,
  external = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9E0038]/50";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-lg",
  };

  const variantStyles = {
    patreon:
      "bg-[#9E0038] text-white hover:bg-[#B80043] shadow-[0_0_25px_rgba(158,0,56,0.4)] hover:shadow-[0_0_35px_rgba(158,0,56,0.6)] border border-[#E11D48]/30 transform hover:-translate-y-0.5",
    gameWine:
      "bg-[#9E0038] text-white hover:bg-[#B80043] border border-[#E11D48]/40 shadow-[0_0_20px_rgba(158,0,56,0.3)] transform hover:-translate-y-0.5",
    itch:
      "bg-[#131620] text-[#F3F4F6] border border-white/15 hover:border-[#2563EB]/60 hover:text-white hover:bg-[#181D2B] shadow-md transform hover:-translate-y-0.5",
    primary:
      "bg-white text-[#0A0B10] font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5",
    secondary:
      "bg-[#131620] text-[#F3F4F6] border border-white/10 hover:bg-[#181D2B] hover:border-white/20",
    ghost:
      "bg-transparent text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/5",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={combinedClasses}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
