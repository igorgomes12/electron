import React, { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../utils/button";

type TFilter = {
  setFilter: (value: string) => void;
};

export function Search({ setFilter }: TFilter) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchTerm(value);
    setFilter(value);
  };

  const toggleInputVisibility = () => {
    setIsInputVisible((prev) => !prev);
  };

  return (
    <div className="relative flex items-center py-2 w-full gap-2 justify-start px-2">
      <div className="relative cursor-pointer flex text-center items-center w-10  justify-center group">
        <Button
          icon={<MagnifyingGlass weight="bold" size={24} />}
          className="text-blue-600 text-center w-full items-center justify-center flex hover:bg-blue-100 hover:scale-110"
          onClick={toggleInputVisibility}
        />
        {!isInputVisible && (
          <div
            className={`
              absolute left-full z-10 rounded-md px-2 py-2 ml-4
              bg-blue-200 text-black text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            Pesquisar
          </div>
        )}
      </div>
      {isInputVisible && (
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="Pesquisar"
          className="flex px-2 border-2 cursor-pointer border-blue-200 text-black rounded-lg py-2 w-[71rem] mx-5 items-center gap-2 text-MD"
        />
      )}
    </div>
  );
}
