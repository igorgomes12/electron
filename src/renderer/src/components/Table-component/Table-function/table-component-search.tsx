import { MagnifyingGlass } from "phosphor-react";

export function TableComponentSearch() {
  return (
    <div className="flex border-b w-full p-2 gap-1 items-start">
      <button className="flex py-2 px-1 border border-gray-400 rounded-lg w-[71rem] mx-5 items-center gap-2 text-rotion-100 text-sm hover:text-rotion-50">
        <MagnifyingGlass className="w-5 h-5" />
        Pesquisa
      </button>
    </div>
  );
}
