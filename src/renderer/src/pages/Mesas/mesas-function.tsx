import {
  Clock,
  MinusCircle,
  Notepad,
  PlusCircle,
  Printer,
  ThumbsDown,
  UserCirclePlus,
  UserSquare,
} from "phosphor-react";
import { Breadcrumb } from "../../components/componentsUtils/breadcrumb";

export function MesasFunction() {
  return (
    <div>
      <div className=" border-b flex p-3">
        <Breadcrumb
          list={{
            step1: { name: "Tela principal", navigate: "/tela-principal" },
            step2: { name: "Mesas", navigate: "/mesas" },
            lastStep: "Mesas / Comandas",
          }}
        />
      </div>
      <div className="grid grid-cols-2 w-full items-start justify-center">
        <div className="p-2">
          <p>teste</p>
        </div>
        <div className="border-l p-2 w-full h-screen ">
          <div className="flex border-b w-full p-1 gap-1 items-start">
            <h2 className="text-amareloFood font-medium text-xl">
              Mesa/Comanda:
            </h2>
            <p className="text-xl text-amareloFood font-medium">10</p>
          </div>
          {/* Tabela */}
          <div className="border-b p-1 flex items-center justify-center h-64">
            <p>Mesa sem items lançados</p>
          </div>
          {/* Buttons de ação */}
          <div className="flex border-b items-start justify-start gap-2 w-full">
            {/* incluir */}
            <div className="flex py-2 flex-col items-center w-full justify-center">
              <button className="bg-gray-100 hover:bg-gray-200 flex items-center flex-col gap-1 rounded-md w-full p-1">
                <PlusCircle
                  size={32}
                  className="text-green-600"
                  weight="fill"
                />
                <p className="text-xs text-black">Incluir Item</p>
              </button>
            </div>
            {/* cancela */}
            <div className="flex py-2 flex-col items-center w-full justify-center">
              <button className="bg-gray-100 hover:bg-gray-200 flex items-center flex-col gap-1 rounded-md w-full p-1">
                <ThumbsDown size={32} className="text-red-600" weight="fill" />
                <p className="text-xs text-black">Cancelar Item</p>
              </button>
            </div>
            {/* imprimir */}
            <div className="flex py-2 flex-col items-center w-full justify-center">
              <button className="bg-gray-100 hover:bg-gray-200 flex items-center flex-col gap-1 rounded-md w-full p-1">
                <Printer size={32} className="text-blue-600" weight="fill" />
                <p className="text-xs text-black">Re-imprimir Item</p>
              </button>
            </div>
          </div>
          {/* Buttons funcionario */}
          <div className="flex border-b items-start flex-col justify-between">
            <div className="flex items-start w-full p-1 justify-between">
              <div className="flex items-center py-1 gap-1">
                <Notepad className="text-blue-400" size={24} weight="fill" />
                <p className="text-sm text-black">Obs</p>
              </div>
              <p></p>
            </div>
            <div className="flex items-start w-full p-1 justify-between gap-1">
              <div className="flex items-center py-1 gap-1">
                <UserCirclePlus
                  className="text-gray-400"
                  size={24}
                  weight="fill"
                />
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
                <UserSquare
                  className="text-amber-500"
                  size={24}
                  weight="fill"
                />
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
          {/* valores do produto */}
        </div>
      </div>
    </div>
  );
}
