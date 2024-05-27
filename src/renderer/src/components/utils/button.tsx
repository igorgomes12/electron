import React from "react";

interface ButtonProps {
  color?: string;
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  children?: string;
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  small: "p-1 text-sm",
  medium: "p-2 text-md",
  large: "p-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  color = "",
  size = "medium",
  icon,
  className = "",
  children,
  onClick,
}) => {
  return (
    <button
      className={`${className} flex ${sizeClasses[size]} hover:bg-gray-200 hover:scale-105 rounded-xl items-center justify-center`}
      onClick={onClick}
    >
      {icon && <span className={`flex-shrink-0 ${color}`}>{icon}</span>}
      {children && (
        <p className="text-black font-medium flex-grow text-center">
          {children}
        </p>
      )}
    </button>
  );
};
