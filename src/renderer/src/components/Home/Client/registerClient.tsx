import { Breadcrumb } from "../../componentsUtils/breadcrumb";
import { FormRegisterClient } from "./form-register-client";

export function RegisterClient() {
  return (
    <div className="flex flex-col items-center h-full p-4 overflow-y-auto w-full justify-between text-black">
      <div className="flex flex-col w-full justify-center items-center gap-2 p-2">
        <div className="flex items-start w-full justify-between gap-2 p-2">
          <Breadcrumb
            list={{
              step1: { name: "Tela principal", navigate: "/tela-principal" },
              step2: { name: "Cliente", navigate: "/client" },
              lastStep: "Cadastro de Clientes",
            }}
          />
        </div>
        <FormRegisterClient />
      </div>
    </div>
  );
}
