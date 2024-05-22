import { useModalCardShopping } from "~/src/renderer/src/hooks/ModalCardShopping/useModalCardShopping";
import burguer from "../../../../img/burguer.jpg";
import { useState } from "react";
import { X } from "phosphor-react";

export function InfoProductsShopping() {
  const { onClose } = useModalCardShopping();
  const [expandDescription, setExpandDescription] = useState(false);
  const description =
    "2 carnes de 120g (blend da casa), 2 ovos, bacon, 2 presuntos, 2 mussarela, banana, calabresa, alface, tomate, milho e batata.";
  return (
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
  );
}
