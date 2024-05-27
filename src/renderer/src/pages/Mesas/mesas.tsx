import { HeaderTables } from "../../components/Tables/header-tables";
import { ButtonAddTables } from "../../components/Tables/button-add-tables";
import { Table } from "../../components/Tables/Tables_Types/table";
import { FooterTables } from "../../components/Tables/footer-tables";
import { useModalAddTables } from "../../hooks/ModalAddTables/useModalAddTables";
import { ModalAddTables } from "../../components/Tables/modal-add-tables";

export function Mesas() {
  const { isOpen } = useModalAddTables();
  return (
    <div id="Mesas">
      <div className="flex overflow-y-auto flex-col px-4 w-full">
        <HeaderTables />
        <ButtonAddTables />
        <Table />
        <FooterTables />
      </div>
      {isOpen && <ModalAddTables />}
    </div>
  );
}
