import { MapTrifold, Plus } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalClientRegisterAdress } from "../../../hooks/ModalClientRegisterAdress/useModalClientRegisterAdress";
import { ModalAdressClient } from "./modal-adress-client";

const clientRegisterSchema = z.object({
  name: z.string().min(3, { message: "Favor preencher o nome completo" }),
  apelido: z.string().optional(),
  cpfCnpj: z
    .string({
      required_error: "CPF/CNPJ é obrigatório.",
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length >= 11;
    }, "CPF/CNPJ deve conter no mínimo 11 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length <= 14;
    }, "CPF/CNPJ deve conter no máximo 14 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return !!Number(replacedDoc);
    }, "CPF/CNPJ deve conter apenas números."),
  inscricao: z.string(),
  email: z
    .string()
    .min(1, { message: "Favor colocar o email completo" })
    .email("não é um email valido."),
  telefone: z
    .string()
    .min(6, { message: "Digite um telefone valido" })
    .max(10, { message: "Digite um telefone valido" }),
  celular: z
    .string()
    .min(10, { message: "Digite um telefone valido" })
    .max(14, { message: "Digite um telefone valido" }),
});

type registerFormClient = z.infer<typeof clientRegisterSchema>;

export function FormRegisterClient() {
  const { isOpen, onOpen } = useModalClientRegisterAdress();

  const { register, handleSubmit } = useForm<registerFormClient>({
    resolver: zodResolver(clientRegisterSchema),
  });
  const handleSubmitForm = (data: registerFormClient) => {
    console.log(data);
  };

  return (
    <div className="flex w-full">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex border rounded-lg gap-4 h-full p-2 items-center justify-center w-full flex-col"
        action=""
      >
        <div className="space-y-1 flex flex-col gap-2 w-full ">
          <label htmlFor="name">Nome</label>
          <input
            {...register("name")}
            className="w-full  rounded-md h-10 bg-gray-100 p-2"
            type="text"
          />
        </div>
        <div className="space-y-1 flex flex-col gap-2 w-full ">
          <label htmlFor="surname">Apelido</label>
          <input
            {...register("apelido")}
            className="w-full  rounded-md h-10 bg-gray-100 p-2"
            type="text"
          />
        </div>
        <div className="space-y-1 w-full flex flex-col gap-2 ">
          <label htmlFor="cpf">CPF/CPNJ</label>
          <input
            {...register("cpfCnpj")}
            className="w-full  rounded-md h-10 bg-gray-100 p-2"
            type="text"
          />
        </div>
        <div className="space-y-1 flex flex-col gap-2 w-full ">
          <label htmlFor="state registration">Inscrição estadual</label>
          <input
            {...register("inscricao")}
            className="w-full  rounded-md h-10 bg-gray-100 p-2"
            type="text"
          />
        </div>
        <div className="space-y-1 flex flex-col gap-2 w-full ">
          <label htmlFor="email">E-mail</label>
          <input
            {...register("email")}
            className="w-full  rounded-md h-10 bg-gray-100 p-2"
            type="email"
          />
        </div>
        {/* contatos */}
        <div className="flex w-full gap-2 items-center justify-center">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="email">Telefone</label>
            <input
              {...register("telefone")}
              className="w-full  rounded-md h-10 bg-gray-100 p-2"
              type="tel"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="email">Celular</label>
            <input
              {...register("celular")}
              className="w-full  rounded-md h-10 bg-gray-100 p-2"
              type="tel"
            />
          </div>
        </div>
        <div className="border-b md:flex-row flex-col p-4 items-start justify-between space-y-1 flex gap-2 w-full ">
          <h1 className="text-2xl text-gray-700 font-medium">Endereços</h1>
          <div className="flex  items-center justify-center">
            {/* adicionar endereço */}
            <button
              onClick={onOpen}
              className="flex hover:scale-110 items-center justify-center gap-2"
            >
              <Plus
                weight="bold"
                className="text-amareloFood font-bold hover:scale-110"
                size={30}
              />
              <p className="text-amareloFood text-md font-semibold">
                Adicionar Endereço
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <MapTrifold className="text-gray-700" size={90} />
          <p className="text-gray-500 text-sm">Nenhum endereço cadastrado</p>
        </div>

        <div className="flex mt-4 p-2 items-center w-96 justify-center">
          <button
            type="submit"
            className="text-black bg-amareloFood/80 hover:bg-amareloFood p-2 w-full rounded-lg "
          >
            Salvar
          </button>
        </div>
      </form>
      {isOpen && <ModalAdressClient />}
    </div>
  );
}
