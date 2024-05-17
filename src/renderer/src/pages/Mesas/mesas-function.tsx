import { Breadcrumb } from "../../components/componentsUtils/breadcrumb";
import { TableComponentSearch } from "../../components/Table-component/Table-function/table-component-search";
import { TableComponentTablesService } from "../../components/Table-component/Table-function/table-component-tables-service";
import { TableComponentButtonAction } from "../../components/Table-component/Table-function/table-component-buttons-actions";
import { TableComponentComand } from "../../components/Table-component/Table-function/table-component-comand";
import { TableComponentHeader } from "../../components/Table-component/Table-function/table-component-header-comand";
import { TableComandButtons } from "../../components/Table-component/Table-function/table-component-comand-buttons";
import { TableComponentButtonFuncionario } from "../../components/Table-component/Table-function/table-component-buttons-funcionario";
import { TableComponentValuesProducts } from "../../components/Table-component/Table-function/table-component-values-products";

export function MesasFunction() {
  return (
    <div>
      <div className=" border-b flex p-3">
        <Breadcrumb
          list={{
            step1: { name: "Tela principal", navigate: "/tela-principal" },
            step2: { name: "Mesas", navigate: "/mesas" },
            lastStep: "Mesas / Comandas",
          }}
        />
      </div>
      <div className="grid grid-cols-2 w-full items-start justify-center">
        <div className="w-full h-screen">
          <TableComponentSearch />
          <TableComponentTablesService />
          <TableComponentButtonAction />
        </div>
        <div className="border-l bg-gray-50 p-2 w-full h-screen ">
          <TableComponentHeader />
          <TableComponentComand />
          <TableComandButtons />
          <TableComponentButtonFuncionario />
          <TableComponentValuesProducts />
        </div>
      </div>
    </div>
  );
}
