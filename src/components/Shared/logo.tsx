import React from "react";
import { Zap } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isTransparent?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  className = "",
  isTransparent = false,
}) => {
  // Size mapping for text and icon
  const sizes = {
    sm: { text: "text-xl", icon: 18 },
    md: { text: "text-2xl", icon: 24 },
    lg: { text: "text-3xl", icon: 32 },
    xl: { text: "text-4xl", icon: 40 },
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`flex items-center justify-center rounded-xl ${
          isTransparent ? "bg-white/20" : "bg-primary/10"
        }`}
      >
        <Zap
          size={currentSize.icon}
          className={`${isTransparent ? "text-white" : "text-primary"}`}
          style={{ fill: isTransparent ? "white" : "currentColor" }}
        />
      </div>
      <h1
        className={`${currentSize.text} font-bold tracking-tight ${
          isTransparent ? "text-white" : "text-slate-500"
        }`}
      >
        Quick
        <span className={isTransparent ? "text-white/90" : "text-primary"}>
          Event
        </span>
      </h1>
    </div>
  );
};

export default Logo;
