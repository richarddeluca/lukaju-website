import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "patreon" | "itch" | "primary" | "secondary" | "ghost";
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
    "inline-flex items-center justify-center font-sans font-medium tracking-normal transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus:outline-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-4.5 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2",
  };

  const variantStyles = {
    patreon:
      "bg-[#9E0038] text-white hover:bg-[#b50041] border border-[#9E0038]",
    itch:
      "bg-[#131620] text-[#F3F4F6] border border-white/15 hover:bg-[#1a1f2c] hover:text-white",
    primary:
      "bg-white text-[#0A0B10] font-semibold hover:bg-gray-200",
    secondary:
      "bg-[#131620] text-[#F3F4F6] border border-white/10 hover:bg-[#1a1f2c]",
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
