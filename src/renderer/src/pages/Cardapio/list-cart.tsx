import { useState } from "react";
import { ButtonsListCart } from "./buttons-list-cart";

type TListCart = {
  img: string;
  titleProduct: string;
  descriptionProduct: string;
  valueProduct: string;
};

export function ListCart({
  img,
  descriptionProduct,
  titleProduct,
  valueProduct,
}: TListCart) {
  const [expandDescription, setExpandDescription] = useState(false);
  return (
    <main className="w-full items-start border-b h-[28rem] py-1 justify-start flex">
      <ol className="flex flex-col w-full gap-2 items-start justify-start">
        <ul className="bg-gray-50 border border-gray-50 gap-2 px-1 w-full items-center justify-between flex rounded-md">
          <div className="flex items-start py-1 gap-1">
            <img className="w-20 h-20 rounded-md" src={img} alt="burguer" />
            <div className="flex-flex-col -inset-y-px">
              <h2 className="text-lg font-bold text-black">{titleProduct}</h2>
              <p
                className={`text-zinc-800 w-64 text-xs font-semibold ${
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
          <ButtonsListCart valueProduct={valueProduct} />
        </ul>
      </ol>
    </main>
  );
}
