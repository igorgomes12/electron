import { MagnifyingGlass } from "phosphor-react";

export function Search() {
  return (
    <div className="relative flex items-center py-1 gap-2 justify-start px-2">
      <input
        placeholder="Pesquisar"
        className="flex border-b text-black rounded-lg py-2 w-[71rem] mx-5 items-center gap-2 text-MD"
      />
      <MagnifyingGlass className="absolute" weight="bold" />
    </div>
  );
}
