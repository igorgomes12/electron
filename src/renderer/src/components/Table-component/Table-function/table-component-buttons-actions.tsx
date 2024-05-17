/* eslint-disable no-undef */
import {
  CheckCircle,
  CircleDashed,
  Money,
  Printer,
  XCircle,
} from "phosphor-react";
import { ButtonIcon, TButtonsComand } from "../buttonIcon";

const conteudoButton: TButtonsComand[] = [
  {
    icon: <CheckCircle size={32} className="text-green-600" weight="fill" />,
    titleButton: "Finalizar Mesa-F10",
  },
  {
    icon: <Money size={32} className="text-blue-600" weight="fill" />,
    titleButton: "Fechamen.Parcial-F2",
  },
  {
    icon: <Printer size={32} className="text-fuchsia-800" weight="fill" />,
    titleButton: "Imp.Conferencia-F3",
  },
  {
    icon: <CircleDashed size={32} className="text-rotion-300" weight="fill" />,
    titleButton: "Transferir Itens-F5",
  },
  {
    icon: <XCircle size={32} className="text-red-600" weight="fill" />,
    titleButton: "Excluir Mesa-Ctrl+D",
  },
];

export function TableComponentButtonAction() {
  return (
    <>
      <div className="flex bg-gray-50 items-start justify-start flex-col gap-2 p-1">
        <div className="flex px-1 items-start justify-start w-full">
          <div className="grid grid-cols-5 py-1 gap-2 items-center w-full justify-center">
            {conteudoButton.map(({ icon, titleButton }, i: number) => (
              <ButtonIcon
                icon={icon}
                titleButton={titleButton}
                key={titleButton}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex px-2 py-1 items-end w-full justify-between">
        <ButtonIcon
          className="w-40"
          icon={
            <CheckCircle size={32} className="text-green-600" weight="fill" />
          }
          titleButton={"Finalização Multipla-F8"}
        />
        <div className="flex gap-2 p-2 items-center">
          <span className="w-6 h-6 bg-red-600" />
          <p className="text-black">00/00/00 00:00:00</p>
        </div>
      </div>
    </>
  );
}
