import React, { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

type TFilter = {
  setFilter: (value: string) => void;
};

export function Search({ setFilter }: TFilter) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase().trim());
    setFilter(event.target.value.toLowerCase().trim());
  };

  return (
    <div className="relative flex items-center py-1 gap-2 justify-start px-2">
      <input
        onChange={handleSearchChange}
        value={searchTerm}
        placeholder="Pesquisar"
        className="flex border-b text-black rounded-lg py-2 w-[71rem] mx-5 items-center gap-2 text-MD"
      />
      <MagnifyingGlass className="absolute" weight="bold" />
    </div>
  );
}
