import { MinusCircle, PlusCircle } from "phosphor-react";

type TComplement = {
  numberOption: number;
  nameOption: string;
}[];

const complements: TComplement = [
  { numberOption: 1, nameOption: "Queijo Cheddar" },
  { numberOption: 1, nameOption: "Blend Carne" },
  { numberOption: 1, nameOption: "Bacon" },
];

export function FormAddProductsShopping() {
  return (
    <>
      <form className="flex flex-col justify-center py-30 h-full gap-2 mt-6">
        <div className="flex items-start justify-between w-full p-2">
          <h1 className="text-black text-lg font-medium">Complementos</h1>
          <p className="text-black text-lg font-medium">0/3</p>
        </div>
        <div className="p-2 border-b w-full text-black text-sm -mt-5">
          <p>Escolha entre 1 e 3 opções (opcional)</p>
        </div>
        {/* opcoes */}
        {complements.map((item) => (
          <div
            key={item.nameOption}
            className="flex p-2 border-b items-start justify-start gap-2"
          >
            <div className="text-sm flex gap-2 items-center justify-center font-light text-black">
              <MinusCircle
                className="cursor-pointer text-red-500"
                size={22}
                weight="light"
              />
              <p className="text-lg text-black">{item.numberOption}</p>
              <PlusCircle
                className="cursor-pointer text-emerald-500"
                size={22}
                weight="light"
              />
            </div>
            <p className="text-black text-md">{item.nameOption}</p>
          </div>
        ))}
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
