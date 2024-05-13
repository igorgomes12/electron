/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import React, { ReactNode } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
  icon?: JSX.Element;
}

export function Link({ to, children, icon }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx(
          "flex items-center text-md w-full text-black hover:bg-amareloFood/70 py-1 px-1 rounded group ",
          {
            "bg-amareloFood flex p-2 items-center": isActive,
          }
        );
      }}
    >
      <div className="flex justify-center items-center w-full gap-2">
        <span>
          {icon && React.cloneElement(icon, { className: "h-6 w-6" })}
        </span>
        <span className="truncate flex-1">{children}</span>
      </div>
    </NavLink>
  );
}
