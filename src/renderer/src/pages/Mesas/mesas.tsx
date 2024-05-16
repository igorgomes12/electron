import { Clock, Person } from "phosphor-react";
import { Breadcrumb } from "../../components/componentsUtils/breadcrumb";
import { HeaderTables } from "../../components/Tables/header-tables";
import { ButtonAddTables } from "../../components/Tables/button-add-tables";
import { Table } from "../../components/Tables/Tables_Types/table";
import { FooterTables } from "../../components/Tables/footer-tables";
import { useModalAddTables } from "../../hooks/ModalAddTables/useModalAddTables";
import { ModalAddTables } from "../../components/Tables/modal-add-tables";

export function Mesas() {
  const { isOpen } = useModalAddTables();
  return (
    <>
      <div className="flex overflow-y-auto flex-col px-4 w-full">
        <div className="flex p-3">
          <Breadcrumb
            list={{
              step1: { name: "Tela principal", navigate: "/tela-principal" },
              lastStep: "Mesas",
            }}
          />
        </div>
        <HeaderTables />
        <ButtonAddTables />
        <Table />
        <FooterTables />
      </div>
      {isOpen && <ModalAddTables />}
    </>
  );
}
