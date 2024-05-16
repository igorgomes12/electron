import { HeaderShopping } from "./header-shopping";
import { FormShopping } from "./form-shopping";
import { MenuFolder } from "./menu-folder";

export function Shopping() {
  return (
    <div className="flex flex-col gap-2">
      <HeaderShopping title="Carrinho" />
      <div className="flex border rounded-lg shadow-2xl py-4 px-14 flex-col">
        <MenuFolder />
        <FormShopping />
      </div>
    </div>
  );
}
