/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import pdv from "../../img/webfoodAnimation.gif";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Favor colocar o email completo" })
    .max(30, { message: "Favor colocar um email valido" }),
});

type registerForm = z.infer<typeof registerSchema>;

export function RegisterUser() {
  const { register, handleSubmit } = useForm<registerForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitRegister = (data: registerForm) => {
    console.log(data);
  };

  return (
    <div className="grid min-h-screen w-full grid-cols-2">
      <div className="flex -mt-20 flex-col justify-center h-full items-center gap-3 text-lg text-gray-600">
        <img
          className="max-w-[30rem] w-[10rem] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem]"
          src={pdv}
          alt="images"
        />
      </div>
      <div className="flex bg-gray-100 w-full flex-col items-center justify-center -py-10 gap-2">
        <h1 className="text-2xl text-black font-semibold tracking-tight">
          Recupere Sua Senha
        </h1>
        <p className="text-sm text-black">Insira seu email para recuperação.</p>
        <form
          onSubmit={handleSubmit(onSubmitRegister)}
          className="flex flex-col w-full lg:w-96"
        >
          <div className="flex flex-col gap-1 p-2">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className="border w-full border-gray-400 rounded-md h-10 p-2"
              id="email"
              type="email"
            />
          </div>
          <div className="flex py-2 gap-4 flex-col items-center justify-center">
            <button
              className="w-full p-3 rounded-lg text-black font-medium bg-amareloFood hover:bg-amareloFood/90"
              type="submit"
            >
              Enviar
            </button>
            <Link to="/">
              <button
                className="text-lg cursor-pointer hover:text-amareloFood text-black"
                type="button"
              >
                voltar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
