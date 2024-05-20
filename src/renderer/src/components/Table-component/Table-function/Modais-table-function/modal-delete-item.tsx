import { ArrowsLeftRight, CheckCircle, X, XCircle } from "phosphor-react";
import { useModalIncludeItem } from "~/src/renderer/src/hooks/ModalTableFunction/useModalIncludeItem";
import { Input } from "../../../utils/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ModalIncludeItemProps = {
  modalKey: string;
};

const deleteItensSchema = z.object({
  total: z.string(),
  cancel: z.string(),
});

type TDeleteForm = z.infer<typeof deleteItensSchema>;

export function ModalDeleteItem({ modalKey }: ModalIncludeItemProps) {
  const { onClose } = useModalIncludeItem();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TDeleteForm>({
    resolver: zodResolver(deleteItensSchema),
  });
  const submitHandleDeleteItems = (data: TDeleteForm) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-2/4 w-6/12 flex-col gap-4 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <div className="flex border-b items-start justify-between py-1">
          <h1 className="flex items-start justify-center text-black text-md font-bold">
            Cancelamento de Item
          </h1>
          <X
            onClick={() => onClose(modalKey)}
            size={22}
            className="-mt-3 hover:scale-110 text-black cursor-pointer"
            weight="bold"
          />
        </div>
        <div className="flex items-start gap-2 justify-start p-1">
          <span>qrcode</span>
          <h1 className="font-bold text-2xl text-amareloFood">
            Cancelamento de Item
          </h1>
        </div>
        <div className="flex flex-col gap-2 p-1 items-start justify-start">
          <p className="text-lg text-amber-600 font-medium">
            MANTEGIA CAPEL COM SAL 200G
          </p>
          <form
            onSubmit={handleSubmit(submitHandleDeleteItems)}
            className="flex flex-col items-center justify-center gap-4 w-full"
            action=""
          >
            <div className="flex items-center justify-center w-full gap-2 p-3">
              <div className="flex flex-col w-full">
                <label className="text-black" htmlFor="">
                  Quantidade Total
                </label>
                <Input
                  disabled={false}
                  {...register("total")}
                  errors={errors}
                  id="total"
                  type="text"
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <ArrowsLeftRight
                  className="text-black"
                  size={40}
                  weight="fill"
                />
              </div>

              <div className="flex w-full gap-2">
                <div className="flex flex-col w-full">
                  <label className="text-black" htmlFor="">
                    Quantidade Cancelada
                  </label>
                  <Input
                    disabled={false}
                    {...register("cancel")}
                    errors={errors}
                    id="cancel"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="flex p-2 w-full items-center justify-center gap-2">
              <button
                onClick={() => onClose(modalKey)}
                className="bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center"
              >
                <XCircle size={32} className="text-red-600" weight="fill" />
                Cancelar-Esc
              </button>
              <button
                type="submit"
                className="bg-gray-100 border-r-gray-400 border-b-gray-400  border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center"
              >
                <CheckCircle
                  size={32}
                  className="text-green-600"
                  weight="fill"
                />
                Confirmar-F10
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
