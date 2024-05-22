import { useSidebarStore } from "~/src/renderer/src/hooks/ModalCardShopping/useSidebar";
import { ReactElement } from "react";

type TSidebarItem = {
  icon: ReactElement;
  text: string;
  active: boolean;
  alert?: string;
};

export function SidebarItem({ icon, text, active, alert }: TSidebarItem) {
  const { expanded } = useSidebarStore();

  return (
    <li
      className={`
        relative flex items-center py-2 px-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-amareloFood/60 to-amareloFood/60 text-black"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-28 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-1 rounded-full bg-red-500 ${
            expanded ? "animate-pulse w-2 h-2" : "top-1 animate-pulse w-2 h-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full z-10 rounded-md px-2 py-1 ml-6
          bg-amareloFood/60 text-black text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
