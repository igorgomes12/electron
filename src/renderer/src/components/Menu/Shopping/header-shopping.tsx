import { ShoppingCart } from "phosphor-react";

type THeaderShopping = {
  title: string;
};
export function HeaderShopping({ title }: THeaderShopping) {
  return (
    <div className="flex items-center py-2 justify-between w-full px-2 gap-2">
      <div className="flex items-start gap-1">
        <h1 className="text-2xl items-center flex justify-center text-black">
          {title}
        </h1>
        <ShoppingCart
          className="text-black cursor-pointer flex items-center justify-center"
          size={28}
          weight="light"
        />
      </div>
    </div>
  );
}
