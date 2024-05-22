import { Plus } from "phosphor-react";
import { FormShopping } from "../../components/Menu/Shopping/form-shopping";
import { HeaderShopping } from "../../components/Menu/Shopping/header-shopping";
import burguer from "../../img/burguer.jpg";
import { ListCart } from "./list-cart";

export function CardShopping() {
  return (
    <div className="w-36 flex-col items-start flex justify-between border-l">
      <div className="w-[25rem] px-1 flex-col flex h-full items-start justify-between">
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
  );
}
