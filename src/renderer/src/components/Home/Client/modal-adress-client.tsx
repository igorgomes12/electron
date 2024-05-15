import { MagnifyingGlass, X } from "phosphor-react";
import { useModalClientRegisterAdress } from "../../../hooks/ModalClientRegisterAdress/useModalClientRegisterAdress";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// regex para CEP brasileiro (8 dígitos)
const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

const adressSchema = z.object({
  description: z
    .string()
    .min(3, { message: "Descrição deve ter pelo menos 3 caracteres." })
    .max(100, { message: "Descrição não pode ter mais de 100 caracteres." }),
  cep: z.string().refine((value) => cepRegex.test(value), {
    message: "CEP inválido. Deve seguir o formato 00000-000 ou 00000000.",
  }),
  adress: z
    .string()
    .min(3, { message: "Endereço deve ter pelo menos 3 caracteres." })
    .max(100, { message: "Endereço não pode ter mais de 100 caracteres." }),
  number: z.number(),
  city: z
    .string()
    .min(3, { message: "Cidade deve ter pelo menos 3 caracteres." })
    .max(50, { message: "Cidade não pode ter mais de 50 caracteres." }),
  neighborhood: z
    .string()
    .min(3, { message: "Bairro deve ter pelo menos 3 caracteres." })
    .max(50, { message: "Bairro não pode ter mais de 50 caracteres." }),
  complement: z
    .string()
    .min(3, { message: "Complemento deve ter pelo menos 3 caracteres." })
    .max(100, { message: "Complemento não pode ter mais de 100 caracteres." })
    .optional(), // Indica que o campo é opcional
});

type TAdressClient = z.infer<typeof adressSchema>;

export function ModalAdressClient() {
  const { onClose } = useModalClientRegisterAdress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdressClient>({
    resolver: zodResolver(adressSchema),
  });

  const onSubmitAdressClient = (data: TAdressClient) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-screen w-6/12 flex-col gap-2 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <div className="flex items-start justify-between py-2">
          <h1 className="flex items-start justify-center text-black text-2xl">
            Cadastro de Endereço
          </h1>
          <X
            onClick={onClose}
            size={22}
            className="-mt-3 cursor-pointer"
            weight="bold"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmitAdressClient)} action="">
          <div className="space-y-1 flex flex-col gap-2 w-full ">
            <label htmlFor="surname">Descrição</label>
            <input
              className="w-full  rounded-md h-10 bg-gray-100 p-2"
              {...register("description")}
              type="text"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>
          <div className="space-y-1 flex flex-col gap-2 w-full">
            <label htmlFor="cep">CEP</label>
            <div className="relative w-full">
              <input
                placeholder="00000-000"
                {...register("cep")}
                className="w-full rounded-md h-10 bg-gray-100 p-2"
                type="text"
              />
              <MagnifyingGlass
                size={20}
                weight="bold"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              />
            </div>
            {errors.cep && (
              <span className="text-red-500">{errors.cep.message}</span>
            )}
          </div>
          <div className="space-y-1 flex flex-col gap-2 w-full ">
            <label htmlFor="adress">Endereço</label>
            <input
              {...register("adress")}
              className="w-full rounded-md h-10 bg-gray-100 p-2"
              type="text"
            />
            {errors.adress && (
              <span className="text-red-500">{errors.adress.message}</span>
            )}
          </div>
          <div className="space-y-1 flex flex-col gap-2 w-full ">
            <label htmlFor="number">Número</label>
            <input
              {...register("number")}
              className="w-full rounded-md h-10 bg-gray-100 p-2"
              type="text"
            />
          </div>
          <div className="space-y-1 flex flex-col gap-2 w-full ">
            <label htmlFor="city">Cidade</label>
            <div className="relative w-full">
              <input
                {...register("city")}
                className="w-full rounded-md h-10 bg-gray-100 p-2"
                type="text"
                placeholder="Pesquise a cidade"
              />
              <MagnifyingGlass
                size={20}
                weight="bold"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              />
            </div>
            {errors.city && (
              <span className="text-red-500">{errors.city.message}</span>
            )}
          </div>
          <div className="space-y-1 flex flex-col gap-2 w-full ">
            <label htmlFor="neighborhood">Bairro</label>
            <input
              {...register("neighborhood")}
              className="w-full rounded-md h-10 bg-gray-100 p-2"
              type="text"
            />
            {errors.neighborhood && (
              <span className="text-red-500">
                {errors.neighborhood.message}
              </span>
            )}
          </div>
          <div className="space-y-1 flex flex-col gap-2 w-full ">
            <label htmlFor="complement">Complemento</label>
            <input
              {...register("complement")}
              className="w-full rounded-md h-10 bg-gray-100 p-2"
              type="text"
            />
            {errors.complement && (
              <span className="text-red-500">{errors.complement.message}</span>
            )}
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
