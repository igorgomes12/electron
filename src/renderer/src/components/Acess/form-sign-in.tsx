import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";
import { Link } from "react-router-dom";
import { Input } from "../utils/input";

const signInSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Favor colocar o email completo" })
    .max(30, { message: "Favor colocar um email valido" }),
  password: z
    .string()
    .min(4, { message: "Necessario uma senha com mais de 4 caracteres!" }),
});

type signForm = z.infer<typeof signInSchema>;

export function FormSignIn() {
  const [isShow, setIsShow] = useState(false);

  const handlePassword = () => {
    setIsShow(!isShow);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signForm>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmitSignIn = (data: signForm) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Seja bem vindo(a)
          </h1>
          <p className="text-sm text-muted-foreground">
            Entre com seu email e senha
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmitSignIn)} className="space-y-4">
          <div className="space-y-1 flex flex-col gap-2 ">
            <label htmlFor="email">E-mail</label>
            <Input
              errors={errors}
              id="email"
              {...register("email")}
              type="email"
              disabled={false}
            />
          </div>
          <div className="space-y-1 flex flex-col gap-2 ">
            <div className="flex flex-col relative">
              <label htmlFor="password">Senha</label>
              <Input
                errors={errors}
                id="password"
                {...register("password")}
                type="password"
                disabled={false}
              />
              <button
                className="absolute top-11 transform -translate-y-1/2 right-0 flex items-center px-2"
                onClick={() => handlePassword()}
              >
                {isShow ? <Eye size={18} /> : <EyeSlash size={18} />}
              </button>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <Link className="flex w-full " to="/tela-principal">
              <button
                className="w-full p-3 rounded-lg text-black font-medium bg-amareloFood hover:bg-amareloFood/90"
                type="submit"
              >
                Entrar
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Link
              to="/admin"
              className="text-gray-500 underline hover:text-amareloFood text-md"
            >
              Esqueceu sua Senha?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
