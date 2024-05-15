/* eslint-disable no-undef */
import { ShoppingCart } from "phosphor-react";

type THeaderShopping = {
  title: string;
};
export function HeaderShopping({ title }: THeaderShopping) {
  return (
    <div className="flex items-start justify-start gap-2">
      <h1 className="text-2xl items-center flex justify-center text-black">
        {title}
      </h1>
      <div>
        <ShoppingCart
          className="text-black cursor-pointer flex items-center justify-center"
          size={28}
          weight="light"
        />
      </div>
    </div>
  );
}
