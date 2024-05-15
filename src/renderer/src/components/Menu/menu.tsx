import { Search } from "../Sidebar/Search";
import { Breadcrumb } from "../componentsUtils/breadcrumb";
import { CategoriesMenu } from "./categories-menu";
import { StarsNowMenu } from "./stars-now-menu";

export function Menu() {
  return (
    <div className="flex-1 p-4 overflow-y-auto border border-gray-200 items-center justify-center">
      <div className="flex items-start w-full justify-start gap-2 p-4">
        <Breadcrumb
          list={{
            step1: { name: "Tela principal", navigate: "/tela-principal" },
            lastStep: "Cardápio",
          }}
        />
      </div>
      <Search />
      <CategoriesMenu />
      <StarsNowMenu />
    </div>
  );
}
