import { ArrowLeft, ArrowRight } from "phosphor-react";
import burguer from "../../../img/burguer.jpg";

export function MenuFolder() {
  return (
    <div className="relative py-2 px-2 w-full h-full border-b">
      <ArrowLeft
        className="absolute cursor-pointer -left-1 top-1/2 transform -translate-y-1/2"
        size={28}
        weight="light"
      />
      <img src={burguer} alt="burguer" className="w-full h-auto object-cover" />
      <ArrowRight
        className="absolute cursor-pointer -right-1 top-1/2 transform -translate-y-1/2"
        size={28}
        weight="light"
      />
    </div>
  );
}
