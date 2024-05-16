import { MagnifyingGlass } from "phosphor-react";
import { useModalAddTables } from "../../hooks/ModalAddTables/useModalAddTables";
import { Input } from "../utils/input";

export function ButtonAddTables() {
  const { onOpen } = useModalAddTables();

  return (
    <div className="flex w-full items-start gap-4 justify-start p-4">
      <div className="relative rounded-lg p-2 w-60 border">
        <input
          className="text-md text-black"
          id="buscar"
          placeholder="Pesquisa"
          type="text"
        />
        <MagnifyingGlass
          size={20}
          weight="bold"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
        />
      </div>
      <button
        onClick={onOpen}
        className="hover:bg-amareloFood bg-amareloFood/80 cursor-pointer p-2 rounded-lg text-black"
      >
        Adicionar Mesas
      </button>
    </div>
  );
}
