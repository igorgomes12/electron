/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import { tableCLient } from "../../../utils/mocks";
import Table from "../../Table-component/table";
import Pagination from "../../Table-component/pagination";
import { Breadcrumb } from "../../componentsUtils/breadcrumb";

export function TableClient() {
  const conteudo = {
    cod: 1234567,
    name: "Igor",
    cpfcnpj: "231232132-90",
    limite: <div className="text-center">R$ 0.90</div>,
    saldo: <div className="text-center">R$ 0.90</div>,
    contatos: "3124-2142, 3124-2142, 3124-2142",
  };
  const conteudoArray = Array.from({ length: 4 }, (_, i: number) => ({
    ...conteudo,
    key: i,
  }));

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto w-full p-2 gap-4">
      <div className="flex  items-start w-full justify-between gap-2 p-3">
        <Breadcrumb
          list={{
            step1: { name: "Tela principal", navigate: "/tela-principal" },
            lastStep: "Clientes",
          }}
        />
        <Link to="/clientRegister">
          <button className="bg-amareloFood/80 hover:bg-amareloFood p-2 rounded-lg w-full text-black">
            Novo Cliente
          </button>
        </Link>
      </div>
      <div className="space-y-2.5 overflow-x-auto p-2 w-full">
        <div className="w-80 sm:w-[38rem] md:w-[48rem] lg:w-full rounded-md border p-2">
          <Table headerTitles={tableCLient} list={conteudoArray} />
        </div>
        <Pagination pageIndex={0} totalCount={10} perPage={10} />
      </div>
    </div>
  );
}
