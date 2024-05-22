import { Gear, House } from "phosphor-react";
import { CategoriesMenu } from "../../components/Menu/categories-menu";
import { Breadcrumb } from "../../components/componentsUtils/breadcrumb";
import { SidebarItem } from "../../components/Menu/Shopping/Sidebar/sidebar-item";
import { CardShopping } from "./card-shop";
import { Sidebar } from "../../components/Menu/Shopping/Sidebar/sidebar";

export function Menu() {
  return (
    <div className="flex-1 overflow-y-auto border border-gray-200 items-center justify-center">
      <div className="flex py-2 border-b items-start w-full justify-start gap-2 p-4">
        <Breadcrumb
          list={{
            step1: { name: "Tela principal", navigate: "/tela-principal" },
            lastStep: "Cardápio",
          }}
        />
      </div>
      <div className="flex items-start justify-start w-full">
        <Sidebar>
          <SidebarItem icon={<House size={25} />} text="Menu" active={true} />
          <SidebarItem
            icon={<Gear size={25} />}
            text="Configuração"
            active={false}
            alert="teste"
          />
        </Sidebar>
        <div className="flex py-2 w-96 md:w-full lg:w-full xl:w-full">
          <div className="grid grid-cols-2 w-full">
            <CategoriesMenu />
            {/* <CardShopping /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
