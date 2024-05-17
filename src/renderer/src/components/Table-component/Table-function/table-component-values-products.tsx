import { BookOpen, Percent } from "phosphor-react";

export function TableComponentValuesProducts() {
  return (
    <div className="flex items-start justify-between w-full p-1">
      <div className="flex flex-col gap-0.5 p-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start justify-start gap-1">
            <BookOpen className="text-gray-400" size={16} weight="fill" />
            <p className="text-gray-500 text-xs">Valor dos produtos</p>
          </div>
          <p className="text-gray-500 text-xs">R$ 1,15</p>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start justify-start gap-1">
            <Percent className="text-gray-400" size={16} weight="fill" />
            <p className="text-gray-500 text-xs">Couvert (+)</p>
          </div>
          <p className="text-blue-600 font-medium text-xs">R$ 1,15</p>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start justify-start gap-1">
            <Percent className="text-gray-400" size={16} weight="fill" />
            <p className="text-gray-500 text-xs">Taxa de serviço (+)</p>
          </div>
          <p className="text-blue-600 font-medium text-xs">R$ 1,15</p>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start justify-start gap-1">
            <Percent className="text-gray-400" size={16} weight="fill" />
            <p className="text-gray-500 text-xs">Desconto (-)</p>
          </div>
          <p className="text-red-500 font-medium text-xs">R$ 1,15</p>
        </div>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start justify-start gap-1">
            <Percent className="text-gray-400" size={16} weight="fill" />
            <p className="text-gray-500 text-xs">Pag.parcial (-)</p>
          </div>
          <p className="text-red-500 font-medium text-xs">R$ 1,15</p>
        </div>
      </div>
      {/* menu preço */}
      <div className="flex items-end gap-4 flex-col">
        <p className="font-bold text-black">Valor Total</p>
        <p className="text-5xl text-amareloFood font-bold">R$ 1,15</p>
      </div>
    </div>
  );
}
