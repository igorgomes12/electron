import { Minus, Plus } from "phosphor-react";
import { useCountStore } from "~/src/renderer/src/hooks/ModalCardShopping/useListCartShopping";

type TComplement = {
  numberOption: number;
  nameOption: string;
  id: number;
}[];

const complements: TComplement = [
  { id: 1, numberOption: 1, nameOption: "Queijo Cheddar" },
  { id: 2, numberOption: 1, nameOption: "Blend Carne" },
  { id: 3, numberOption: 1, nameOption: "Bacon" },
];

export function FormAddProductsShopping() {
  const { items, setCountPlus, setCountMinus, selectedCount } = useCountStore();

  return (
    <>
      <form className="flex flex-col justify-center py-30 h-full gap-2 mt-6">
        <div className="flex items-start justify-between w-full p-2">
          <h1 className="text-black text-lg font-medium">Complementos</h1>
          <p className="text-black text-lg font-medium">{selectedCount}/3</p>
        </div>
        <div className="p-2 border-b w-full text-black text-sm -mt-5">
          <p>Escolha entre 1 e 3 opções (opcional)</p>
        </div>
        {/* opcoes */}
        {complements.map((item) => {
          const itemState = items[item.id.toString()] || { count: 0, total: 0 };
          return (
            <div
              key={item.id}
              className="flex p-2 border-b items-start justify-start gap-2"
            >
              <span className="flex gap-2 items-center justify-center">
                <Minus
                  className="bg-amareloFood/60 hover:bg-amareloFood cursor-pointer rounded-md text-white"
                  size={20}
                  weight="fill"
                  onClick={() =>
                    setCountMinus(item.id.toString(), item.numberOption)
                  }
                />
                <p className="text-black text-lg font-semibold">
                  {itemState.count}
                </p>
                <Plus
                  onClick={() =>
                    setCountPlus(item.id.toString(), item.numberOption)
                  }
                  className="bg-amareloFood/60 hover:bg-amareloFood cursor-pointer rounded-md text-white"
                  size={20}
                  weight="fill"
                />
              </span>
              <p className="text-black text-md">{item.nameOption}</p>
            </div>
          );
        })}
        <div className="flex py-4 items-center justify-center gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-amareloFood/80 text-white rounded hover:bg-amareloFood"
          >
            Próximo
          </button>
        </div>
      </form>
    </>
  );
}
