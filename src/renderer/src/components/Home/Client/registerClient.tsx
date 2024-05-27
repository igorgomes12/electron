import { FormRegisterClient } from "./form-register-client";

export function RegisterClient() {
  return (
    <div
      id="Clientes"
      className="flex flex-col items-center h-full p-4 overflow-y-auto w-full justify-between text-black"
    >
      <div className="flex flex-col w-full justify-center items-center gap-2 p-2">
        <FormRegisterClient />
      </div>
    </div>
  );
}
