import { InfoProductsShopping } from "./ModalCardShopping/info-products-shopping";
import { FormAddProductsShopping } from "./ModalCardShopping/form-add-products-shopping";

export function ModalCardShopping() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-auto w-5/12 flex-col gap-2 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <InfoProductsShopping />
        <FormAddProductsShopping />
      </div>
    </div>
  );
}
