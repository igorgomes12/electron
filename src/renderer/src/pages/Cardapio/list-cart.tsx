import { useState } from "react";
import { ButtonsListCart } from "./buttons-list-cart";

type TListCart = {
  id: string;
  img: string;
  titleProduct: string;
  descriptionProduct: string;
  valueProduct: string;
};

export function ListCart({
  id,
  img,
  descriptionProduct,
  titleProduct,
  valueProduct,
}: TListCart) {
  const [expandDescription, setExpandDescription] = useState(false);

  return (
    <main className="w-full h-full py-1 flex items-start justify-start border-b">
      <ol className="w-full flex flex-col gap-2 items-start justify-start">
        <li className="w-full flex items-center justify-between gap-2 px-1 bg-gray-50 border border-gray-50 rounded-md">
          <div className="flex items-start gap-2 py-1">
            <img className="w-24 h-20 rounded-md" src={img} alt="burguer" />
            <div className="flex items-start py-1 flex-col">
              <h2 className="text-lg font-bold text-black">{titleProduct}</h2>
              <p
                className={`text-zinc-800 w-52 md:w-64 lg:w-64 xl:w-64 text-xs font-semibold ${
                  expandDescription ? "" : "truncate"
                }`}
              >
                {descriptionProduct}
              </p>
              <button
                onClick={() => setExpandDescription(!expandDescription)}
                className="text-amber-700 cursor-pointer text-sm"
              >
                {expandDescription ? "- detalhes" : "+ detalhes"}
              </button>
              <p className="text-sm font-medium text-black">
                R$ {valueProduct}
              </p>
            </div>
          </div>
          <ButtonsListCart id={id} valueProduct={valueProduct} />
        </li>
      </ol>
    </main>
  );
}
