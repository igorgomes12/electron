import clsx from "clsx";

interface HeaderProps {
  isSidebarOpen: boolean;
}
export function Header({ isSidebarOpen }: HeaderProps) {
  const isMacOS = process.platform === "darwin";
  return (
    <div
      id="header"
      className={clsx(
        `${
          isSidebarOpen && "border-b h-14 py-[1.125rem] "
        }px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag`,
        {
          "pl-24": !isSidebarOpen && isMacOS,
          "w-screen": !isSidebarOpen,
          "w-[calc(100vw-240px)]": isSidebarOpen,
        }
      )}
    ></div>
  );
}
