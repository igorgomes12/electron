import { Check, CheckCircle, X, XCircle } from "phosphor-react";
import { useModalIncludeItem } from "~/src/renderer/src/hooks/ModalTableFunction/useModalIncludeItem";
import { Input } from "../../../utils/input";
import { useForm } from "react-hook-form";

type ModalIncludeItemProps = {
  modalKey: string;
};

export function ModalIncludeItem({ modalKey }: ModalIncludeItemProps) {
  const { onClose } = useModalIncludeItem();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-4/5 w-7/12 flex-col gap-2 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <div className="flex border-b items-start justify-between  py-1">
          <h1 className="flex items-start justify-center text-black text-md font-bold">
            Lançamento de Itens
          </h1>
          <X
            onClick={() => onClose(modalKey)}
            size={22}
            className="-mt-3 text-black cursor-pointer"
            weight="bold"
          />
        </div>
        <form action="">
          <div className="flex border-b items-center justify-center w-full">
            <div className="flex flex-col w-full gap-1 p-1">
              <label className="text-sm text-black" htmlFor="">
                Busca Produtos por: (Código /Nome/Cód. Barras/ Balaça)
              </label>
              <Input
                id="produtos"
                disabled={false}
                type="text"
                errors={errors}
              />
            </div>
            <div className="flex flex-col w-40 gap-1 p-1">
              <label className="text-sm text-black" htmlFor="">
                Quantidade
              </label>
              <Input
                id="quantity"
                disabled={false}
                type="text"
                errors={errors}
              />
            </div>
          </div>
          <div className="relative h-[21.5rem] border-b">
            <div className="h-full overflow-auto">table</div>
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-start bg-white">
              <p className="text-2xl font-bold text-gray-400 p-2">
                Total do Itens
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-1">
            <h2 className="text-amareloFood font-bold w-64 text-3xl">
              Mesa:10
            </h2>
            <div className="flex w-full p-2 gap-2 ">
              <button className="bg-gray-50 text-blue-500 border shadow-lg hover:bg-gray-200  text-sm  flex-col gap-1 rounded-md p-1 flex items-start w-full justify-center">
                F5-Adiciona Obs no Item Delete - Remove Item
              </button>
              <button className="bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-1 items-center w-full justify-center">
                <CheckCircle
                  size={32}
                  className="text-green-600"
                  weight="fill"
                />
                Confirmar-F10
              </button>
              <button className="bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-1 items-center w-full justify-center">
                <XCircle size={32} className="text-red-600" weight="fill" />
                Cancelar-Esc
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
