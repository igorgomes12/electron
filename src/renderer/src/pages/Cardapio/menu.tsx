import { CategoriesMenu } from "../../components/Menu/categories-menu";
import { CardShopping } from "./card-shop";

export function Menu() {
  return (
    <div className="flex flex-col h-full">
      <div
        id="Cardápio"
        className="flex-1 overflow-y-auto border border-gray-200 items-center justify-center"
      >
        <div className="flex items-start justify-start w-full">
          <div className="flex py-2 w-96 md:w-full lg:w-full xl:w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4 ">
              <div className="col-span-2 md:col-span-2 w-full ">
                <CategoriesMenu />
              </div>
              <div className="col-span-1 md:col-span-1 justify-self-end w-full">
                <CardShopping />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
