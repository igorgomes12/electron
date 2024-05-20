import { ArrowCircleLeft, ArrowsLeftRight, Check, X } from "phosphor-react";
import { useModalIncludeItem } from "~/src/renderer/src/hooks/ModalTableFunction/useModalIncludeItem";
import { Input } from "../../../utils/input";
import { useForm } from "react-hook-form";
import { tableTransferir } from "~/src/renderer/src/utils/mocks";
import TableTransfer from "../table-transfer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ModalIncludeItemProps = {
  modalKey: string;
};

const conteudo = {
  transf: (
    <div className="flex w-full items-center justify-center">
      <input className="w-10 h-5" type="checkbox" />
    </div>
  ),
  item: <div className="flex items-center justify-center">1</div>,
  cod: <div className="flex items-center justify-center">1</div>,
  description: "MANTEIGA CAPEL COM SAL 200G",
  total: "1,000",
  viagem: "1,000",
};

const conteudoArray = Array.from({ length: 6 }, (_, i: number) => ({
  ...conteudo,
}));
const transferSchema = z.object({
  origem: z.number(),
  destino: z.number(),
});
type TTrasnferForm = z.infer<typeof transferSchema>;

export function ModalTransferItem({ modalKey }: ModalIncludeItemProps) {
  const { onClose } = useModalIncludeItem();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTrasnferForm>({
    resolver: zodResolver(transferSchema),
  });

  const submitHandleTransfer = (data: TTrasnferForm) => {
    console.log(data);
  };
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-3/4 w-7/12 flex-col gap-4 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <div className="flex border-b items-start justify-between py-1">
          <h1 className="flex items-start justify-center text-black text-md font-bold">
            Transfêrencia de itens da mesa
          </h1>
          <X
            onClick={() => onClose(modalKey)}
            size={22}
            className="-mt-3 hover:scale-110 text-black cursor-pointer"
            weight="bold"
          />
        </div>
        <div className="flex items-start border-b gap-2 justify-start p-1">
          <span>qrcode</span>
          <h1 className="font-bold text-2xl text-amareloFood">
            Transfêrencia de itens da mesa
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(submitHandleTransfer)}
          className="p-1 -mt-3 flex flex-col w-full"
          action=""
        >
          <div className="flex items-center border-b-2 py-1 px-2 justify-between w-full">
            <div className="flex items-center justify-center gap-2 w-96">
              <div className="flex flex-col w-full  ">
                <label className="text-md text-black " htmlFor="">
                  Mesa de Origem
                </label>
                <Input
                  {...register("origem")}
                  id="origem"
                  disabled={false}
                  errors={errors}
                  type="number"
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <ArrowsLeftRight
                  className="text-black"
                  size={40}
                  weight="fill"
                />
              </div>
              <div className="flex flex-col w-full ">
                <label className="text-md text-black " htmlFor="">
                  Mesa de Destino
                </label>
                <Input
                  {...register("destino")}
                  id="destino"
                  disabled={false}
                  errors={errors}
                  type="number"
                />
              </div>
            </div>
            <div className="flex text-black gap-1">
              <input className="w-5" type="checkbox" />
              <p className="text-amareloFood font-medium">
                Exibe valores dos itens
              </p>
            </div>
          </div>
          <div className="w-full h-64 py-2 flex">
            <TableTransfer
              headerTitles={tableTransferir}
              list={conteudoArray}
            />
          </div>
          <div className="flex p-2 w-full items-start justify-between gap-10">
            <div className="flex gap-2 w-full">
              <button
                onClick={() => onClose(modalKey)}
                className="bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center"
              >
                <ArrowCircleLeft
                  size={32}
                  className="text-red-600"
                  weight="fill"
                />
                Cancelar-Esc
              </button>
              <button
                type="submit"
                className="bg-gray-100 border-r-gray-400 border-b-gray-400  border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center"
              >
                <Check size={32} className="text-green-600" weight="fill" />
                Marcar todos-F1
              </button>
            </div>
            <div className="flex w-80">
              <button className="bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center">
                <ArrowsLeftRight
                  size={32}
                  className="text-black-600"
                  weight="fill"
                />
                Transferir-F10
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
