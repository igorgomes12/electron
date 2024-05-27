import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCountStore } from "../../../hooks/ModalCardShopping/useListCartShopping";
import React from "react";

const shoppingSchema = z.object({
  subtotal: z.number().optional(),
  discount: z.number().optional(),
  addition: z.number().optional(),
  total: z.number(),
});

type TShoppingForm = z.infer<typeof shoppingSchema>;

export function FormShopping() {
  const { total } = useCountStore();
  const { register, handleSubmit, setValue } = useForm<TShoppingForm>({
    resolver: zodResolver(shoppingSchema),
  });

  const onSubmitFormShopping = (data: TShoppingForm) => {
    console.log(data);
  };

  React.useEffect(() => {
    setValue("total", total);
  }, [total, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmitFormShopping)}
      className="flex w-full py-1 flex-col"
      action=""
    >
      <div className="flex flex-col items-start justify-center gap-2 border-b w-full">
        <div className="flex w-full item-start justify-between px-2 py-1">
          <span className="text-black font-medium">Subtotal</span>
          <p
            {...register("subtotal")}
            className="text-sm font-light text-black"
          >
            R$ {total},00
          </p>
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
        <span className="text-black font-bold">Total</span>
        <p {...register("total")} className="text-lg font-bold text-black">
          R$ {total},00
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
