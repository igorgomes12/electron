import { MinusCircle, PlusCircle } from "phosphor-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const shoppingSchema = z.object({
  quantity: z.number().min(1, {
    message: "Para finalizar o pedido é necessario selecior ao menos 1 item",
  }),
  discount: z.number().optional(),
  addition: z.number().optional(),
  total: z.number(),
});

type TShoppingForm = z.infer<typeof shoppingSchema>;

export function FormShopping() {
  const { register, handleSubmit } = useForm<TShoppingForm>({
    resolver: zodResolver(shoppingSchema),
  });

  const onSubmitFormShopping = (data: TShoppingForm) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitFormShopping)}
      className="flex w-full py-1 flex-col"
      action=""
    >
      <div className="flex flex-col items-start justify-center gap-2 border-b w-full">
        <div className="flex w-full item-center justify-between px-2 py-1">
          <span className="text-black font-medium">Quantidade</span>
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
        <div className="flex w-full item-start justify-between px-2 py-1">
          <span className="text-black font-medium">Desconto</span>
          <p
            {...register("discount")}
            className="text-sm font-light text-black"
          >
            R$ 0,00
          </p>
        </div>
        <div className="flex w-full item-start justify-between px-2 py-1">
          <span className="text-black font-medium">Acréscimo</span>
          <p
            {...register("addition")}
            className="text-sm font-light text-black"
          >
            R$ 0,00
          </p>
        </div>
      </div>
      <div className="flex item-start justify-between px-2 py-2">
        <span className="text-black font-medium">Total</span>
        <p {...register("total")} className="text-sm font-light text-black">
          R$ 0,00
        </p>
      </div>
      <div className="flex items-center py-2 justify-center w-full">
        <button
          type="submit"
          className="text-black font-medium w-full p-3 rounded-xl bg-amareloFood/80 hover:bg-amareloFood text-lg"
        >
          Finalizar Pedido
        </button>
      </div>
    </form>
  );
}
