import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, X, XCircle } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useModalObservation } from "~/src/renderer/src/hooks/ModalTableFunction/useModalObservation";

const observationSchema = z.object({
  observation: z
    .string()
    .min(1, { message: "Favor descrever com mais linhas." })
    .max(150, { message: "O limite máximo é de 150 caracteres." }),
});

type TObservationForm = z.infer<typeof observationSchema>;

export function ModalObservation() {
  const { onClose } = useModalObservation();
  const { register, handleSubmit } = useForm<TObservationForm>({
    resolver: zodResolver(observationSchema),
  });
  const submitHandleObservation = (data: TObservationForm) => {
    console.log(data);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex h-3/4 w-6/12 flex-col gap-4 overflow-y-auto rounded-lg bg-white p-4 shadow-md">
        <div className="flex border-b items-start justify-between py-1">
          <h1 className="flex items-start justify-center text-black text-md font-bold">
            Observações
          </h1>
          <X
            onClick={onClose}
            size={22}
            className="-mt-3 hover:scale-110 text-black cursor-pointer"
            weight="bold"
          />
        </div>
        <div className="flex items-start gap-2 justify-start p-1">
          <span>qrcode</span>
          <h1 className="font-bold text-2xl text-amareloFood">
            Observações da mesa
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(submitHandleObservation)}
          className="flex flex-col w-full p-1 gap-2"
          action=""
        >
          <div className="text-center flex flex-col gap-2 p-1">
            <p className="text-black text-sm">
              {" "}
              Limite máximo de caracteres 150
            </p>
            <textarea
              className="border text-black text-sm rounded-lg border-gray-300 w-full min-h-20 h-60 max-h-60"
              {...register("observation")}
              id="observation"
            />
            <p className="text-black text-sm"> total de digitos 000</p>
          </div>
          <div className="flex p-2 w-full items-center justify-center gap-2">
            <button
              onClick={onClose}
              className="bg-gray-100 border-r-gray-400 border-b-gray-400 border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center"
            >
              <XCircle size={32} className="text-red-600" weight="fill" />
              Cancelar-Esc
            </button>
            <button
              type="submit"
              className="bg-gray-100 border-r-gray-400 border-b-gray-400  border-2 shadow-lg hover:bg-gray-200 flex text-black text-sm gap-1 rounded-md p-3 items-center w-full justify-center"
            >
              <CheckCircle size={32} className="text-green-600" weight="fill" />
              Confirmar-F10
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
