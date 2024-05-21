import { Minus, Plus, Pencil, Trash } from "phosphor-react";
import { useCountStore } from "../../hooks/ModalCardShopping/useListCartShopping";
import { ModalDeleteProduct } from "../../components/Menu/Shopping/ModalCardShopping/modal-delete-products";

type TButtonsList = {
  valueProduct: string;
};

export function ButtonsListCart({ valueProduct }: TButtonsList) {
  const { count, setCountPlus, setCountMinus, onOpen } = useCountStore();
  const productValue = parseFloat(valueProduct.replace(",", "."));
  return (
    <div className="flex flex-col items-end gap-2">
      <span className="flex gap-2 items-center justify-center">
        <Minus
          className="bg-amareloFood/60 hover:bg-amareloFood cursor-pointer rounded-md text-white"
          size={20}
          weight="fill"
          onClick={() => setCountMinus(productValue)}
        />
        <p className="text-black text-lg font-semibold">{count}</p>
        <Plus
          onClick={() => setCountPlus(productValue)}
          className="bg-amareloFood/60 hover:bg-amareloFood cursor-pointer rounded-md text-white"
          size={20}
          weight="fill"
        />
      </span>
      <span className="flex gap-2 items-center justify-center px-1">
        <Pencil
          className="bg-gray-400 hover:bg-gray-500 hover:scale-110 p-1 cursor-pointer rounded-md text-white"
          size={28}
          weight="fill"
        />
        <Trash
          className="bg-red-200 hover:scale-110 p-1 cursor-pointer rounded-md text-red-500"
          size={28}
          onClick={onOpen}
          weight="fill"
        />
      </span>
      <ModalDeleteProduct />
    </div>
  );
}
