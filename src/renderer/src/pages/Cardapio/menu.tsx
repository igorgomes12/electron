import { House } from "phosphor-react";
import { CategoriesMenu } from "../../components/Menu/categories-menu";
import { StarsNowMenu } from "../../components/Menu/stars-now-menu";
import { Search } from "../../components/Sidebar/Search";
import { Breadcrumb } from "../../components/componentsUtils/breadcrumb";
import { Shopping } from "../../components/Menu/Shopping/shopping";

export function Menu() {
  return (
    <div className="flex-1 overflow-y-auto border border-gray-200 items-center justify-center">
      <div className="flex py-2 border-b items-start w-full justify-start gap-2 p-4">
        <Breadcrumb
          list={{
            step1: { name: "Tela principal", navigate: "/tela-principal" },
            lastStep: "Cardápio",
          }}
        />
      </div>
      <div className="flex items-start justify-start w-full">
        <div className="flex items-start justify-start w-40 ">
          <div className="gap-2 px-4 flex flex-col border items-center rounded-lg h-screen">
            <button className="bg-gray-50 hover:bg-gray-100 flex flex-col items-center gap-1 rounded-lg p-4 ">
              <House className="text-black" weight="thin" size={28} />
              <p className="text-black">Home</p>
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 flex flex-col items-center rounded-lg p-4 ">
              <House className="text-black" weight="thin" size={28} />
              <p className="text-black">Home</p>
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 flex flex-col items-center rounded-lg p-4 ">
              <House className="text-black" weight="thin" size={28} />
              <p className="text-black">Home</p>
            </button>
            <button className="bg-gray-50 hover:bg-gray-100 flex flex-col items-center rounded-lg p-4 ">
              <House className="text-black" weight="thin" size={28} />
              <p className="text-black">Home</p>
            </button>
          </div>
        </div>
        <div className="grid py-2 -ml-6 grid-cols-2 w-[100rem]">
          <div className="flex w-full flex-col">
            <CategoriesMenu />
            <Search />
            <StarsNowMenu />
          </div>
          <div className="w-36 border-l">
            {/* <div className="w-[28rem] flex h-full items-start justify-center">
              <Shopping />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
