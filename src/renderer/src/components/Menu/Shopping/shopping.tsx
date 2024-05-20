import { HeaderShopping } from "./header-shopping";
import { FormShopping } from "./form-shopping";
import { MenuFolder } from "./menu-folder";

export function Shopping() {
  return (
    <div className="grid grid-cols-2 w-full gap-2">
      <div className="flex flex-col">
        <HeaderShopping title="Carrinho" />
        <div className="flex border rounded-lg shadow-2xl py-4 px-2 w-[30rem] h-full flex-col">
          <MenuFolder />
          <FormShopping />
        </div>
      </div>
    </div>
  );
}
