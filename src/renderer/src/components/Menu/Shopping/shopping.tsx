import { ArrowLeft, ArrowRight } from "phosphor-react";
import burguer from "../../../img/burguer.jpg";
import { HeaderShopping } from "./header-shopping";
import { FormShopping } from "./form-shopping";

export function Shopping() {
  return (
    <div className="flex flex-col gap-2">
      <HeaderShopping title="Carrinho" />
      <div className="flex border rounded-lg shadow-2xl py-4 px-14 flex-col">
        <div className="relative py-2 px-2 w-full h-60 border-b">
          <ArrowLeft
            className="absolute cursor-pointer -left-4 top-1/2 transform -translate-y-1/2"
            size={28}
            weight="light"
          />
          <img
            src={burguer}
            alt="burguer"
            className="w-full h-full object-cover"
          />
          <ArrowRight
            className="absolute cursor-pointer -right-4 top-1/2 transform -translate-y-1/2"
            size={28}
            weight="light"
          />
        </div>
        <FormShopping />
      </div>
    </div>
  );
}
