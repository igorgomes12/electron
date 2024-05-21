import { House, Plus } from "phosphor-react";
import { CategoriesMenu } from "../../components/Menu/categories-menu";
import burguer from "../../img/burguer.jpg";
import { Breadcrumb } from "../../components/componentsUtils/breadcrumb";
import { HeaderShopping } from "../../components/Menu/Shopping/header-shopping";
import { FormShopping } from "../../components/Menu/Shopping/form-shopping";
import { ListCart } from "./list-cart";

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
        <div className="flex items-start justify-start w-40">
          <div className="gap-2 px-4 flex flex-col border items-center rounded-lg h-screen">
            <button className="bg-gray-50 hover:bg-gray-100 flex flex-col items-center gap-1 rounded-lg p-4">
              <House className="text-black" weight="thin" size={28} />
              <p className="text-black">Home</p>
            </button>
          </div>
        </div>
        <div className="flex py-2 -ml-6 w-96 md:w-full lg:w-full xl:w-full">
          <div className="flex w-[60rem] flex-col">
            <CategoriesMenu />
          </div>
          <div className="w-36 flex-col items-start flex justify-between border-l">
            <div className="w-[28rem] px-2 flex-col flex h-full items-start justify-between">
              <div className="flex items-start justify-between w-full">
                <HeaderShopping title="Carrinho" />
                <button className="flex p-2 hover:bg-gray-200 hover:scale-105 rounded-xl items-center gap-1">
                  <Plus size={20} className="text-green-600" weight="bold" />
                  <p className="text-black text-md font-medium">Adicionar</p>
                </button>
              </div>
              <ListCart
                img={burguer}
                titleProduct="Burguer T-rex"
                descriptionProduct="2 carnes de 120g (blend da casa), 2 ovos, bacon, 2 presuntos, 2 mussarela, banana, calabresa, alface, tomate, milho e batata."
                valueProduct="20,00"
              />
              <FormShopping />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
