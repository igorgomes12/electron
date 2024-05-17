import { PlusCircle, Printer, ThumbsDown } from "phosphor-react";
import { ButtonIcon, TButtonsComand } from "../buttonIcon";
import { useModalIncludeItem } from "../../../hooks/ModalTableFunction/useModalIncludeItem";
import { ModalIncludeItem } from "./Modais-table-function/modal-include-item";
import React from "react";

type ModalComponentType = React.FC<{ modalKey: string }> | undefined;

const conteudoButton: (TButtonsComand & {
  modalKey: string;
  ModalComponent?: ModalComponentType;
})[] = [
  {
    icon: <PlusCircle size={32} className="text-green-600" weight="fill" />,
    titleButton: "Incluir Item-F1",
    modalKey: "modal_incluir_item_f1",
    ModalComponent: ModalIncludeItem,
  },
  {
    icon: <ThumbsDown size={32} className="text-red-600" weight="fill" />,
    titleButton: "Cancelar Item-F4",
    modalKey: "modal_cancelar_item_f4",
  },
  {
    icon: <Printer size={32} className="text-blue-600" weight="fill" />,
    titleButton: "Re-imprimir Item-F7",
    modalKey: "modal_reimprimir_item_f7",
  },
];

export function TableComandButtons() {
  const { isOpen, onOpen } = useModalIncludeItem();

  return (
    <>
      <div className="flex border-b items-start justify-start gap-2 w-full">
        {conteudoButton.map(
          ({ icon, titleButton, modalKey, ModalComponent }) => (
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
    </>
  );
}
