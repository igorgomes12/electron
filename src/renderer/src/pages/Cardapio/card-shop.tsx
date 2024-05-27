import { Plus, Trash } from "phosphor-react";
import { FormShopping } from "../../components/Menu/Shopping/form-shopping";
import { HeaderShopping } from "../../components/Menu/Shopping/header-shopping";
import burguer from "../../img/burguer.jpg";
import { ListCart } from "./list-cart";
import { useSidebarStore } from "../../hooks/ModalCardShopping/useSidebar";
import { useCountStore } from "../../hooks/ModalCardShopping/useListCartShopping";
import { Button } from "../../components/utils/button";

const CartItem = () => {
  const { items } = useCountStore();
  return (
    <>
      {Object.keys(items).map((id) => (
        <ListCart
          key={id}
          id={id}
          img={burguer}
          titleProduct="Burguer T-rex"
          descriptionProduct="2 carnes de 120g (blend da casa), 2 ovos, bacon, 2 presuntos, 2 mussarela, banana, calabresa, alface, tomate, milho e batata."
          valueProduct="20,00"
        />
      ))}
    </>
  );
};

export function CardShopping() {
  const { expanded } = useSidebarStore();
  const { clearCart, addItem } = useCountStore();

  const handleAddItem = () => {
    addItem("1", 20.0);
    addItem("2", 20.0);
    addItem("3", 20.0);
  };

  return (
    <div className="flex flex-col items-start justify-start px-2 py-2 border-l overflow-y-auto min-h-screen">
      <div
        className={`${
          expanded ? "w-[27rem]" : "w-[30rem]"
        } px-1 flex flex-col h-full items-start py-2 justify-between`}
      >
        <div className="flex items-start justify-between w-full">
          <HeaderShopping title="Carrinho" />
          <div className="flex gap-2">
            <Button
              color="text-green-600 font-bold"
              size="large"
              icon={<Plus />}
              onClick={handleAddItem}
            />
            <Button
              color="text-red-600 font-bold"
              size="large"
              icon={<Trash />}
              onClick={clearCart}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start">
          <CartItem />
        </div>
        <FormShopping />
      </div>
    </div>
  );
}
