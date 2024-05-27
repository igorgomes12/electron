import clsx from "clsx";
import { Breadcrumb } from "../componentsUtils/breadcrumb";
import { useParams } from "react-router-dom";

interface HeaderProps {
  isSidebarOpen: boolean;
}

export function Header({ isSidebarOpen }: HeaderProps) {
  const isMacOS = process.platform === "darwin";
  const { id } = useParams<{ id: string }>();

  return (
    <div
      id="header"
      className={clsx(
        `${
          isSidebarOpen && "border-b "
        } px-6 flex items-center gap-4 h-10 leading-tight transition-all duration-250 region-drag`,
        {
          "pl-24": !isSidebarOpen && isMacOS,
          "w-screen": !isSidebarOpen,
          "w-[calc(100vw-240px)]": isSidebarOpen,
        }
      )}
    >
      <div className="flex py-4 items-center w-full h-10 justify-between gap-2 ">
        <div className="hidden xl:flex">
          <Breadcrumb
            list={{
              step1: { name: "Tela principal", navigate: "/tela-principal" },

              lastStep: id || "",
            }}
          />
        </div>
      </div>
    </div>
  );
}
