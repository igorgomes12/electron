import {
  Clock,
  MinusCircle,
  Notepad,
  PlusCircle,
  UserCirclePlus,
  UserSquare,
} from "phosphor-react";

export function TableComponentButtonFuncionario() {
  return (
    <div className="flex border-b items-start flex-col justify-between">
      <div className="flex items-start w-full p-1 justify-between">
        <div className="flex items-center py-1 gap-1">
          <Notepad className="text-blue-400" size={24} weight="fill" />
          <p className="text-sm text-black">Obs-F6</p>
        </div>
      </div>
      <div className="flex items-start w-full p-1 justify-between gap-1">
        <div className="flex items-center py-1 gap-1">
          <UserCirclePlus className="text-gray-400" size={24} weight="fill" />
          <p className="text-sm text-black">Quantidade de Pessoas</p>
        </div>
        <div className="text-sm flex gap-2 items-center justify-center font-light text-black">
          <MinusCircle
            className="cursor-pointer text-red-500"
            size={22}
            weight="light"
          />
          <p className="text-lg text-black">1</p>
          <PlusCircle
            className="cursor-pointer text-emerald-500"
            size={22}
            weight="light"
          />
        </div>
      </div>
      <div className="flex items-start w-full p-1 justify-between gap-1">
        <div className="flex items-center py-1 gap-1">
          <UserSquare className="text-amber-500" size={24} weight="fill" />
          <p className="text-sm text-black">Garçom</p>
        </div>
        <p>Master</p>
      </div>
      <div className="flex items-start w-full p-1 justify-between gap-1">
        <div className="flex items-center py-1 gap-1">
          <Clock className="text-indigo-600" size={24} weight="fill" />
          <p className="text-sm text-black">Tempo de Permanecia</p>
        </div>
        <p className="text-md">3 horas e 26 minutos</p>
      </div>
    </div>
  );
}
