import { useState } from "react";
import { useModalCardShopping } from "../../../hooks/ModalCardShopping/useModalCardShopping";
import burguer from "../../../img/burguer.jpg";
import { MinusCircle, PlusCircle, X } from "phosphor-react";

export function ModalCardShopping() {
  const { onClose } = useModalCardShopping();
  const [expandDescription, setExpandDescription] = useState(false);
  const description =
    "2 carnes de 120g (blend da casa), 2 ovos, bacon, 2 presuntos, 2 mussarela, banana, calabresa, alface, tomate, milho e batata.";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-auto w-5/12 flex-col gap-2 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        {/* informativo do produto */}
        <div className="flex items-center justify-center gap-2">
          <img className="w-28 h-20" src={burguer} alt="Hamburguer" />
          <div>
            <div className="flex items-end justify-end p-2 text-zinc-500 hover:text-black">
              <X
                onClick={onClose}
                size={22}
                className="-mt-3 cursor-pointer"
                weight="bold"
              />
            </div>
            <p className="text-black text-xl font-semibold">Hamburguer</p>
            <p className="text-amareloFood text-md font-semibold">
              Burguer tradicionais
            </p>
            <p
              className={`text-zinc-800 w-96 text-xs font-semibold ${
                expandDescription ? "" : "truncate"
              }`}
            >
              {description}
            </p>
            <button
              onClick={() => setExpandDescription(!expandDescription)}
              className="text-amber-700 cursor-pointer text-sm"
            >
              {expandDescription ? "- detalhes" : "+ detalhes"}
            </button>
          </div>
        </div>
        {/* formulario de adiçao de produto */}
        <form className="flex flex-col justify-center py-30 h-full gap-2 mt-6">
          <div className="flex items-start justify-between w-full p-2">
            <h1 className="text-black text-lg font-medium">Complementos</h1>
            <p className="text-black text-lg font-medium">0/3</p>
          </div>
          <div className="p-2 border-b w-full text-black text-sm -mt-5">
            <p>Escolha entre 1 e 3 opções (opcional)</p>
          </div>
          {/* opcoes */}
          <div className="flex p-2 border-b items-start justify-start gap-2">
            <div className="text-sm flex gap-2 items-center justify-center font-light text-black">
              <MinusCircle
                className="cursor-pointer text-red-500"
                size={22}
                weight="light"
              />
              <p className="text-lg text-black">1</p>
              <PlusCircle
                className="cursor-pointer text-emerald-500"
                size={22}
                weight="light"
              />
            </div>
            <p className="text-black text-md">Queijo Mussarela</p>
          </div>
          <div className="flex p-2 border-b items-start justify-start gap-2">
            <div className="text-sm flex gap-2 items-center justify-center font-light text-black">
              <MinusCircle
                className="cursor-pointer text-red-500"
                size={22}
                weight="light"
              />
              <p className="text-lg text-black">1</p>
              <PlusCircle
                className="cursor-pointer text-emerald-500"
                size={22}
                weight="light"
              />
            </div>
            <p className="text-black text-md">Bacon</p>
          </div>
          <div className="flex p-2 border-b items-start justify-start gap-2">
            <div className="text-sm flex gap-2 items-center justify-center font-light text-black">
              <MinusCircle
                className="cursor-pointer text-red-500"
                size={22}
                weight="light"
              />
              <p className="text-lg text-black">1</p>
              <PlusCircle
                className="cursor-pointer text-emerald-500"
                size={22}
                weight="light"
              />
            </div>
            <p className="text-black text-md">Carne</p>
          </div>
          <div className="flex py-4 items-center justify-center gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-amareloFood/80 text-white rounded hover:bg-amareloFood"
            >
              Próximo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
