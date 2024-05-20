import {
  CheckCircle,
  CircleDashed,
  Money,
  Printer,
  XCircle,
} from "phosphor-react";
import { ButtonIcon, TButtonsComand } from "../buttonIcon";
import { ModalTransferItem } from "./Modais-table-function/modal-transfer-item";
import { useModalIncludeItem } from "../../../hooks/ModalTableFunction/useModalIncludeItem";
import React from "react";

type ModalComponentType = React.FC<{ modalKey: string }> | undefined;

const conteudoButton: (TButtonsComand & {
  modalKey: string;
  ModalComponent?: ModalComponentType;
})[] = [
  {
    icon: <CheckCircle size={32} className="text-green-600" weight="fill" />,
    titleButton: "Finalizar Mesa-F10",
    modalKey: "finalizar_mesa_f10",
  },
  {
    icon: <Money size={32} className="text-blue-600" weight="fill" />,
    titleButton: "Fechamen.Parcial-F2",
    modalKey: "fechamento_parcial_f2",
  },
  {
    icon: <Printer size={32} className="text-fuchsia-800" weight="fill" />,
    titleButton: "Imp.Conferencia-F3",
    modalKey: "imp_conferencia_f3",
  },
  {
    icon: <CircleDashed size={32} className="text-rotion-300" weight="fill" />,
    titleButton: "Transferir Itens-F5",
    modalKey: "transferir_itens_f5",
    ModalComponent: ModalTransferItem,
  },
  {
    icon: <XCircle size={32} className="text-red-600" weight="fill" />,
    titleButton: "Excluir Mesa-Ctrl+D",
    modalKey: "excluir_mesa_ctrld",
  },
];

export function TableComponentButtonAction() {
  const { isOpen, onOpen } = useModalIncludeItem();
  return (
    <>
      <div className="flex bg-gray-50 items-start justify-start flex-col gap-2 p-1">
        <div className="flex px-1 items-start justify-start w-full">
          <div className="grid grid-cols-5 py-1 gap-2 items-center w-full justify-center">
            {conteudoButton.map(
              ({ icon, titleButton, modalKey, ModalComponent }, i: number) => (
                <div
                  key={modalKey}
                  className="flex py-2 flex-col items-center w-full justify-center"
                >
                  <ButtonIcon
                    icon={icon}
                    titleButton={titleButton}
                    onClick={() => onOpen(modalKey)}
                  />

                  {ModalComponent && isOpen(modalKey) && (
                    <ModalComponent modalKey={modalKey} />
                  )}
                </div>
              )
            )}
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
