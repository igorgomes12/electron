import { useModalAddTables } from "../../hooks/ModalAddTables/useModalAddTables";
import { Input } from "../utils/input";
import { TextHeader } from "../utils/text-header";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MinusCircle, PlusCircle, X } from "phosphor-react";

const modalAddSchema = z.object({
  garcom: z.string(),
  numberTable: z.string(),
  description: z.string(),
  quantity: z.number(),
});

type addTableForm = z.infer<typeof modalAddSchema>;

export function ModalAddTables() {
  const { onClose } = useModalAddTables();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addTableForm>({
    resolver: zodResolver(modalAddSchema),
  });

  const onSubmitAddTables = (data: addTableForm) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-5/6 w-6/12 flex-col gap-2 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <div className="flex  items-start justify-between">
          <TextHeader title="Adicionar Mesa / Comanda" />
          <X
            onClick={onClose}
            size={22}
            className=" text-black cursor-pointer"
            weight="bold"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmitAddTables)} action="">
          <div className="flex flex-col p-2 gap-2 items-center justify-center w-full">
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="" className="text-black">
                Garçom
              </label>
              <select
                className="disabled:cursor-default p-2 text-md peer rounded-lg border-2 border-solid border-gray-300 bg-gray-50 px-2 font-medium text-black focus:border-white focus:ring-white disabled:bg-gray-400 w-full"
                {...register("garcom")}
                name=""
                id=""
              >
                <option value="">Selecione</option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="" className="text-black">
                Numero da mesa
              </label>
              <Input
                {...register("numberTable")}
                disabled={false}
                errors={errors}
                id="numberTable"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="" className="text-black">
                Descrição
              </label>
              <textarea
                {...register("numberTable")}
                className="disabled:cursor-default p-2 text-md peer rounded-lg border-2 border-solid border-gray-300 bg-gray-50 px-2 font-medium text-black focus:border-white focus:ring-white disabled:bg-gray-400 w-full h-40"
              />
            </div>
            <div className="flex w-full gap-2 ">
              <p className="text-black">N Pessoas</p>
              <div className="text-sm flex gap-2 items-center justify-center font-light text-black">
                <MinusCircle
                  className="cursor-pointer text-red-500"
                  size={22}
                  weight="light"
                />
                <p {...register("quantity")} className="text-lg text-black">
                  1
                </p>
                <PlusCircle
                  className="cursor-pointer text-emerald-500"
                  size={22}
                  weight="light"
                />
              </div>
            </div>
          </div>
          <div className="flex mt-4 p-2 items-center w-full justify-center">
            <button
              type="submit"
              className="text-black bg-amareloFood/80 hover:bg-amareloFood p-2 w-full rounded-lg "
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
