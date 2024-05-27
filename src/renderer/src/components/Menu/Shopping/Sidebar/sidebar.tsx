import {
  CaretDoubleLeft,
  CaretDoubleRight,
  DotsThreeVertical,
  SignOut,
} from "phosphor-react";
import { ReactNode } from "react";
import logo from "../../../../img/logo-lider-web-food.svg";
import { useSidebarStore } from "~/src/renderer/src/hooks/ModalCardShopping/useSidebar";

type SidebarProps = {
  children: ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const { expanded, toggleExpanded } = useSidebarStore();

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex ${
          expanded ? "w-52" : "w-16"
        } flex-col bg-white border-r shadow-sm`}
      >
        <div className="py-4 px-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt="Logo"
          />
          <button
            onClick={toggleExpanded}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <CaretDoubleLeft className="text-black font-bold" size={20} />
            ) : (
              <CaretDoubleRight className="text-black font-bold" size={20} />
            )}
          </button>
        </div>

        <ul className="flex-1 px-3">{children}</ul>

        <div className="border-t flex p-3">
          <SignOut className="text-black" size={40} weight="thin" />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="text-md text-black ">Usuário</h4>
              <span className="text-sm text-black">teste@teste.com.br</span>
            </div>
            <DotsThreeVertical size={40} weight="thin" />
          </div>
        </div>
      </nav>
    </aside>
  );
}
