import { Clock, Person } from "phosphor-react";

export function FooterTables() {
  return (
    <footer className="flex flex-col border-2 border-gray-200 rounded-lg px-1 py-2 gap-1 items-start justify-start w-full">
      <div className="flex items-start justify-start">
        <div className="flex items-center justify-center w-full gap-1 p-2">
          <span className="bg-green-600 rounded-full w-2 h-2 " />
          <p className="text-xs text-gray-400">Disponível</p>
        </div>
        <div className="flex items-center justify-center w-full gap-1 p-2">
          <span className="bg-amareloFood rounded-full w-2 h-2 " />
          <p className="text-xs text-gray-400">Reservado</p>
        </div>
        <div className="flex items-center justify-center w-full gap-1 p-2">
          <span className="bg-rose-600 rounded-full w-2 h-2 " />
          <p className="text-xs text-gray-400">Ocupado</p>
        </div>
      </div>
      <div className="flex -ml-16 items-start justify-start">
        <div className="flex w-full items-center justify-center gap-1 p-1">
          <Person className="text-black" size={12} weight="bold" />
          <p className="text-xs text-gray-400">Quantidade de pessoas</p>
        </div>
        <div className="flex items-center justify-center w-80  gap-1 p-1">
          <Clock className="text-black" size={12} weight="bold" />
          <p className="text-xs text-gray-400">Tempo de permanencia</p>
        </div>
      </div>
    </footer>
  );
}
